import { profile, achievements, languages } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Turning messy data into decisions people trust</h2>
          <p className="section-sub">{profile.summary}</p>
        </div>

        <div className="about-grid">
          <div className="card about-achievements">
            <h3>Key achievements</h3>
            <ul>
              {achievements.map((a) => (
                <li key={a}>
                  <span className="bullet-dot" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="card about-side">
            <h3>Work authorisation</h3>
            <p>{profile.workAuth}</p>
            <p className="about-open-to">{profile.openTo}</p>

            <h3 className="about-lang-heading">Languages</h3>
            <ul className="about-langs">
              {languages.map((l) => (
                <li key={l.name}>
                  <span>{l.name}</span>
                  <span className="lang-level">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
