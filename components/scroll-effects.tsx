"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollEffects() {
  useEffect(() => {
    const progress = document.getElementById("scroll-progress");
    const spotlight = document.getElementById("spotlight");
    const nav = document.querySelector<HTMLElement>("header.nav");

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        ".nav-links a:not(.nav-cta)[href^='#'], .mobile-panel a:not(.nav-cta)[href^='#']",
      ),
    );
    const navSections = navLinks
      .map((link) => {
        const id = link.getAttribute("href")?.slice(1);
        const el = id ? document.getElementById(id) : null;
        return el ? { link, el } : null;
      })
      .filter((v): v is { link: HTMLAnchorElement; el: HTMLElement } => v !== null);

    const updateActiveNav = () => {
      const doc = document.documentElement;
      const nearBottom =
        doc.scrollHeight - (window.scrollY + doc.clientHeight) < 4;

      let currentId: string | null = null;
      if (nearBottom && navSections.length > 0) {
        // The last section's activation point can fall past the max
        // scrollable position (its offsetTop + buffer may exceed what the
        // page can actually scroll to), so it would otherwise never
        // activate. Force it once we've hit the bottom.
        currentId = navSections[navSections.length - 1].link.getAttribute("href");
      } else {
        const scrollPos = window.scrollY + 140;
        for (const { link, el } of navSections) {
          if (el.offsetTop <= scrollPos) {
            currentId = link.getAttribute("href");
          }
        }
      }
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === currentId);
      });
    };

    let lastY = window.scrollY;
    const updateDirectionalHeader = (currentY: number) => {
      if (!nav) return;
      const doc = document.documentElement;
      const mobilePanelOpen = document.querySelector(".mobile-panel.open");
      const nearTop = currentY < 80;
      const nearBottom =
        doc.scrollHeight - (currentY + doc.clientHeight) < 4;

      // Ignore small back-and-forth jitter from natural trackpad/wheel
      // input (and momentum bounce at the scroll limits) — only react to a
      // deliberate scroll of real distance.
      const delta = currentY - lastY;
      if (nearTop || nearBottom || mobilePanelOpen) {
        nav.classList.remove("nav-hidden");
      } else if (delta > 24) {
        nav.classList.add("nav-hidden");
      } else if (delta < -24) {
        nav.classList.remove("nav-hidden");
      }
      lastY = currentY;
    };

    let ticking = false;

    const onScroll = () => {
      if (!progress) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const currentY = doc.scrollTop;
      const pct = scrollable > 0 ? (currentY / scrollable) * 100 : 0;
      progress.style.width = `${pct}%`;

      updateActiveNav();
      updateDirectionalHeader(currentY);

      // Trigger parallax update
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      const parallaxElements = document.querySelectorAll("[data-parallax]");

      parallaxElements.forEach((element) => {
        const speed = parseFloat(
          (element as HTMLElement).dataset.parallax || "0.5",
        );
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = elementCenter - viewportCenter;

        // Calculate parallax offset based on element distance from viewport center
        // Use a subtle multiplier for smooth, non-overwhelming effect
        const offset = (distance * speed) / 10;

        (element as HTMLElement).style.transform = `translateY(${offset}px)`;
      });

      ticking = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!spotlight) return;
      spotlight.style.setProperty("--mx", `${e.clientX}px`);
      spotlight.style.setProperty("--my", `${e.clientY}px`);
      spotlight.classList.add("on");
    };

    const clickSound = new Audio("/audio/move.mp3");
    clickSound.volume = 0.35;
    clickSound.preload = "auto";
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("button, a, [role='button'], [role='tab']")) return;
      try {
        clickSound.currentTime = 0;
        void clickSound.play().catch(() => {});
      } catch {
        // ignore playback restrictions
      }
    };

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    reveals.forEach((el) => observer.observe(el));

    // Safety net: a direct hash link, restored scroll position, or a fast
    // nav jump can land a .reveal element in view before the observer's
    // first check settles, or move it through the viewport without ever
    // crossing the threshold as "entering". Either way it would otherwise
    // stay at opacity:0 forever — force-reveal anything still hidden after
    // a short grace period.
    const revealFallback = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        el.classList.add("in");
        observer.unobserve(el);
      });
    }, 1200);

    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("click", onClick);
    onScroll();

    // Smooth (eased) scrolling — Lenis smooths the browser's real scroll
    // position rather than virtualizing it, so the scrollTop-based logic
    // above keeps working unchanged. Skipped entirely under
    // prefers-reduced-motion, matching the rest of the site's motion policy.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let lenis: Lenis | undefined;
    let rafId: number | undefined;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
      observer.disconnect();
      window.clearTimeout(revealFallback);
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        id="scroll-progress"
        aria-hidden="true"
      />
      <div className="bg-grid" aria-hidden="true" />
      <div className="morph-blob" aria-hidden="true" />
      <div className="spotlight" id="spotlight" aria-hidden="true" />
    </>
  );
}
