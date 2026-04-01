const stats = [
  { value: "40+", label: "Hardware teams interviewed" },
  { value: "$12B+", label: "Global compliance market" },
  { value: "30%", label: "Engineering time lost to compliance" },
];

export default function Traction() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            The compliance problem is massive
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            Hardware compliance is a multi-billion dollar market still
            run on spreadsheets and manual processes.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-white p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary">{s.value}</div>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
