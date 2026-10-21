import { Download, MapPin, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use, type ReactNode } from "react";

import { Navigation } from "@/components/navigation";
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

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">{title}</h3>
      <div className="divide-y divide-border/60">{children}</div>
    </section>
  );
}

// Two-column row: a narrow meta column (dates, labels) beside the content.
function Row({ meta, children }: { meta?: ReactNode; children: ReactNode }) {
  return (
    <div className="grid gap-x-8 gap-y-1 py-6 md:grid-cols-[9rem_1fr]">
      <div className="pt-0.5 text-sm text-muted-foreground tabular-nums">{meta}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function TechList({ items }: { items: readonly string[] }) {
  return (
    <p className="text-sm leading-7 text-foreground/75" dir="ltr">
      <span className="rtl:block rtl:text-right">{items.join("  ·  ")}</span>
    </p>
  );
}

export default function ResumePage({ params }: PageProps<"/[locale]/resume">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);
  const t = useTranslations("Resume");
  const tNav = useTranslations("Nav");
  const data = resume[locale as Locale];

  return (
    <div className="relative pb-24">
      <Navigation />
      <main className="mx-auto max-w-3xl space-y-14 px-6 pt-24 md:space-y-20 md:pt-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
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
          <Button asChild variant="outline" className="self-start sm:self-auto">
            <a href={siteConfig.cv} download>
              <Download /> {tNav("cv")}
            </a>
          </Button>
        </div>

        <Separator />

        <section>
          <h3 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">{t("summary")}</h3>
          <p className="leading-8 text-foreground/75">{data.summary}</p>
        </section>

        <Section title={t("experience")}>
          {data.experience.map((role) => (
            <Row key={`${role.company}-${role.period}`} meta={role.period}>
              <h4 className="font-display text-lg text-foreground">{role.title}</h4>
              <p className="text-sm text-muted-foreground">{role.company}</p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-7 text-foreground/75 marker:text-muted-foreground/60">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {role.stack && (
                <div className="mt-4">
                  <TechList items={role.stack} />
                </div>
              )}
            </Row>
          ))}
        </Section>

        <Section title={t("skills")}>
          {data.skills.map((group) => (
            <Row key={group.label} meta={<span className="text-foreground/90">{group.label}</span>}>
              <TechList items={group.items} />
            </Row>
          ))}
        </Section>

        <Section title={t("education")}>
          {data.education.map((item) => (
            <Row key={item.title} meta={item.period}>
              <h4 className="font-display text-lg text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.school}</p>
              {item.note && <p className="mt-2 text-sm text-foreground/75">{item.note}</p>}
            </Row>
          ))}
        </Section>

        <Section title={t("volunteering")}>
          {data.volunteering.map((item) => (
            <Row key={item.title} meta={item.period}>
              <h4 className="font-display text-lg text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.org}</p>
            </Row>
          ))}
        </Section>

        <Section title={t("languages")}>
          <Row>
            <p className="text-sm leading-7 text-foreground/75">{data.languages.join("  ·  ")}</p>
          </Row>
        </Section>
      </main>
    </div>
  );
}
