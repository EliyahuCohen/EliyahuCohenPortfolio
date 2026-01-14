"use client"

import { useEffect, useRef, useState } from "react"

export function PageLoader() {
    const [isLoading, setIsLoading] = useState(true)
    const loaderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Simple, fast fade out after 1 second
        const timer = setTimeout(() => {
            if (loaderRef.current) {
                loaderRef.current.style.opacity = '0'
            }
            setTimeout(() => setIsLoading(false), 300)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-300"
        >
            <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-black animate-pulse">
                    <span className="text-primary">&lt;</span>
                    EC
                    <span className="text-primary">/&gt;</span>
                </h1>
            </div>
        </div>
    )
}
