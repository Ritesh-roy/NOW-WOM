import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane, Ship, Truck, Warehouse, FileCheck, HeartPulse, PackageCheck,
  Globe2, Container, ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import healthcareImg from "@/assets/healthcare.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aurelius Logistics" },
      { name: "description", content: "Air, sea, road freight, warehousing, customs, import & export, and specialized healthcare logistics." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Plane, title: "Air Freight", desc: "Express, consolidated, and charter air cargo across 180+ destinations.", points: ["Priority and economy routing", "Dangerous goods certified", "Temperature-controlled ULDs"] },
  { icon: Ship, title: "Sea Freight", desc: "FCL, LCL, and project cargo through deep ocean carrier alliances.", points: ["Reefer and special equipment", "Port-to-door coordination", "Real-time vessel tracking"] },
  { icon: Truck, title: "Road Freight", desc: "Cross-border trucking, FTL/LTL, and last-mile across continents.", points: ["GPS-monitored fleet", "Bonded and ATA carnet capable", "24/7 dispatch"] },
  { icon: Container, title: "Import Solutions", desc: "End-to-end inbound logistics with tariff and duty optimization.", points: ["HS classification", "Trade compliance", "Bonded inventory"] },
  { icon: PackageCheck, title: "Export Solutions", desc: "Documentation, packaging, and outbound freight to 60+ countries.", points: ["Letters of credit", "Export licensing", "Risk mitigation"] },
  { icon: Warehouse, title: "Warehousing", desc: "Bonded, ambient, and climate-controlled storage in strategic hubs.", points: ["WMS-integrated", "Pick & pack fulfillment", "High-security vaulting"] },
  { icon: FileCheck, title: "Customs Clearance", desc: "In-house brokerage across major jurisdictions worldwide.", points: ["Pre-clearance", "AEO certified", "Duty drawback"] },
  { icon: Globe2, title: "Supply Chain Management", desc: "Strategic 4PL design, optimization, and orchestration.", points: ["Network design", "S&OP integration", "Control tower"] },
  { icon: HeartPulse, title: "Healthcare Logistics", desc: "GDP-certified pharma, biologic, and medical device cold chain.", points: ["2–8 °C through –80 °C", "Clinical trial logistics", "Medical device handling"], featured: true },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>A complete portfolio of <span className="text-gradient-gold">premium logistics</span>.</>}
        subtitle="From a single shipment to a global supply chain transformation — engineered, executed, and accountable end-to-end."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group hover-lift relative overflow-hidden rounded-2xl p-8 ${
                s.featured ? "border border-[var(--gold)] bg-gradient-hero shadow-gold" : "glass"
              }`}
            >
              {s.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[oklch(0.16_0.045_260)]">
                  Specialized
                </span>
              )}
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                <s.icon className="h-6 w-6 text-[oklch(0.16_0.045_260)]" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-8 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img src={healthcareImg} alt="Healthcare logistics" loading="lazy" className="rounded-2xl shadow-elegant" />
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gradient-gold">Featured division</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">Healthcare Logistics — when temperature is non-negotiable.</h2>
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
    </>
  );
}