"use client";

import type { IconType } from "react-icons";
import SkillsExplorer from "./stack/skills-explorer";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiRedux,
  SiReacthookform,
  SiFormik,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiMui,
  SiAntdesign,
  SiTailwindcss,
  SiOllama,
  SiGit,
  SiPostman,
  SiJira,
  SiVercel,
  SiRender,
  SiFirebase,
  SiClaude,
  SiGithubcopilot,
  SiGooglegemini,
} from "react-icons/si";
import {
  MdNavigation,
  MdDevices,
  MdPalette,
  MdApi,
  MdIntegrationInstructions,
  MdTerminal,
  MdSmartToy,
} from "react-icons/md";

export type Chip = {
  label: string;
  icon: IconType;
  color: string;
  description: string;
};
export type SkillCategory = { title: string; chips: Chip[] };

function chip(
  label: string,
  icon: IconType,
  description: string,
  color = "currentColor",
): Chip {
  return { label, icon, color, description };
}

export const CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    chips: [
      chip(
        "JavaScript (ES6+)",
        SiJavascript,
        "Core language for dynamic, interactive web applications.",
        "#F7DF1E",
      ),
      chip(
        "TypeScript",
        SiTypescript,
        "Typed superset of JavaScript for safer, maintainable code.",
        "#3178C6",
      ),
      chip(
        "HTML5",
        SiHtml5,
        "Semantic markup for structuring modern web applications.",
        "#E34F26",
      ),
      chip(
        "CSS3",
        SiCss,
        "Styling and layout for responsive interfaces.",
        "#1572B6",
      ),
    ],
  },
  {
    title: "Frontend",
    chips: [
      chip(
        "React.js",
        SiReact,
        "Component-based library for building interactive UIs.",
        "#61DAFB",
      ),
      chip(
        "Vite",
        SiVite,
        "Fast build tool and dev server for frontend projects.",
        "#646CFF",
      ),
      chip(
        "Next.js",
        SiNextdotjs,
        "React framework for server-rendered, production apps.",
      ),
      chip(
        "Redux",
        SiRedux,
        "Predictable state management for React applications.",
        "#764ABC",
      ),
      chip(
        "Redux-Saga",
        SiRedux,
        "Middleware for managing complex async flows in Redux.",
        "#764ABC",
      ),
      chip(
        "React Hook Form",
        SiReacthookform,
        "Lightweight form state and validation for React.",
        "#EC5990",
      ),
      chip(
        "Formik",
        SiFormik,
        "Form state and validation library for React.",
        "#2563EB",
      ),
      chip(
        "MUI",
        SiMui,
        "React component library implementing Material Design.",
        "#007FFF",
      ),
      chip(
        "Ant Design",
        SiAntdesign,
        "Enterprise-grade React UI component library.",
        "#0170FE",
      ),
      chip(
        "Tailwind CSS",
        SiTailwindcss,
        "Utility-first CSS framework for rapid UI styling.",
        "#06B6D4",
      ),
    ],
  },
  {
    title: "Backend",
    chips: [
      chip(
        "NestJS",
        SiNestjs,
        "Progressive Node.js framework for scalable server APIs.",
        "#E0234E",
      ),
      chip(
        "Node.js",
        SiNodedotjs,
        "JavaScript runtime for server-side applications.",
        "#339933",
      ),
      chip(
        "Express.js",
        SiExpress,
        "Minimal, flexible Node.js web framework.",
        "#000000",
      ),
      chip(
        "REST APIs",
        MdApi,
        "Designing and consuming resource-based HTTP APIs.",
      ),
    ],
  },
  {
    title: "Mobile",
    chips: [
      chip(
        "React Native (Android)",
        SiReact,
        "Cross-platform mobile apps with React, targeting Android.",
        "#61DAFB",
      ),
      chip(
        "React Navigation",
        MdNavigation,
        "Routing and navigation for React Native apps.",
      ),
      chip(
        "React Native Paper",
        MdPalette,
        "Material Design components for React Native.",
      ),
      chip(
        "Responsive UI",
        MdDevices,
        "Interfaces that adapt cleanly across screen sizes.",
      ),
    ],
  },
  {
    title: "Database",
    chips: [
      chip(
        "MongoDB",
        SiMongodb,
        "NoSQL database for flexible, document-based data.",
        "#47A248",
      ),
      chip(
        "PostgreSQL",
        SiPostgresql,
        "Relational database for structured, relational data.",
        "#4169E1",
      ),
      chip(
        "Prisma ORM",
        SiPrisma,
        "Type-safe ORM for Node.js and TypeScript.",
        "#2D3748",
      ),
    ],
  },
  {
    title: "Integrations & Tools",
    chips: [
      chip(
        "Third-Party Service Integration",
        MdIntegrationInstructions,
        "Connecting applications to external APIs and services.",
      ),
      chip(
        "Ollama (LLM)",
        SiOllama,
        "Running self-hosted large language models locally.",
      ),
      chip(
        "Git",
        SiGit,
        "Version control for tracking and collaborating on code.",
        "#F05032",
      ),
      chip(
        "Postman",
        SiPostman,
        "API testing and request collaboration tool.",
        "#FF6C37",
      ),
      chip(
        "Jira",
        SiJira,
        "Issue tracking and agile project management.",
        "#0052CC",
      ),
      chip(
        "Vercel",
        SiVercel,
        "Deployment platform for frontend and full-stack apps.",
      ),
      chip(
        "Render",
        SiRender,
        "Cloud platform for deploying backend services.",
        "#46E3B7",
      ),
      chip(
        "Firebase",
        SiFirebase,
        "Backend-as-a-service for auth, data, and hosting.",
        "#FFCA28",
      ),
    ],
  },
  {
    title: "AI-Assisted Development",
    chips: [
      chip(
        "Claude",
        SiClaude,
        "AI assistant used to reason through implementation problems.",
        "#D97757",
      ),
      chip(
        "GitHub Copilot",
        SiGithubcopilot,
        "AI pair-programmer for in-editor code suggestions.",
      ),
      chip(
        "Codex",
        MdTerminal,
        "AI coding agent for terminal-based development.",
      ),
      chip(
        "Gemini",
        SiGooglegemini,
        "Google's AI assistant for research and code support.",
        "#4796E3",
      ),
      chip(
        "Kiro",
        MdSmartToy,
        "AI-assisted development tool for building faster.",
      ),
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <SkillsExplorer categories={CATEGORIES}>
          <div className="sec-label mono">
            <span className="num">02</span> Tech Stack
          </div>
          <h2 className="sec-title reveal" data-parallax="0.3">
            Technologies I <span>Work With</span>
          </h2>
          <p className="sec-lede reveal" data-parallax="0.32">
            I work with a modern stack to build fast, scalable and maintainable
            applications — from schema design to shipped UI. I also use
            AI-assisted tools to research and reason through implementation
            problems and speed up development.
          </p>
          <div className="skills-highlights">
            <div className="skill-highlight">
              <span className="skill-highlight-icon">
                <MdDevices />
              </span>
              <span>
                <strong>Modern Stack</strong>
                <small>Fast &amp; scalable</small>
              </span>
            </div>
            <div className="skill-highlight">
              <span className="skill-highlight-icon">
                <MdIntegrationInstructions />
              </span>
              <span>
                <strong>Clean Architecture</strong>
                <small>Maintainable code</small>
              </span>
            </div>
            <div className="skill-highlight">
              <span className="skill-highlight-icon">
                <MdSmartToy />
              </span>
              <span>
                <strong>AI Powered</strong>
                <small>Research &amp; build faster</small>
              </span>
            </div>
          </div>
        </SkillsExplorer>
      </div>
    </section>
  );
}
