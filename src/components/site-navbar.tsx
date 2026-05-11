import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import womLogo from "@/assets/wom-logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/branches", label: "Branches" },
  { to: "/news", label: "News" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-elegant" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-[oklch(0.12_0.05_260)] ring-1 ring-[var(--gold)]/40 shadow-gold sm:h-11 sm:w-11">
            <img src={womLogo} alt="WOM Solutions" className="h-full w-full object-cover" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-serif text-base font-semibold tracking-tight text-foreground sm:text-lg">
              WOM Solutions
            </span>
            <span className="truncate text-[10px] uppercase tracking-[0.25em] text-gradient-gold">
              Logistics · Healthcare
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="nav-link relative px-3 py-2 text-sm font-medium text-muted-foreground"
              activeProps={{ className: "text-foreground", "data-active": "true" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-foreground xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border xl:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-4 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}