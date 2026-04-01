const features = [
  {
    title: "Inline compliance checks",
    description:
      "See compliance status in real time as you design, not weeks later in a review meeting.",
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Version-controlled compliance",
    description:
      "Every design change is tracked alongside its compliance status. Full audit trail without extra effort.",
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Auto-generated documentation",
    description:
      "Compliance reports and certifications are created automatically from your design data. No more manual paperwork.",
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Compliance built into your CAD workflow
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            Alqum plugs directly into your design process. No separate tools, no context switching.
          </p>
        </div>

        {/* Before / After */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Before Alqum
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-red-400">&#10005;</span>
                Manual compliance checks after design freeze
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">&#10005;</span>
                Spreadsheets and PDFs for compliance tracking
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">&#10005;</span>
                Expensive redesigns when issues surface late
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">&#10005;</span>
                Weeks to put together compliance documentation
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-green-600">
              With Alqum
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-green-500">&#10003;</span>
                Compliance feedback as you design
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">&#10003;</span>
                Compliance data versioned alongside your CAD files
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">&#10003;</span>
                Problems caught before they get expensive
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">&#10003;</span>
                Compliance docs ready in seconds
              </li>
            </ul>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
