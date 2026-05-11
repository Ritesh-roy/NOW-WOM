import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Branches — Aurelius Logistics" },
      { name: "description", content: "Aurelius Logistics offices and operational hubs across the Americas, EMEA, and APAC." },
    ],
  }),
  component: BranchesPage,
});

const branches = [
  { city: "Dubai", country: "United Arab Emirates", region: "HQ · MEA", tag: "Headquarters", phone: "+971 4 555 0123", email: "dubai@aureliuslogistics.com" },
  { city: "Singapore", country: "Singapore", region: "APAC HQ", tag: "Regional HQ", phone: "+65 6123 0098", email: "singapore@aureliuslogistics.com" },
  { city: "London", country: "United Kingdom", region: "EMEA", tag: "Regional HQ", phone: "+44 20 7946 0123", email: "london@aureliuslogistics.com" },
  { city: "New York", country: "United States", region: "Americas HQ", tag: "Regional HQ", phone: "+1 212 555 0199", email: "newyork@aureliuslogistics.com" },
  { city: "Frankfurt", country: "Germany", region: "EMEA", phone: "+49 69 1234 5678", email: "frankfurt@aureliuslogistics.com" },
  { city: "Hong Kong", country: "China SAR", region: "APAC", phone: "+852 5808 1234", email: "hongkong@aureliuslogistics.com" },
  { city: "Mumbai", country: "India", region: "South Asia", phone: "+91 22 4123 0000", email: "mumbai@aureliuslogistics.com" },
  { city: "São Paulo", country: "Brazil", region: "Americas", phone: "+55 11 4002 8922", email: "saopaulo@aureliuslogistics.com" },
  { city: "Johannesburg", country: "South Africa", region: "Africa", phone: "+27 11 555 0123", email: "joburg@aureliuslogistics.com" },
];

function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Global presence"
        title={<>60+ countries. <span className="text-gradient-gold">One unified network.</span></>}
        subtitle="Wholly-owned offices in the world's most strategic trade hubs, supported by a vetted partner network in every major lane."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <div key={b.city} className="group glass hover-lift relative overflow-hidden rounded-2xl p-7">
              {b.tag && (
                <span className="absolute right-4 top-4 rounded-full border border-[var(--gold)]/40 bg-[oklch(0.82_0.16_85/0.1)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]">
                  {b.tag}
                </span>
              )}
              <MapPin className="h-7 w-7 text-[var(--gold)]" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">{b.city}</h3>
              <p className="text-sm text-muted-foreground">{b.country} · <span className="text-[var(--gold)]">{b.region}</span></p>
              <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--gold)]" /> {b.phone}</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--gold)]" /> {b.email}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}