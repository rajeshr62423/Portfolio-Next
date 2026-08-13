function GradIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M9 13.5 7 22l5-3 5 3-2-8.5" />
    </svg>
  );
}

const EDUCATION = [
  {
    title: "B.E. Computer Science",
    meta: "M.R.K Institute of Technology, Cuddalore · Nov 2020 — Jun 2024",
  },
  {
    title: "HSC · Higher Secondary — 70.3%",
    meta: "DBTR National Higher Secondary School, Mayiladuthurai",
  },
  {
    title: "SSLC — 82.6%",
    meta: "DBTR National Higher Secondary School, Mayiladuthurai",
  },
];

const CERTIFICATIONS = [
  { title: "Rising Star Award — 2024", meta: "Gway Tech Solutions" },
  { title: "React Native Development Certification", meta: "Udemy" },
];

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="wrap">
        <div className="sec-label mono">
          <span className="num">05</span> Credentials
        </div>
        <h2 className="sec-title reveal" data-parallax="0.3">
          Education &amp; certifications
        </h2>
        <div className="two-col">
          <div className="card reveal" data-parallax="0.4">
            <h3>Education</h3>
            {EDUCATION.map((e) => (
              <div className="cred" key={e.title}>
                <span className="badge">
                  <GradIcon />
                </span>
                <span className="txt">
                  <strong>{e.title}</strong>
                  <span>{e.meta}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="card reveal" data-parallax="0.55">
            <h3>Certifications &amp; Achievements</h3>
            {CERTIFICATIONS.map((c) => (
              <div className="cred" key={c.title}>
                <span className="badge">
                  <BadgeIcon />
                </span>
                <span className="txt">
                  <strong>{c.title}</strong>
                  <span>{c.meta}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
