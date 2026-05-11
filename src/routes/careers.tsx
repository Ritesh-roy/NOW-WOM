import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ArrowRight, Sparkles, TrendingUp, Users, Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Aurelius Logistics" },
      { name: "description", content: "Open roles, company culture, and growth opportunities at Aurelius Logistics." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Senior Operations Manager", dept: "Operations", location: "Dubai · UAE", type: "Full-time" },
  { title: "Pharma Cold Chain Specialist", dept: "Healthcare", location: "Frankfurt · Germany", type: "Full-time" },
  { title: "Global Trade Compliance Analyst", dept: "Customs", location: "Singapore", type: "Full-time" },
  { title: "Account Director — Healthcare", dept: "Commercial", location: "London · UK", type: "Full-time" },
  { title: "Air Freight Coordinator", dept: "Operations", location: "Hong Kong", type: "Full-time" },
  { title: "Senior Software Engineer", dept: "Technology", location: "Remote · EMEA", type: "Full-time" },
];

const perks = [
  { icon: Sparkles, title: "Premium environment", desc: "World-class offices, modern tools, and a culture that values craft." },
  { icon: TrendingUp, title: "Real growth", desc: "Mentorship, sponsored certifications, and clear progression paths." },
  { icon: Users, title: "Global team", desc: "Work with experts in 30+ nationalities across 60+ countries." },
  { icon: Heart, title: "Wellbeing-first", desc: "Comprehensive healthcare, generous leave, and family-friendly policies." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build a career as ambitious as <span className="text-gradient-gold">the cargo we move</span>.</>}
        subtitle="Join a team where excellence is the standard, your work moves the world, and your growth is genuinely invested in."
      />

      <Section>
        <SectionHeader eyebrow="Why join us" title="A place to do the best work of your career" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title} className="glass hover-lift rounded-2xl p-7">
              <p.icon className="h-7 w-7 text-[var(--gold)]" />
              <h3 className="mt-5 font-serif text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeader eyebrow="Open roles" title="Find your next role" description="We hire for craft, character, and curiosity. If you don't see a perfect fit, we'd still love to hear from you." />
        <div className="overflow-hidden rounded-2xl border border-border glass">
          {roles.map((r, i) => (
            <a
              key={r.title}
              href="#"
              className={`group flex flex-col gap-3 p-6 transition-colors hover:bg-[oklch(0.82_0.16_85/0.06)] sm:flex-row sm:items-center sm:justify-between ${i !== 0 ? "border-t border-border" : ""}`}
            >
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.dept} · {r.type}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-[var(--gold)]" />{r.location}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold)] transition-transform group-hover:translate-x-1">
                  Apply <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-center lg:p-16">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Don't see your role?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We're always interested in exceptional talent. Send your CV and we'll be in touch
            when the right opportunity opens.
          </p>
          <a href="mailto:careers@aureliuslogistics.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-[oklch(0.16_0.045_260)] shadow-gold">
            careers@aureliuslogistics.com <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </>
  );
}