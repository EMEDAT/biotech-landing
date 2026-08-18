import { PARTNERS } from "@/lib/constants";

export function PartnersStrip() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-8 border-y border-border-active/20 bg-surface/40 overflow-hidden">
      <p className="text-center font-mono text-xs tracking-[0.3em] uppercase text-text-muted mb-6">
        Research & Development Partners
      </p>

      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #080F1A, transparent)" }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #080F1A, transparent)" }}
          aria-hidden="true"
        />

        <div
          className="flex gap-14 whitespace-nowrap"
          style={{ animation: "marquee 32s linear infinite" }}
          aria-hidden="true"
        >
          {items.map((partner, i) => (
            <span
              key={i}
              className="shrink-0 font-display text-sm font-semibold text-text-muted/50 tracking-wide uppercase"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
