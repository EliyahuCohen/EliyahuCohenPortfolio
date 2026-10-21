import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "he"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // Always serve English at "/" regardless of browser language.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
