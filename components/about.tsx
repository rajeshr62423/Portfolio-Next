export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="num">01</span> Profile
        </div>
        <div className="about-grid">
          <div className="about reveal" data-parallax="0.4">
            <h2 className="sec-title">
              A full-stack developer who thinks in components and ships in
              sprints.
            </h2>
            <p>
              I build scalable, user-centric applications across web and mobile.
              On the front end that&apos;s{" "}
              <strong>React.js, Next.js and React Native</strong>; on the back
              end, <strong>NestJS, Node.js and Express</strong> — with{" "}
              <strong>Prisma/PostgreSQL and MongoDB</strong> for schema design
              and data modeling, and Redux/Redux-Saga taming the complex,
              asynchronous data flows that large products tend to grow.
            </p>
            <p>
              Most of my day-to-day is spent turning business workflows into
              normalized data models and production-ready modules — spanning
              schema design, REST API development, and release — plus
              independent projects exploring self-hosted LLM integration.
            </p>
          </div>
          <div className="facts reveal" data-parallax="0.55">
            <div className="fact">
              <span className="k">experience</span>
              <span className="v">2 years</span>
            </div>
            <div className="fact">
              <span className="k">focus</span>
              <span className="v">NestJS · React · Prisma</span>
            </div>
            <div className="fact">
              <span className="k">based</span>
              <span className="v">Chennai, TN</span>
            </div>
            <div className="fact">
              <span className="k">status</span>
              <span className="v on">Open to work</span>
            </div>
            <div className="fact">
              <span className="k">notice</span>
              <span className="v">Immediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
