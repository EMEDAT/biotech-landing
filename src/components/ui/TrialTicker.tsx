import { TRIAL_TICKER_ITEMS } from "@/lib/constants";

export function TrialTicker() {
  const items = [...TRIAL_TICKER_ITEMS, ...TRIAL_TICKER_ITEMS];

  return (
    <div
      className="overflow-hidden border-y border-border-active/30 py-2.5"
      aria-hidden="true"
    >
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "ticker 40s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-widest text-text-muted uppercase shrink-0"
          >
            <span className="text-cyan/60 mr-3">▸</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
