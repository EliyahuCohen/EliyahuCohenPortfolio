import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteConfig.url, lastModified, priority: 1 },
    { url: `${siteConfig.url}/resume`, lastModified, priority: 0.8 },
    { url: `${siteConfig.url}/contact`, lastModified, priority: 0.5 },
  ];
}
