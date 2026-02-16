export const homeContent = {
  hero: {
    primaryCta: { label: "View product", href: "/products/sogut-socketing-resin" },
    secondaryCta: {
      label: "Download technical overview",
      href: "/downloads/HXR_SOGUT_Technical_Overview.pdf",
    },
  },
  engineeringIntro:
    "Built to support distributor technical review with process control, application context, and documented performance.",
  engineeringBullets: [
    "Supplied in pre-measured two-component kits to support controlled mix ratios and repeatable installation outcomes.",
    "Documented laboratory performance data is available for technical qualification and distributor due diligence.",
    "Specified for structural wire rope terminations across marine and infrastructure service environments.",
    "Simplifies field installation versus molten casting by removing on-site metal melting operations.",
  ],
  technicalDocumentation: {
    title: "Technical Documentation",
    description:
      "Lab performance data and installation guidance are available for distributor engineering and procurement review.",
    secondaryDescription:
      "Use the technical overview for initial qualification, then access the full downloads library as needed.",
    primaryCta: {
      label: "Download technical overview",
      href: "/downloads/HXR_SOGUT_Technical_Overview.pdf",
    },
    secondaryCta: {
      label: "View all downloads",
      href: "/downloads",
    },
  },
} as const;
