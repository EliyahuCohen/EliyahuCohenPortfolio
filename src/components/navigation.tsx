"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

// Same quiet, centered nav as the landing page; it only gains a soft blur once the page scrolls.
export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/70 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="relative flex h-16 items-center justify-center px-4 sm:h-20">
        <nav>
          <ul className="flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className="text-sm text-muted-foreground duration-500 hover:text-foreground aria-[current=page]:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle className="absolute end-4 sm:end-6" />
      </div>
    </header>
  );
}
