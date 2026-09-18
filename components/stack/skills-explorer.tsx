"use client";

import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import {
  MdCode,
  MdWeb,
  MdDns,
  MdPhoneIphone,
  MdStorage,
  MdIntegrationInstructions,
  MdSmartToy,
  MdSearch,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import type { IconType } from "react-icons";
import type { SkillCategory } from "../stack";

const CATEGORY_ICON: Record<string, IconType> = {
  Languages: MdCode,
  Frontend: MdWeb,
  Backend: MdDns,
  Mobile: MdPhoneIphone,
  Database: MdStorage,
  "Integrations & Tools": MdIntegrationInstructions,
  "AI-Assisted Development": MdSmartToy,
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

export default function SkillsExplorer({
  categories,
  children,
}: {
  categories: SkillCategory[];
  children: ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [[active, direction], setActive] = useState<[number, number]>([0, 0]);

  const totalCount = useMemo(
    () => categories.reduce((sum, c) => sum + c.chips.length, 0),
    [categories],
  );

  function goTo(i: number) {
    const clamped = Math.min(categories.length - 1, Math.max(0, i));
    if (clamped === active) return;
    setActive([clamped, clamped > active ? 1 : -1]);
  }

  function onStageKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  }

  function onDragEnd(_e: unknown, info: PanInfo) {
    if (info.offset.x < -60) goTo(active + 1);
    else if (info.offset.x > 60) goTo(active - 1);
  }

  const current = categories[active];
  const q = query.trim().toLowerCase();
  const visibleChips = useMemo(
    () => current.chips.filter((chip) => chip.label.toLowerCase().includes(q)),
    [current, q],
  );
  const CurrentIcon = CATEGORY_ICON[current.title] ?? MdCode;

  return (
    <div className="skills-layout">
      <div className="skills-intro">
        {children}

        {/* Category jump list — hidden for now; carousel arrows/dots below
            handle navigation between Languages/Frontend/Backend/Mobile/
            Database/Integrations & Tools/AI-Assisted Development.
        <div className="skills-filter-list" role="tablist" aria-label="Jump to category">
          {categories.map((c, i) => {
            const Icon = CATEGORY_ICON[c.title] ?? MdCode;
            return (
              <button
                key={c.title}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`skills-filter-btn${active === i ? " active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="skills-filter-icon">
                  <Icon />
                </span>
                <span className="skills-filter-label">{c.title}</span>
                <span className="skills-filter-count">{c.chips.length}</span>
              </button>
            );
          })}
        </div>
        */}

        <p className="skills-tagline mono">Always learning, always building.</p>
      </div>

      <div className="skills-main">
        <div className="skills-toolbar">
          <label className="skills-search">
            <MdSearch aria-hidden="true" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search technologies"
            />
          </label>
          <div className="skills-count-badge mono">
            <span className="skills-count-num">{totalCount} Technologies</span>
            <span className="skills-count-sub">Full Stack · Modern Stack</span>
          </div>
        </div>

        <div className="skills-carousel">
          <button
            type="button"
            className="proj-nav skills-carousel-nav"
            aria-label="Previous category"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
          >
            <MdChevronLeft />
          </button>

          <div
            className="skills-stage"
            role="region"
            aria-roledescription="carousel"
            aria-label="Skill categories"
            tabIndex={0}
            onKeyDown={onStageKeyDown}
          >
            <AnimatePresence custom={direction} mode="wait" initial={false}>
              <motion.div
                key={current.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={onDragEnd}
                aria-roledescription="slide"
                aria-label={`${active + 1} of ${categories.length}: ${current.title}`}
              >
                <div className="skills-group">
                  <div className="skills-group-head">
                    <span className="skills-group-icon">
                      <CurrentIcon />
                    </span>
                    <div>
                      <h3>{current.title}</h3>
                    </div>
                    <span className="skills-group-count mono">
                      {current.chips.length} Skills
                    </span>
                  </div>
                  {visibleChips.length === 0 ? (
                    <p className="skills-empty">
                      No technologies match &ldquo;{query}&rdquo; in {current.title}.
                    </p>
                  ) : (
                    <div className="skills-card-grid">
                      {visibleChips.map((chip) => (
                        <div className="skills-card" key={chip.label}>
                          <span
                            className="skills-card-icon"
                            style={{ color: chip.color }}
                          >
                            <chip.icon aria-hidden="true" />
                          </span>
                          <h4>{chip.label}</h4>
                          <p>{chip.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="proj-nav skills-carousel-nav"
            aria-label="Next category"
            onClick={() => goTo(active + 1)}
            disabled={active === categories.length - 1}
          >
            <MdChevronRight />
          </button>
        </div>

        <div className="proj-dots" role="tablist" aria-label="Select category">
          {categories.map((c, i) => (
            <button
              key={c.title}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to ${c.title}`}
              className={`proj-dot${active === i ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
