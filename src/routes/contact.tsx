import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aurelius Logistics" },
      { name: "description", content: "Speak with a logistics architect. Offices, contact details, and inquiry form." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Speak with a <span className="text-gradient-gold">logistics architect</span>.</>}
        subtitle="Tell us about your shipment, lane, or supply chain challenge. A specialist will respond within one business hour."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {[
              { icon: MapPin, title: "Headquarters", body: "1 Maritime Plaza\nDubai, United Arab Emirates" },
              { icon: Mail, title: "Email", body: "hello@aureliuslogistics.com\nhealthcare@aureliuslogistics.com" },
              { icon: Phone, title: "Phone", body: "+971 4 555 0123\n+1 212 555 0199" },
              { icon: Clock, title: "Working hours", body: "Mon–Fri · 08:00 – 19:00 GST\n24/7 control tower for active shipments" },
            ].map((c) => (
              <div key={c.title} className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                    <c.icon className="h-5 w-5 text-[oklch(0.16_0.045_260)]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">{c.title}</h3>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="glass rounded-3xl p-8 lg:col-span-3 lg:p-10"
          >
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Request a quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">All fields required. We respond within one business hour.</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-[var(--gold)]/40 bg-[oklch(0.82_0.16_85/0.1)] p-8 text-center">
                <h3 className="font-serif text-xl font-semibold text-[var(--gold)]">Thank you.</h3>
                <p className="mt-2 text-sm text-muted-foreground">A logistics architect will be in touch shortly.</p>
              </div>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Full name", type: "text", name: "name" },
                  { label: "Company", type: "text", name: "company" },
                  { label: "Email", type: "email", name: "email" },
                  { label: "Phone", type: "tel", name: "phone" },
                ].map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</span>
                    <input
                      required
                      type={f.type}
                      name={f.name}
                      className="mt-2 w-full rounded-lg border border-border bg-[oklch(0.18_0.05_260)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--gold)] focus:outline-none"
                    />
                  </label>
                ))}
                <label className="block sm:col-span-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Service of interest</span>
                  <select
                    required
                    name="service"
                    className="mt-2 w-full rounded-lg border border-border bg-[oklch(0.18_0.05_260)] px-4 py-3 text-sm text-foreground focus:border-[var(--gold)] focus:outline-none"
                  >
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                    <option>Road Freight</option>
                    <option>Import / Export</option>
                    <option>Warehousing</option>
                    <option>Customs Clearance</option>
                    <option>Healthcare Logistics</option>
                    <option>Supply Chain Consulting</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">How can we help?</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-border bg-[oklch(0.18_0.05_260)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--gold)] focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-[oklch(0.16_0.045_260)] shadow-gold transition-transform hover:-translate-y-0.5"
                >
                  Send inquiry <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Aurelius Logistics — Dubai Headquarters"
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.18%2C25.18%2C55.32%2C25.27&amp;layer=mapnik"
            className="h-[420px] w-full grayscale"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}