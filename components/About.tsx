"use client"

import { useLocale } from "next-intl"
import { resumeData } from "@/lib/data"
import { motion } from "framer-motion"
import { Code2, Rocket, Users } from "lucide-react"

export function About() {
  const locale = useLocale()
  const data = resumeData[locale as keyof typeof resumeData]

  const highlights = [
    {
      icon: Code2,
      title: "3.5+ Years",
      subtitle: "Professional Experience"
    },
    {
      icon: Rocket,
      title: "Team Lead",
      subtitle: "Cyber Division, Israel Police"
    },
    {
      icon: Users,
      title: "Agile Expert",
      subtitle: "High-Security Clearance"
    }
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-border rounded-none p-6 bg-background hover:border-primary transition-all group"
              >
                <item.icon className="h-12 w-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed mb-6">
              {data.about.split('. ').slice(0, 3).join('. ')}.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
