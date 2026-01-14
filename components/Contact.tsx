"use client"

import { useLocale } from "next-intl"
import { resumeData } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Contact() {
  const locale = useLocale()
  const data = resumeData[locale as keyof typeof resumeData]

  return (
    <section id="contact" className="min-h-screen flex items-center py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Big CTA */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[12vw] md:text-[8vw] font-black leading-[0.9] mb-8"
            >
              LET'S
              <br />
              <span className="text-primary">WORK</span>
              <br />
              TOGETHER
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground mb-8 max-w-md"
            >
              Looking for opportunities to build exceptional digital experiences
            </motion.p>

            <motion.a
              href={`mailto:${data.personal.email}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-primary transition-colors group"
            >
              Get in touch
              <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>

          {/* Right - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-1">EMAIL</p>
              <a
                href={`mailto:${data.personal.email}`}
                className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors"
              >
                {data.personal.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-mono text-muted-foreground mb-1">PHONE</p>
              <a
                href={`tel:${data.personal.phone}`}
                className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors"
              >
                {data.personal.phone}
              </a>
            </div>

            <div>
              <p className="text-xs font-mono text-muted-foreground mb-1">LOCATION</p>
              <p className="text-2xl md:text-3xl font-bold">
                {data.personal.address}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
