import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Meta from "@/public/meta.webp";
import Music from "@/public/music.webp";
import EC from "@/public/ec.webp";
import Doc from "@/public/doc.jpg";
import Word from "@/public/wordle.png";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

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
    title: "Fullstack Developer Team Lead",
    location: "Israel, Jerusalem",
    description:
      "I have served as a developer of advanced technological systems for the entire Israeli Police organization, working in a diverse team on multiple projects simultaneously. I have held the position of Team Lead on various projects and assisted in training team members in designing Fullstack development standards.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Israel, Jerusalem",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(HiOutlineComputerDesktop),
    date: "2022 - present",
  },
  {
    title: "Fullstack Developer at Rami Technologies",
    location: "Israel, Jerusalem",
    description:
      "Developed robust applications as a full-stack developer, utilizing React and Node.js. Focused on efficient front-end and back-end solutions, adhering to best practices and modern technologies to enhance user experience.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Graduated Software Engineering",
    location: "Israel, Jerusalem",
    description: `
      I have successfully completed a comprehensive 3.5 years software engineering program, gaining valuable knowledge and skills.

      Now equipped with a strong foundation in software engineering, I'm eager to embark on a fulfilling journey in Fullstack development, contributing to innovative projects and making a positive impact in the tech world.`,
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "HealthCare App",
    description:
      "Health care app with all of the features, from real time messages and video calls, to booking appointments, prescriptions ,Admin mode and more",
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
      "A personal project build using React.js and RapidAPI Shazam Core API",
    tags: ["React", "Javascript", "Tailwind", "Redux", "Framer Motion"],
    imageUrl: Music,
    github: "https://github.com/EliyahuCohen/-Lyriks-Music-App",
    liveDemo: "https://eliyahu-music-app.netlify.app/",
  },
  {
    title: "E-commerce App",
    description:
      "A simple public web app for a store and products, management and cart.",
    tags: ["React", "Next.js", "Sanity.io", "Sass", "Framer Motion"],
    imageUrl: EC,
    github: "https://github.com/EliyahuCohen/E-commerce",
    liveDemo: "",
  },
  {
    title: "Wordle Game",
    description:
      "A nice public (cloned) web app for the popular game Wordle.",
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
  { name: "HTML", color: "hover:text-custom-html" },
  { name: "CSS", color: "hover:text-custom-css" },
  { name: "JavaScript", color: "hover:text-custom-javascript" },
  { name: "TypeScript", color: "hover:text-custom-typescript" },
  { name: "React", color: "hover:text-custom-react" },
  { name: "Next.js", color: "hover:text-custom-nextjs" },
  { name: "Node.js", color: "hover:text-custom-nodejs" },
  { name: "Git", color: "hover:text-custom-git" },
  { name: "GitHub", color: "hover:text-custom-github" },
  { name: "Tailwind", color: "hover:text-custom-tailwind" },
  { name: "Prisma", color: "hover:text-custom-prisma" },
  { name: "MongoDB", color: "hover:text-custom-mongodb" },
  { name: "Docker", color: "hover:text-custom-docker" },
  { name: "GitLab", color: "hover:text-custom-gitlab" },
  { name: "Redux", color: "hover:text-custom-redux" },
  { name: "shadcn/ui", color: "hover:text-custom-black" },
  { name: "Sass", color: "hover:text-custom-sass" },
  { name: "Sanity.io", color: "hover:text-custom-sanityio" },
  { name: "Express", color: "hover:text-custom-express" },
  { name: "Firebase", color: "hover:text-custom-firebase" },
  { name: "Socket.io", color: "hover:text-custom-socketio" },
  { name: "Python", color: "hover:text-custom-python" },
  { name: "FastAPI", color: "hover:text-custom-fastapi" },
  { name: "SQLite", color: "hover:text-custom-sqlite" },
  { name: "webRTC", color: "hover:text-custom-webrtc" },
  { name: "Angular", color: "hover:text-custom-angular" },
  { name: "Bootstrap", color: "hover:text-custom-bootstrap" },
  { name: "MaterialUi", color: "hover:text-custom-materialui" },
  { name: "C#", color: "hover:text-custom-csharp" },
  { name: ".NET", color: "hover:text-custom-dotnet" },
  { name: "Framer Motion", color: "hover:text-custom-framermotion" },
 
] as const;

export const resumeData = {
  contact: {
    phone: "058-5669183",
    email: "eliyahutrab@gmail.com",
    portfolio: "https://eliyahu-cohen-portfolio.vercel.app",
    address: "Ramat Shlomo, Jerusalem",
  },
  education: [
    {
      degree: "Software Engineering",
      institution: "H'amichlala Lhachshara Miktzoit",
      location: "Israel, Jerusalem",
      date: "2020 - 2023",
    },
  ],
  languages: ["English", "Hebrew"],
  workExperience: [
    {
      title: "Fullstack Developer Team Lead",
      company: "Police Cyber Unit",
      location: "Israel, Jerusalem",
      date: "2023 - present",
      description:
        "I have served as a developer of advanced technological systems for the entire Israeli Police organization, working in a diverse team on multiple projects simultaneously. I have held the position of Team Lead on various projects and assisted in training team members in designing Fullstack development standards.",
    },
    {
      title: "Fullstack Developer",
      company: "Rami Technologies",
      location: "Israel, Jerusalem",
      date: "2021 - 2023",
      description:
        "Developed robust applications as a full-stack developer, utilizing React and Node.js. Focused on efficient front-end and back-end solutions, adhering to best practices and modern technologies to enhance user experience.",
    },
    {
      title: "Freelance Web Developer",
      location: "Israel, Jerusalem",
      date: "2021 - present",
      description:
        "Crafting visually appealing websites with flawless functionality, integrating captivating design with strong backend and frontend development.",
    },
  ],
  skills: skillsData,
  profile:
    "Experienced software engineer with expertise in Front-end and Full-stack development. Dedicated to continuous improvement and passionate about delivering efficient solutions. Seeking opportunities to contribute skills and enhance team success.",
};
