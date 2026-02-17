import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hxrmaterials.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, priority: 1 },
    { url: `${baseUrl}/products/sogut-socketing-resin`, priority: 0.9 },
    { url: `${baseUrl}/downloads`, priority: 0.7 },
    { url: `${baseUrl}/manufacturer`, priority: 0.6 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
  ];
}
