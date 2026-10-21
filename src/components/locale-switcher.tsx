"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const t = useTranslations("Controls");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const next = locale === "en" ? "he" : "en";

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-muted-foreground hover:text-foreground"
      aria-label={t("language")}
      disabled={isPending}
      onClick={() => startTransition(() => router.replace(pathname, { locale: next }))}
    >
      <Languages />
      <span lang={next}>{t("switchTo")}</span>
    </Button>
  );
}
