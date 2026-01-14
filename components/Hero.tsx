"use client"

import { useEffect, useState } from "react"
import { resumeData } from "@/lib/data"

export function Hero() {
  const data = resumeData.en
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Listen for custom event
    const handleLoad = () => setIsLoaded(true)
    window.addEventListener('loader-complete', handleLoad)

    // Fallback: If loader fails/skips, force load after 2s
    const timer = setTimeout(() => setIsLoaded(true), 2500)

    return () => {
      window.removeEventListener('loader-complete', handleLoad)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="min-h-screen w-full flex flex-col justify-between p-6 md:p-10 pt-32 pb-10 overflow-hidden relative">
      <div className="flex flex-col z-10 pt-10 md:pt-0">
        <div className="overflow-hidden">
          <h1
            className={`
                        text-[14vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mix-blend-exclusion
                        transform transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
                        ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"}
                    `}
          >
            Creative
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className={`
                        text-[14vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter uppercase text-primary mix-blend-exclusion pl-[2vw] md:pl-[10vw]
                        transform transition-all duration-1000 delay-100 ease-[cubic-bezier(0.25,1,0.5,1)]
                        ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"}
                    `}
          >
            Developer
          </h1>
        </div>
      </div>

      <div className={`
             flex flex-col md:flex-row justify-between items-end gap-8
             transition-all duration-1000 delay-500
             ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}>
        <div className="max-w-md">
          <p className="text-lg md:text-2xl font-medium leading-relaxed text-neutral-400">
            <span className="text-white block mb-2 font-bold">{data.personal.name}</span>
            {data.personal.title}
            <br className="hidden md:block" />
            {data.about}
          </p>
        </div>

        <div className="text-right">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse ml-auto mb-2" />
          <div className="text-xs md:text-sm font-mono text-neutral-500 uppercase">Scroll to Explore</div>
        </div>
      </div>
    </section>
  )
}
