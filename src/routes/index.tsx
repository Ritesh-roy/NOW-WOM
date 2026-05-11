import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Plane, Ship, Truck, Warehouse, FileCheck, HeartPulse,
  Globe2, ShieldCheck, Clock, Award, Quote, ChevronRight, Snowflake, Pill, Activity,
} from "lucide-react";
import heroImg from "@/assets/hero-logistics.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import globalImg from "@/assets/global.jpg";
import { Section, SectionHeader } from "@/components/section";
import { StatCounter } from "@/components/stat-counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelius Logistics — Premium Global Freight & Healthcare Logistics" },
      { name: "description", content: "Enterprise-grade logistics, freight forwarding, import & export, and specialized healthcare logistics across 60+ countries." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Plane, title: "Air Freight", desc: "Time-critical global air cargo with priority routing and white-glove handling." },
  { icon: Ship, title: "Sea Freight", desc: "FCL & LCL ocean shipping with deep carrier partnerships across all major lanes." },
  { icon: Truck, title: "Road Freight", desc: "Cross-border trucking, FTL/LTL, and last-mile distribution networks." },
  { icon: Warehouse, title: "Warehousing", desc: "Bonded, climate-controlled, and high-security storage in strategic hubs." },
  { icon: FileCheck, title: "Customs & Compliance", desc: "Specialized brokerage and regulatory expertise across 60+ jurisdictions." },
  { icon: HeartPulse, title: "Healthcare Logistics", desc: "GDP-certified cold chain, pharma, and medical supply distribution." },
];

const trust = ["Pfizer", "Maersk", "Siemens", "DHL Partner", "Roche", "Bosch"];

const testimonials = [
  { quote: "Aurelius transformed our cold-chain pipeline. Zero excursions in 18 months across 14 markets.", name: "Dr. Helena Voss", role: "VP Supply Chain · MedNova Pharma" },
  { quote: "Their customs expertise saved us weeks of clearance time. A genuine strategic partner.", name: "Marcus Chen", role: "Director of Logistics · Verity Industrial" },
  { quote: "World-class operations and the most professional team we've worked with in 20 years.", name: "Amira Al-Sayed", role: "COO · Sahara Trade Group" },
];

const faqs = [
  { q: "Which countries do you operate in?", a: "We have a presence in 60+ countries through wholly-owned offices, bonded warehouses, and a vetted partner network spanning every major trade lane." },
  { q: "Do you handle pharmaceutical and biologic shipments?", a: "Yes. Our healthcare division operates GDP- and IATA CEIV Pharma–compliant cold chain from 2–8 °C through deep-frozen at –80 °C, with full chain-of-custody documentation." },
  { q: "Can you manage end-to-end import & export?", a: "Absolutely. From origin pickup, customs documentation, freight, brokerage, warehousing, to final-mile delivery — under one accountable team." },
  { q: "What makes Aurelius different?", a: "We pair enterprise infrastructure with a concierge service model. Every account has a dedicated logistics architect and a 24/7 control tower." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Global logistics — container ship and cargo planes at twilight"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.12_0.05_260/0.85)_0%,oklch(0.12_0.05_260/0.7)_45%,oklch(0.12_0.05_260)_100%)]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pb-28 pt-44 lg:px-10 lg:pb-40 lg:pt-56">
          <div className="glass animate-fade-in inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
            Trusted in 60+ countries
          </div>

          <h1 className="animate-fade-up mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Premium Logistics. <br />
            <span className="text-gradient-gold">Engineered for the World's</span> <br />
            Most Demanding Cargo.
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From multimodal freight and global trade to GDP-certified pharmaceutical
            cold chain — Aurelius is the logistics partner enterprises trust with
            their most valuable shipments.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:text-[var(--gold)]"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="glass mt-20 grid w-full grid-cols-2 gap-6 rounded-2xl p-8 sm:grid-cols-4 lg:gap-10">
            <StatCounter value={60} suffix="+" label="Countries" />
            <StatCounter value={2400} suffix="+" label="Enterprise Clients" />
            <StatCounter value={98} suffix="%" label="On-time Delivery" />
            <StatCounter value={25} suffix="+" label="Years of Service" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-border bg-[oklch(0.18_0.05_260)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-8 lg:px-10">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted by</span>
          {trust.map((t) => (
            <span key={t} className="font-serif text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-[var(--gold)]">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title={<>End-to-end logistics, <span className="text-gradient-gold">flawlessly orchestrated</span></>}
          description="A complete portfolio of freight, trade, warehousing, and specialized healthcare services — delivered through a single accountable team."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group glass hover-lift relative overflow-hidden rounded-2xl p-8">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <s.icon className="h-6 w-6 text-[oklch(0.16_0.045_260)]" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--gold)]">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HEALTHCARE FEATURE */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-gold opacity-20 blur-3xl" />
              <img
                src={healthcareImg}
                alt="Temperature-controlled pharmaceutical logistics"
                width={1280}
                height={800}
                loading="lazy"
                className="relative rounded-3xl shadow-elegant"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold">Specialized Division</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Healthcare Logistics, held to a <span className="text-gradient-gold">higher standard</span>.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our GDP-certified healthcare division moves life-critical pharmaceuticals,
                clinical trial materials, and medical devices with uncompromising
                precision — from production to patient.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Snowflake, label: "2–8 °C, –20 °C, –80 °C cold chain" },
                  { icon: Pill, label: "Pharma & biologics handling" },
                  { icon: Activity, label: "24/7 temperature monitoring" },
                  { icon: ShieldCheck, label: "GDP & IATA CEIV compliance" },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-[oklch(0.55_0.18_255/0.15)] text-[var(--gold)]">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <span className="pt-1.5 text-sm text-foreground">{f.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="mt-10 btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                Explore Healthcare Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={globalImg} alt="Global port" width={1280} height={800} loading="lazy" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Globe2 className="mx-auto h-10 w-10 text-[var(--gold)]" />
            <h2 className="mt-6 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl">
              A truly global <span className="text-gradient-gold">control tower</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              60+ countries. 180+ partner ports. One unified operations platform giving you
              real-time visibility from origin to final mile.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: "Award-winning", desc: "Industry-recognized for service excellence." },
              { icon: ShieldCheck, title: "Certified", desc: "ISO 9001, GDP, IATA CEIV, AEO." },
              { icon: Clock, title: "24/7 Operations", desc: "Always-on global control tower." },
              { icon: Globe2, title: "Worldwide", desc: "Local presence, global capability." },
            ].map((b) => (
              <div key={b.title} className="glass rounded-2xl p-6 text-center">
                <b.icon className="mx-auto h-7 w-7 text-[var(--gold)]" />
                <h3 className="mt-4 font-serif text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader eyebrow="Client voices" title={<>Trusted by the world's <span className="text-gradient-gold">most demanding</span> shippers</>} />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass hover-lift rounded-2xl p-8">
              <Quote className="h-8 w-8 text-[var(--gold)]" />
              <blockquote className="mt-5 text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-serif text-base font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border glass">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                <span className="font-serif text-base font-semibold text-foreground sm:text-lg">{f.q}</span>
                <ChevronRight className="h-5 w-5 text-[var(--gold)] transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* NEWSLETTER / CTA */}
      <Section className="!pt-0">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-center lg:p-16">
          <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Stay ahead of <span className="text-gradient-gold">global logistics</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe for monthly insights on trade, freight markets, and supply chain innovation.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-border bg-[oklch(0.21_0.05_260/0.7)] px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--gold)] focus:outline-none"
              />
              <button type="submit" className="rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-[oklch(0.16_0.045_260)] shadow-gold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
