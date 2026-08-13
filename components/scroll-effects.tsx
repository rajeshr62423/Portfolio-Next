"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const progress = document.getElementById("scroll-progress");
    const spotlight = document.getElementById("spotlight");

    let ticking = false;
    let lastScrollY = 0;

    const onScroll = () => {
      if (!progress) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      progress.style.width = `${pct}%`;

      // Trigger parallax update
      lastScrollY = doc.scrollTop;
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

    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    onScroll();

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
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
      <div className="spotlight" id="spotlight" aria-hidden="true" />
    </>
  );
}
