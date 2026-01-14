"use client"

import { useLocale } from "next-intl"
import { resumeData } from "@/lib/data"

export function Contact() {
    const locale = useLocale()
    const data = resumeData.en // Forced English

    return (
        <section className="min-h-screen sticky bottom-0 z-0 bg-[#050505] flex items-center justify-center p-6" style={{ zIndex: 0 }}>
            <div className="w-full max-w-7xl flex flex-col items-center text-center">

                <div className="mb-8 md:mb-12 overflow-hidden">
                    <p className="text-neutral-500 uppercase tracking-[0.2em] animate-pulse">
                        Looking for opportunities to build exceptional digital experiences
                    </p>
                </div>

                <div className="text-[12vw] font-black leading-none tracking-tighter mb-4 text-center mix-blend-exclusion">
                    LET'S<br />
                    <span className="text-primary">WORK</span>
                </div>

                <div className="grid md:grid-cols-3 gap-10 md:gap-20 mt-16 md:mt-24 text-left w-full max-w-5xl border-t border-neutral-800 pt-10">
                    <div className="group cursor-pointer">
                        <h4 className="text-neutral-600 mb-2 font-mono text-xs uppercase group-hover:text-white transition-colors">EMAIL</h4>
                        <a href={`mailto:${data.personal.email}`} className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors block break-words">
                            {data.personal.email}
                        </a>
                    </div>
                    <div className="group cursor-pointer">
                        <h4 className="text-neutral-600 mb-2 font-mono text-xs uppercase group-hover:text-white transition-colors">PHONE</h4>
                        <a href={`tel:${data.personal.phone}`} className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                            {data.personal.phone}
                        </a>
                    </div>
                    <div className="group cursor-pointer">
                        <h4 className="text-neutral-600 mb-2 font-mono text-xs uppercase group-hover:text-white transition-colors">LOCATION</h4>
                        <p className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{data.personal.address}</p>
                    </div>
                </div>

                <div className="mt-20 md:mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-700 font-mono text-[10px] md:text-xs uppercase tracking-wider">
                    <span>© {new Date().getFullYear()} {data.personal.name}. All rights reserved.</span>
                </div>
            </div>
        </section>
    )
}
