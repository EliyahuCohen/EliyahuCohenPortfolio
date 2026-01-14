export const resumeData = {
  en: {
    personal: {
      name: "Eliyahu Cohen",
      title: "Team Lead & Fullstack Engineer",
      email: "eliyahutrab@gmail.com",
      phone: "058-5669183",
      address: "Ramat Shlomo, Jerusalem",
    },
    about: "Senior System Architect specializing in secure infrastructure.",
    experience: [
      {
        title: "Team Lead & Fullstack Engineer",
        company: "Israel Police - Cyber Division",
        date: "2023 - Present",
        description: [
          "Managing and leading end-to-end technology projects, from initiation to implementation",
          "Gathering requirements, mapping customer needs, writing specifications",
          "Managing user testing and integration with internal/external stakeholders"
        ],
      },
      {
        title: "Software Developer",
        company: "Rami Technologies",
        date: "2021",
        description: [
          "Implementation of solutions according to specifications",
          "Worked in an Agile team, meeting schedules",
          "Developed in advanced environments using microservices (K8s, Docker, Node.js, Typescript)"
        ],
      },
      {
        title: "Fullstack Freelancer",
        company: "Self Employed",
        date: "2020",
        description: [
          "Developed and maintained Fullstack systems for various clients",
          "Customized unique software solutions including bug fixes and upgrades",
          "Worked independently with clients, maintaining communication"
        ],
      },
      {
        title: "Software Engineering",
        company: "Jerusalem College",
        date: "2019",
        description: [
          "12 years of schooling with full matriculation diploma",
          "Professional Training"
        ],
      }
    ],
    education: [],
  },
  // Hebrew removed as requested
  he: { personal: {}, about: "", experience: [], education: [] }
} as const

// Re-ordered "Impressive" skills first
export const skillsData = [
  "Cyber Security",
  "System Architecture",
  "Kubernetes",
  "Docker",
  "Microservices",
  "Node.js",
  "TypeScript",
  "Next.js",
  "React",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Azure",
  "CI/CD",
  "Team Leadership",
  "Agile/Scrum",
  "TailwindCSS",
  "Python",
  "Linux",
  "Git"
] as const
