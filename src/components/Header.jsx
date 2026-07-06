import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";
import { DownloadIcon, MenuIcon, CloseIcon, SunIcon, MoonIcon } from "./Icons";
import "./Header.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [hoveredHref, setHoveredHref] = useState(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const allIds = ["top", ...links.map((link) => link.href.slice(1))];
    const sections = allIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveId(entry.target.id === "top" ? "" : `#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const targetHref = hoveredHref || activeId;
      const el = targetHref && linkRefs.current[targetHref];
      const nav = navRef.current;
      if (el && nav) {
        const elRect = el.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        setIndicator({ left: elRect.left - navRect.left, width: elRect.width, opacity: 1 });
      } else {
        setIndicator((s) => ({ ...s, opacity: 0 }));
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeId, hoveredHref, open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <div className={`nav-backdrop ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />

        <nav
          ref={navRef}
          className={`nav ${open ? "nav-open" : ""}`}
          onMouseLeave={() => setHoveredHref(null)}
        >
          <span
            className="nav-indicator"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
          {links.map((link) => (
            <a
              key={link.href}
              ref={(el) => (linkRefs.current[link.href] = el)}
              href={link.href}
              className={activeId === link.href ? "active" : ""}
              onMouseEnter={() => setHoveredHref(link.href)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="nav-actions-mobile">
            <a className="btn btn-primary" href={profile.resumeUrl} download>
              <DownloadIcon /> Resume
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <button
            className="icon-toggle"
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="btn btn-primary header-resume" href={profile.resumeUrl} download>
            <DownloadIcon /> Resume
          </a>
          <button
            className="icon-toggle nav-burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
