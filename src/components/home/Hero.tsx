import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium text-primary tracking-wide uppercase">
          Compliance, built into your design workflow
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Ship compliant products{" "}
          <span className="text-primary">from day one</span>
        </h1>
        <p className="mt-6 text-lg text-muted md:text-xl">
          Compliance is still tracked in spreadsheets, disconnected from where
          design actually happens. Alqum brings compliance checks directly into
          your CAD tool using AI agents.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/waitlist">Get Early Access</Button>
          <Button href="#problem" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-border shadow-2xl">
        <Image
          src="/mock-agent-chat.png"
          alt="Alqum AI agent performing geometric compliance analysis on a CAD model"
          width={1920}
          height={1080}
          className="w-full"
          priority
        />
      </div>
    </section>
  );
}
