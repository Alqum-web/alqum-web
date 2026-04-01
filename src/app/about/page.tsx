import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the team behind Alqum and our mission to fix compliance in hardware development.",
};

const team = [
  {
    name: "Founder Name",
    role: "CEO & Co-founder",
    bio: "10+ years in hardware engineering. Experienced the compliance pain firsthand across aerospace and automotive.",
    linkedin: "#",
  },
  {
    name: "Founder Name",
    role: "CTO & Co-founder",
    bio: "Background in CAD systems, developer tools, and compliance automation.",
    linkedin: "#",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      {/* Mission */}
      <section>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Why we&apos;re building Alqum
        </h1>
        <div className="mt-6 space-y-4 text-muted leading-relaxed">
          <p>
            Hardware compliance is a bottleneck that affects every engineering team.
            Engineers spend up to 30% of their time on compliance documentation instead
            of designing. Compliance issues found late in the design cycle cause costly
            redesigns and delayed shipments.
          </p>
          <p>
            We believe compliance should be built into the design process, not bolted on
            after the fact. Alqum integrates compliance validation directly into CAD
            workflows, catching issues in real-time and generating documentation automatically.
          </p>
          <p>
            Our long-term vision is to build the collaboration and lifecycle management
            platform for hardware engineering — think GitHub meets Cursor, but for CAD.
            We&apos;re starting with compliance because it&apos;s the most painful,
            most neglected part of the hardware development process.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">Team</h2>
        <div className="mt-8 space-y-6">
          {team.map((member) => (
            <div
              key={member.name + member.role}
              className="flex gap-5 rounded-xl border border-border p-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-1 text-sm text-muted">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
        <p className="mt-4 text-muted">
          Interested in partnering or learning more?{" "}
          <a
            href="mailto:hello@alqum.com"
            className="text-primary hover:underline"
          >
            hello@alqum.com
          </a>
        </p>
      </section>
    </div>
  );
}
