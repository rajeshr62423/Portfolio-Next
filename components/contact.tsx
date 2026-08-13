import CopyEmailButton from "./copy-email-button";
import { ResumeTrigger } from "./resume-modal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <h2 data-parallax="0.3">
          Let&apos;s build something <span className="accent">real</span>.
        </h2>
        <p data-parallax="0.4">
          Open to full-stack and mobile roles, freelance work, or just talking
          shop about React, React Native and MongoDB at scale.
        </p>
        <div className="contact-links" data-parallax="0.5">
          <a
            className="btn btn-primary"
            href="mailto:rajeshravichandrans2001@gmail.com"
          >
            Email me
          </a>
          <a className="btn btn-ghost" href="tel:+916382022243">
            Call
          </a>
          <a
            className="btn btn-ghost"
            href="https://wa.me/916382022243"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/rajesh-ravichandran-290185244"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/rajeshr62423"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <CopyEmailButton />
          <ResumeTrigger className="btn btn-ghost">View resume</ResumeTrigger>
        </div>
      </div>
    </section>
  );
}
