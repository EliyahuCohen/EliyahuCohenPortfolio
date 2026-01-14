"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export function PageLoader() {
    const [counter, setCounter] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const loaderRef = useRef<HTMLDivElement>(null)
    const counterRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Increment Counter
        const interval = setInterval(() => {
            setCounter(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + Math.floor(Math.random() * 5) + 1
            })
        }, 30)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (counter >= 100) {

            // Animation Sequence when loaded
            const tl = gsap.timeline({
                onComplete: () => {
                    if (loaderRef.current) loaderRef.current.style.display = 'none'
                    setIsComplete(true)
                    window.dispatchEvent(new Event('loader-complete'))
                }
            })

            tl.to(".loader-text", {
                y: -50,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in"
            })
                .to(loaderRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut"
                })
            // Reveal Hero Content?
        }
    }, [counter])

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] bg-[#0f0f0f] text-[#f0f0f0] flex flex-col justify-between p-6 md:p-10 font-mono"
        >
            <div className="flex justify-between items-start loader-text">
                <span>ELIYAHU COHEN</span>
                <span>FOLIO '25</span>
            </div>

            <div className="text-[15vw] md:text-[20vw] font-bold leading-none self-end loader-text">
                {counter}%
            </div>
        </div>
    )
}
