
"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
    const t = useTranslations("Nav")
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const switchLocale = (newLocale: string) => {
        // pathname includes the locale, e.g. /en/about
        // we need to replace the first segment
        const segments = pathname.split('/')
        segments[1] = newLocale
        const newPath = segments.join('/')
        router.push(newPath)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{t('switchLocale')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLocale("en")}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLocale("he")}>
                    עברית
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
