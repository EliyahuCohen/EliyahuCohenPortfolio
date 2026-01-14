"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function WarpSpeed() {
    const containerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const count = 40
            const container = containerRef.current
            if (!container) return

            // Create stars
            for (let i = 0; i < count; i++) {
                const star = document.createElement("div")
                // Use var(--primary) so it cycles with the global animation!
                star.className = "absolute w-0.5 h-20 bg-[hsl(var(--primary))] opacity-60"

                gsap.set(star, {
                    x: gsap.utils.random(0, window.innerWidth),
                    y: gsap.utils.random(0, window.innerHeight),
                    z: gsap.utils.random(-2000, 0),
                    scale: gsap.utils.random(0.5, 1)
                })

                container.appendChild(star)

                gsap.to(star, {
                    z: 500,
                    duration: gsap.utils.random(3, 6), // Slower, more majestic
                    repeat: -1,
                    ease: "none",
                    modifiers: {
                        z: (z) => {
                            let val = parseFloat(z)
                            if (val > 500) val = -2000
                            return `${val}px`
                        }
                    }
                })
            }

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 perspective-container overflow-hidden bg-black/80 blur-[0.5px]">
            <style jsx>{`
                .perspective-container {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
             `}</style>
        </div>
    )
}
