import { profile } from "../data/content";
import { MailIcon, LinkedInIcon, GitHubIcon, MapPinIcon, DownloadIcon } from "./Icons";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="card contact-card">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Let's work together</h2>
            <p className="section-sub">
              {profile.openTo}. Feel free to reach out about BI roles, data engineering projects, or just to connect.
            </p>
          </div>

          <div className="contact-links">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <MailIcon />
              <span>{profile.email}</span>
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              <span>linkedin.com/in/koteesh</span>
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
              <span>github.com/koteeshv08</span>
            </a>
            <span className="contact-link contact-static">
              <MapPinIcon />
              <span>{profile.location}</span>
            </span>
          </div>

          <a className="btn btn-primary contact-resume" href={profile.resumeUrl} download>
            <DownloadIcon /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
