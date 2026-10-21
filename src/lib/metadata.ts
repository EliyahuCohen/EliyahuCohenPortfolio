import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export async function pageMetadata(locale: Locale, path: string, title?: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, getPathname({ locale: l, href: path })]),
  );

  return {
    title: title ?? { absolute: t("title") },
    description: t("description"),
    alternates: {
      canonical: getPathname({ locale, href: path }),
      languages: { ...languages, "x-default": getPathname({ locale: routing.defaultLocale, href: path }) },
    },
    openGraph: {
      title: title ? `${title} | ${t("title")}` : t("title"),
      description: t("description"),
      url: getPathname({ locale, href: path }),
      siteName: siteConfig.name,
      locale: locale === "he" ? "he_IL" : "en_US",
      type: "website",
    },
  };
}
