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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
  "Framer Motion",
] as const;
