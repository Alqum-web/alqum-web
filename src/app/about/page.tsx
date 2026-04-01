import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the team behind Alqum and our mission to fix compliance in design and manufacturing.",
};

const team = [
  {
    name: "Dr. Deepak Soman",
    role: "Co-founder",
    bio: "Modelling and materials engineer with a doctorate from IIT Bombay. Over 8 years of experience in mechanical engineering, manufacturing, and applied AI.",
    linkedin: "https://www.linkedin.com/in/deepak-soman-608b8566/",
    initials: "DS",
  },
  {
    name: "Jitesh",
    role: "Co-founder",
    bio: "Applied AI and ML engineer with experience building modelling and manufacturing systems.",
    linkedin: null,
    initials: "J",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      {/* Mission */}
      <section>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Why we are building Alqum
        </h1>
        <div className="mt-6 space-y-4 text-muted leading-relaxed">
          <p>
            Compliance slows down every design and manufacturing team. Engineers
            spend hours on compliance documentation when they should be
            designing. When issues surface late, the result is redesigns,
            delays, and wasted budget.
          </p>
          <p>
            We think compliance should be part of the design process from the
            start. Alqum uses AI agents to validate compliance directly inside
            the CAD workflow, catching issues in real time and generating
            documentation as you go.
          </p>
          <p>
            Longer term, we want to build the collaboration and lifecycle
            management platform for product engineering. We are starting with
            compliance because it is the most painful and most neglected part
            of the process.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">Team</h2>
        <div className="mt-8 space-y-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex gap-5 rounded-xl border border-border p-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                {member.initials}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-1 text-sm text-muted">{member.bio}</p>
                {member.linkedin && (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs text-primary hover:underline"
                  >
                    LinkedIn
                  </Link>
                )}
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
            href="mailto:support@alqum.com"
            className="text-primary hover:underline"
          >
            support@alqum.com
          </a>
        </p>
      </section>
    </div>
  );
}
