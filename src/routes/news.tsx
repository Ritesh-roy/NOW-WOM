import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — Aurelius Logistics" },
      { name: "description", content: "Updates, announcements, and industry insights from Aurelius Logistics." },
    ],
  }),
  component: NewsPage,
});

const articles = [
  { tag: "Healthcare", date: "May 02, 2026", title: "Aurelius opens new GDP-certified pharma hub in Frankfurt", excerpt: "Our 12,000 m² temperature-controlled facility expands European cold chain capacity by 40%." },
  { tag: "Trade", date: "Apr 21, 2026", title: "Navigating the new Gulf-Asia trade corridor", excerpt: "How shifting tariffs are reshaping import strategy across the GCC and Southeast Asia." },
  { tag: "Innovation", date: "Apr 14, 2026", title: "AI-driven control tower goes live across all hubs", excerpt: "Predictive ETA, anomaly detection, and proactive intervention — at global scale." },
  { tag: "Awards", date: "Mar 30, 2026", title: "Aurelius named Logistics Provider of the Year", excerpt: "Recognized for service excellence and innovation by Global Trade Review." },
  { tag: "Sustainability", date: "Mar 15, 2026", title: "Carbon-neutral ocean lanes now available across 22 ports", excerpt: "Verified offset and biofuel programs for our enterprise shippers." },
  { tag: "Healthcare", date: "Feb 28, 2026", title: "Inside our –80 °C clinical trial logistics network", excerpt: "How we move investigational medicinal products to over 1,200 trial sites worldwide." },
];

function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title={<>From the <span className="text-gradient-gold">Aurelius newsroom</span>.</>}
        subtitle="Announcements, industry analysis, and stories from inside the world's most demanding supply chains."
      />

      <Section>
        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <article className="glass hover-lift overflow-hidden rounded-3xl lg:col-span-2">
            <div className="aspect-[16/9] bg-gradient-hero" />
            <div className="p-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                <span className="rounded-full bg-gradient-gold px-3 py-1 font-bold text-[oklch(0.16_0.045_260)]">{articles[0].tag}</span>
                <span className="text-muted-foreground"><Calendar className="mr-1 inline h-3 w-3" />{articles[0].date}</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">{articles[0].title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{articles[0].excerpt}</p>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)]">Read story <ArrowRight className="h-4 w-4" /></a>
            </div>
          </article>

          <div className="space-y-6">
            {articles.slice(1, 3).map((a) => (
              <article key={a.title} className="glass hover-lift rounded-2xl p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                  <span className="text-[var(--gold)]">{a.tag}</span>
                  <span className="text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.slice(3).map((a) => (
            <article key={a.title} className="group glass hover-lift overflow-hidden rounded-2xl">
              <div className="aspect-[16/10] bg-gradient-blue opacity-70" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                  <span className="text-[var(--gold)]">{a.tag}</span>
                  <span className="text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}