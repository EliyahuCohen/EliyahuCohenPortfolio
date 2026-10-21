"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

const order = ["system", "dark", "light"] as const;
type Mode = (typeof order)[number];

const icons = { system: Monitor, dark: Moon, light: Sun } satisfies Record<Mode, typeof Sun>;
const labels: Record<Mode, string> = { system: "System theme", dark: "Dark theme", light: "Light theme" };

// The stored theme is only known on the client, so render a placeholder until hydrated.
const noopSubscribe = () => () => {};
const useMounted = () => useSyncExternalStore(noopSubscribe, () => true, () => false);

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const current: Mode = mounted && order.includes(theme as Mode) ? (theme as Mode) : "system";
  const next = order[(order.indexOf(current) + 1) % order.length];
  const Icon = icons[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`${labels[current]}. Switch to ${labels[next].toLowerCase()}`}
      title={labels[current]}
      className={cn(
        "relative flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
        className,
      )}
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex"
          >
            <Icon className="size-4" />
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
