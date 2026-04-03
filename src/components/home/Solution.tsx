import Image from "next/image";

const features = [
  {
    title: "Live compliance checks",
    description:
      "AI agents monitor your design as you work and flag issues in real time, not weeks later during a review.",
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
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
    title: "Documentation that writes itself",
    description:
      "Compliance reports and certification docs are generated from your design data. No more copy-pasting from spreadsheets.",
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
            Compliance that runs inside your CAD tool
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            Alqum fits into the way you already work. No extra tools, no switching tabs.
          </p>
        </div>

        {/* Before / After */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600">
              Without Alqum
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-red-400">&#10005;</span>
                Manual compliance reviews after design freeze
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">&#10005;</span>
                Spreadsheets and PDFs scattered across teams
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">&#10005;</span>
                Costly redesigns when issues surface late
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">&#10005;</span>
                Weeks spent assembling compliance documentation
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
                AI agents flag compliance issues as you design
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">&#10003;</span>
                Compliance data versioned with your CAD files
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">&#10003;</span>
                Problems caught before they get expensive
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">&#10003;</span>
                Compliance docs generated in seconds
              </li>
            </ul>
          </div>
        </div>

        {/* Product screenshots */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/mock-gdt-compliance.png"
              alt="Real-time GD&T compliance monitoring inside the CAD viewport"
              width={1920}
              height={1080}
              className="w-full"
            />
            <div className="bg-white p-4">
              <h3 className="font-semibold text-foreground">Live compliance checks</h3>
              <p className="mt-1 text-sm text-muted">AI agents monitor your design as you work and flag issues in real time.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/mock-dfm-feasibility.png"
              alt="Automated DFM feasibility analysis with scoring and issue breakdown"
              width={1920}
              height={1080}
              className="w-full"
            />
            <div className="bg-white p-4">
              <h3 className="font-semibold text-foreground">DFM feasibility analysis</h3>
              <p className="mt-1 text-sm text-muted">Automated manufacturability checks with actionable feedback before you go to production.</p>
            </div>
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
