export type DownloadItem = {
  title: string;
  filePath: string;
  description: string;
};

export const downloads: DownloadItem[] = [
  {
    title: "SOGUT® Socketing Resin – Technical Data Sheet",
    filePath: "/downloads/HXR_SOGUT_Technical_Overview.pdf",
    description:
      "Technical data sheet including product description, mechanical performance values, application scope, and handling guidance.",
  },
  {
    title: "SOGUT® Socketing Resin – Safety Data Sheet (Component A)",
    filePath: "/downloads/SOGUT_SDS_Component_A.pdf",
    description:
      "GHS-compliant safety data sheet for the liquid resin component (UN1866, Class 3).",
  },
  {
    title: "SOGUT® Socketing Resin – Safety Data Sheet (Component B)",
    filePath: "/downloads/SOGUT_SDS_Component_B.pdf",
    description:
      "GHS-compliant safety data sheet for the powder component.",
  },
];
