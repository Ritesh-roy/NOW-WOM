import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane, Ship, Truck, Warehouse, FileCheck, HeartPulse, PackageCheck,
  Container, ArrowRight, Pill, Route as RouteIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import healthcareImg from "@/assets/healthcare.jpg";
import airImg from "@/assets/svc-air.jpg";
import seaImg from "@/assets/svc-sea.jpg";
import roadImg from "@/assets/svc-road.jpg";
import warehouseImg from "@/assets/svc-warehouse.jpg";
import customsImg from "@/assets/svc-customs.jpg";
import globalImg from "@/assets/global.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aurelius Logistics" },
      { name: "description", content: "Air, sea, road freight, transportation, import & export, warehousing, customs, healthcare logistics and pharma supply chain." },
    ],
  }),
  component: ServicesPage,
});

type Svc = { icon: LucideIcon; title: string; image: string; desc: string; featured?: boolean };

const services: Svc[] = [
  { icon: RouteIcon, title: "Transportation", image: roadImg, desc: "Multimodal transportation across road, rail, air, and sea — orchestrated through one accountable team and a single global platform." },
  { icon: Container, title: "Import Solutions", image: seaImg, desc: "End-to-end inbound logistics with HS classification, tariff optimization, bonded warehousing, and last-mile delivery to your facility." },
  { icon: PackageCheck, title: "Export Solutions", image: globalImg, desc: "Outbound freight to 60+ countries with documentation, packaging, letters of credit, export licensing, and full risk mitigation." },
  { icon: Plane, title: "Air Freight", image: airImg, desc: "Express, consolidated, and full-charter air cargo across 180+ destinations with priority routing, DGR handling, and temperature-controlled ULDs." },
  { icon: Ship, title: "Sea Freight", image: seaImg, desc: "FCL, LCL, reefer, and project cargo via deep ocean carrier alliances on every major lane, with port-to-door coordination and real-time vessel tracking." },
  { icon: Truck, title: "Road Freight", image: roadImg, desc: "Cross-border trucking, FTL/LTL, and last-mile distribution across continents with GPS-monitored fleet, ATA carnet capability, and 24/7 dispatch." },
  { icon: Warehouse, title: "Warehousing", image: warehouseImg, desc: "Bonded, ambient, and climate-controlled storage in strategic global hubs — WMS-integrated, with pick & pack fulfillment and high-security vaulting." },
  { icon: FileCheck, title: "Customs Clearance", image: customsImg, desc: "In-house brokerage across major jurisdictions, AEO certified, with pre-clearance, duty drawback, and complete trade-compliance management." },
  { icon: HeartPulse, title: "Healthcare Logistics", image: healthcareImg, desc: "GDP-certified cold chain from 2–8 °C through –80 °C for pharmaceuticals, biologics, vaccines, and medical devices — with 24/7 monitoring.", featured: true },
  { icon: Pill, title: "Pharma Supply Chain", image: healthcareImg, desc: "End-to-end pharmaceutical supply chain design, clinical trial logistics, IRT integration, and global distribution to over 1,200 clinical sites." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>A complete portfolio of <span className="text-gradient-gold">premium logistics</span>.</>}
        subtitle="From a single shipment to a global supply chain transformation — engineered, executed, and owned end-to-end by a single accountable team."
      />

      <Section>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group hover-lift relative overflow-hidden rounded-2xl border ${
                s.featured ? "border-[var(--gold)] shadow-gold" : "border-border"
              } glass`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.05_260)] via-[oklch(0.12_0.05_260/0.4)] to-transparent" />
                <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <s.icon className="h-6 w-6 text-[oklch(0.16_0.045_260)]" />
                </div>
                {s.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[oklch(0.16_0.045_260)]">
                    Specialized
                  </span>
                )}
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold)] transition-transform group-hover:translate-x-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-8 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img src={healthcareImg} alt="Healthcare logistics" loading="lazy" className="rounded-2xl shadow-elegant" />
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold">Featured division</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">Healthcare & Pharma — when temperature is non-negotiable.</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Our dedicated life-sciences division operates a validated, GDP-compliant cold
                chain network with 24/7 monitoring, redundant power, and qualified couriers
                trained in handling pharmaceuticals, biologics, vaccines, and clinical trial
                materials.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-[oklch(0.16_0.045_260)] shadow-gold">
                Speak to a healthcare specialist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeader eyebrow="Our process" title={<>From inquiry to delivery in <span className="text-gradient-gold">four steps</span></>} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Consult", d: "A logistics architect maps your lane, cargo, and constraints." },
            { n: "02", t: "Design", d: "We engineer a modal mix, routing, and compliance plan tailored to you." },
            { n: "03", t: "Execute", d: "Our control tower orchestrates pickup, freight, customs, and delivery." },
            { n: "04", t: "Optimize", d: "Continuous performance review and route optimization, quarter over quarter." },
          ].map((s) => (
            <div key={s.n} className="glass relative overflow-hidden rounded-2xl p-7">
              <div className="font-serif text-5xl font-bold text-gradient-gold opacity-40">{s.n}</div>
              <h3 className="mt-4 font-serif text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}