import {
  MdLocationOn,
  MdEmail,
  MdWorkOutline,
  MdCheckCircle,
} from "react-icons/md";
import { ResumeTrigger } from "./resume-modal";

const INFO_ROWS = [
  { icon: MdLocationOn, label: "Location", value: "Chennai, India" },
  {
    icon: MdEmail,
    label: "Email",
    value: "rajeshravichandrans2001@gmail.com",
  },
  { icon: MdWorkOutline, label: "Experience", value: "2+ Years" },
  { icon: MdCheckCircle, label: "Status", value: "Open to Work" },
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="num">01</span> About Me
        </div>
        <div className="about-grid">
          <div className="about reveal" data-parallax="0.4">
            <h2 className="sec-title">Turning Ideas Into Scalable Products</h2>
            <p>
              I&apos;m a passionate Full Stack Developer with experience
              building web and mobile applications using{" "}
              <strong>React, NestJS, MongoDB</strong> and modern tools —{" "}
              <strong>Next.js, Prisma and PostgreSQL</strong> among them. I
              enjoy turning business workflows into normalized data models
              and production-ready modules, learning new technologies, and
              creating solutions that make an impact.
            </p>
            <ResumeTrigger className="btn btn-ghost about-cta">
              More About Me →
            </ResumeTrigger>
          </div>
          <div className="about-side reveal" data-parallax="0.55">
            <div className="about-cards">
              <div className="info-card info-card-solo">
                {INFO_ROWS.map((row) => (
                  <div className="info-row" key={row.label}>
                    <span className="info-icon">
                      <row.icon />
                    </span>
                    <span className="info-text">
                      <span className="info-label">{row.label}</span>
                      <span className="info-value">{row.value}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="tagline-card" aria-hidden="true">
                <span>Clean Code</span>
                <span>Better Tomorrow</span>
                <span className="tagline-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
