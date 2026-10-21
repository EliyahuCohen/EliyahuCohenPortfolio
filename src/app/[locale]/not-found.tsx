import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-tl from-background via-zinc-400/10 to-background">
      <h1 className="font-display text-6xl text-foreground">404</h1>
      <p className="text-muted-foreground">{t("title")}</p>
      <Link href="/" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
        {t("back")}
      </Link>
    </main>
  );
}
