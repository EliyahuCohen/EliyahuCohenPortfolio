"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { resumeData } from "@/lib/data"
import { useRef } from "react"

export function Hero() {
    const locale = useLocale()
    const data = resumeData[locale as keyof typeof resumeData]
    const containerRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Large Background Text */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <h1 className="text-[20vw] font-black text-primary/5 leading-none select-none">
                    CODE
                </h1>
            </motion.div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-6xl"
                >
                    {/* Role */}
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-primary font-mono text-sm md:text-base mb-4"
                    >
                        {data.personal.title}
                    </motion.p>

                    {/* Name - Massive */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8"
                    >
                        {data.personal.name.split(' ')[0]}<br />
                        <span className="text-primary">{data.personal.name.split(' ')[1]}</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12"
                    >
                        Building scalable systems in high-security environments.
                        Leading teams, architecting solutions, delivering results.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-black font-bold px-12 h-14 text-lg rounded-none group"
                            asChild
                        >
                            <Link href="#skills">
                                Explore My Work
                                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
