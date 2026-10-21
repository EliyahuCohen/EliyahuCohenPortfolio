import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Controls({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <ThemeToggle />
    </div>
  );
}
