import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Eliyahu Cohen | Projects | Full-Stack Developer",
  description:
    "Discover the diverse projects by Eliyahu Cohen, showcasing expertise in full-stack development, innovative web applications, and cutting-edge technology solutions.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-24 min-h-screen">
      <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase">All Projects</h1>

      <div className="grid gap-12">
        <div className="p-12 border border-white/10 bg-white/5 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">Portfolio Magic</h2>
          <p className="text-neutral-400 max-w-2xl">
            A high-end, Awwwards-style portfolio built with Next.js, GSAP, and Framer Motion.
            Featuring 3D warp speeds, kinetic typography, and immersive scrolling experiences.
          </p>
        </div>

        <div className="p-12 border border-white/10 bg-white/5 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">Cyber Infrastructure</h2>
          <p className="text-neutral-400 max-w-2xl">
            Architecting secure, scalable microservices for large-scale governmental operations.
            Focused on Kubernetes, Docker, and enterprise-grade security protocols.
          </p>
        </div>
      </div>
    </div>
  );
}
