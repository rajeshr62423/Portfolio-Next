"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { SkillCategory } from "../stack";

function subscribeResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}
function getWideSnapshot() {
  return window.innerWidth >= 1024;
}
function getWideServerSnapshot() {
  return false;
}

export type FlatChip = SkillCategory["chips"][number] & { category: string };

const RINGS = [
  { radius: 112, ringClass: "orbit-ring-0", counterClass: "orbit-counter-0" },
  { radius: 178, ringClass: "orbit-ring-1", counterClass: "orbit-counter-1" },
  { radius: 244, ringClass: "orbit-ring-2", counterClass: "orbit-counter-2" },
];

export default function StackOrbit({
  categories,
}: {
  categories: SkillCategory[];
}) {
  const reducedMotion = useReducedMotion();
  const isWide = useSyncExternalStore(
    subscribeResize,
    getWideSnapshot,
    getWideServerSnapshot,
  );
  const [activeChip, setActiveChip] = useState<FlatChip | null>(null);

  useEffect(() => {
    if (!activeChip) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveChip(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeChip]);

  const canShowOrbit = isWide && !reducedMotion;

  const rings = useMemo(() => {
    const chips: FlatChip[] = categories.flatMap((cat) =>
      cat.chips.map((c) => ({ ...c, category: cat.title })),
    );
    // Split proportionally to each ring's circumference so icon spacing
    // stays roughly even (the small inner ring gets fewer icons than the
    // large outer ring, instead of a flat 1/3 split).
    const weights = RINGS.map((r) => r.radius);
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    const counts = weights.map((w) =>
      Math.round((w / totalWeight) * chips.length),
    );
    // Rounding can drift the total off by 1-2; fix up on the last ring.
    counts[counts.length - 1] += chips.length - counts.reduce((a, b) => a + b, 0);

    const buckets: FlatChip[][] = [];
    let cursor = 0;
    for (const count of counts) {
      buckets.push(chips.slice(cursor, cursor + count));
      cursor += count;
    }
    return buckets;
  }, [categories]);

  if (!canShowOrbit) {
    return (
      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div
            className="skill-cat reveal"
            key={cat.title}
            data-parallax={0.35 + idx * 0.05}
          >
            <h3>{cat.title}</h3>
            <div className="chips">
              {cat.chips.map((c) => (
                <span className="chip" key={c.label}>
                  <c.icon className="chip-icon" style={{ color: c.color }} />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="skills-orbit-block">
      <div className="skills-orbit-wrap">
        <span className="hud-bracket hud-bracket-tl" aria-hidden="true" />
        <span className="hud-bracket hud-bracket-tr" aria-hidden="true" />
        <span className="hud-bracket hud-bracket-bl" aria-hidden="true" />
        <span className="hud-bracket hud-bracket-br" aria-hidden="true" />

        <div className="hud-sweep" aria-hidden="true" />

        {RINGS.map((ring) => (
          <span
            key={ring.radius}
            className="hud-guide-ring"
            style={{ width: ring.radius * 2, height: ring.radius * 2 }}
            aria-hidden="true"
          />
        ))}

        <div className="orbit-hub" aria-hidden="true">
          <span className="orbit-hub-ring" />
          <span className="orbit-hub-core" />
        </div>

        {rings.map((ringChips, ringIndex) => {
          const { radius, ringClass, counterClass } = RINGS[ringIndex];
          return (
            <div className={`orbit-ring ${ringClass}`} key={ringIndex}>
              {ringChips.map((chipItem, i) => {
                const angle = (i / ringChips.length) * 360;
                const isActive = activeChip?.label === chipItem.label;
                return (
                  <div
                    className="orbit-node-wrap"
                    key={chipItem.label}
                    style={{
                      transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
                    }}
                  >
                    <div className={`orbit-node-counter ${counterClass}`}>
                      <button
                        type="button"
                        className={`orbit-node${isActive ? " active" : ""}`}
                        style={{ color: chipItem.color }}
                        aria-label={`${chipItem.label} — ${chipItem.category}`}
                        onClick={() => setActiveChip(chipItem)}
                      >
                        <chipItem.icon />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="orbit-info-slot" aria-live="polite">
        <AnimatePresence mode="wait">
          {activeChip && (
            <motion.div
              key={activeChip.label}
              className="orbit-info-card"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <activeChip.icon
                className="orbit-info-icon"
                style={{ color: activeChip.color }}
              />
              <div className="orbit-info-text">
                <strong>{activeChip.label}</strong>
                <span>{activeChip.category}</span>
              </div>
              <button
                type="button"
                className="orbit-info-close"
                aria-label="Close"
                onClick={() => setActiveChip(null)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
