import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted">Last updated: April 1, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By accessing or using the Alqum website and services, you agree to be bound by
            these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Description of Service</h2>
          <p className="mt-2">
            Alqum provides compliance automation tools for hardware engineering teams.
            Our services are currently in development, and features may change.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Waitlist</h2>
          <p className="mt-2">
            Joining our waitlist does not guarantee access to our services. We will notify
            you when early access becomes available.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Intellectual Property</h2>
          <p className="mt-2">
            All content on this website, including text, graphics, and logos, is the property
            of Alqum and is protected by applicable intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Limitation of Liability</h2>
          <p className="mt-2">
            Alqum shall not be liable for any indirect, incidental, or consequential damages
            arising from your use of our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Changes to Terms</h2>
          <p className="mt-2">
            We reserve the right to modify these terms at any time. Changes will be posted
            on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Contact</h2>
          <p className="mt-2">
            For questions about these terms, contact us at{" "}
            <a href="mailto:support@alqum.com" className="text-primary hover:underline">
              support@alqum.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
