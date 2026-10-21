import type { Locale } from "@/i18n/routing";

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
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS/SCSS"],
  backend: ["Node.js", "NestJS", "Express", "FastAPI", "REST APIs", "Socket.io", "RabbitMQ", "Microservices"],
  frontend: ["React", "Next.js", "Redux", "Zustand", "Tailwind CSS", "shadcn/ui", "MUI"],
  databases: ["PostgreSQL", "MongoDB", "SQLite", "Firebase"],
  devops: ["GCP", "Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Nginx", "Linux", "Monitoring & Alerting"],
  ai: ["OpenAI GPT", "Anthropic Claude", "Google Gemini", "Conversational AI", "AI Avatars", "Claude Code"],
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
    { label: "Backend", items: skills.backend },
    { label: "Frontend", items: skills.frontend },
    { label: "Databases", items: skills.databases },
    { label: "Cloud & DevOps", items: skills.devops },
    { label: "AI", items: skills.ai },
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

const he: Resume = {
  role: "מהנדס Fullstack בכיר",
  org: "חטיבת הסייבר של משטרת ישראל",
  location: "ירושלים / תל אביב",
  summary:
    "מהנדס Fullstack בכיר עם יותר מ-6 שנות ניסיון בבניית מערכות פרודקשן מקצה לקצה: מתכנון מסדי נתונים ושירותי צד שרת, דרך ממשקי React ו-Next.js ועד תשתיות ענן ו-CI/CD. מתמחה באקוסיסטם של TypeScript (Node.js, NestJS, Express, React, Next.js) עם PostgreSQL, Docker ו-GCP. בניתי מערכות ארציות לשירות הציבור בחטיבת הסייבר של משטרת ישראל, כולל מוצרים מבוססי AI, תוך הובלת צוות של 12 מהנדסים.",
  experience: [
    {
      title: "ראש צוות ומהנדס Fullstack בכיר",
      company: "חטיבת הסייבר, משטרת ישראל",
      period: "2023 – היום",
      highlights: [
        "תכננתי ופיתחתי מערכת תלונות ארצית מבוססת AI שמאפשרת לכל אזרח להגיש תלונה בכל תחנות המשטרה בארץ, עם אווטאר AI חי, יכולות LLM, תשתית GCP ושילוב שירותי ממשל זמין (Gov.il).",
        "תכננתי ובניתי מאפס מערכת חיצונית למיון וסינון מועמדים למשטרת ישראל.",
        "הטמעתי ניטור ב-GCP עם התראות אוטומטיות ותהליכי CI/CD, שמאפשרים העלאת תיקונים לפרודקשן במהירות ובבטחה.",
        "מוביל צוות של 12 מהנדסים תוך כתיבת קוד ב-50–100% מהזמן; אחראי על החלטות ארכיטקטורה ו-Code Review.",
        "חונך מהנדסים בעזרת מדריכי קליטה וחפיפות מסודרות; מתרגם דרישות לאפיון טכני ומנהל בדיקות משתמשים לפני עלייה לפרודקשן.",
      ],
      stack,
    },
    {
      title: "מפתח תוכנה",
      company: "Rami Technologies",
      period: "2021 – 2023",
      highlights: [
        "פיתחתי מיקרו-שירותים בצד השרת לפלטפורמת אגריטק שמזהה מצבי שטח חקלאי כמו עקת יובש ובריאות עצים.",
        "עבדתי בסביבת מיקרו-שירותים בקונטיינרים עם Node.js, TypeScript, Docker ו-Kubernetes.",
        "פיתחתי פיצ'רים לפי אפיון, כולל בדיקות ותיעוד טכני, כחלק מצוות Agile.",
      ],
      stack: ["Node.js", "TypeScript", "Docker", "Kubernetes"],
    },
    {
      title: "מפתח Fullstack (פרילנס)",
      company: "עצמאי",
      period: "2020 – 2021",
      highlights: [
        "תכננתי, בניתי ותחזקתי מערכות Fullstack למגוון לקוחות, בהתאמה לכל עסק ולדרישות המשתנות.",
        "ניהלתי את הקשר עם הלקוח מקצה לקצה: דרישות, מסירה, תיקוני באגים ושדרוגים באוויר.",
      ],
    },
  ],
  skills: [
    { label: "שפות תכנות", items: skills.languages },
    { label: "צד שרת", items: skills.backend },
    { label: "צד לקוח", items: skills.frontend },
    { label: "מסדי נתונים", items: skills.databases },
    { label: "ענן ו-DevOps", items: skills.devops },
    { label: "בינה מלאכותית", items: skills.ai },
  ],
  education: [
    {
      title: "הנדסאי תוכנה",
      school: "המכללה הירושלמית להכשרה מקצועית",
      period: "2019 – 2022",
      note: "תעודת בגרות מלאה",
    },
  ],
  volunteering: [
    {
      title: "חונך בפרויקט פר\"ח",
      org: "מדעי המחשב ואלגוריתמים לתלמידי תיכון",
      period: "2019 – 2020",
    },
  ],
  languages: ["עברית (שפת אם)", "אנגלית (רמה גבוהה)"],
};

export const resume: Record<Locale, Resume> = { en, he };
