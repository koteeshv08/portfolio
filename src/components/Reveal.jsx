import { useReveal } from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", delay = 0, direction = "up", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
