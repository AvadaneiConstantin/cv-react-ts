/**
 * CV Data - Complete CV information
 * Rol: Conține toate datele CV-ului într-un singur loc
 * Importanță: Centralizează datele pentru easy maintenance și updates
 *
 * ACTUALIZAT: Complet cu toate secțiunile din ContainCV.tsx
 */
import type { CVData } from "./types";

export const cvData: CVData = {
  profile: {
    name: "Constantin Avadanei",
    title: "Frontend Developer",
    bio: "Frontend Developer with 3+ years of experience in React and TypeScript, delivering modular, high-performance interfaces aligned with modern UI/UX standards, mobile-first principles, and scalable component-driven architecture.",
    photo: "/img/cv.png",
    email: "avadanei.constantin85@gmail.com",
    phone: "0758 382 244",
    location: "Iași, Romania",
    linkedin: "https://www.linkedin.com/in/constantin-avadanei",
  },
  skills: {
    main: [
      { name: "React", level: 95, category: "Frontend" },
      { name: "TypeScript", level: 90, category: "Languages" },
      { name: "Tailwind CSS", level: 85, category: "Styling" },
      { name: "Material UI", level: 80, category: "Styling" },
      { name: "Vite", level: 75, category: "Tools" },
    ],
    categories: [
      {
        name: "Core Frontend",
        technologies: [
          "React",
          "TypeScript",
          "JavaScript (ES6+)",
          "HTML5 / CSS3",
          "Vite",
        ],
      },
      {
        name: "UI & Styling",
        technologies: [
          "Tailwind CSS",
          "Material UI",
          "Framer Motion",
          "SCSS / SASS",
        ],
      },
      {
        name: "Backend & Environment",
        technologies: ["Firebase Auth", "Git/GitHub", "Docker"],
      },
    ],
    keySkills: [
      {
        title: "Performance-First Mindset",
        desc: "Optimized load times & efficient rendering",
        color: "yellow",
      },
      {
        title: "Cross-Stack Alignment",
        desc: "Effective collaboration with project teams (BackEnd, UI/UX Design)",
        color: "blue",
      },
      {
        title: "Modular Architecture",
        desc: "Component-driven architecture focused on reuse and scalability",
        color: "cyan",
      },
      {
        title: "Strategic Problem-Solving",
        desc: "Goal-oriented approach with a focus on big-picture system architecture.",
        color: "rose",
      },
      {
        title: "Product & Business Awareness",
        desc: "Understands technical decisions in a business context",
        color: "slate",
      },
    ],
    softSkills: [
      {
        title: "Analytical Thinking",
        desc: "Investigative mindset with strong critical thinking",
        color: "purple",
      },
      {
        title: "Problem Solving",
        desc: "Methodical approach to complex problem solving",
        color: "yellow",
      },
      {
        title: "Resilience",
        desc: "Maintains performance under pressure",
        color: "green",
      },
      {
        title: "Time & Task Management",
        desc: "Effective prioritization and delivery under deadlines",
        color: "orange",
      },
      {
        title: "Adaptability",
        desc: "Adjust effectively to client expectations",
        color: "pink",
      },
      {
        title: "Attention to Detail",
        desc: "High attention to UI, UX, and implementation accuracy",
        color: "emerald",
      },
    ],
  },
  experience: [
    {
      id: "exp1",
      company: "React & TypeScript",
      position: "Frontend Developer",
      period: "06/2022 — Present",
      location: "Iași, RO",
      description: [
        "Developed modular, reusable React components with TypeScript and UI libraries such as Material UI (MUI).",
        "Collaborated closely with backend teams to integrate and align on API schemas.",
        "Ensured application stability through comprehensive unit and integration testing with Jest and React Testing Library (RTL).",
        "Validated cross-platform responsiveness to ensure a flawless mobile-first experience.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Jest"],
    },
    {
      id: "exp2",
      company: "Independent Software Study & Development",
      position: "",
      period: "2020 — 2022",
      description: [],
      technologies: ["HTML5", "CSS", "JavaScript", "React", "TypeScript"],
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Alexandru Ioan Cuza University",
      degree: "Visual Arts",
      period: "2005 — 2008",
      location: "Iași, Romania",
    },
  ],
  languages: [
    {
      code: "RO",
      name: "Romanian",
      level: "Native",
    },
    {
      code: "EN",
      name: "English",
      level: "Conversational",
    },
  ],
};
