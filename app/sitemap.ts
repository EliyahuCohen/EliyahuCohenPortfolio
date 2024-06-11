import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://eliyahu-cohen-portfolio.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://eliyahu-cohen-portfolio.vercel.app/projects",
      lastModified: new Date(),
    },
  ];
}
