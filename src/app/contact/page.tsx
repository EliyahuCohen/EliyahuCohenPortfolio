import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Navigation } from "@/components/navigation";
import { SpotlightCard } from "@/components/spotlight-card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};

const socials = [
  { key: "email", label: "Email", icon: <Mail size={20} />, href: `mailto:${siteConfig.email}`, handle: siteConfig.email },
  { key: "linkedin", label: "LinkedIn", icon: <LinkedInIcon className="size-5" />, href: siteConfig.linkedin, handle: siteConfig.linkedinHandle },
  { key: "github", label: "GitHub", icon: <GitHubIcon className="size-5" />, href: siteConfig.github, handle: siteConfig.githubHandle },
  { key: "phone", label: "Phone", icon: <Phone size={20} />, href: `tel:${siteConfig.phone}`, handle: siteConfig.phoneDisplay },
] as const;

export default function ContactPage() {

  return (
    <div>
      <Navigation />
      <main className="container mx-auto flex min-h-screen items-center justify-center px-4 py-28">
        <h1 className="sr-only">Contact</h1>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {socials.map((s) => (
            <SpotlightCard key={s.key}>
              <a
                href={s.href}
                target={s.key === "linkedin" || s.key === "github" ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-10 md:py-20 lg:pb-32"
              >
                <span
                  className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-400 via-zinc-400/50 to-transparent dark:from-zinc-500 dark:via-zinc-500/50"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-zinc-400 bg-background text-foreground/80 duration-1000 group-hover:border-foreground group-hover:text-foreground dark:border-zinc-500 dark:bg-zinc-900">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span
                    className="text-center font-display text-base break-all text-foreground/90 duration-150 group-hover:text-foreground xl:text-lg"
                  >
                    {s.handle}
                  </span>
                  <span className="mt-4 text-center text-sm text-muted-foreground duration-1000 group-hover:text-foreground/80">
                    {s.label}
                  </span>
                </div>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </main>
    </div>
  );
}
