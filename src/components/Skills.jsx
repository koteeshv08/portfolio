import { skills } from "../data/content";
import Reveal from "./Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Tools &amp; technologies</h2>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal className="card skills-card" delay={i * 80} key={group.category}>
              <h3>{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
