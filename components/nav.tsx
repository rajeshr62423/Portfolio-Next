import ThemeToggle from "./theme-toggle";
import { ResumeTrigger } from "./resume-modal";
import MobileNav from "./mobile-nav";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="dot" /> Rajesh R.
        </a>
        <nav className="nav-links">
          <a href="#work">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <ResumeTrigger className="resume-trigger">Resume</ResumeTrigger>
          <ThemeToggle />
          <a className="nav-cta" href="#contact">
            Get in touch
          </a>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
