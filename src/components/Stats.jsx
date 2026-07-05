import { stats } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { useCountUp } from "../hooks/useCountUp";
import "./Stats.css";

function StatItem({ value, label, delay }) {
  const [ref, visible] = useReveal();
  const display = useCountUp(value, visible);

  return (
    <div
      ref={ref}
      className={`stat-item reveal ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <div className="stat-value">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} label={s.label} delay={i * 90} />
        ))}
      </div>
    </section>
  );
}
