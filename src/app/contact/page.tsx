import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Navigation } from "@/components/navigation";
import { SpotlightCard } from "@/components/spotlight-card";
import { Button } from "@/components/ui/button";
import { resume } from "@/content/resume";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", icon: Mail, href: `mailto:${siteConfig.email}`, handle: siteConfig.email, external: false },
  { label: "LinkedIn", icon: LinkedInIcon, href: siteConfig.linkedin, handle: siteConfig.linkedinHandle, external: true },
  { label: "GitHub", icon: GitHubIcon, href: siteConfig.github, handle: siteConfig.githubHandle, external: true },
  { label: "Phone", icon: Phone, href: `tel:${siteConfig.phone}`, handle: siteConfig.phoneDisplay, external: false },
];

export default function ContactPage() {
  return (
    <div className="relative">
      <Navigation />
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-28">
        <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">Get in touch</h1>
        <p className="mt-4 max-w-xl leading-7 text-balance text-muted-foreground">
          Open to senior fullstack and team lead roles. Email is the best way to reach me.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {channels.map(({ label, icon: Icon, href, handle, external }) => (
            <SpotlightCard key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="relative z-20 flex items-center gap-4 p-5 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-foreground/80 duration-500 group-hover:border-foreground/60 group-hover:text-foreground dark:border-zinc-700">
                  <Icon className="size-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">{label}</span>
                  <span className="mt-0.5 block truncate font-medium text-foreground/90 duration-300 group-hover:text-foreground">
                    {handle}
                  </span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {resume.location}
          </span>
          <Button asChild variant="outline" className="self-start sm:self-auto">
            <a href={siteConfig.cv} download>
              <Download /> Download CV
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
