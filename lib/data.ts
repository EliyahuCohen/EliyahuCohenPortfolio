import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Meta from "@/public/meta.webp";
import Music from "@/public/music.webp";
import EC from "@/public/ec.webp";
import Doc from "@/public/doc.jpg";
import Word from "@/public/wordle.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Software Engineering",
    location: "Israel, Jerusalem",
    description: `
     
     I have successfully completed a comprehensive 3.5 years software engineering program, gaining valuable knowledge and skills.

  Now equipped with a strong foundation in software engineering, I'm eager to embark on a fulfilling journey in Fullstack development, contributing to innovative projects and making a positive impact in the tech world.`,
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Israel, Jerusalem",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HealthCare App",
    description:
      "Health care app with all of the features, from real time messages and video calls, to booking appointments, prescriptions ,Admin mode and more ",
    tags: [
      "React",
      "Typescript",
      "MongoDB",
      "Sass",
      "Framer Motion",
      "Express",
      "Node.js",
      "Socket.io",
      "Redux",
      "webRTC",
      "Nodemailer",
    ],
    imageUrl: Doc,
    github: "https://github.com/EliyahuCohen/Doctor-Patient",
    liveDemo: "https://doctor-patinet.netlify.app",
  },
  {
    title: "Modern UI/UX",
    description: "A nice little project of modern UI/UX using Next.js",
    tags: ["React", "Next.js", "Sanity.io", "Tailwind", "Framer Motion"],
    imageUrl: Meta,
    github: "https://github.com/EliyahuCohen/METAVERCE-project-UI-UX",
    liveDemo: "https://metaverce-project-ui-ux.vercel.app/",
  },
  {
    title: "Music App",
    description:
      "A personal project build using React.js and RapidAPI Shazam Core API ",
    tags: ["React", "Javascript", "Tailwind", "Redux", "Framer Motion"],
    imageUrl: Music,
    github: "https://github.com/EliyahuCohen/-Lyriks-Music-App",
    liveDemo: "https://eliyahu-music-app.netlify.app/",
  },
  {
    title: "E-commerce App",
    description:
      "A simple public web app for a store and products, management and cart .",
    tags: ["React", "Next.js", "Sanity.io", "Sass", "Framer Motion"],
    imageUrl: EC,
    github: "https://github.com/EliyahuCohen/E-commerce",
    liveDemo: "",
  },
  {
    title: "Wordle Game",
    description:
      "A nice public (cloned) web app  for the popular game Wordle  .",
    tags: [
      "React",
      "Javascript",
      "Custom Hooks",
      "Context",
      "CSS",
      "Framer Motion",
    ],
    imageUrl: Word,
    github: "https://github.com/EliyahuCohen/Wordle-Game",
    liveDemo: "https://eliyahu-wordle-game.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Docker",
  "GitLan",
  "Redux",
  "Sass",
  "Sanity.io",
  "Express",
  "Firebase",
  "Socket.io",
  "webRTC",
  "Angular",
  "Bootstrap",
  "MaterialUi",
  "C#",
  ".NET",
  "Framer Motion",
] as const;
