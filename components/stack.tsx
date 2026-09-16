import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiRedux,
  SiReacthookform,
  SiFormik,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiMui,
  SiAntdesign,
  SiTailwindcss,
  SiOllama,
  SiGit,
  SiPostman,
  SiJira,
  SiVercel,
  SiRender,
  SiClaude,
  SiGithubcopilot,
  SiGooglegemini,
} from "react-icons/si";
import {
  MdNavigation,
  MdDevices,
  MdExtension,
  MdPalette,
  MdApi,
  MdIntegrationInstructions,
  MdTerminal,
  MdSmartToy,
} from "react-icons/md";

type Chip = { label: string; icon: IconType; color: string };

function chip(label: string, icon: IconType, color = "currentColor"): Chip {
  return { label, icon, color };
}

const CATEGORIES: { title: string; chips: Chip[] }[] = [
  {
    title: "Languages",
    chips: [
      chip("JavaScript (ES6+)", SiJavascript, "#F7DF1E"),
      chip("TypeScript", SiTypescript, "#3178C6"),
      chip("HTML5", SiHtml5, "#E34F26"),
      chip("CSS3", SiCss, "#1572B6"),
    ],
  },
  {
    title: "Frontend",
    chips: [
      chip("React.js", SiReact, "#61DAFB"),
      chip("Next.js", SiNextdotjs),
      chip("Vite", SiVite, "#646CFF"),
      chip("Redux", SiRedux, "#764ABC"),
      chip("Redux-Saga", SiRedux, "#764ABC"),
      chip("React Hook Form", SiReacthookform, "#EC5990"),
      chip("Formik", SiFormik, "#2563EB"),
    ],
  },
  {
    title: "Mobile",
    chips: [
      chip("React Native (Android)", SiReact, "#61DAFB"),
      chip("Redux", SiRedux, "#764ABC"),
      chip("React Navigation", MdNavigation),
      chip("Responsive UI", MdDevices),
      chip("Third-Party Libraries & Integrations", MdExtension),
    ],
  },
  {
    title: "Backend",
    chips: [
      chip("NestJS", SiNestjs, "#E0234E"),
      chip("Node.js", SiNodedotjs, "#339933"),
      chip("Express.js", SiExpress),
    ],
  },
  {
    title: "Database & UI",
    chips: [
      chip("PostgreSQL", SiPostgresql, "#4169E1"),
      chip("Prisma ORM", SiPrisma),
      chip("MongoDB", SiMongodb, "#47A248"),
      chip("Material UI", SiMui, "#007FFF"),
      chip("Ant Design", SiAntdesign, "#0170FE"),
      chip("Tailwind CSS", SiTailwindcss, "#06B6D4"),
      chip("React Native Paper", MdPalette),
    ],
  },
  {
    title: "Integrations & Tools",
    chips: [
      chip("REST APIs", MdApi),
      chip("Third-Party Service Integration", MdIntegrationInstructions),
      chip("Ollama (LLM)", SiOllama),
      chip("Git", SiGit, "#F05032"),
      chip("Postman", SiPostman, "#FF6C37"),
      chip("Jira", SiJira, "#0052CC"),
      chip("Vercel", SiVercel),
      chip("Render", SiRender, "#46E3B7"),
    ],
  },
  {
    title: "AI Tools",
    chips: [
      chip("Claude", SiClaude, "#D97757"),
      chip("GitHub Copilot", SiGithubcopilot),
      chip("Codex", MdTerminal),
      chip("Gemini", SiGooglegemini, "#4796E3"),
      chip("Kiro", MdSmartToy),
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="num">02</span> Stack
        </div>
        <h2 className="sec-title reveal" data-parallax="0.3">
          What I build with
        </h2>
        <div className="skills-grid">
          {CATEGORIES.map((cat, idx) => (
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
      </div>
    </section>
  );
}
