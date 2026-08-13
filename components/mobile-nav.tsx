"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { ResumeTrigger } from "./resume-modal";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="mobile-nav">
      <ThemeToggle />
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <div className={`mobile-panel${open ? " open" : ""}`} hidden={!open}>
        <a href="#work" onClick={close}>
          Experience
        </a>
        <a href="#projects" onClick={close}>
          Projects
        </a>
        <a href="#stack" onClick={close}>
          Stack
        </a>
        <ResumeTrigger className="mobile-panel-link" onClick={close}>
          Resume
        </ResumeTrigger>
        <a className="nav-cta" href="#contact" onClick={close}>
          Get in touch
        </a>
      </div>
    </div>
  );
}
