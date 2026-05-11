import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, Pill, Factory, ShoppingBag, Car, ShoppingCart, Globe2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Aurelius Logistics" },
      { name: "description", content: "Specialized logistics for healthcare, pharma, manufacturing, retail, automotive, e-commerce, and international trade." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: HeartPulse, title: "Healthcare", desc: "Hospitals, clinics, and medical device makers trust us with critical inventory." },
  { icon: Pill, title: "Pharmaceutical", desc: "GDP-validated cold chain for pharma, biologics, vaccines, and clinical trials." },
  { icon: Factory, title: "Manufacturing", desc: "Inbound raw materials and outbound finished goods at industrial scale." },
  { icon: ShoppingBag, title: "Retail", desc: "Seasonal peaks, multi-channel distribution, and store-ready logistics." },
  { icon: Car, title: "Automotive", desc: "Just-in-time component flows and finished-vehicle distribution." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Fulfillment, last-mile, and cross-border DTC logistics." },
  { icon: Globe2, title: "International Trade", desc: "Trading houses, commodity flows, and complex multi-jurisdiction shipments." },
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i, idx) => (
            <div key={i.title} className={`group glass hover-lift rounded-2xl p-8 ${idx === 0 ? "border border-[var(--gold)]/40" : ""}`}>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold shadow-gold">
                <i.icon className="h-7 w-7 text-[oklch(0.16_0.045_260)]" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold">{i.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{i.desc}</p>
              <div className="mt-6 gold-divider" />
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Compliance · Speed · Care</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}