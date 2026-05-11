import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin, ArrowRight, Sparkles, TrendingUp, Users, Heart,
  GraduationCap, Globe2, Plane, ShieldCheck, Coffee, Search, FileText, MessageSquare, Trophy,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Aurelius Logistics" },
      { name: "description", content: "Open roles, company culture, benefits, and growth opportunities at Aurelius Logistics." },
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

const benefits = [
  { icon: ShieldCheck, title: "Premium health insurance", desc: "Worldwide medical, dental, and vision for you and your family." },
  { icon: GraduationCap, title: "Learning budget", desc: "$3,000/year for courses, certifications, and conferences." },
  { icon: Plane, title: "Global mobility", desc: "Cross-office assignments and international relocation support." },
  { icon: Globe2, title: "Hybrid by default", desc: "Flexible remote work paired with stunning physical hubs." },
  { icon: Coffee, title: "Modern offices", desc: "Designed for focus, collaboration, and a great daily experience." },
  { icon: Trophy, title: "Performance bonuses", desc: "Generous variable comp tied to clear, measurable outcomes." },
];

const process = [
  { icon: Search, n: "01", t: "Discovery call", d: "A 30-minute conversation with our talent team to learn about you." },
  { icon: FileText, n: "02", t: "Skills review", d: "A practical exercise or technical conversation tailored to the role." },
  { icon: MessageSquare, n: "03", t: "Team interviews", d: "Meet your future manager and 2–3 future teammates." },
  { icon: Trophy, n: "04", t: "Offer", d: "Detailed offer, onboarding plan, and your start date." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build a career as ambitious as <span className="text-gradient-gold">the cargo we move</span>.</>}
        subtitle="Join a team where excellence is the standard, your work moves the world, and your growth is genuinely invested in."
      />

      {/* CULTURE WITH IMAGE */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-gold opacity-20 blur-3xl" />
            <img src={teamImg} alt="The Aurelius team" loading="lazy" className="relative rounded-3xl shadow-elegant" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold">Our culture</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">Craft, character, and curiosity.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We hire people who care about doing exceptional work — not those chasing
              titles or shortcuts. In return we offer real ownership, genuine investment in
              your growth, and a team you'll be proud to call colleagues.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you're orchestrating a 30-ton airlift or refining a global supply chain
              strategy, your work here is felt across continents.
            </p>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
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

      {/* BENEFITS */}
      <Section className="!pt-0">
        <SectionHeader eyebrow="Benefits" title={<>Generous, <span className="text-gradient-gold">global</span>, and grown-up</>} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border p-7 transition-colors hover:border-[var(--gold)]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[oklch(0.55_0.18_255/0.15)]">
                <b.icon className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* OPEN ROLES */}
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
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-gold px-4 py-2 text-xs font-bold text-[oklch(0.16_0.045_260)] transition-transform group-hover:translate-x-1">
                  Apply now <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* HIRING PROCESS */}
      <Section className="!pt-0">
        <SectionHeader eyebrow="Hiring process" title="Respectful, focused, and quick" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((s) => (
            <div key={s.n} className="glass relative overflow-hidden rounded-2xl p-7">
              <div className="font-serif text-5xl font-bold text-gradient-gold opacity-40">{s.n}</div>
              <s.icon className="mt-4 h-7 w-7 text-[var(--gold)]" />
              <h3 className="mt-4 font-serif text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="!pt-0">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-center lg:p-16">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Don't see your role?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We're always interested in exceptional talent. Send your CV and we'll be in touch
            when the right opportunity opens.
          </p>
          <a href="mailto:careers@aureliuslogistics.com" className="mt-8 btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
            careers@aureliuslogistics.com <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </>
  );
}