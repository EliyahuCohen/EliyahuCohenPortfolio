"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ModeToggle } from "./mode-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
    const locale = useLocale()
    const pathname = usePathname()
    const otherLocale = locale === 'en' ? 'he' : 'en'
    const [isOpen, setIsOpen] = useState(false)

    const navigation = [
        { name: 'Skills', href: '#skills' },
        { name: 'Journey', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none"
        >
            <div className="container pointer-events-auto">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href={`/${locale}`} className="text-white font-black text-xl">
                        EC
                    </Link>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-white text-sm font-medium hover:opacity-50 transition-opacity"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            href={pathname.replace(`/${locale}`, `/${otherLocale}`)}
                            className="text-white text-sm font-bold uppercase hover:opacity-50 transition-opacity"
                        >
                            {otherLocale}
                        </Link>
                    </nav>
                </div>
            </div>
        </motion.header>
    )
}
