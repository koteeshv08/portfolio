import { stats } from "../data/content";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
