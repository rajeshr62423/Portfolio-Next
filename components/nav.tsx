import { MdFileDownload } from "react-icons/md";
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
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#stack">Skills</a>
          <a href="#work">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
          <ResumeTrigger className="nav-cta">
            <MdFileDownload aria-hidden="true" /> Download CV
          </ResumeTrigger>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
