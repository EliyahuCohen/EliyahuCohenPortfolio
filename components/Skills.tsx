"use client"

import { skillsData } from "@/lib/data"

export default function Skills() {
  // Triple the list to ensure seamless looping without gaps
  const skillsList = [...skillsData, ...skillsData, ...skillsData]

  return (
    <section className="py-32 relative z-10 bg-white text-black overflow-hidden flex flex-col justify-center min-h-[50vh]">

      <div className="container px-6 mb-12 relative z-10">
        <h2 className="text-sm font-mono uppercase tracking-widest border-b border-black/10 pb-4">
          Capabilities
        </h2>
      </div>

      <div className="flex flex-col gap-10 relative z-10 mix-blend-hard-light">

        {/* Row 1 - Left Marquee */}
        <div className="marquee-container overflow-hidden whitespace-nowrap flex">
          <div className="marquee-content animate-marquee flex gap-8">
            {skillsList.map((skill, i) => (
              <span
                key={`r1-${i}`}
                className="text-[6vw] font-black tracking-tighter leading-none opacity-80 hover:text-primary transition-colors cursor-default"
                style={{ willChange: "transform" }}
              >
                {skill.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - Right Marquee (Reverse) */}
        <div className="marquee-container overflow-hidden whitespace-nowrap flex">
          <div className="marquee-content animate-marquee-reverse flex gap-8">
            {skillsList.map((skill, i) => (
              <span
                key={`r2-${i}`}
                className="text-[6vw] font-black tracking-tighter leading-none text-transparent stroke-text-black opacity-60 hover:stroke-primary hover:opacity-100 transition-colors cursor-default"
                style={{ willChange: "transform" }}
              >
                {skill.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="absolute inset-0 bg-[url('/grid-black.svg')] opacity-5 pointer-events-none" />

      <style jsx global>{`
        .stroke-text-black {
            -webkit-text-stroke: 2px black;
        }

        .animate-marquee {
            animation: marquee 60s linear infinite;
        }
        
        .animate-marquee-reverse {
            animation: marquee 60s linear infinite reverse;
        }

        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
        }

        /* Hover Pause/Slow Effect */
        .marquee-container:hover .marquee-content {
             animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
