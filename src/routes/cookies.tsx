import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — HLC Technologies" },
      { name: "description", content: "How HLC Technologies uses cookies and similar tracking technologies." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const rows = [
    { name: "Essential", purpose: "Required for site navigation, security, and form submission. Cannot be disabled." },
    { name: "Analytics", purpose: "Help us understand how visitors interact with the site so we can improve performance and content." },
    { name: "Preferences", purpose: "Remember your language, region, and display preferences across visits." },
    { name: "Marketing", purpose: "Used (only with your consent) to measure campaign performance and deliver relevant content." },
  ];
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Cookie <span className="text-gradient-gold">Policy</span></>}
        subtitle="Transparent information on the cookies and similar technologies used on this website."
      />
      <Section className="!py-16">
        <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground">
          <p className="leading-relaxed">
            HLC Technologies uses cookies and similar technologies to operate our website,
            understand how it is used, and provide a better experience. You can control
            non-essential cookies through your browser settings at any time.
          </p>

          <div className="overflow-hidden rounded-2xl border border-border glass">
            <table className="w-full text-sm">
              <thead className="bg-[oklch(0.18_0.05_260)] text-left text-foreground">
                <tr>
                  <th className="px-5 py-3 font-serif">Category</th>
                  <th className="px-5 py-3 font-serif">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="border-t border-border">
                    <td className="px-5 py-4 font-medium text-[var(--gold)]">{r.name}</td>
                    <td className="px-5 py-4 leading-relaxed">{r.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">Managing cookies</h2>
            <p className="mt-3 leading-relaxed">
              Most browsers allow you to refuse or delete cookies through their settings.
              Disabling essential cookies may affect website functionality.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3 leading-relaxed">
              For questions about this Cookie Policy, contact sales@hlctechnologies.in or call +91 98912 10081.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}