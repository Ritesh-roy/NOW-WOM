import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartPulse, Pill, Factory, ShoppingBag, Car, ShoppingCart, Globe2, Sparkles, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import healthcareImg from "@/assets/healthcare.jpg";
import autoImg from "@/assets/ind-auto.jpg";
import manufImg from "@/assets/ind-manuf.jpg";
import retailImg from "@/assets/ind-retail.jpg";
import warehouseImg from "@/assets/svc-warehouse.jpg";
import globalImg from "@/assets/global.jpg";
import seaImg from "@/assets/svc-sea.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Aurelius Logistics" },
      { name: "description", content: "Specialized logistics for healthcare, pharma, manufacturing, retail, automotive, e-commerce, FMCG, and international trade." },
    ],
  }),
  component: IndustriesPage,
});

type Ind = { icon: LucideIcon; title: string; image: string; desc: string; solution: string };

const industries: Ind[] = [
  { icon: HeartPulse, title: "Healthcare", image: healthcareImg, desc: "Hospitals, clinics, and medical device makers trust us with critical inventory and life-saving equipment.", solution: "Cold chain, just-in-time delivery, and emergency response logistics." },
  { icon: Pill, title: "Pharmaceutical", image: healthcareImg, desc: "GDP-validated cold chain for pharma, biologics, vaccines, and clinical trial logistics across 60+ markets.", solution: "2–8 °C, –20 °C, and –80 °C validated cold chain with full chain-of-custody." },
  { icon: Factory, title: "Manufacturing", image: manufImg, desc: "Inbound raw materials and outbound finished goods at industrial scale with JIT precision.", solution: "Production-line synchronized inbound + global distribution." },
  { icon: ShoppingBag, title: "Retail", image: retailImg, desc: "Seasonal peaks, multi-channel distribution, and store-ready logistics for premium retail brands.", solution: "Pre-tagged, pre-priced, store-ready fulfillment with peak-season scaling." },
  { icon: Car, title: "Automotive", image: autoImg, desc: "Just-in-time component flows and finished-vehicle distribution for OEMs and tier-one suppliers.", solution: "Sequenced delivery, finished-vehicle compounds, and aftermarket parts." },
  { icon: ShoppingCart, title: "E-commerce", image: warehouseImg, desc: "Fulfillment, last-mile, and cross-border DTC logistics for fast-growing online retailers.", solution: "Multi-warehouse fulfillment with same-day and cross-border shipping." },
  { icon: Sparkles, title: "FMCG", image: retailImg, desc: "High-velocity consumer goods movement with reliable replenishment and shelf-ready loads.", solution: "High-frequency replenishment, demand-driven distribution, and DC bypass." },
  { icon: Globe2, title: "International Trade", image: globalImg, desc: "Trading houses, commodity flows, and complex multi-jurisdiction shipments end-to-end.", solution: "Trade finance support, multi-modal routing, and full customs management." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Deep expertise in the sectors <span className="text-gradient-gold">that move the world</span>.</>}
        subtitle="Industry-specific solutions designed by people who understand the realities of your sector — from regulated pharma to high-velocity e-commerce."
      />

      <Section>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <article key={i.title} className="group card-premium overflow-hidden rounded-2xl border border-border glass">
              <div className="img-hover relative aspect-[16/10]">
                <img src={i.image} alt={i.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.05_260)] via-[oklch(0.12_0.05_260/0.3)] to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                    <i.icon className="h-5 w-5 text-[oklch(0.16_0.045_260)]" />
                  </div>
                  <h3 className="title-hover font-serif text-2xl font-semibold"><span className="title-underline">{i.title}</span></h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
                <div className="mt-5 rounded-xl border border-[var(--gold)]/30 bg-[oklch(0.82_0.16_85/0.06)] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]">Logistics solution</p>
                  <p className="mt-1.5 text-sm text-foreground">{i.solution}</p>
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold)]">
                  Discuss your needs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="overflow-hidden rounded-3xl border border-border">
          <img src={seaImg} alt="Global sea freight" loading="lazy" className="h-72 w-full object-cover" />
        </div>
      </Section>
    </>
  );
}