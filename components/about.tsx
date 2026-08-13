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
              end, <strong>Node.js, Express, NestJS and MongoDB</strong> — with
              Redux and Redux-Saga taming the complex, asynchronous data flows
              that large products tend to grow.
            </p>
            <p>
              Most of my day-to-day is spent making interfaces that stay{" "}
              <strong>consistent and responsive</strong> across many screens and
              clients, integrating REST APIs cleanly, and delivering features
              through the full Agile sprint cycle.
            </p>
          </div>
          <div className="facts reveal" data-parallax="0.55">
            <div className="fact">
              <span className="k">experience</span>
              <span className="v">2 years</span>
            </div>
            <div className="fact">
              <span className="k">focus</span>
              <span className="v">MERN · Mobile</span>
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
