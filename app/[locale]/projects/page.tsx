import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Eliyahu Cohen | Projects | Full-Stack Developer",
  description:
    "Discover the diverse projects by Eliyahu Cohen, showcasing expertise in full-stack development, innovative web applications, and cutting-edge technology solutions. Explore projects utilizing React, Next.js, Typescript, Node.js, MongoDB, and much more.",
  keywords: [
    "Eliyahu Cohen Projects",
    "Full-Stack Developer Projects",
    "Web Development Projects",
    "React Projects",
    "Next.js Projects",
    "Typescript Projects",
    "Node.js Projects",
    "MongoDB Projects",
    "Innovative Technology",
    "Software Engineering Projects",
    "Technology Solutions",
    "Portfolio Projects",
  ],
  authors: [
    {
      name: "Eliyahu Cohen",
      url: "https://eliyahu-cohen-portfolio.vercel.app",
    },
  ],
};

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>
      <ProjectsPage />
    </div>
  );
}
