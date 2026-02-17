export type ProductSpec = {
  property: string;
  value: string;
};

export const sogutProduct = {
  slug: "sogut-socketing-resin",
  name: "SOGUT\u00ae Socketing Resin",
  seoTitle: "SOGUT\u00ae Socketing Resin | HXR Materials",
  seoDescription:
    "Two-component cold-pour socketing resin system for structural wire rope terminations in marine and infrastructure environments.",
  sections: {
    overview: "Overview",
    performance: "Mechanical Performance",
    performanceFootnote:
      "Representative laboratory results verified by a CNAS-accredited testing laboratory under applicable GB/T standards. Additional project-specific validation (including ASTM) can be coordinated upon request.",
    applications: "Applications",
    advantages: "Engineering Advantages",
    installation: "Installation Overview",
    socketConditionImages: "Socket Condition Images",
    finalCuredSocketCondition: "Final Cured Socket Condition",
    storage: "Storage & Handling",
    packaging: "Packaging & Kit Sizes",
    cta: "Need qualification samples or technical documentation?",
    downloads: "Downloads",
  },
  performanceDisclaimer:
    "Performance values are typical laboratory results and are not design guarantees.",
  overview: [
    "Two-component cold-pour socketing resin for structural wire rope terminations in marine and civil infrastructure applications.",
    "Designed for ambient-temperature installation as an alternative to molten alloy socket casting.",
  ],
  specs: [
    {
      property: "Density",
      value: "1.86 g/cm\u00b3",
    },
    {
      property: "Tensile Strength",
      value: "21.6 MPa",
    },
    {
      property: "Tensile Modulus",
      value: "10.702 GPa",
    },
    {
      property: "Flexural Strength",
      value: "60 MPa",
    },
    {
      property: "Flexural Modulus",
      value: "10.017 GPa",
    },
    {
      property: "Compressive Strength",
      value: "128 MPa",
    },
    {
      property: "Steel-Steel Shear Strength (23\u00b0C)",
      value: "16.8 MPa",
    },
  ] satisfies ProductSpec[],
  applications: [
    "Marine mooring systems",
    "Bridge cable anchorage",
    "Structural wire rope terminations",
    "Heavy civil infrastructure",
  ],
  advantages: [
    "Ambient-temperature installation; no molten alloy required.",
    "Two-component formulation with defined mixing ratio.",
    "Formulated for structural load transfer within socket terminations.",
    "Laboratory test reports and technical documentation available upon request.",
  ],
  installation: [
    "Prepare socket and wire rope termination.",
    "Confirm components within recommended temperature range.",
    "Mix Component A and Component B at specified ratio.",
    "Pour mixture into socket cavity ensuring full encapsulation.",
    "Maintain alignment during initial cure period.",
  ],
  finalCuredSocketCondition: {
    imagePath: "/images/sogut/final-cured-socket.jpg",
    alt: "Fully cured socket condition showing encapsulated broomed steel strands within the socket cavity.",
    caption:
      "Fully cured resin encapsulating broomed steel strands within the socket cavity. Representative laboratory and field condition.",
  },
  wireRopePreparation: {
    title: "Wire Rope Preparation",
    imagePath: "/images/sogut/prepare_broom.jpg",
    alt: "Broomed steel wire rope strands prior to resin casting",
    caption: "Broomed wire rope strands prepared prior to cold-pour resin casting.",
  },
  storage: [
    "Store sealed between 10-30\u00b0C in dry conditions.",
    "Protect from moisture and direct sunlight.",
    "Refer to SDS for handling and transport classification.",
  ],
  packaging:
    "Supplied as paired two-component kits. Standard and project-scale packaging configurations available upon request.",
  cta: {
    label: "Request Samples",
    href: "/contact",
  },
  secondaryCta: {
    label: "Request Technical Documentation",
    href: "/contact",
  },
  ctaNotes: [
    "Qualification sample kits available upon request.",
    "Shipping coordinated under applicable dangerous goods regulations.",
  ],
} as const;
