import { useEffect, useState } from "react";

function parseValue(raw) {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0, hasCommas: false };
  const [, prefix, numberStr, suffix] = match;
  const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
  const number = parseFloat(numberStr.replace(/,/g, ""));
  return { prefix, number, suffix, decimals, hasCommas: numberStr.includes(",") };
}

function formatNumber(value, decimals, hasCommas) {
  const fixed = value.toFixed(decimals);
  if (!hasCommas) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}

export function useCountUp(raw, active, duration = 1400) {
  const { prefix, number, suffix, decimals, hasCommas } = parseValue(raw);
  const [display, setDisplay] = useState(prefix + formatNumber(0, decimals, hasCommas) + suffix);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(raw);
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(prefix + formatNumber(number * eased, decimals, hasCommas) + suffix);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, raw]);

  return display;
}
