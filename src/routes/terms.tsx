import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — WOM Solutions" },
      { name: "description", content: "Terms governing the use of WOM Solutions website and logistics services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Terms of <span className="text-gradient-gold">Service</span></>}
        subtitle="Please review the terms that govern your use of our website and services."
      />
      <Section className="!py-16">
        <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground">
          {[
            { h: "1. Acceptance", p: "By accessing or using the WOM Solutions website or services, you agree to be bound by these Terms of Service and all applicable laws and regulations." },
            { h: "2. Services", p: "We provide logistics, transportation, freight forwarding, customs brokerage, warehousing, and healthcare logistics services. All services are subject to a separate signed service agreement and the terms of the relevant carriers." },
            { h: "3. Quotes & Bookings", p: "Quotes are valid for the period stated and are subject to change based on fuel surcharges, regulatory updates, and capacity. Bookings are confirmed only upon written acceptance by WOM Solutions." },
            { h: "4. Liability", p: "Our liability for loss or damage to cargo is limited as set out in the applicable international conventions (Warsaw, Montreal, Hague-Visby, CMR) and our standard trading conditions. Insurance is recommended for all high-value shipments." },
            { h: "5. Prohibited cargo", p: "You must not tender hazardous, illegal, or restricted goods without prior written approval. You are responsible for the accuracy of all shipment documentation." },
            { h: "6. Intellectual property", p: "All content, trademarks, and materials on this website are the property of WOM Solutions and may not be reproduced without permission." },
            { h: "7. Governing law", p: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Delhi." },
            { h: "8. Contact", p: "Questions about these terms? Reach us at sales@womsolutions.in or +91 98912 10081." },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-xl font-semibold text-foreground">{s.h}</h2>
              <p className="mt-3 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}