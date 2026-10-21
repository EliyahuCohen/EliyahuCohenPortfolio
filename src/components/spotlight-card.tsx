"use client";

import { motion, useMotionTemplate, useSpring } from "motion/react";
import type { MouseEvent, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export function SpotlightCard({ children, className }: PropsWithChildren<{ className?: string }>) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-zinc-300 duration-700 hover:border-zinc-400 hover:bg-zinc-200/30 dark:border-zinc-600 dark:hover:border-zinc-400/50 dark:hover:bg-zinc-800/10",
        className,
      )}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br via-(--spotlight) opacity-100 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>
      {children}
    </div>
  );
}
