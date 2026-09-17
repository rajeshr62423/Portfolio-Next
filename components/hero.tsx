import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy" data-parallax="0.35">
          <span className="eyebrow mono">Hello, I&apos;m</span>
          <h1 className="title">
            Rajesh <span className="accent">R</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="lede">
            I build modern, scalable and user-friendly web &amp; mobile
            applications using technologies like{" "}
            <strong>React, NestJS, MongoDB</strong> and more. Passionate about
            solving real-world problems with clean code and great user
            experiences.
          </p>
          <div className="status-line mono">
            <span className="pulse" /> available: immediate · Chennai, IN
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Projects →
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
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

        <div className="hero-visual reveal" data-parallax="0.5">
          <Image
            src="/profile.png"
            alt="Rajesh R at his development workstation, surrounded by floating icons for React, Next.js, NestJS, Node.js, MongoDB, PostgreSQL and Prisma"
            width={1606}
            height={979}
            className="hero-photo"
            priority
            sizes="(max-width: 880px) 100vw, 50vw"
          />
        </div>

        <div className="scroll-hint mono" aria-hidden="true">
          <span>SCROLL DOWN</span>
          <span className="scroll-hint-chevron" />
        </div>
      </div>
    </section>
  );
}
