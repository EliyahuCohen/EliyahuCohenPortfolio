export type Role = {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  stack?: string[];
};

export type SkillGroup = { label: string; items: string[] };

export type Resume = {
  role: string;
  org: string;
  location: string;
  summary: string;
  experience: Role[];
  skills: SkillGroup[];
  education: { title: string; school: string; period: string; note?: string }[];
  volunteering: { title: string; org: string; period: string }[];
  languages: string[];
};

const stack = ["Node.js", "NestJS", "Express", "TypeScript", "React", "Next.js", "PostgreSQL", "Python", "Docker", "GCP"];

const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  architecture: [
    "System Design",
    "Distributed Systems",
    "Microservices",
    "Event-Driven Architecture",
    "Domain-Driven Design",
    "CQRS / Event Sourcing",
    "High Availability",
    "Zero-Downtime Deploys",
  ],
  backend: ["Node.js", "NestJS", "Express", "FastAPI", "REST APIs", "gRPC", "Socket.io", "RabbitMQ", "Kafka"],
  frontend: ["React", "Next.js", "Redux", "Zustand", "Tailwind CSS", "shadcn/ui", "MUI"],
  data: ["PostgreSQL", "MongoDB", "Redis", "Query Optimization", "Replication & Partitioning"],
  devops: [
    "GCP (Cloud Run, Pub/Sub, BigQuery)",
    "AWS",
    "Vercel",
    "Docker",
    "Kubernetes",
    "Helm",
    "Terraform",
    "GitHub Actions",
    "GitLab CI",
    "Nginx",
    "Linux",
  ],
  observability: ["OpenTelemetry", "Prometheus", "Grafana", "Sentry", "Alerting"],
  ai: [
    "OpenAI GPT",
    "Anthropic Claude",
    "Google Gemini",
    "Vertex AI",
    "AI Agents & Tool Calling",
    "RAG",
    "Embeddings",
    "LangChain",
    "MCP",
    "LLM Evaluation & Guardrails",
    "Prompt Engineering",
    "Real-Time Voice AI (WebRTC)",
    "AI Avatars",
    "Claude Code",
    "Cursor",
  ],
  security: ["OWASP / Secure SDLC", "OAuth 2.0 / OIDC / SSO", "Gov.il Identity Integration", "PII & Data Privacy"],
  leadership: ["Team Leadership", "Hiring & Technical Interviews", "Engineering Roadmaps", "Code Review", "Mentoring"],
};

const en: Resume = {
  role: "Senior Fullstack Engineer",
  org: "Cyber Division of Israel Police",
  location: "Jerusalem / Tel Aviv, Israel",
  summary:
    "Senior fullstack engineer with 6+ years of experience building production systems end to end, from database design and backend services to React/Next.js frontends, cloud infrastructure and CI/CD. I specialize in the TypeScript ecosystem (Node.js, NestJS, Express, React, Next.js) with PostgreSQL, Docker and GCP. I built nationwide, citizen-facing systems in the Cyber Division of Israel Police, including AI-powered products, while leading a 12-person team.",
  experience: [
    {
      title: "Team Lead & Senior Fullstack Engineer",
      company: "Cyber Division, Israel Police",
      period: "2023 – present",
      highlights: [
        "Architected and built an AI-powered national complaint system that lets any citizen file a police complaint at stations nationwide, with a live AI avatar, LLM capabilities, GCP infrastructure and Gov.il integration.",
        "Designed and built from scratch an external platform for screening and vetting candidates applying to Israel Police.",
        "Implemented GCP monitoring with automated alerting and CI/CD pipelines for fast, safe production fixes.",
        "Lead a team of 12 engineers while coding 50–100% of the time; own architecture decisions and code reviews.",
        "Mentor engineers with onboarding guides and structured handovers; translate requirements into technical specs and run user testing before production.",
      ],
      stack,
    },
    {
      title: "Software Developer",
      company: "Rami Technologies",
      period: "2021 – 2023",
      highlights: [
        "Built backend microservices for an agri-tech platform that detects field conditions such as drought stress and tree health.",
        "Worked in a containerized microservices environment with Node.js, TypeScript, Docker and Kubernetes.",
        "Delivered features to spec, including testing and technical documentation, as part of an Agile team.",
      ],
      stack: ["Node.js", "TypeScript", "Docker", "Kubernetes"],
    },
    {
      title: "Fullstack Developer (Freelance)",
      company: "Independent",
      period: "2020 – 2021",
      highlights: [
        "Designed, built and maintained fullstack web systems for multiple clients, tailored to each business.",
        "Owned the full client relationship: requirements, delivery, bug fixes and live upgrades.",
      ],
    },
  ],
  skills: [
    { label: "Languages", items: skills.languages },
    { label: "Architecture", items: skills.architecture },
    { label: "Backend", items: skills.backend },
    { label: "Frontend", items: skills.frontend },
    { label: "Data", items: skills.data },
    { label: "Cloud & DevOps", items: skills.devops },
    { label: "Observability", items: skills.observability },
    { label: "AI", items: skills.ai },
    { label: "Security", items: skills.security },
    { label: "Leadership", items: skills.leadership },
  ],
  education: [
    {
      title: "Software Engineering",
      school: "Jerusalem College of Professional Training",
      period: "2019 – 2022",
      note: "Full matriculation diploma",
    },
  ],
  volunteering: [
    {
      title: "Mentor, Perach Project",
      org: "Computer science & algorithms for high-school students",
      period: "2019 – 2020",
    },
  ],
  languages: ["Hebrew (native)", "English (high proficiency)"],
};

export const resume = en;
