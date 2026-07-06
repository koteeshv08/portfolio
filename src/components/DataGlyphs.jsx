const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function BarChartGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 42h36" />
      <rect x="11" y="26" width="6" height="16" />
      <rect x="21" y="16" width="6" height="26" />
      <rect x="31" y="8" width="6" height="34" />
    </svg>
  );
}

export function LineChartGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 40h36" />
      <path d="M6 40 6 6" />
      <path d="M8 32 18 22 26 28 40 10" />
      <circle cx="18" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="26" cy="28" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="40" cy="10" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PieChartGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 8v16l12.7 8.7A16 16 0 0 0 24 8Z" />
    </svg>
  );
}

export function DatabaseGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <ellipse cx="24" cy="10" rx="15" ry="6" />
      <path d="M9 10v14c0 3.3 6.7 6 15 6s15-2.7 15-6V10" />
      <path d="M9 24v14c0 3.3 6.7 6 15 6s15-2.7 15-6V24" />
    </svg>
  );
}

export function ScatterGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 42h36M6 42V6" />
      <circle cx="14" cy="30" r="2" fill="currentColor" stroke="none" />
      <circle cx="22" cy="16" r="2" fill="currentColor" stroke="none" />
      <circle cx="28" cy="26" r="2" fill="currentColor" stroke="none" />
      <circle cx="36" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="18" cy="36" r="2" fill="currentColor" stroke="none" />
      <circle cx="34" cy="30" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BinaryGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...props} fill="none">
      <text x="2" y="18" fontSize="14" fontFamily="monospace" fill="currentColor">
        01
      </text>
      <text x="24" y="18" fontSize="14" fontFamily="monospace" fill="currentColor">
        10
      </text>
      <text x="2" y="36" fontSize="14" fontFamily="monospace" fill="currentColor">
        11
      </text>
      <text x="24" y="36" fontSize="14" fontFamily="monospace" fill="currentColor">
        00
      </text>
    </svg>
  );
}

export function TableGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="6" y="8" width="36" height="32" rx="2" />
      <path d="M6 18h36M6 28h36M18 8v32M30 8v32" />
    </svg>
  );
}

export function FunnelGlyph(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M6 8h36l-13 18v14l-10 4V26Z" />
    </svg>
  );
}
