import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/resume", "/contact"].map((path) => ({ url: siteConfig.url + path }));
}
