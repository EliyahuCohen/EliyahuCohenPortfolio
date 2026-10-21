import type { MetadataRoute } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

const paths = ["/", "/resume", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((href) =>
    routing.locales.map((locale) => ({
      url: siteConfig.url + getPathname({ locale, href }),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, siteConfig.url + getPathname({ locale: l, href })]),
        ),
      },
    })),
  );
}
