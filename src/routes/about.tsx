import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Gem, Users, Award, Shield, Globe2, Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import globalImg from "@/assets/global.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aurelius Logistics" },
      { name: "description", content: "Our story, mission, vision, values, and the leadership behind a global premium logistics partner." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Integrity", desc: "Transparent, honest, and accountable in every shipment we touch." },
  { icon: Award, title: "Excellence", desc: "A relentless pursuit of operational and service perfection." },
  { icon: Heart, title: "Care", desc: "We treat every shipment as if a life depended on it — because often it does." },
  { icon: Globe2, title: "Global Vision", desc: "We think and operate beyond borders, currencies, and time zones." },
];

const leaders = [
  { name: "Alexander Volkov", role: "Chief Executive Officer", initials: "AV" },
  { name: "Dr. Mira Kapoor", role: "Chief Healthcare Officer", initials: "MK" },
  { name: "Hassan Al-Faisal", role: "Chief Operating Officer", initials: "HA" },
  { name: "Sofia Lindqvist", role: "Chief Commercial Officer", initials: "SL" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aurelius"
        title={<>Built for the <span className="text-gradient-gold">world's most demanding</span> shippers.</>}
        subtitle="For 25 years, Aurelius Logistics has moved the cargo that matters most — from industrial freight that powers economies to medicines that save lives."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={globalImg} alt="Aurelius global operations" className="rounded-3xl shadow-elegant" loading="lazy" />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold">Our story</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">A quarter-century of moving the world.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Founded in 2000 from a single freight desk in Dubai, Aurelius has grown into a
              global logistics enterprise spanning 60+ countries, three continents of bonded
              warehousing, and a healthcare division trusted by the world's leading
              pharmaceutical companies.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We remain privately held, founder-led, and obsessed with one thing: delivering
              cargo with the precision and care our clients expect of themselves.
            </p>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { icon: Target, title: "Mission", desc: "To move the world's most valuable cargo with uncompromising precision and care." },
            { icon: Eye, title: "Vision", desc: "To be the most trusted premium logistics partner across every continent we serve." },
            { icon: Gem, title: "Promise", desc: "Enterprise infrastructure with the service of a private concierge." },
          ].map((c) => (
            <div key={c.title} className="glass hover-lift rounded-2xl p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                <c.icon className="h-6 w-6 text-[oklch(0.16_0.045_260)]" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeader eyebrow="Our values" title={<>The principles that <span className="text-gradient-gold">define us</span></>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border p-7 transition-colors hover:border-[var(--gold)]">
              <v.icon className="h-7 w-7 text-[var(--gold)]" />
              <h3 className="mt-5 font-serif text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeader eyebrow="Leadership" title="Steady hands at the helm" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <div key={l.name} className="glass hover-lift rounded-2xl p-6 text-center">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-gold font-serif text-3xl font-bold text-[oklch(0.16_0.045_260)] shadow-gold">
                {l.initials}
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold">{l.name}</h3>
              <p className="text-sm text-muted-foreground">{l.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeader eyebrow="Why Aurelius" title="Why the world's leaders choose us" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Users, title: "Dedicated logistics architect", desc: "A single accountable expert per account — not a call center." },
            { icon: Shield, title: "GDP & CEIV certified", desc: "Audited compliance for life-science cold chain across all hubs." },
            { icon: Globe2, title: "60+ country footprint", desc: "Owned offices in every major trade hub on the planet." },
            { icon: Award, title: "98% on-time delivery", desc: "Verified by independent third-party performance audits." },
            { icon: Heart, title: "White-glove service", desc: "Concierge-grade communication and reporting on every shipment." },
            { icon: Gem, title: "Premium fleet", desc: "Modern, monitored, and meticulously maintained equipment." },
          ].map((w) => (
            <div key={w.title} className="glass rounded-2xl p-7">
              <w.icon className="h-7 w-7 text-[var(--gold)]" />
              <h3 className="mt-5 font-serif text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}