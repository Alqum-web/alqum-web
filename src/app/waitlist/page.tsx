import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist/WaitlistForm";

export const metadata: Metadata = {
  title: "Get Early Access",
  description: "Join the waitlist to get early access to Alqum — compliance automation for CAD workflows.",
};

export default function WaitlistPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 md:py-28">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Get early access to Alqum
        </h1>
        <p className="mt-4 text-muted md:text-lg">
          We&apos;re building compliance automation for hardware engineering
          teams. Join the waitlist and be first to know when we launch.
        </p>
      </div>

      <div className="mt-10">
        <WaitlistForm />
      </div>

      <div className="mt-12 grid gap-6 text-center md:grid-cols-3">
        <div>
          <div className="text-2xl font-bold text-primary">Early</div>
          <p className="mt-1 text-sm text-muted">Priority access to the platform</p>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">Free</div>
          <p className="mt-1 text-sm text-muted">Free during the beta period</p>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">Input</div>
          <p className="mt-1 text-sm text-muted">Shape the product with your feedback</p>
        </div>
      </div>
    </section>
  );
}
