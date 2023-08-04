import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Meta from "@/public/meta.webp";
import Music from "@/public/music.webp";
import EC from "@/public/ec.webp";
import Doc from "@/public/doc.jpg";

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
      "Health care app with all of the feauters, from real time messages and videos, to booking appointments ,prescriptions and more ",
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
  },
  {
    title: "Modern UI/UX",
    description: "A nice little project of modern UI/UX using Next.js",
    tags: ["React", "Next.js", "Sanity.io", "Tailwind", "Framer Motion"],
    imageUrl: Meta,
  },
  {
    title: "Music App",
    description:
      "A personal project build using React.js and RapidAPI Shazam Core API ",
    tags: ["React", "Javascript", "Tailwind", "Redux", "Framer Motion"],
    imageUrl: Music,
  },
  {
    title: "E-commerce App",
    description:
      "A simple public web app for a store and products, menagment and cart .",
    tags: ["React", "Next.js", "Sanity.io", "Sass", "Framer Motion"],
    imageUrl: EC,
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
  "Tailwind",
  "Prisma",
  "MongoDB",
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
