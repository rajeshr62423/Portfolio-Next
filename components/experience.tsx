"use client";

import { motion } from "framer-motion";
import {
  MdWork,
  MdCalendarToday,
  MdBusiness,
  MdLocationOn,
  MdCheckCircle,
  MdOpenInNew,
} from "react-icons/md";
import { SiReact, SiNodedotjs, SiMongodb, SiNestjs } from "react-icons/si";
import { ResumeTrigger } from "./resume-modal";

const EXP_STACK = [
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { label: "NestJS", icon: SiNestjs, color: "#E0234E" },
];

const EXP_BULLETS = [
  {
    lead: "Own end-to-end delivery of modules within GwayERP, a custom ERP platform",
    detail:
      "on React/Vite, NestJS, and MongoDB, running across multiple live client implementations in parallel.",
  },
  {
    lead: "Build and extend core ERP modules",
    detail:
      "— CRM, Sales, Procurement, Inventory, Service, Finance, and Gate Management — translating each client's business workflow into a normalized data model before implementation.",
  },
  {
    lead: "Implement configurable, client-specific workflows and dynamic forms",
    detail:
      "on the frontend, backed by reusable React component patterns shared across modules.",
  },
  {
    lead: "Design NestJS REST APIs",
    detail:
      "alongside the MongoDB schemas they serve, covering both new module development and ongoing data-model changes.",
  },
  {
    lead: "Integrate third-party REST APIs",
    detail:
      "into core modules, handling authentication, data mapping, and error states so downstream workflows stay reliable.",
  },
];

export default function Experience() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="num">03</span> Experience
        </div>
        <h2 className="sec-title reveal" data-parallax="0.3">
          Work Experience
        </h2>
        <p className="sec-lede reveal" data-parallax="0.32">
          My professional journey and the company I&apos;ve worked with.
        </p>
        <ResumeTrigger className="btn btn-ghost sec-cta">
          View Full Resume →
        </ResumeTrigger>

        <div className="exp-stage reveal" data-parallax="0.45">
          <div className="exp-visual" aria-hidden="true">
            <div className="exp-visual-glow" />
            <div className="exp-visual-badge">
              <MdWork />
            </div>
            <div className="exp-visual-stack">
              {EXP_STACK.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="exp-visual-chip mono"
                  style={{ animationDelay: `${i * 0.35}s` }}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <span
                    className="exp-visual-chip-icon"
                    style={{ color: s.color }}
                  >
                    <s.icon aria-hidden="true" />
                  </span>
                  {s.label}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="exp-card">
            <a
              className="exp-card-link"
              aria-label="GwayERP company website"
              href="https://www.gwayerp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOpenInNew />
            </a>

            <div className="exp-card-head">
              <span className="exp-badge">
                <MdWork />
              </span>
              <div className="exp-card-headtext">
                <div className="exp-when mono">
                  <MdCalendarToday aria-hidden="true" />
                  Oct 2024 — Present
                  <span className="exp-pill">
                    <span className="pulse" /> Full-time
                  </span>
                </div>
                <div className="exp-role">Full Stack Developer</div>
              </div>
            </div>

            <div className="exp-co">
              <span>
                <MdBusiness aria-hidden="true" /> GwayIT (Gway Tech Solutions)
              </span>
              <span>
                <MdLocationOn aria-hidden="true" /> Chennai, India
              </span>
            </div>

            <hr className="exp-divider" />

            <ul>
              {EXP_BULLETS.map((bullet, i) => (
                <motion.li
                  key={bullet.lead}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <MdCheckCircle className="exp-check" aria-hidden="true" />
                  <span>
                    <strong>{bullet.lead}</strong> {bullet.detail}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
