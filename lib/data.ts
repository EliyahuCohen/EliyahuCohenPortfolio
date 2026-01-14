
export const links = [
  {
    name: "Home",
    hash: "#",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS/SCSS",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Redux",
  "Zustand",
  "Socket.io",
  "FastAPI",
  "RabbitMQ",
  "Microservices",
  "Tailwind CSS",
  "shadcn/ui",
  "MUI",
  "SQL",
  "MongoDB",
  "SQLite",
  "PostgreSQL",
  "Firebase",
  "Git",
  "GitHub",
  "GitLab",
  "GitHub Actions",
  "Docker",
  "Nginx",
  "SSH",
  "JIRA",
  "GCP",
  "Slack",
  "Framer Motion",
] as const;

export const resumeData = {
  en: {
    personal: {
      name: "Eliyahu Cohen",
      title: "Team Lead & Fullstack Engineer",
      phone: "058-5669183",
      email: "eliyahutrab@gmail.com",
      address: "Ramat Shlomo, Jerusalem",
      id: "212128102",
    },
    about: "As a software engineering enthusiast, I am on a constant journey of learning and growth. My fascination with Fullstack development has led me to master a core tech stack including React, Next.js, Node.js, and MongoDB. The problem-solving aspect of programming drives my passion, and I find great joy in unraveling complex challenges. Whether it's building dynamic user interfaces or crafting efficient backend systems, I am dedicated to delivering impactful solutions. When I'm not coding, I enjoy playing video games, watching movies, and playing the guitar.",
    experience: [
      {
        title: "Team Lead & Fullstack Engineer",
        company: "Israel Police - Cyber Division",
        date: "2023 - Present",
        description: [
          "Managing and leading end-to-end technology projects, from initiation to implementation",
          "Gathering requirements, mapping customer needs, writing specifications",
          "Managing user testing and integration with internal/external stakeholders",
          "Managing employees – task delegation, schedule monitoring",
          "Building timelines and risk management",
          "Working in Agile methodology with high-level security clearance"
        ]
      },
      {
        title: "Software Developer",
        company: "Rami Technologies",
        date: "2021 - 2023",
        description: [
          "Implementation of solutions according to specifications",
          "Worked in an Agile team, meeting schedules",
          "Developed in advanced environments using microservices (K8s, Docker, Node.js, Typescript)"
        ]
      },
      {
        title: "Fullstack Freelancer",
        company: "Self Employed",
        date: "2020 - 2021",
        description: [
          "Developed and maintained Fullstack systems for various clients",
          "Customized unique software solutions including bug fixes and upgrades",
          "Worked independently with clients, maintaining communication"
        ]
      }
    ],
    education: [
      {
        degree: "Software Engineering",
        institution: "Jerusalem College of Professional Training",
        date: "2019 - 2022",
        note: "12 years of schooling with full matriculation diploma"
      }
    ],
    skills: {
      languages: ["Hebrew (Native)", "English (High proficiency)"],
      programming: ["Python", "Javascript", "Typescript", "HTML", "CSS/SCSS"],
      databases: ["SQL", "MongoDB", "SQLite", "PostgreSQL", "Firebase"],
      tools: ["Node.js", "Express", "React", "Next.js", "Redux", "Zustand", "Socket.io", "FastAPI", "RabbitMQ", "Microservices", "Tailwind CSS", "ShadcnUI", "MUI", "Git", "Docker", "Nginx", "JIRA", "GCP"]
    },
    volunteering: [
      {
        role: "Perach Project",
        description: "Mentoring and guiding high school students in computer science and algorithms",
        date: "2019 - 2020"
      }
    ]
  },
  he: {
    personal: {
      name: "אליהו כהן",
      title: "ראש צוות פיתוח",
      phone: "058-5669183",
      email: "eliyahutrab@gmail.com",
      address: "רמת שלמה, ירושלים",
      id: "212128102",
    },
    about: "כחובב הנדסת תוכנה, אני במסע מתמיד של למידה וצמיחה. הקסם שלי מפיתוח Fullstack הוביל אותי לשלוט בסטק טכנולוגי מרכזי הכולל React, Next.js, Node.js ו-MongoDB. היבט פתרון הבעיות של תכנות מניע את התשוקה שלי, ואני מוצא שמחה רבה בפתרון אתגרים מורכבים. בין אם מדובר בבניית ממשקי משתמש דינמיים או יצירת מערכות backend יעילות, אני מחויב למסירת פתרונות משמעותיים. כשאני לא מתכנת, אני נהנה לשחק משחקי וידאו, לצפות בסרטים ולנגן בגיטרה.",
    experience: [
      {
        title: "ראש צוות פיתוח",
        company: "חטיבת הסייבר משטרת ישראל",
        date: "2023 - היום",
        description: [
          "ניהול והובלת פרויקטים טכנולוגיים מקצה לקצה, החל משלב הייזום ועד הטמעה",
          "איסוף וכתיבת דרישות, מיפוי צורכי לקוח, אפיון עסקי וטכני",
          "ניהול בדיקות משתמשים ואינטגרציה מול ממשקים בארגון ומחוצה לו",
          "ניהול עובדים – חלוקת משימות, מעקב לו\"ז, ישיבות סטטוס",
          "בניית לו\"ז וניהול סיכונים",
          "עבודה בשיטת Agile עם סיווג בטחוני גבוה"
        ]
      },
      {
        title: "מפתח תוכנה",
        company: "רמי טכנולוגיות",
        date: "2021 - 2023",
        description: [
          "יישום פתרונות בהתאם לאפיון, פיתוח, בדיקות ותיעוד טכני",
          "עבודה בצוות Agile, עמידה ביעדי לו\"ז",
          "פיתוח בסביבות מיקרוסרוויסים (Docker, K8s, Node.js, TypeScript)"
        ]
      },
      {
        title: "Fullstack Freelancer",
        company: "עצמאי",
        date: "2020 - 2021",
        description: [
          "פיתוח ותחזוקת מערכות Fullstack עבור לקוחות שונים",
          "התאמת פתרונות ייחודיים, תיקוני תקלות ושדרוגים",
          "עבודה עצמאית מול לקוחות והבנת צרכים עסקיים"
        ]
      }
    ],
    education: [
      {
        degree: "הנדסת תוכנה",
        institution: "המכללה להכשרה מקצועית ירושלים",
        date: "2019 - 2022",
        note: "12 שנות לימוד ובגרות מלאה"
      }
    ],
    skills: {
      languages: ["עברית (שפת אם)", "אנגלית (רמה גבוהה)"],
      programming: ["Python", "Javascript", "Typescript", "HTML", "CSS/SCSS"],
      databases: ["SQL", "MongoDB", "SQLite", "PostgreSQL", "Firebase"],
      tools: ["Node.js", "Express", "React", "Next.js", "Redux", "Zustand", "Socket.io", "FastAPI", "RabbitMQ", "Microservices", "Tailwind CSS", "ShadcnUI", "MUI", "Git", "Docker", "Nginx", "JIRA", "GCP"]
    },
    volunteering: [
      {
        role: "פרויקט פר\"ח",
        description: "הנחייה וליווי תלמידי תיכון במחשבים ואלגוריתמיקה",
        date: "2019 - 2020"
      }
    ]
  }
} as const;
