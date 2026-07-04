import { profile } from "../data/content";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./Icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
        <div className="footer-socials">
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
    </footer>
  );
}
