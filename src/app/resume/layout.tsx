import type { ReactNode } from "react";

export default function SubpageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-100 via-zinc-400/10 to-zinc-100 dark:from-zinc-900 dark:to-zinc-900">
      {children}
    </div>
  );
}
