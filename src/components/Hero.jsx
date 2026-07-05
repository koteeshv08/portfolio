import { profile } from "../data/content";
import profileImg from "../assets/profile.jpg";
import { LinkedInIcon, GitHubIcon, MailIcon, MapPinIcon, DownloadIcon } from "./Icons";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker hero-fade" style={{ animationDelay: "0ms" }}>
            Hi, I'm {profile.shortName.split(" ")[0]} 👋
          </p>
          <h1 className="hero-title hero-fade" style={{ animationDelay: "80ms" }}>
            {profile.title} building <span className="hero-accent">Power BI &amp; Microsoft Fabric</span> solutions at enterprise scale
          </h1>
          <p className="hero-summary hero-fade" style={{ animationDelay: "160ms" }}>
            {profile.summary}
          </p>

          <div className="hero-meta hero-fade" style={{ animationDelay: "240ms" }}>
            <span className="hero-meta-item">
              <MapPinIcon /> {profile.location}
            </span>
            <span className="hero-meta-item">{profile.workAuth}</span>
          </div>

          <div className="hero-actions hero-fade" style={{ animationDelay: "320ms" }}>
            <a className="btn btn-primary" href={profile.resumeUrl} download>
              <DownloadIcon /> Download Resume
            </a>
            <a className="btn btn-outline" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-socials hero-fade" style={{ animationDelay: "400ms" }}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual hero-fade hero-fade-scale" style={{ animationDelay: "120ms" }}>
          <div className="hero-photo-frame">
            <img src={profileImg} alt={profile.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
