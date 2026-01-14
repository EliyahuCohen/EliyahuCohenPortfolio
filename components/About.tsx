"use client"

import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLocale } from "next-intl"
import { resumeData } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const locale = useLocale()
  const data = resumeData[locale as keyof typeof resumeData]
  const containerRef = useRef<HTMLElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation simply by opacity on lines
      // Since we don't have SplitText plugin (paid), we'll do word/line stagger manually or simpler

      gsap.fromTo(paragraphRef.current,
        { autoAlpha: 0.2, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      )

      // Parallax for highlight items
      gsap.utils.toArray(".about-stat").forEach((stat: any, i) => {
        gsap.from(stat, {
          y: 100 * (i + 1),
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
          }
        })
      })

    }, containerRef)
    return () => ctx.revert()
  }, [])

  const stats = [
    { label: "Experience", value: "3.5y" },
    { label: "Role", value: "Lead" },
    { label: "Mode", value: "Agile" },
  ]

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center py-20 bg-background relative z-10">
      <div className="container px-4 md:px-20">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="flex-1">
            <h2 className="text-sm font-mono text-primary mb-10 uppercase tracking-widest">
              / Who I Am
            </h2>
            <p
              ref={paragraphRef}
              className="text-4xl md:text-6xl font-black leading-tight will-change-transform"
            >
              {data.about.split('.')[0]}.<br />
              <span className="text-muted-foreground">
                {data.about.split('.')[1]}.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-10 md:pt-40">
            {stats.map((stat, i) => (
              <div key={i} className="about-stat border-t border-primary/20 pt-4 w-40">
                <div className="text-4xl font-black text-primary">{stat.value}</div>
                <div className="text-sm font-mono text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
