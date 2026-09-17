"use client";

import { useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  type PanInfo,
} from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useTilt } from "@/hooks/use-tilt";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const MINI_PROJECTS = [
  {
    title: "Voltiva",
    description:
      "Smarter EV charging management — manage EV charging stations, customers, payments and operations, all in one platform.",
    stack: ["NestJS", "PostgreSQL", "Next.js", "Prisma ORM", "Razorpay", "Brevo"],
    link: "https://voltiva-frontend.vercel.app/",
  },
  {
    title: "Seyora",
    description:
      "A workspace application for engineering teams to plan, track, and deliver work, with a NestJS API covering projects, tasks, and team assignment. The relational schema in Prisma is modeled around a role-based workspace structure, enforcing access boundaries at the data layer.",
    stack: ["Next.js", "React Native", "NestJS", "Prisma", "PostgreSQL"],
    link: "https://seyora-app.vercel.app/",
  },
  {
    title: "JARVIS",
    description:
      "A personal AI operating system that layers a conversational assistant over the user's own data and day-to-day tasks, integrating self-hosted language models through the Ollama API behind session-based authentication.",
    stack: ["Next.js", "React Native", "NestJS", "Prisma", "PostgreSQL", "Ollama"],
    link: "https://jarvis-omega-ai.vercel.app/",
  },
  {
    title: "DigiMoiBook",
    description:
      "Digitized the handwritten moi notebook kept at weddings and family functions into a web app for recording guests, gifts, and contributions — structured so they stay queryable per event and per guest.",
    stack: ["Next.js", "React Native", "TypeScript", "MongoDB"],
    link: "https://digimoibook-app.vercel.app/",
  },
];

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

const flipVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
  }),
};

export default function Projects() {
  const [[active, direction], setActive] = useState<[number, number]>([0, 0]);

  function goTo(i: number) {
    const clamped = Math.min(MINI_PROJECTS.length - 1, Math.max(0, i));
    if (clamped === active) return;
    setActive([clamped, clamped > active ? 1 : -1]);
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

  const current = MINI_PROJECTS[active];

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
          A collection of real-world projects built with modern
          technologies.
        </p>
        <a
          className="btn btn-ghost sec-cta"
          href="https://github.com/rajeshr62423"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Projects →
        </a>

        <TiltWrap className="proj reveal" maxTilt={3}>
          <div className="proj-grid">
            <div className="proj-body">
              <div className="proj-tag mono">FEATURED · ERP PLATFORM</div>
              <h3>GwayERP · Gway Tech Solutions</h3>
              <p>
                A modular, customizable ERP for managing end-to-end business
                operations — one unified platform, many interconnected modules.
              </p>
              <ul>
                <li>
                  Built integrated modules: CRM, Sales, Procurement, Production,
                  Inventory, Service, Gate Management, Finance.
                </li>
                <li>
                  Designed configurable features and dynamic forms for client
                  workflow adaptation.
                </li>
                <li>
                  Created reusable dashboards in React.js and React Native with
                  Redux &amp; Redux-Saga.
                </li>
                <li>
                  Integrated REST APIs for CRUD, cross-module data flow and
                  reporting.
                </li>
              </ul>
              <div className="stackrow">
                <span className="chip mono">React.js</span>
                <span className="chip mono">React Native</span>
                <span className="chip mono">Redux</span>
                <span className="chip mono">REST APIs</span>
                <span className="chip mono">NestJS</span>
                <span className="chip mono">MongoDB</span>
                <span className="chip mono">
                  Third-Party Libraries & Integrations
                </span>
              </div>
            </div>
            <div className="proj-viz">
              <svg
                viewBox="0 0 320 320"
                width="100%"
                role="img"
                aria-label="Diagram of ERP modules connected to a central core"
              >
                <g className="spoke-group">
                  <line className="spoke" x1="160" y1="160" x2="160" y2="46" />
                  <line className="spoke" x1="160" y1="160" x2="258" y2="103" />
                  <line className="spoke" x1="160" y1="160" x2="258" y2="217" />
                  <line className="spoke" x1="160" y1="160" x2="160" y2="274" />
                  <line className="spoke" x1="160" y1="160" x2="62" y2="217" />
                  <line className="spoke" x1="160" y1="160" x2="62" y2="103" />
                  <line className="spoke" x1="160" y1="160" x2="42" y2="160" />
                  <line className="spoke" x1="160" y1="160" x2="268" y2="160" />
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
                  <rect x="126" y="30" width="68" height="26" rx="6" />
                  <text x="160" y="47" textAnchor="middle">
                    CRM
                  </text>
                </g>
                <g className="mod">
                  <rect x="224" y="90" width="76" height="26" rx="6" />
                  <text x="262" y="107" textAnchor="middle">
                    Sales
                  </text>
                </g>
                <g className="mod">
                  <rect x="222" y="204" width="86" height="26" rx="6" />
                  <text x="265" y="221" textAnchor="middle">
                    Service
                  </text>
                </g>
                <g className="mod">
                  <rect x="112" y="278" width="96" height="26" rx="6" />
                  <text x="160" y="295" textAnchor="middle">
                    Inventory
                  </text>
                </g>
                <g className="mod">
                  <rect x="8" y="204" width="96" height="26" rx="6" />
                  <text x="56" y="221" textAnchor="middle">
                    Finance
                  </text>
                </g>
                <g className="mod">
                  <rect x="4" y="90" width="104" height="26" rx="6" />
                  <text x="56" y="107" textAnchor="middle">
                    Procurement
                  </text>
                </g>
                <g className="mod">
                  <rect x="0" y="147" width="40" height="26" rx="6" />
                  <text x="20" y="164" textAnchor="middle" style={{ fontSize: 9 }}>
                    Gate
                  </text>
                </g>
                <g className="mod">
                  <rect x="220" y="147" width="96" height="26" rx="6" />
                  <text x="268" y="164" textAnchor="middle">
                    Production
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </TiltWrap>

        <div className="proj-carousel reveal" data-parallax="0.42">
          <button
            type="button"
            className="proj-nav proj-nav-prev"
            aria-label="Previous project"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
          >
            <MdChevronLeft />
          </button>

          <div
            className="proj-flip-stage"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured projects"
            tabIndex={0}
            onKeyDown={onStageKeyDown}
          >
            <AnimatePresence custom={direction} mode="wait" initial={false}>
              <motion.div
                key={current.title}
                className="proj-flip-slide"
                custom={direction}
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={onDragEnd}
                aria-roledescription="slide"
                aria-label={`${active + 1} of ${MINI_PROJECTS.length}: ${current.title}`}
              >
                <div className="proj-mini">
                  <h3>{current.title}</h3>
                  <p>{current.description}</p>
                  <div className="stackrow">
                    {current.stack.map((s) => (
                      <span className="chip mono" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    className="proj-mini-link mono"
                    href={current.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live ↗
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="proj-nav proj-nav-next"
            aria-label="Next project"
            onClick={() => goTo(active + 1)}
            disabled={active === MINI_PROJECTS.length - 1}
          >
            <MdChevronRight />
          </button>
        </div>

        <div className="proj-dots" role="tablist" aria-label="Select project">
          {MINI_PROJECTS.map((p, i) => (
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
          {current.title} — project {active + 1} of {MINI_PROJECTS.length}
        </p>
      </div>
    </section>
  );
}
