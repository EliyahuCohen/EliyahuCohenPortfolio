"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null)
    const blobsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!containerRef.current) return

        // Animate each blob
        blobsRef.current.forEach((blob, index) => {
            if (!blob) return

            const tl = gsap.timeline({ repeat: -1, yoyo: true })

            tl.to(blob, {
                x: gsap.utils.random(-100, 100),
                y: gsap.utils.random(-100, 100),
                scale: gsap.utils.random(0.8, 1.2),
                duration: gsap.utils.random(4, 8),
                ease: "sine.inOut",
            })
        })
    }, [])

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Blob 1 - Top Left */}
            <div
                ref={(el) => { if (el) blobsRef.current[0] = el }}
                className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"
                style={{ animationDuration: '4s' }}
            />

            {/* Blob 2 - Top Right */}
            <div
                ref={(el) => { if (el) blobsRef.current[1] = el }}
                className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[100px] animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '1s' }}
            />

            {/* Blob 3 - Bottom Left */}
            <div
                ref={(el) => { if (el) blobsRef.current[2] = el }}
                className="absolute -bottom-40 -left-20 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[110px] animate-pulse"
                style={{ animationDuration: '5s', animationDelay: '2s' }}
            />

            {/* Blob 4 - Bottom Right */}
            <div
                ref={(el) => { if (el) blobsRef.current[3] = el }}
                className="absolute -bottom-20 -right-40 w-96 h-96 bg-lime-500/10 rounded-full blur-[100px] animate-pulse"
                style={{ animationDuration: '7s', animationDelay: '0.5s' }}
            />

            {/* Center Halo */}
            <div
                ref={(el) => { if (el) blobsRef.current[4] = el }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
            />
        </div>
    )
}
