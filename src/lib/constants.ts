import type { NavLink, PipelineProgram, PlatformModule, Stat, TherapeuticProgram } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Science", href: "#science" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Investors", href: "#investors" },
];

export const HERO = {
  eyebrow: "CLINICAL-STAGE EPIGENOMICS",
  headline: "Precision Medicine at the Molecular Scale",
  subheadline:
    "We apply epigenetic reprogramming and AI-driven target biology to build a new class of precision therapeutics — advancing four clinical programs across oncology and rare disease.",
  cta_primary: "View Our Pipeline",
  cta_secondary: "Our Platform",
};

export const TRIAL_TICKER_ITEMS = [
  "NXG-001 · r/r AML · Phase II · NCT05124823",
  "NXG-002 · Solid Tumors · Phase I · NCT05398217",
  "NXG-003 · MDS · IND Filed",
  "NXG-004 · CMT2 · Discovery",
];

export const PARTNERS = [
  "Broad Institute",
  "Mayo Clinic Ventures",
  "Pfizer Oncology",
  "Wellcome Trust",
  "NIH NCI",
  "Lilly Research Labs",
  "Mass General Brigham",
  "AstraZeneca R&D",
];

export const ABOUT = {
  headline: "Founded in Science. Built for Patients.",
  body: "NexaGenesis Biosciences was founded in 2019 as a spin-out from collaborative epigenomics research at the Broad Institute and Stanford School of Medicine. We identified a druggable class of epigenetic regulators — the Polycomb Repressive Complex — implicated in treatment-resistant cancers and rare neuromuscular conditions. Today we are advancing four clinical-stage programs built on that foundational science.",
  metrics: [
    { label: "Founded", value: "2019" },
    { label: "Raised", value: "$380M", detail: "Series A–C" },
    { label: "Clinical Programs", value: "4" },
    { label: "FDA Breakthrough Designations", value: "2" },
    { label: "Peer-Reviewed Publications", value: "68" },
  ],
};

export const PLATFORM = {
  eyebrow: "THE HELIX-AI™ PLATFORM",
  headline: "One Platform. Three Discoveries.",
  intro:
    "Our integrated discovery engine compresses the path from epigenetic target hypothesis to clinical candidate — combining multi-omic profiling, AI-guided molecular design, and adaptive patient stratification into a single connected workflow.",
  comparison: {
    before: {
      label: "Conventional Target Identification",
      detail: "Fragmented assays · 3–5 year timelines · Siloed data",
    },
    after: {
      label: "HELIX-AI™",
      detail: "Integrated multi-omic signal · 14-month median to IND",
    },
  },
  modules: [
    {
      id: "episcan",
      name: "EpiScan™",
      tagline: "Uncovering Disease Mechanisms",
      description:
        "Multi-omic epigenetic target identification across disease cohorts using ATAC-seq, ChIP-seq, and methylation profiling integrated with patient-derived organoid models.",
    },
    {
      id: "bindforge",
      name: "BindForge™",
      tagline: "Accelerating Discovery",
      description:
        "AI-driven small molecule and biologic design engine trained on 14M+ protein-ligand interactions, 3D structure prediction, and in-silico ADMET filtering.",
    },
    {
      id: "clinpath",
      name: "ClinPath™",
      tagline: "Programmable Therapy",
      description:
        "Adaptive biomarker-driven patient stratification that continuously refines responder predictions using real-world trial data.",
    },
  ] satisfies PlatformModule[],
};

export const PIPELINE_PROGRAMS: PipelineProgram[] = [
  {
    id: "NXG-001",
    target: "EZH2",
    mechanism: "PRC2 inhibitor",
    indication: "r/r AML",
    stage: "Phase II",
    trialId: "NCT05124823",
    btd: true,
  },
  {
    id: "NXG-002",
    target: "BRD4",
    mechanism: "PROTAC degrader",
    indication: "Solid Tumors",
    stage: "Phase I",
    trialId: "NCT05398217",
    btd: false,
  },
  {
    id: "NXG-003",
    target: "DNMT3A",
    mechanism: "Corrector / stabilizer",
    indication: "MDS",
    stage: "IND Filed",
    trialId: null,
    btd: false,
  },
  {
    id: "NXG-004",
    target: "HDAC6",
    mechanism: "Selective inhibitor",
    indication: "Charcot-Marie-Tooth 2",
    stage: "Discovery",
    trialId: null,
    btd: false,
  },
];

export const THERAPEUTIC_PROGRAMS: TherapeuticProgram[] = [
  {
    id: "heme-onc",
    area: "Hematologic Oncology",
    description: "PRC2 Pathway Modulation",
    detail:
      "Treatment-resistant AML, MDS, and lymphoma through targeted inhibition of the Polycomb Repressive Complex. Lead program NXG-001 holds FDA Breakthrough Therapy Designation.",
  },
  {
    id: "rare-disease",
    area: "Epigenetic Rare Disease",
    description: "Chromatin Silencing Correction",
    detail:
      "Rare neuromuscular and metabolic disorders driven by aberrant chromatin silencing — an underserved area with outsized epigenetic signal and strong patient advocacy.",
  },
  {
    id: "solid-tumors",
    area: "Solid Tumor Epigenomics",
    description: "BET Bromodomain Degradation",
    detail:
      "Extending BET bromodomain degradation into solid tumor indications where epigenetic dysregulation drives treatment resistance and limits therapeutic options.",
  },
];

export const STATS: Stat[] = [
  {
    value: "380",
    suffix: "M",
    label: "Capital Raised",
    context: "Series A through C",
  },
  {
    value: "2",
    label: "FDA Designations",
    context: "Breakthrough Therapy (NXG-001)",
  },
  {
    value: "68",
    label: "Publications",
    context: "Nature · Cell · NEJM · Cancer Cell",
  },
  {
    value: "24",
    label: "Clinical Sites",
    context: "US, EU, and APAC",
  },
];

export const CTA = {
  eyebrow: "COLLABORATE",
  headline: "Advancing Epigenetic Medicine Together",
  investors: {
    label: "For Investors",
    body: "We are building a multi-asset epigenetic platform with pipeline depth across two high-value therapeutic areas.",
    cta: "Investor Relations",
  },
  partners: {
    label: "For Partners",
    body: "We collaborate with academic medical centers, biotech, and pharma on target discovery, biomarker development, and co-development arrangements.",
    cta: "Contact Us for Collaborations",
  },
};

export const FOOTER = {
  disclaimer:
    "This website contains forward-looking statements within the meaning of the Private Securities Litigation Reform Act of 1995.",
  copyright: "© 2025 NexaGenesis Biosciences, Inc.",
  columns: [
    {
      heading: "Company",
      links: ["About", "Leadership", "Careers", "News"],
    },
    {
      heading: "Science",
      links: ["Platform", "Publications", "Presentations"],
    },
    {
      heading: "Pipeline",
      links: ["NXG-001", "NXG-002", "NXG-003", "NXG-004"],
    },
    {
      heading: "Investors",
      links: ["IR Overview", "SEC Filings", "Events", "Contact IR"],
    },
  ],
};
