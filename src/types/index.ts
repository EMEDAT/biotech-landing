export type PhaseStage = "Discovery" | "IND Filed" | "Phase I" | "Phase II";

export interface PipelineProgram {
  id: string;
  target: string;
  mechanism: string;
  indication: string;
  stage: PhaseStage;
  trialId: string | null;
  btd: boolean;
}

export interface PlatformModule {
  id: string;
  name: string;
  tagline: string;
  description: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  context: string;
}

export interface TherapeuticProgram {
  id: string;
  area: string;
  description: string;
  detail: string;
}

export interface NavLink {
  label: string;
  href: string;
}
