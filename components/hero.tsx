import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { ResumeTrigger } from "./resume-modal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy" data-parallax="0.35">
          <span className="eyebrow mono">Hello, I&apos;m</span>
          <h1 className="title">
            Rajesh <span className="accent">R</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="lede">
            2 years of experience building production applications with{" "}
            <strong>React.js, Node.js/NestJS, MongoDB and TypeScript</strong>{" "}
            — including a custom ERP platform running across multiple live
            client deployments, plus independent full-stack projects on
            Next.js and PostgreSQL/Prisma.
          </p>
          <div className="status-line mono">
            <span className="pulse" /> available: immediate · Chennai, IN
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects →
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
            <ResumeTrigger className="btn btn-ghost">
              Download Resume
            </ResumeTrigger>
          </div>
          <div className="hero-social">
            <a
              href="https://github.com/rajeshr62423"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh-ravichandran-290185244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

        <div className="hero-bg" aria-hidden="true">
          <Image
            src="/profile.png"
            alt=""
            width={1606}
            height={979}
            className="hero-photo hero-photo-dark"
            priority
            sizes="(max-width: 880px) calc(100vw - 56px), 58vw"
          />
          <Image
            src="/profile-light.png"
            alt=""
            width={1606}
            height={979}
            className="hero-photo hero-photo-light"
            sizes="(max-width: 880px) calc(100vw - 56px), 58vw"
          />
          <div className="hero-scrim" />
        </div>

      <div className="scroll-hint mono" aria-hidden="true">
        <span>SCROLL DOWN</span>
        <span className="scroll-hint-chevron" />
      </div>
    </section>
  );
}
