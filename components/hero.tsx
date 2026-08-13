import Typewriter from "./typewriter";
import { ResumeTrigger } from "./resume-modal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy" data-parallax="0.35">
          <span className="eyebrow mono">
            <Typewriter />
            <span className="tw-caret" aria-hidden="true" />
          </span>
          <h1 className="title">
            I ship <span className="accent">web &amp; mobile</span> apps from
            database to design system.
          </h1>
          <p className="lede">
            Two years building <strong>ERP-scale products</strong> with React,
            React Native, Node.js and MongoDB — the kind with dozens of
            interconnected modules and real users depending on them.
          </p>
          <div className="status-line mono">
            <span className="pulse" /> available: immediate · Chennai, IN
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Start a conversation
            </a>
            <ResumeTrigger className="btn btn-ghost">View resume</ResumeTrigger>
            <a className="btn btn-ghost" href="#projects">
              See the work
            </a>
          </div>
        </div>

        {/* signature: component tree */}
        <div className="tree-card reveal" data-parallax="0.5">
          <div className="tree-head mono">
            <span className="lights">
              <i />
              <i />
              <i />
            </span>
            <span>App.tsx</span>
          </div>
          <svg
            className="tree"
            viewBox="0 0 360 300"
            role="img"
            aria-label="Component tree diagram of the stack"
          >
            <path className="edge live" d="M180,52 C180,80 90,78 90,104" />
            <path className="edge live" d="M180,52 C180,80 270,78 270,104" />
            <path className="edge" d="M90,140 C90,166 60,168 60,192" />
            <path className="edge" d="M90,140 C90,166 130,168 130,192" />
            <path className="edge" d="M270,140 C270,166 240,168 240,192" />
            <path className="edge live" d="M270,140 C270,166 305,168 305,192" />
            <path className="edge" d="M60,228 C60,252 60,250 60,268" />
            <path className="edge" d="M240,228 C240,252 240,250 240,268" />

            <g className="node root">
              <rect x="132" y="24" width="96" height="30" rx="7" />
              <text x="180" y="43" textAnchor="middle">
                &lt;App /&gt;
              </text>
            </g>
            <g className="node">
              <rect x="40" y="106" width="100" height="30" rx="7" />
              <text x="90" y="125" textAnchor="middle">
                Client
              </text>
            </g>
            <g className="node">
              <rect x="220" y="106" width="100" height="30" rx="7" />
              <text x="270" y="125" textAnchor="middle">
                Server
              </text>
            </g>
            <g className="node">
              <rect x="18" y="194" width="84" height="28" rx="7" />
              <text x="60" y="212" textAnchor="middle">
                React
              </text>
            </g>
            <g className="node">
              <rect x="92" y="194" width="84" height="28" rx="7" />
              <text x="134" y="212" textAnchor="middle">
                Native
              </text>
            </g>
            <g className="node">
              <rect x="198" y="194" width="84" height="28" rx="7" />
              <text x="240" y="212" textAnchor="middle">
                Node
              </text>
            </g>
            <g className="node">
              <rect x="272" y="194" width="76" height="28" rx="7" />
              <text x="310" y="212" textAnchor="middle">
                Nest
              </text>
            </g>
            <g className="node">
              <rect x="18" y="270" width="84" height="26" rx="7" />
              <text x="60" y="287" textAnchor="middle">
                Redux
              </text>
            </g>
            <g className="node">
              <rect x="198" y="270" width="84" height="26" rx="7" />
              <text x="240" y="287" textAnchor="middle">
                MongoDB
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
