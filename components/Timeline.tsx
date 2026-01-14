"use client"

import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { resumeData } from "@/lib/data"

export function Timeline() {
    const data = resumeData.en // Forced English
    const containerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const rows = document.querySelectorAll(".job-row")
            rows.forEach((row) => {
                row.addEventListener("mouseenter", () => {
                    gsap.to(row, { backgroundColor: "rgba(255,255,255,0.05)", duration: 0.3 })
                    gsap.to(row.querySelector(".job-desc"), { height: "auto", opacity: 1, duration: 0.4 })
                })
                row.addEventListener("mouseleave", () => {
                    gsap.to(row, { backgroundColor: "transparent", duration: 0.3 })
                    gsap.to(row.querySelector(".job-desc"), { height: 0, opacity: 0, duration: 0.3 })
                })
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-24 container px-6">
            <h2 className="text-sm font-mono uppercase tracking-widest border-b border-white/10 pb-4 mb-10 text-neutral-500">
                JOURNEY
            </h2>

            <div className="flex flex-col border-t border-white/10">
                {data.experience.map((exp, i) => (
                    <div
                        key={i}
                        className="job-row group flex flex-col py-12 px-0 hover:px-6 md:hover:px-10 border-b border-white/10 cursor-pointer transition-all duration-500 relative"
                    >
                        <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4">
                            <div className="md:w-1/4 mb-2 md:mb-0">
                                <span className="font-mono text-primary text-xl font-bold">{exp.date}</span>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 pl-0 md:pl-0 transition-all duration-300">
                                    {exp.title}
                                </h3>
                                <p className="text-xl text-neutral-400 mb-2">{exp.company}</p>
                            </div>
                        </div>

                        <div
                            className="job-desc h-0 opacity-0 overflow-hidden md:pl-[25%] max-w-4xl transition-all duration-500"
                        >
                            <ul className="pt-10 pb-4 space-y-3 text-neutral-400/80">
                                {exp.description.map((desc, d) => (
                                    <li key={d} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0 group-hover:bg-primary transition-colors" />
                                        <span className="leading-relaxed text-sm md:text-base">{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
