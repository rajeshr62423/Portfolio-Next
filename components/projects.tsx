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
            <div className="proj-viz">
              <svg
                viewBox="0 0 320 320"
                width="100%"
                role="img"
                aria-label="Diagram of ERP modules connected to a central core"
              >
                <g className="spoke-group">
                  <line className="spoke" x1="160" y1="160" x2="160" y2="46" />
                  <line className="spoke" x1="160" y1="160" x2="258" y2="103" />
                  <line className="spoke" x1="160" y1="160" x2="258" y2="217" />
                  <line className="spoke" x1="160" y1="160" x2="160" y2="274" />
                  <line className="spoke" x1="160" y1="160" x2="62" y2="217" />
                  <line className="spoke" x1="160" y1="160" x2="62" y2="103" />
                  <line className="spoke" x1="160" y1="160" x2="42" y2="160" />
                  <line className="spoke" x1="160" y1="160" x2="268" y2="160" />
                </g>

                <g className="mod">
                  <circle className="mod-core" cx="160" cy="160" r="34" />
                  <text className="mod-core-text" x="160" y="158" textAnchor="middle">
                    ERP
                  </text>
                  <text
                    className="mod-core-text"
                    x="160"
                    y="170"
                    textAnchor="middle"
                    style={{ fontSize: 9 }}
                  >
                    core
                  </text>
                </g>

                <g className="mod">
                  <rect x="126" y="30" width="68" height="26" rx="6" />
                  <text x="160" y="47" textAnchor="middle">
                    CRM
                  </text>
                </g>
                <g className="mod">
                  <rect x="224" y="90" width="76" height="26" rx="6" />
                  <text x="262" y="107" textAnchor="middle">
                    Sales
                  </text>
                </g>
                <g className="mod">
                  <rect x="222" y="204" width="86" height="26" rx="6" />
                  <text x="265" y="221" textAnchor="middle">
                    Service
                  </text>
                </g>
                <g className="mod">
                  <rect x="112" y="278" width="96" height="26" rx="6" />
                  <text x="160" y="295" textAnchor="middle">
                    Inventory
                  </text>
                </g>
                <g className="mod">
                  <rect x="8" y="204" width="96" height="26" rx="6" />
                  <text x="56" y="221" textAnchor="middle">
                    Finance
                  </text>
                </g>
                <g className="mod">
                  <rect x="4" y="90" width="104" height="26" rx="6" />
                  <text x="56" y="107" textAnchor="middle">
                    Procurement
                  </text>
                </g>
                <g className="mod">
                  <rect x="0" y="147" width="40" height="26" rx="6" />
                  <text x="20" y="164" textAnchor="middle" style={{ fontSize: 9 }}>
                    Gate
                  </text>
                </g>
                <g className="mod">
                  <rect x="220" y="147" width="96" height="26" rx="6" />
                  <text x="268" y="164" textAnchor="middle">
                    Production
                  </text>
                </g>
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
