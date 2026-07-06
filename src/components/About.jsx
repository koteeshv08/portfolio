import { profile, achievements, languages } from "../data/content";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="section-head" direction="left">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Turning messy data into decisions people trust</h2>
          <p className="section-sub">{profile.summary}</p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="card about-achievements" delay={80}>
            <h3>Key achievements</h3>
            <ul>
              {achievements.map((a) => (
                <li key={a}>
                  <span className="bullet-dot" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card about-side" delay={160}>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
