import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Stop losing engineering time to compliance
        </h2>
        <p className="mt-4 text-blue-100 md:text-lg">
          Join engineers who want early access to Alqum.
          Be first in line when we launch.
        </p>
        <div className="mt-8">
          <Button
            href="/waitlist"
            className="!bg-white !text-primary hover:!bg-blue-50 !px-8 !py-3 !text-base"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
}
