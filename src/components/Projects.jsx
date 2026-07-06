import { projects } from "../data/content";
import { GitHubIcon, ArrowUpRightIcon } from "./Icons";
import Reveal from "./Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head" direction="left">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Featured work</h2>
          <p className="section-sub">
            A mix of enterprise-grade data engineering and independent research that goes beyond typical BI tooling.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal as="article" className="card project-card" delay={i * 100} key={p.name}>
              <div className="project-top">
                <div>
                  <h3>{p.name}</h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                </div>
                <span className="project-period">{p.period}</span>
              </div>

              <p className="project-desc">{p.description}</p>

              <ul className="project-bullets">
                {p.bullets.map((b) => (
                  <li key={b}>
                    <span className="bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-meta">{p.meta}</span>
                <a href={p.repo} target="_blank" rel="noreferrer" className="project-link">
                  <GitHubIcon /> View repo <ArrowUpRightIcon />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
