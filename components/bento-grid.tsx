"use client"

import { useLocale } from "next-intl"
import { resumeData, skillsData } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function BentoGrid() {
    const locale = useLocale()
    const data = resumeData[locale as keyof typeof resumeData]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 font-sans relative overflow-hidden">

            {/* Background Gradients */}
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-4 md:gap-6 h-full auto-rows-[minmax(180px,auto)]"
                >

                    {/* 1. HERO TILE - Large Top Left */}
                    <motion.div variants={item} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5 p-8 flex flex-col justify-between hover:border-primary/50 transition-colors">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium text-zinc-400">Available for work</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.9] mb-4">
                                ELIYAHU<br />
                                <span className="text-primary">COHEN</span>
                            </h1>
                            <p className="text-xl text-zinc-400 max-w-sm">
                                Full-Stack Engineer & Team Lead crafting scalable, secure digital experiences.
                            </p>
                        </div>

                        <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
                            <h1 className="text-[10rem] font-black leading-none -mb-8 -mr-8">EC</h1>
                        </div>
                    </motion.div>

                    {/* 2. LOCATION - Small */}
                    <motion.div variants={item} className="md:col-span-1 md:row-span-1 rounded-3xl bg-zinc-900/50 border border-white/5 p-6 flex flex-col justify-between hover:bg-zinc-800 transition-colors group">
                        <div className="flex justify-between items-start">
                            <MapPin className="text-primary w-6 h-6" />
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">Based In</p>
                            <p className="font-bold text-lg">{data.personal.address.split(',')[0]}<br />{data.personal.address.split(',')[1]}</p>
                        </div>
                        {/* Tiny Map BG */}
                        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/35.2137,31.7683,11,0/400x400?access_token=YOUR_TOKEN')] opacity-10 mix-blend-screen pointer-events-none" />
                    </motion.div>

                    {/* 3. EXPERIENCE - Tall Vertical */}
                    <motion.div variants={item} className="md:col-span-1 md:row-span-3 rounded-3xl bg-zinc-900/80 border border-white/5 p-6 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-20 pointer-events-none" />
                        <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">Experience</h3>

                        <div className="space-y-8 relative z-10">
                            {data.experience.map((exp, i) => (
                                <div key={i} className="relative pl-4 border-l-2 border-zinc-800 group-hover:border-primary/30 transition-colors">
                                    <span className="text-xs font-mono text-primary mb-1 block">{exp.date.split('-')[0]}</span>
                                    <h4 className="font-bold text-lg leading-tight mb-1">{exp.title}</h4>
                                    <p className="text-sm text-zinc-400">{exp.company}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. TECH STACK - Wide */}
                    <motion.div variants={item} className="md:col-span-2 md:row-span-1 rounded-3xl bg-primary text-black p-6 flex flex-col justify-center relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="font-black text-2xl mb-2">Technical Arsenal</h3>
                            <p className="font-medium opacity-80">React, Next.js, Node.js, TypeScript, Cyber Security</p>
                        </div>
                        <div className="absolute right-[-20%] top-[-50%] w-64 h-64 border-[20px] border-black/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
                    </motion.div>

                    {/* 5. ABOUT - Medium */}
                    <motion.div variants={item} className="md:col-span-2 md:row-span-2 rounded-3xl bg-zinc-100 text-black p-8 flex flex-col justify-between">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed">
                            "{data.about.split('.')[0]}. {data.about.split('.')[1]}."
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">EC</div>
                            <div>
                                <p className="font-bold">Eliyahu Cohen</p>
                                <p className="text-sm opacity-60">Team Lead</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 6. SKILLS MARQUEE - Wide */}
                    <motion.div variants={item} className="md:col-span-2 md:row-span-1 rounded-3xl bg-zinc-900/50 border border-white/5 p-0 flex items-center overflow-hidden relative group hover:border-primary/50 transition-colors">
                        <div className="flex animate-marquee gap-4 px-4">
                            {[...skillsData, ...skillsData].map((skill, i) => (
                                <div key={i} className="px-4 py-2 rounded-full bg-zinc-800 border border-white/5 text-sm font-medium whitespace-nowrap text-zinc-300">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 7. CONTACT - Bottom Right */}
                    <motion.div variants={item} className="md:col-span-2 md:row-span-1 rounded-3xl bg-zinc-900/50 border border-white/5 p-6 flex items-center justify-between hover:bg-zinc-800 transition-colors cursor-pointer group">
                        <div className="flex flex-col">
                            <span className="text-sm text-zinc-500 font-bold uppercase tracking-wider mb-1">Let's Talk</span>
                            <a href={`mailto:${data.personal.email}`} className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors">
                                {data.personal.email}
                            </a>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                            <ArrowUpRight className="text-black w-6 h-6" />
                        </div>
                    </motion.div>

                    {/* 8. SOCIALS */}
                    <motion.div variants={item} className="md:col-span-1 md:row-span-1 rounded-3xl bg-zinc-900/50 border border-white/5 p-0 grid grid-cols-2">
                        <a href="#" className="flex items-center justify-center border-r border-b border-white/5 hover:bg-zinc-800 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="flex items-center justify-center border-b border-white/5 hover:bg-zinc-800 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </motion.div>

                </motion.div>
            </div>

            <style jsx global>{`
            .animate-marquee {
                animation: marquee 20s linear infinite;
            }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>
        </div>
    )
}
