import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-tl from-background via-zinc-400/10 to-background">
      <h1 className="font-display text-6xl text-foreground">404</h1>
      <p className="text-muted-foreground">Page not found</p>
      <Link href="/" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
        Back to home
      </Link>
    </main>
  );
}
