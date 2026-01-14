"use client"

export function SiteFooter() {
    return (
        <footer className="border-t border-border/40 py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Eliyahu Cohen. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
