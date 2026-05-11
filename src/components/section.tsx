import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-14", align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gradient-gold">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}