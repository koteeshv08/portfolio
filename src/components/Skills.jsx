import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Tools &amp; technologies</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="card skills-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
