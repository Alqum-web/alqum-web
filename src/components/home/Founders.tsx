const founders = [
  {
    name: "Founder Name",
    role: "CEO & Co-founder",
    bio: "10+ years in hardware engineering. Previously at [Company].",
    // Replace with real image path
    image: null,
  },
  {
    name: "Founder Name",
    role: "CTO & Co-founder",
    bio: "Background in CAD systems and compliance automation.",
    image: null,
  },
];

export default function Founders() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Built by engineers, for engineers
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            We&apos;ve lived the compliance pain firsthand.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:justify-center">
          {founders.map((f) => (
            <div
              key={f.name + f.role}
              className="flex w-full max-w-sm flex-col items-center rounded-xl border border-border bg-white p-6 text-center"
            >
              {/* Placeholder avatar */}
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold">
                {f.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.name}</h3>
              <p className="text-sm text-primary">{f.role}</p>
              <p className="mt-2 text-sm text-muted">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
