"use client"

import { skillsData } from "@/lib/data"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return

    const skills = gridRef.current.children

    // Stagger reveal on scroll
    gsap.fromTo(
      skills,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: {
          amount: 1,
          from: "random",
        },
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-32 relative">
      <div className="container">
        {/* Large title on the side */}
        <div className="mb-20">
          <h2 className="text-[15vw] md:text-[12vw] font-black leading-none">
            SKILLS
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-2xl">
            Technologies I've mastered building production-grade systems
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative bg-card border-2 border-border hover:border-primary 
                p-4 md:p-6 rounded-none cursor-pointer transition-all duration-300
                ${hoveredIndex === index ? 'scale-110 z-10 shadow-xl' : ''}
                ${index % 7 === 0 ? 'md:col-span-2' : ''}
                ${index % 11 === 0 ? 'md:row-span-2' : ''}
              `}
            >
              <div className={`
                font-mono font-bold text-sm md:text-base
                ${hoveredIndex === index ? 'text-primary' : ''}
                transition-colors duration-300
              `}>
                {skill}
              </div>
            </div>
          ))}
        </div>

        {/* Skill count */}
        <div className="mt-16 text-center">
          <p className="text-6xl md:text-8xl font-black text-primary/20">
            {skillsData.length}+
          </p>
          <p className="text-muted-foreground text-lg">Technologies Mastered</p>
        </div>
      </div>
    </section>
  )
}
