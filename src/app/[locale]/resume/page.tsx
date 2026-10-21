import { Download, MapPin, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use, type ReactNode } from "react";

import { Navigation } from "@/components/navigation";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { resume } from "@/content/resume";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[locale]/resume">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "Resume" });
  return pageMetadata(locale as Locale, "/resume", t("title"));
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-6 text-xs font-medium tracking-widest text-muted-foreground uppercase">{children}</h3>
  );
}

export default function ResumePage({ params }: PageProps<"/[locale]/resume">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);
  const t = useTranslations("Resume");
  const tNav = useTranslations("Nav");
  const data = resume[locale as Locale];

  return (
    <div className="relative pb-16">
      <Navigation />
      <main className="mx-auto max-w-5xl space-y-12 px-6 pt-24 md:space-y-16 md:pt-32 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">{t("title")}</h2>
            <p className="mt-2 text-lg text-foreground/80">{data.role}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" /> {data.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4" /> {t("clearance")}
              </span>
            </div>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <a href={siteConfig.cv} download>
              <Download /> {tNav("cv")}
            </a>
          </Button>
        </div>

        <Separator />

        <section>
          <SectionTitle>{t("summary")}</SectionTitle>
          <p className="max-w-3xl leading-8 text-muted-foreground">{data.summary}</p>
        </section>

        <section>
          <SectionTitle>{t("experience")}</SectionTitle>
          <div className="grid gap-6">
            {data.experience.map((role) => (
              <SpotlightCard key={`${role.company}-${role.period}`}>
                <article className="relative z-20 p-5 md:p-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-display text-xl text-foreground lg:text-2xl">{role.title}</h4>
                    <span className="text-xs whitespace-nowrap text-muted-foreground" dir="ltr">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/70">{role.company}</p>
                  <ul className="mt-5 list-disc space-y-2 ps-5 text-sm leading-7 text-muted-foreground marker:text-zinc-400 dark:marker:text-zinc-600">
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {role.stack && (
                    <div className="mt-6 flex flex-wrap gap-2" dir="ltr">
                      {role.stack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </article>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>{t("skills")}</SectionTitle>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.skills.map((group) => (
              <SpotlightCard key={group.label}>
                <div className="relative z-20 p-5">
                  <h4 className="font-display text-foreground">{group.label}</h4>
                  <div className="mt-4 flex flex-wrap gap-2" dir="ltr">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <SpotlightCard>
            <section className="relative z-20 p-5">
              <SectionTitle>{t("education")}</SectionTitle>
              {data.education.map((item) => (
                <div key={item.title}>
                  <h4 className="font-display text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                  <p className="mt-1 text-xs text-muted-foreground" dir="ltr">
                    {item.period}
                  </p>
                  {item.note && <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>}
                </div>
              ))}
            </section>
          </SpotlightCard>
          <SpotlightCard>
            <section className="relative z-20 p-5">
              <SectionTitle>{t("volunteering")}</SectionTitle>
              {data.volunteering.map((item) => (
                <div key={item.title}>
                  <h4 className="font-display text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                  <p className="mt-1 text-xs text-muted-foreground" dir="ltr">
                    {item.period}
                  </p>
                </div>
              ))}
            </section>
          </SpotlightCard>
          <SpotlightCard>
            <section className="relative z-20 p-5">
              <SectionTitle>{t("languages")}</SectionTitle>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {data.languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </section>
          </SpotlightCard>
        </div>
      </main>
    </div>
  );
}
