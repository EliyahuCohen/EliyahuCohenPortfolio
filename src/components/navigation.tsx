"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { Controls } from "@/components/controls";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const links = ["resume", "contact"] as const;

export function Navigation() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200",
          isIntersecting ? "border-transparent bg-transparent" : "border-border bg-background/60",
        )}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 p-4 sm:p-6">
          <Link
            href="/"
            aria-label={t("back")}
            className="text-muted-foreground duration-200 hover:text-foreground"
          >
            <ArrowLeft className="size-6 rtl:rotate-180" />
          </Link>
          <div className="flex items-center gap-4 sm:gap-8">
            <nav className="flex items-center gap-4 text-sm sm:gap-8 sm:text-base">
              {links.map((key) => (
                <Link
                  key={key}
                  href={`/${key}`}
                  aria-current={pathname === `/${key}` ? "page" : undefined}
                  className="text-muted-foreground duration-200 hover:text-foreground aria-[current=page]:text-foreground"
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
            <Controls />
          </div>
        </div>
      </div>
    </header>
  );
}
