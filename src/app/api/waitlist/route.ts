import { NextRequest, NextResponse } from "next/server";

// In production, replace with Supabase client + Resend integration
// import { createClient } from "@supabase/supabase-js";
// import { Resend } from "resend";

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_ANON_KEY!
// );
// const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory store for development
const waitlist = new Set<string>();

// Basic rate limiting
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimit.get(ip);

  if (!lastRequest || now - lastRequest > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, now);
    return false;
  }

  let count = 0;
  for (const [, time] of rateLimit) {
    if (now - time < RATE_LIMIT_WINDOW) count++;
  }
  return count >= RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // --- Development: in-memory ---
    if (waitlist.has(email.toLowerCase())) {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 }
      );
    }
    waitlist.add(email.toLowerCase());

    // --- Production: uncomment below ---
    // const { error: dbError } = await supabase
    //   .from("waitlist")
    //   .insert({ email: email.toLowerCase(), source: "website" });
    //
    // if (dbError) {
    //   if (dbError.code === "23505") {
    //     return NextResponse.json(
    //       { error: "This email is already on the waitlist." },
    //       { status: 409 }
    //     );
    //   }
    //   throw dbError;
    // }
    //
    // await resend.emails.send({
    //   from: "Alqum <hello@alqum.com>",
    //   to: email,
    //   subject: "You're on the Alqum waitlist!",
    //   html: `<p>Thanks for joining the Alqum waitlist. We'll be in touch when early access is ready.</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
