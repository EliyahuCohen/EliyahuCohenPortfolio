export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://eliyahu-cohen-portfolio.vercel.app",
  name: "Eliyahu Cohen",
  description:
    "Senior Fullstack Engineer and Team Lead. TypeScript, Node.js, React, Next.js, PostgreSQL, Docker and GCP.",
  email: "eliyahutrab@gmail.com",
  phone: "+972-58-566-9183",
  phoneDisplay: "058-5669183",
  github: "https://github.com/EliyahuCohen",
  githubHandle: "EliyahuCohen",
  linkedin: "https://www.linkedin.com/in/eliyahu-cohen-b3499716a/",
  linkedinHandle: "eliyahu-cohen",
  cv: "/Eliyahu-Cohen-CV.pdf",
} as const;
