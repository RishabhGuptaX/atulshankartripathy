import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { professor, profileLabels, profileOrder } from "@/data/professor";

const links = [
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/teaching", label: "Academic Journey" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [profilesOpen, setProfilesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profilesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (profilesRef.current && !profilesRef.current.contains(e.target as Node)) {
        setProfilesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-beige bg-background/95 backdrop-blur">
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-300 lg:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Link to="/" className="min-w-0 leading-tight" onClick={() => setOpen(false)}>
          <span
            className={`block truncate font-serif font-semibold text-primary transition-all duration-300 ${
              scrolled ? "text-[0.98rem]" : "text-lg"
            }`}
          >
            {professor.name}
          </span>
          <span className="block truncate text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
            {professor.school} · {professor.university}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary after:w-full" }}
              className="relative text-[0.8rem] font-medium tracking-wide text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-sage after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}

          <div className="relative" ref={profilesRef}>
            <button
              type="button"
              onClick={() => setProfilesOpen((v) => !v)}
              aria-expanded={profilesOpen}
              className="inline-flex items-center gap-1.5 border border-beige px-3.5 py-2 text-[0.78rem] font-medium text-primary transition-colors hover:bg-beige-light"
            >
              Research Profiles
              <ChevronDown
                size={13}
                aria-hidden
                className={`transition-transform ${profilesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {profilesOpen && (
              <div className="absolute right-0 top-[calc(100%+0.6rem)] w-60 border border-beige bg-card shadow-[var(--shadow-soft)]">
                <ul>
                  {profileOrder.map((k) => {
                    const href = professor.profiles[k];
                    return (
                      <li key={k} className="border-b border-border/70 last:border-b-0">
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center justify-between px-4 py-2.5 text-[0.8rem] text-primary transition-colors hover:bg-beige-light"
                          >
                            {profileLabels[k]}
                            <ArrowUpRight size={13} className="text-sage" aria-hidden />
                          </a>
                        ) : (
                          <span className="flex items-center justify-between px-4 py-2.5 text-[0.8rem] text-muted-foreground/70">
                            {profileLabels[k]}
                            <span className="text-[0.65rem] uppercase tracking-wider">soon</span>
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="shrink-0 border border-beige p-2 text-primary xl:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-beige bg-background px-5 pb-6 pt-2 xl:hidden"
        >
          <ul className="grid">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                className="block border-b border-border/70 py-2.5 text-sm text-muted-foreground"
              >
                Home
              </Link>
            </li>
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary" }}
                  className="block border-b border-border/70 py-2.5 text-sm text-muted-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-6">Research Profiles</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {profileOrder.map((k) => {
              const href = professor.profiles[k];
              return (
                <li key={k}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-primary"
                    >
                      {profileLabels[k]}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground/60">{profileLabels[k]}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
