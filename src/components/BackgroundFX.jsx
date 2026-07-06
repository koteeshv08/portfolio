import { useEffect, useRef } from "react";
import {
  BarChartGlyph,
  LineChartGlyph,
  PieChartGlyph,
  DatabaseGlyph,
  ScatterGlyph,
  BinaryGlyph,
  TableGlyph,
  FunnelGlyph,
} from "./DataGlyphs";
import "./BackgroundFX.css";

const items = [
  { Icon: BarChartGlyph, top: "6%", left: "5%", size: 44, dur: 22, delay: 0, depth: 0.05 },
  { Icon: LineChartGlyph, top: "16%", left: "86%", size: 56, dur: 27, delay: 1.5, depth: 0.09 },
  { Icon: PieChartGlyph, top: "38%", left: "10%", size: 40, dur: 20, delay: 0.8, depth: 0.04 },
  { Icon: DatabaseGlyph, top: "58%", left: "90%", size: 46, dur: 25, delay: 3, depth: 0.08 },
  { Icon: ScatterGlyph, top: "74%", left: "6%", size: 50, dur: 29, delay: 0.4, depth: 0.06 },
  { Icon: BinaryGlyph, top: "28%", left: "48%", size: 52, dur: 31, delay: 4, depth: 0.11 },
  { Icon: TableGlyph, top: "86%", left: "58%", size: 42, dur: 21, delay: 1.2, depth: 0.07 },
  { Icon: FunnelGlyph, top: "50%", left: "72%", size: 36, dur: 24, delay: 2.2, depth: 0.1 },
  { Icon: BarChartGlyph, top: "92%", left: "14%", size: 34, dur: 19, delay: 2.8, depth: 0.05 },
  { Icon: ScatterGlyph, top: "4%", left: "60%", size: 38, dur: 23, delay: 3.6, depth: 0.06 },
];

const shapes = [
  { top: "-6%", left: "72%", size: 420, variant: "morphA", dur: 26, depth: 0.03 },
  { top: "58%", left: "-10%", size: 380, variant: "morphB", dur: 32, depth: 0.05 },
  { top: "22%", left: "38%", size: 300, variant: "morphC", dur: 29, depth: 0.02 },
];

export default function BackgroundFX() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        rootRef.current?.querySelectorAll("[data-depth]").forEach((el) => {
          const depth = parseFloat(el.dataset.depth);
          el.style.transform = `translateY(${-(y * depth)}px)`;
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bgfx" ref={rootRef} aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={`shape-${i}`}
          className="bgfx-shape-wrap"
          data-depth={shape.depth}
          style={{ top: shape.top, left: shape.left }}
        >
          <div
            className={`bgfx-shape bgfx-${shape.variant}`}
            style={{
              width: shape.size,
              height: shape.size,
              animationDuration: `${shape.dur}s`,
            }}
          />
        </div>
      ))}

      {items.map((item, i) => (
        <div
          key={i}
          className="bgfx-parallax"
          data-depth={item.depth}
          style={{ top: item.top, left: item.left }}
        >
          <item.Icon
            className="bgfx-float"
            style={{
              width: item.size,
              height: item.size,
              animationDuration: `${item.dur}s`,
              animationDelay: `${item.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
