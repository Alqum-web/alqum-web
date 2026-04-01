import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: April 1, 2026</p>

      <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
          <p className="mt-2">
            When you join our waitlist, we collect your email address. We may also collect
            basic analytics data about how you interact with our website, such as pages
            visited and time on page.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
          <p className="mt-2">
            We use your email address to communicate with you about Alqum, including product
            updates, launch announcements, and relevant content. We use analytics data to
            improve our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Data Sharing</h2>
          <p className="mt-2">
            We do not sell your personal information. We may share data with service providers
            who help us operate our website and send emails (e.g., hosting providers, email
            service providers).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Data Security</h2>
          <p className="mt-2">
            We implement reasonable security measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Your Rights</h2>
          <p className="mt-2">
            You may request deletion of your data at any time by contacting us at{" "}
            <a href="mailto:hello@alqum.com" className="text-primary hover:underline">
              hello@alqum.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Contact</h2>
          <p className="mt-2">
            For questions about this privacy policy, contact us at{" "}
            <a href="mailto:hello@alqum.com" className="text-primary hover:underline">
              hello@alqum.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
