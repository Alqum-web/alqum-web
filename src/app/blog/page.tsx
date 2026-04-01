import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on CAD compliance, hardware engineering, and building Alqum.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">Blog</h1>
      <p className="mt-4 text-muted">
        We&apos;re working on our first posts. Check back soon for insights on
        compliance automation, CAD workflows, and hardware engineering.
      </p>

      <div className="mt-12 rounded-xl border border-dashed border-border p-12 text-center">
        <p className="text-muted">Coming soon</p>
      </div>
    </div>
  );
}
