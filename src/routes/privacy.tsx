import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — HLC Technologies" },
      { name: "description", content: "How HLC Technologies collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy <span className="text-gradient-gold">Policy</span></>}
        subtitle="Last updated: January 2026. Your trust is the foundation of every shipment we handle."
      />
      <Section className="!py-16">
        <div className="prose-legal mx-auto max-w-3xl space-y-8 text-muted-foreground">
          {[
            { h: "1. Information we collect", p: "We collect information you provide directly to us — such as your name, company, email, phone number, shipment details, and any messages submitted through our quote and contact forms. We also collect limited technical data such as IP address, browser type, device identifiers, and approximate location to secure our services and improve user experience." },
            { h: "2. How we use information", p: "Information is used to operate our logistics services, respond to inquiries, provide quotes, manage shipments, send service communications, comply with customs and regulatory requirements, prevent fraud, and improve our website." },
            { h: "3. Sharing of information", p: "We share data only with carriers, customs authorities, regulatory bodies, and trusted technology providers strictly as required to deliver your shipment or comply with the law. We never sell personal information." },
            { h: "4. Data retention", p: "We retain personal data only for as long as necessary to fulfill the purposes described, satisfy legal obligations, resolve disputes, and enforce agreements." },
            { h: "5. Your rights", p: "You may request access to, correction of, or deletion of your personal data. Contact us at sales@hlctechnologies.in to exercise your rights." },
            { h: "6. Security", p: "We implement administrative, technical, and physical safeguards designed to protect your information against unauthorized access, loss, or misuse." },
            { h: "7. Contact", p: "HLC Technologies, Janakpuri, West Delhi, Delhi 110058, India · sales@hlctechnologies.in · +91 98912 10081" },
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