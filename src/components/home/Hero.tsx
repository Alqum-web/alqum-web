import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium text-primary tracking-wide uppercase">
          Compliance automation for CAD
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Ship compliant hardware{" "}
          <span className="text-primary">faster</span>
        </h1>
        <p className="mt-6 text-lg text-muted md:text-xl">
          Engineers lose hours every week to compliance paperwork.
          Alqum catches compliance issues while you design, not after.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/waitlist">Get Early Access</Button>
          <Button href="#problem" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
