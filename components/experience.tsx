export default function Experience() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="num">03</span> Experience
        </div>
        <h2 className="sec-title reveal" data-parallax="0.3">
          Where I&apos;ve worked
        </h2>
        <div className="timeline">
          <div className="job reveal" data-parallax="0.45">
            <div className="job-top">
              <div className="job-role">
                Developer · <span className="job-co">Gway Tech Solutions</span>
              </div>
              <div className="job-when">Oct 2024 — Present</div>
            </div>
            <div className="job-loc">Chennai, India</div>
            <ul>
              <li>
                Own module-level delivery within GwayERP, a custom ERP
                platform on React/Vite, NestJS, and MongoDB, serving several
                client implementations running in parallel.
              </li>
              <li>
                Translate client business workflows into normalized data
                models and module specifications, then carry them through to
                production across both frontend and backend.
              </li>
              <li>
                Modeled the Dispatch Management inventory flow around a
                parent request record with allocation lines, enabling
                partial fulfillment and accurate stock tracking across
                multi-stage dispatches.
              </li>
              <li>
                Integrate third-party REST APIs into core modules, handling
                authentication, data mapping, and error states so downstream
                workflows stay reliable.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
