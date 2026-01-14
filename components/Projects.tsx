"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    key: "ecommerce",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
    tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
    links: { demo: "#", github: "#" }
  },
  {
    key: "dashboard",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    tags: ["React", "Recharts", "Node.js", "MongoDB"],
    links: { demo: "#", github: "#" }
  },
  {
    key: "portfolio",
    title: "Portfolio Website",
    description: "Modern portfolio with i18n support, dark mode, and advanced animations.",
    tags: ["Next.js 15", "Next-Intl", "GSAP", "Framer Motion"],
    links: { demo: "#", github: "#" }
  }
]

export function Projects() {
  const t = useTranslations('Nav')
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      // Scroll animation
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          rotationX: -45,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Magnetic hover effect
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(card, {
          x: x * 0.1,
          y: y * 0.1,
          rotationY: x * 0.05,
          rotationX: -y * 0.05,
          duration: 0.5,
          ease: "power2.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          ease: "power2.out"
        })
      }

      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of my recent work showcasing expertise in full-stack development.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <div
              key={project.key}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 rounded-none bg-card">
                {/* Project Number */}
                <div className="aspect-video w-full bg-muted/50 flex items-center justify-center border-b-2 border-border relative overflow-hidden">
                  <span className="text-6xl font-black text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                    {"<"}{index + 1}{"/>"}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="rounded-none font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1 rounded-none bg-primary hover:bg-primary/90 text-black font-bold" asChild>
                      <Link href={project.links.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 rounded-none border-2 hover:bg-foreground hover:text-background font-bold" asChild>
                      <Link href={project.links.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
