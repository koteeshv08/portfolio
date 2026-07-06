import { stats } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { useCountUp } from "../hooks/useCountUp";
import "./Stats.css";

const RING_SIZE = 116;
const STROKE_WIDTH = 6;
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function StatItem({ value, label, progress, delay }) {
  const [ref, visible] = useReveal();
  const display = useCountUp(value, visible);
  const offset = CIRCUMFERENCE * (1 - (visible ? progress : 0) / 100);

  return (
    <div
      ref={ref}
      className={`stat-item reveal ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <div className="stat-ring" style={{ width: RING_SIZE, height: RING_SIZE }}>
        <svg viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`} width={RING_SIZE} height={RING_SIZE}>
          <circle
            className="stat-ring-track"
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
          />
          <circle
            className="stat-ring-fill"
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="stat-value">{display}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} label={s.label} progress={s.progress} delay={i * 90} />
        ))}
      </div>
    </section>
  );
}
