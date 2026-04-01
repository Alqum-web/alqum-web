const problems = [
  {
    title: "Compliance happens too late",
    description:
      "Most teams find compliance issues after the design is done. That means redesigns, missed timelines, and money wasted.",
    icon: (
      <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Design and compliance are disconnected",
    description:
      "Your CAD files live in one place, compliance docs in another. Engineers jump between tools all day just to keep up.",
    icon: (
      <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "No intelligence in the process",
    description:
      "Compliance checking today is manual and repetitive. There is no system that learns your requirements and flags issues automatically.",
    icon: (
      <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Compliance in design and manufacturing is broken
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            Every product team runs into the same problems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-white p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
