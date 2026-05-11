import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-20 pt-40 lg:pb-28 lg:pt-48">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="animate-fade-in text-xs uppercase tracking-[0.4em] text-gradient-gold">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}