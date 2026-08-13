const MINI_PROJECTS = [
  {
    title: "Realtime Chat App",
    description:
      "A live one-to-one and group messaging app where messages arrive the moment they're sent.",
    stack: ["React JS", "Node.js", "Socket.IO", "MongoDB"],
  },
  {
    title: "Moi Book",
    description:
      "A digital ledger for managing moi — the monetary gifts recorded at Tamil functions like weddings. Log each contributor and amount, track running totals, and keep a clear record for reciprocation at future events.",
    stack: ["React Native", "Redux", "MongoDB", "NestJS"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="num">04</span> Projects
        </div>
        <h2 className="sec-title reveal" data-parallax="0.3">
          Things I&apos;ve built
        </h2>

        <div className="proj reveal" data-parallax="0.42">
          <div className="proj-grid">
            <div className="proj-body">
              <div className="proj-tag mono">FEATURED · ERP PLATFORM</div>
              <h3>ERP Platform · Gway Tech Solutions</h3>
              <p>
                A modular, customizable ERP for managing end-to-end business
                operations — one unified platform, many interconnected modules.
              </p>
              <ul>
                <li>
                  Built integrated modules: CRM, Sales, Procurement, Production,
                  Inventory, Service, Gate Management, Finance.
                </li>
                <li>
                  Designed configurable features and dynamic forms for client
                  workflow adaptation.
                </li>
                <li>
                  Created reusable dashboards in React.js and React Native with
                  Redux &amp; Redux-Saga.
                </li>
                <li>
                  Integrated REST APIs for CRUD, cross-module data flow and
                  reporting.
                </li>
              </ul>
              <div className="stackrow">
                <span className="chip mono">React.js</span>
                <span className="chip mono">React Native</span>
                <span className="chip mono">Redux</span>
                <span className="chip mono">REST APIs</span>
                <span className="chip mono">NestJS</span>
                <span className="chip mono">MongoDB</span>
                <span className="chip mono">
                  Third-Party Libraries & Integrations
                </span>
              </div>
            </div>
            <div className="proj-viz" aria-hidden="true">
              <svg
                viewBox="0 0 320 260"
                width="100%"
                role="img"
                aria-label="Module graph of the ERP platform"
              >
                <line className="spoke" x1="160" y1="130" x2="160" y2="40" />
                <line className="spoke" x1="160" y1="130" x2="260" y2="90" />
                <line className="spoke" x1="160" y1="130" x2="260" y2="180" />
                <line className="spoke" x1="160" y1="130" x2="160" y2="222" />
                <line className="spoke" x1="160" y1="130" x2="60" y2="180" />
                <line className="spoke" x1="160" y1="130" x2="60" y2="90" />

                <g className="mod">
                  <rect x="118" y="14" width="84" height="26" rx="7" />
                  <text x="160" y="31" textAnchor="middle">
                    CRM
                  </text>
                </g>
                <g className="mod">
                  <rect x="222" y="77" width="84" height="26" rx="7" />
                  <text x="264" y="94" textAnchor="middle">
                    Sales
                  </text>
                </g>
                <g className="mod">
                  <rect x="222" y="167" width="84" height="26" rx="7" />
                  <text x="264" y="184" textAnchor="middle">
                    Finance
                  </text>
                </g>
                <g className="mod">
                  <rect x="118" y="209" width="84" height="26" rx="7" />
                  <text x="160" y="226" textAnchor="middle">
                    Inventory
                  </text>
                </g>
                <g className="mod">
                  <rect x="14" y="167" width="84" height="26" rx="7" />
                  <text x="56" y="184" textAnchor="middle">
                    Service
                  </text>
                </g>
                <g className="mod">
                  <rect x="14" y="77" width="84" height="26" rx="7" />
                  <text x="56" y="94" textAnchor="middle">
                    Production
                  </text>
                </g>

                <circle
                  className="mod-core"
                  cx="160"
                  cy="130"
                  r="34"
                  strokeWidth="1.5"
                />
                <text
                  className="mod-core-text"
                  x="160"
                  y="135"
                  textAnchor="middle"
                >
                  ERP Core
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="proj-mini-grid">
          {MINI_PROJECTS.map((p, idx) => (
            <div
              className="proj-mini reveal"
              key={p.title}
              data-parallax={0.38 + idx * 0.08}
            >
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="stackrow">
                {p.stack.map((s) => (
                  <span className="chip mono" key={s}>
                    {s}
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
