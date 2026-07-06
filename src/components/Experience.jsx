import { experience } from "../data/content";
import Reveal from "./Reveal";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal className="section-head" direction="right">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <div className="timeline-item" key={job.company}>
              <div className="timeline-marker" />
              <Reveal as="div" className="card timeline-card" delay={i * 100}>
                <div className="timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <div className="timeline-when">
                    <span>{job.period}</span>
                    <span className="timeline-location">{job.location}</span>
                  </div>
                </div>
                {job.note && <p className="timeline-note">{job.note}</p>}
                <ul className="timeline-bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>
                      <span className="bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
