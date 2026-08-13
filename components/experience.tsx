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
                Develop and maintain cross-platform mobile and web apps with
                React Native, React.js and Next.js.
              </li>
              <li>
                Implement advanced state management with Redux and Redux-Saga
                for complex asynchronous data flows.
              </li>
              <li>
                Build reusable, responsive UI components with MUI, Ant Design
                and Tailwind CSS.
              </li>
              <li>
                Integrate RESTful APIs and collaborate with cross-functional
                teams in Agile sprints via Jira.
              </li>
            </ul>
          </div>

          <div className="job dim reveal" data-parallax="0.5">
            <div className="job-top">
              <div className="job-role">
                Front-End Developer Intern ·{" "}
                <span className="job-co">Gway Tech Solutions</span>
              </div>
              <div className="job-when">Jun 2024 — Oct 2024</div>
            </div>
            <div className="job-loc">Chennai, India</div>
            <ul>
              <li>
                Built responsive mobile and web interfaces with React Native and
                React.js.
              </li>
              <li>
                Implemented form handling and validation using Formik and React
                Hook Form.
              </li>
              <li>
                Applied version control (Git), project architecture and API
                handling in a production codebase.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
