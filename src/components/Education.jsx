import { education, certifications } from "../data/content";
import Reveal from "./Reveal";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Education &amp; Certifications</span>
          <h2 className="section-title">Academic background &amp; credentials</h2>
        </Reveal>

        <div className="education-grid">
          <div className="education-list">
            {education.map((e, i) => (
              <Reveal className="card education-card" delay={i * 100} key={e.degree}>
                <div className="education-head">
                  <h3>{e.degree}</h3>
                  <span className="education-period">{e.period}</span>
                </div>
                <p className="education-institution">{e.institution}</p>
                <p className="education-grade">{e.grade}</p>
                {e.detail && <p className="education-detail">{e.detail}</p>}
              </Reveal>
            ))}
          </div>

          <Reveal className="card cert-card" delay={120}>
            <h3>Certifications</h3>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c.name}>
                  <div>
                    <p className="cert-name">{c.name}</p>
                    <p className="cert-issuer">{c.issuer}</p>
                  </div>
                  <span className={`cert-status ${c.status === "Active" ? "is-active" : ""}`}>
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
