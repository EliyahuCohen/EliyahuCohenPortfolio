import { Download } from "lucide-react";
import Link from "next/link";

import { Particles } from "@/components/particles";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";

const navigation = [
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

// Tells Google this page is the profile for the name, so it is the result
// shown for a name search rather than a subpage or the CV.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Senior Fullstack Engineer",
  email: `mailto:${siteConfig.email}`,
  sameAs: [siteConfig.github, siteConfig.linkedin],
};

export default function Home() {
  return (
    <div className="relative flex h-dvh w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-background via-zinc-400/20 to-background dark:via-zinc-600/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ThemeToggle className="absolute end-4 top-4 z-20 animate-fade-in sm:end-6 sm:top-6" />
      <nav className="relative z-10 my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-muted-foreground duration-500 hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden h-px w-screen animate-fade-left bg-gradient-to-r from-glow-line/0 via-glow-line to-glow-line/0 md:block" />
      <Particles className="pointer-events-none absolute inset-0 animate-fade-in" quantity={100} />
      <h1 className="z-10 cursor-default whitespace-nowrap bg-zinc-900 bg-clip-text px-0.5 py-3.5 font-display text-5xl text-transparent text-edge-outline duration-1000 animate-title sm:text-7xl lg:text-9xl dark:bg-white">
        {siteConfig.name}
      </h1>
      <div className="hidden h-px w-screen animate-fade-right bg-gradient-to-r from-glow-line/0 via-glow-line to-glow-line/0 md:block" />
      <div className="z-10 my-16 flex max-w-xl animate-fade-in flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-sm text-balance text-muted-foreground">
          Senior Fullstack Engineer and Team Lead at the{" "}
          <Link href="/resume" className="underline duration-500 hover:text-foreground">
            Cyber Division of Israel Police
          </Link>
          . I build production systems end to end, from the database to the UI.
        </h2>
        <a
          href={siteConfig.cv}
          download
          className="inline-flex items-center gap-2 text-xs text-muted-foreground duration-500 hover:text-foreground"
        >
          <Download className="size-3.5" />
          Download CV
        </a>
      </div>
    </div>
  );
}
