"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!cursorRef.current || !followerRef.current) return

        const cursor = cursorRef.current
        const follower = followerRef.current

        const handleMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            })

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            })
        }

        const handleMouseEnter = () => {
            gsap.to(cursor, { scale: 0.8, duration: 0.3 })
            gsap.to(follower, { scale: 1.5, duration: 0.3 })
        }

        const handleMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 })
            gsap.to(follower, { scale: 1, duration: 0.3 })
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] hidden md:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    )
}
