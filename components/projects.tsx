"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import { motion, useMotionTemplate, type PanInfo } from "framer-motion";
import {
  MdChevronLeft,
  MdChevronRight,
  MdStar,
  MdWeb,
  MdSmartToy,
  MdPhoneIphone,
} from "react-icons/md";
import {
  SiReact,
  SiVite,
  SiNestjs,
  SiMongodb,
  SiRedux,
  SiPostgresql,
  SiNextdotjs,
  SiPrisma,
  SiRazorpay,
  SiBrevo,
  SiTypescript,
  SiOllama,
  SiRender,
  SiVercel,
  SiJavascript,
  SiReacthookform,
  SiSecurityscorecard,
} from "react-icons/si";
import { useTilt } from "@/hooks/use-tilt";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { FaPeopleGroup } from "react-icons/fa6";

type StackKey =
  | "React.js"
  | "React Native"
  | "Vite"
  | "NestJS"
  | "MongoDB"
  | "Redux"
  | "Redux-Saga"
  | "PostgreSQL"
  | "Next.js"
  | "Prisma ORM"
  | "Razorpay"
  | "Brevo"
  | "TypeScript"
  | "Ollama"
  | "Render"
  | "Vercel"
  | "JavaScript"
  | "React Hook Form"
  | "RBAC";

const STACK_ICON: Record<StackKey, { icon: IconType; color: string }> = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  Vite: { icon: SiVite, color: "#646CFF" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  "Redux-Saga": { icon: SiRedux, color: "#764ABC" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  "Next.js": { icon: SiNextdotjs, color: "#EDEDED" },
  "Prisma ORM": { icon: SiPrisma, color: "#8891A5" },
  Razorpay: { icon: SiRazorpay, color: "#3395FF" },
  Brevo: { icon: SiBrevo, color: "#0FA968" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Ollama: { icon: SiOllama, color: "#D8D8D6" },
  Render: { icon: SiRender, color: "#46E3B7" },
  Vercel: { icon: SiVercel, color: "#EDEDED" },
  JavaScript: { icon: SiJavascript, color: "#f2eb13" },
  "React Hook Form": { icon: SiReacthookform, color: "#0955fa" },
  RBAC: { icon: SiSecurityscorecard, color: "rgba(66, 8, 242, 0.67)" },
};

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const num = parseInt(full, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

type Project = {
  title: string;
  meta?: string;
  badgeLeft: { icon: IconType; label: string };
  badgeRight: string;
  description: string;
  stack: StackKey[];
  link: string | null;
  linkLabel: string;
  image: string | null;
};

const PROJECTS: Project[] = [
  {
    title: "GwayERP",
    meta: "Gway Tech Solutions",
    badgeLeft: { icon: MdStar, label: "Featured Project" },
    badgeRight: "GwayIT · Professional",
    description:
      "A configurable ERP platform spanning CRM, Sales, Procurement, Inventory, Service, Finance and Gate Management. Configurable workflows and dynamic forms let one codebase adapt to each client's process, backed by a reusable component and dashboard layer, Redux/Redux-Saga state, and NestJS REST APIs handling CRUD, cross-module data flow, and reporting.",
    stack: [
      "React.js",
      "React Native",
      "Vite",
      "NestJS",
      "MongoDB",
      "Redux",
      "Redux-Saga",
    ],
    link: null,
    linkLabel: "Internal Platform",
    image: null,
  },
  {
    title: "Seno.io",
    badgeLeft: { icon: FaPeopleGroup, label: "HRMS & SaaS" },
    badgeRight: "Personal Project",
    description:
      "A multi-tenant HRMS SaaS platform designed to streamline employee management, client operations, and organizational workflows. Built with role-based access control supporting Owner and Client user levels, with secure authentication, employee management, and scalable business operations.",
    stack: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Redux-Saga",
      "React Hook Form",
      "NestJS",
      "MongoDB",
      "RBAC",
      "Brevo",
      "Vercel",
      "Render",
    ],
    link: "https://seno-io.vercel.app/login",
    linkLabel: "Live Project",
    image: "/projects/seno.png",
  },
  {
    title: "Voltiva",
    badgeLeft: { icon: MdWeb, label: "Web App" },
    badgeRight: "Not on Resume",
    description:
      "Smarter EV charging management — manage EV charging stations, customers, payments and operations, all in one platform.",
    stack: [
      "NestJS",
      "PostgreSQL",
      "Next.js",
      "Prisma ORM",
      "Razorpay",
      "Brevo",
      "Render",
      "Vercel",
    ],
    link: "https://voltiva-frontend.vercel.app/",
    linkLabel: "Live Project",
    image: "/projects/voltiva.png",
  },
  {
    title: "Seyora",
    badgeLeft: { icon: MdWeb, label: "Web App" },
    badgeRight: "Personal Project",
    description:
      "A workspace application for engineering teams to plan, track, and deliver work, with a NestJS API covering projects, tasks, and team assignment. The relational schema in Prisma is modeled around a role-based workspace structure, enforcing access boundaries at the data layer.",
    stack: [
      "Next.js",
      "React Native",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Render",
      "Vercel",
    ],
    link: "https://seyora-app.vercel.app/",
    linkLabel: "Live Project",
    image: "/projects/seyora.png",
  },
  {
    title: "StarkAI",
    badgeLeft: { icon: MdSmartToy, label: "AI Assistant" },
    badgeRight: "Personal Project",
    description:
      "A personal AI operating system that layers a conversational assistant over the user's own data and day-to-day tasks, integrating self-hosted language models through the Ollama API behind session-based authentication.",
    stack: [
      "Next.js",
      "React Native",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Ollama",
      "Render",
      "Vercel",
    ],
    link: "https://jarvis-omega-ai.vercel.app/",
    linkLabel: "Live Project",
    image: "/projects/starkai.png",
  },
  {
    title: "DigiMoiBook",
    badgeLeft: { icon: MdPhoneIphone, label: "Web + Mobile" },
    badgeRight: "Personal Project",
    description:
      "A web and mobile app for digitizing event guest, gift, and contribution records — structured so they stay queryable per event and per guest.",
    stack: [
      "Next.js",
      "React Native",
      "TypeScript",
      "MongoDB",
      "Render",
      "Vercel",
    ],
    link: "https://digimoibook-app.vercel.app/",
    linkLabel: "Live Project",
    image: "/projects/digimoibook.png",
  },
];

function ErpDiagram() {
  return (
    <svg
      viewBox="0 0 320 320"
      width="100%"
      height="100%"
      role="img"
      aria-label="Diagram of GwayERP's seven modules connected to a central core"
    >
      <g className="spoke-group">
        <line className="spoke" x1="160" y1="160" x2="160" y2="60" />
        <line className="spoke" x1="160" y1="160" x2="238" y2="98" />
        <line className="spoke" x1="160" y1="160" x2="258" y2="182" />
        <line className="spoke" x1="160" y1="160" x2="203" y2="250" />
        <line className="spoke" x1="160" y1="160" x2="117" y2="250" />
        <line className="spoke" x1="160" y1="160" x2="63" y2="182" />
        <line className="spoke" x1="160" y1="160" x2="82" y2="98" />
      </g>

      <g className="mod">
        <circle className="mod-core" cx="160" cy="160" r="34" />
        <text className="mod-core-text" x="160" y="158" textAnchor="middle">
          ERP
        </text>
        <text
          className="mod-core-text"
          x="160"
          y="170"
          textAnchor="middle"
          style={{ fontSize: 9 }}
        >
          core
        </text>
      </g>

      <g className="mod">
        <rect x="126" y="47" width="68" height="26" rx="6" />
        <text x="160" y="64" textAnchor="middle">
          CRM
        </text>
      </g>
      <g className="mod">
        <rect x="200" y="85" width="76" height="26" rx="6" />
        <text x="238" y="102" textAnchor="middle">
          Sales
        </text>
      </g>
      <g className="mod">
        <rect x="214" y="169" width="86" height="26" rx="6" />
        <text x="257" y="186" textAnchor="middle">
          Service
        </text>
      </g>
      <g className="mod">
        <rect x="155" y="237" width="96" height="26" rx="6" />
        <text x="203" y="254" textAnchor="middle">
          Inventory
        </text>
      </g>
      <g className="mod">
        <rect x="69" y="237" width="96" height="26" rx="6" />
        <text x="117" y="254" textAnchor="middle">
          Finance
        </text>
      </g>
      <g className="mod">
        <rect x="10" y="169" width="104" height="26" rx="6" />
        <text x="62" y="186" textAnchor="middle">
          Procurement
        </text>
      </g>
      <g className="mod">
        <rect x="47" y="85" width="70" height="26" rx="6" />
        <text x="82" y="102" textAnchor="middle">
          Gate Mgmt
        </text>
      </g>
    </svg>
  );
}

function ProjectCardInner({ project }: { project: Project }) {
  const BadgeIcon = project.badgeLeft.icon;
  return (
    <>
      <div className="proj-card-frame">
        <div className="tree-head mono proj-card-chrome">
          <span className="lights">
            <i />
            <i />
            <i />
          </span>
          <span>
            {project.title.toLowerCase()}
            {project.image ? ".app" : ".sys"}
          </span>
        </div>
        <div className="proj-card-shot">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} dashboard screenshot`}
              fill
              sizes="(max-width: 880px) 92vw, 820px"
              className="proj-card-shot-img"
            />
          ) : (
            <ErpDiagram />
          )}
        </div>
      </div>

      <div className="proj-card-badges">
        <span className="proj-badge proj-badge-left">
          <BadgeIcon aria-hidden="true" />
          {project.badgeLeft.label}
        </span>
        <span className="proj-badge proj-badge-right mono">
          {project.badgeRight}
        </span>
      </div>

      <h3 className="proj-card-title">
        {project.title}
        {project.meta && (
          <span className="proj-card-meta"> · {project.meta}</span>
        )}
      </h3>
      <p className="proj-card-desc">{project.description}</p>

      <div className="proj-stack-row">
        {project.stack.map((s) => {
          const { icon: Icon, color } = STACK_ICON[s];
          return (
            <span className="proj-stack-chip mono" key={s}>
              <span
                className="proj-stack-chip-icon"
                style={{ color, background: hexToRgba(color, 0.16) }}
              >
                <Icon aria-hidden="true" />
              </span>
              {s}
            </span>
          );
        })}
      </div>

      {project.link ? (
        <a
          className="proj-card-link mono"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.linkLabel} ↗
        </a>
      ) : (
        <span className="proj-card-link proj-card-link-static mono">
          {project.linkLabel}
        </span>
      )}
    </>
  );
}

function TiltWrap({
  children,
  className,
  maxTilt = 6,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const reducedMotion = useReducedMotion();
  const [ref, tilt] = useTilt(reducedMotion, maxTilt);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.1), transparent 60%)`;

  return (
    <motion.div
      ref={ref}
      className={`tilt-card${className ? ` ${className}` : ""}`}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
    >
      {children}
      <motion.div
        className="tilt-glare"
        style={{ background: glareBackground }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();

  function goTo(i: number) {
    const looped = (i + PROJECTS.length) % PROJECTS.length;
    setActive(looped);
  }

  function onStageKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  }

  function onDragEnd(_e: unknown, info: PanInfo) {
    if (info.offset.x < -80) goTo(active + 1);
    else if (info.offset.x > 80) goTo(active - 1);
  }

  const current = PROJECTS[active];

  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="num">04</span> Projects
        </div>
        <h2 className="sec-title reveal" data-parallax="0.3">
          Featured Projects
        </h2>
        <p className="sec-lede reveal" data-parallax="0.32">
          A collection of real-world projects built with modern technologies.
        </p>
        <a
          className="btn btn-ghost sec-cta"
          href="https://github.com/rajeshr62423"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Projects →
        </a>
      </div>

      <div className="proj-bleed reveal" data-parallax="0.4">
        <button
          type="button"
          className="proj-nav proj-nav-prev"
          aria-label="Previous project"
          onClick={() => goTo(active - 1)}
        >
          <MdChevronLeft />
        </button>

        <div
          className="proj-stage"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          tabIndex={0}
          onKeyDown={onStageKeyDown}
        >
          {PROJECTS.map((p, i) => {
            let diff = i - active;
            const n = PROJECTS.length;
            if (diff > n / 2) diff -= n;
            if (diff < -n / 2) diff += n;
            if (Math.abs(diff) > 1) return null;
            const isActive = diff === 0;

            return (
              <motion.div
                key={p.title}
                className={`proj-slot${isActive ? " is-active" : " is-peek"}`}
                style={{ zIndex: isActive ? 3 : 2 }}
                animate={{
                  x: reducedMotion ? 0 : `${diff * 78}%`,
                  scale: isActive ? 1 : 0.86,
                  opacity: isActive ? 1 : 0.45,
                  filter: isActive
                    ? "blur(0px) saturate(1)"
                    : "blur(1.5px) saturate(0.7)",
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={isActive ? onDragEnd : undefined}
                onClick={!isActive ? () => goTo(i) : undefined}
                aria-hidden={!isActive}
                role={isActive ? undefined : "presentation"}
                aria-roledescription={isActive ? "slide" : undefined}
                aria-label={
                  isActive
                    ? `${active + 1} of ${PROJECTS.length}: ${p.title}`
                    : undefined
                }
              >
                {isActive ? (
                  <TiltWrap className="proj-card" maxTilt={3}>
                    <ProjectCardInner project={p} />
                  </TiltWrap>
                ) : (
                  <div className="proj-card">
                    <ProjectCardInner project={p} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <button
          type="button"
          className="proj-nav proj-nav-next"
          aria-label="Next project"
          onClick={() => goTo(active + 1)}
        >
          <MdChevronRight />
        </button>
      </div>

      <div className="wrap">
        <div className="proj-dots" role="tablist" aria-label="Select project">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to ${p.title}`}
              className={`proj-dot${active === i ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          {current.title} — project {active + 1} of {PROJECTS.length}
        </p>
      </div>
    </section>
  );
}
