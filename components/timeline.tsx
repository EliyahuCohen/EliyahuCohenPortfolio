"use client"

import { useLocale } from "next-intl"
import { resumeData } from "@/lib/data"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Timeline() {
    const locale = useLocale()
    const data = resumeData[locale as keyof typeof resumeData]
    const sectionRef = useRef<HTMLElement>(null)
    const experienceRefs = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!sectionRef.current) return

        experienceRefs.current.forEach((exp, index) => {
            if (!exp) return

            // Pin each experience while scrolling through it
            ScrollTrigger.create({
                trigger: exp,
                start: "top top+=100",
                end: "bottom top+=200",
                pin: false,
                onEnter: () => {
                    gsap.to(exp, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out"
                    })
                },
                onLeave: () => {
                    gsap.to(exp, {
                        scale: 0.95,
                        opacity: 0.5,
                        duration: 0.6
                    })
                },
                onEnterBack: () => {
                    gsap.to(exp, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6
                    })
                },
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section id="experience" ref={sectionRef} className="min-h-screen py-32">
            <div className="container">
                <h2 className="text-[15vw] md:text-[12vw] font-black leading-none mb-20">
                    JOURNEY
                </h2>

                <div className="space-y-32 max-w-5xl">
                    {data.experience.map((exp, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) experienceRefs.current[index] = el
                            }}
                            className="relative"
                        >
                            {/* Year - Large */}
                            <div className="text-8xl md:text-9xl font-black text-primary/10 mb-4">
                                {exp.date.split(' - ')[0]}
                            </div>

                            {/* Content */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-black mb-2 leading-tight">
                                        {exp.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-primary font-bold">
                                        {exp.company}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {exp.description.slice(0, 3).map((desc, i) => (
                                        <p key={i} className="text-muted-foreground leading-relaxed">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            {index < data.experience.length - 1 && (
                                <div className="absolute -bottom-16 left-0 w-full h-px bg-border" />
                            )}
                        </div>
                    ))}

                    {/* Education */}
                    {data.education.map((edu, index) => {
                        const totalIndex = data.experience.length + index
                        return (
                            <div
                                key={totalIndex}
                                ref={(el) => {
                                    if (el) experienceRefs.current[totalIndex] = el
                                }}
                                className="relative"
                            >
                                <div className="text-8xl md:text-9xl font-black text-primary/10 mb-4">
                                    {edu.date.split(' - ')[0]}
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-3xl md:text-5xl font-black mb-2 leading-tight">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-xl md:text-2xl text-primary font-bold">
                                            {edu.institution}
                                        </p>
                                    </div>

                                    <div>
                                        {edu.note && (
                                            <p className="text-muted-foreground leading-relaxed">
                                                {edu.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
