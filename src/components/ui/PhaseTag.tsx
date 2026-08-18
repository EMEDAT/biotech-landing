import type { PhaseStage } from "@/types";

interface PhaseTagProps {
  stage: PhaseStage;
  btd?: boolean;
}

const stageStyles: Record<PhaseStage, string> = {
  Discovery: "border-amber/40 text-amber bg-amber/5",
  "IND Filed": "border-border-active text-text-muted bg-surface",
  "Phase I": "border-cyan/40 text-cyan bg-cyan/5",
  "Phase II": "border-emerald/40 text-emerald bg-emerald/5",
};

export function PhaseTag({ stage, btd = false }: PhaseTagProps) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-sm border text-xs font-mono font-semibold tracking-widest uppercase ${stageStyles[stage]}`}
      >
        {stage}
      </span>
      {btd && (
        <span className="inline-flex items-center px-2 py-0.5 rounded-sm border border-emerald/60 text-emerald text-xs font-mono font-bold tracking-widest uppercase bg-emerald/5">
          BTD
        </span>
      )}
    </span>
  );
}
