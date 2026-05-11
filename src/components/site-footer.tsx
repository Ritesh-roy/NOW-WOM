import { Link } from "@tanstack/react-router";
import { Ship, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/careers", label: "Careers" },
      { to: "/news", label: "News" },
      { to: "/branches", label: "Branches" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Air Freight" },
      { to: "/services", label: "Sea Freight" },
      { to: "/services", label: "Road Freight" },
      { to: "/services", label: "Healthcare Logistics" },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/industries", label: "Healthcare & Pharma" },
      { to: "/industries", label: "Manufacturing" },
      { to: "/industries", label: "Retail & E-commerce" },
      { to: "/industries", label: "Automotive" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-[oklch(0.12_0.05_260)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5 lg:px-10">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-gold">
              <Ship className="h-5 w-5 text-[oklch(0.16_0.045_260)]" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-xl font-semibold">Aurelius</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gradient-gold">Logistics</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A premium logistics partner moving the world's most demanding cargo —
            from industrial freight to temperature-sensitive pharmaceuticals.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" /> Janakpuri, West Delhi, Delhi 110058, India</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--gold)]" /> <a href="mailto:sales@womsolutions.in" className="hover:text-[var(--gold)]">sales@womsolutions.in</a></p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--gold)]" /> <a href="tel:+919891210081" className="hover:text-[var(--gold)]">+91 98912 10081</a></p>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 font-serif text-base font-semibold text-foreground">{c.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {c.links.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="text-muted-foreground transition-colors hover:text-[var(--gold)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} WOM Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-[var(--gold)]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--gold)]">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-[var(--gold)]">Cookie Policy</Link>
            <span className="hidden sm:inline text-border">|</span>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--gold)]"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[var(--gold)]"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[var(--gold)]"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[var(--gold)]"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}