import { education, certifications } from "../data/content";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Education &amp; Certifications</span>
          <h2 className="section-title">Academic background &amp; credentials</h2>
        </div>

        <div className="education-grid">
          <div className="education-list">
            {education.map((e) => (
              <div className="card education-card" key={e.degree}>
                <div className="education-head">
                  <h3>{e.degree}</h3>
                  <span className="education-period">{e.period}</span>
                </div>
                <p className="education-institution">{e.institution}</p>
                <p className="education-grade">{e.grade}</p>
                {e.detail && <p className="education-detail">{e.detail}</p>}
              </div>
            ))}
          </div>

          <div className="card cert-card">
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
          </div>
        </div>
      </div>
    </section>
  );
}
