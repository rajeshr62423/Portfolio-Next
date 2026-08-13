const CATEGORIES: { title: string; chips: string[] }[] = [
  {
    title: "Languages",
    chips: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    chips: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Redux-Saga",
      "Redux Thunk",
      "React Hook Form",
      "REST APIs",
    ],
  },
  {
    title: "Mobile",
    chips: [
      "React Native",
      "Redux",
      "React Navigation",
      "RHF",
      "REST API Integration",
      "Responsive UI",
      "Third-Party Libraries & Integrations",
    ],
  },
  {
    title: "Backend",
    chips: ["NestJS", "Node.js", "Express.js"],
  },
  {
    title: "Database & UI",
    chips: [
      "MongoDB",
      "Material UI",
      "Ant Design",
      "Tailwind CSS",
      "React Native Paper",
    ],
  },
  {
    title: "Tools & Practice",
    chips: ["Git", "Jenkins", "CI/CD", "Jira", "Open Project", "REST APIs"],
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
                {cat.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
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
