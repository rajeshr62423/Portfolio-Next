"use client";

import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import { ResumeTrigger } from "./resume-modal";

const EXP_BULLETS = [
  "Own module-level delivery within GwayERP, a custom ERP platform on React/Vite, NestJS, and MongoDB, serving several client implementations running in parallel.",
  "Translate client business workflows into normalized data models and module specifications, then carry them through to production across both frontend and backend.",
  "Modeled the Dispatch Management inventory flow around a parent request record with allocation lines, enabling partial fulfillment and accurate stock tracking across multi-stage dispatches.",
  "Integrate third-party REST APIs into core modules, handling authentication, data mapping, and error states so downstream workflows stay reliable.",
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
          <div className="exp-card">
            <span className="exp-badge">
              <MdWork />
            </span>
            <div className="exp-when mono">
              <span className="pulse" /> Oct 2024 — Present
            </div>
            <div className="exp-role">Developer</div>
            <div className="exp-co">Gway Tech Solutions · Chennai, India</div>
            <ul>
              {EXP_BULLETS.map((bullet, i) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
