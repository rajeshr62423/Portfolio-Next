"use client";

import { useRef } from "react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export default function ThemeToggle() {
  const btnRef = useRef<HTMLButtonElement>(null);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    const btn = btnRef.current;

    const apply = () => {
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // storage unavailable — theme just won't persist
      }
    };

    const doc = document as ViewTransitionDocument;

    if (btn && doc.startViewTransition) {
      const rect = btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const r = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      root.style.setProperty("--vt-x", `${x}px`);
      root.style.setProperty("--vt-y", `${y}px`);
      root.style.setProperty("--vt-r", `${r}px`);
      doc.startViewTransition(apply);
    } else {
      root.classList.add("theme-anim");
      apply();
      window.setTimeout(() => root.classList.remove("theme-anim"), 520);
    }
  }

  return (
    <button
      ref={btnRef}
      className="theme-toggle"
      type="button"
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      onClick={toggleTheme}
    >
      <svg
        className="ic-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
      </svg>
      <svg
        className="ic-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
