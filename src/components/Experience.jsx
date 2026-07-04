import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.company}>
              <div className="timeline-marker" />
              <div className="card timeline-card">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
