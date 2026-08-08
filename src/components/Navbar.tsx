import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, Fingerprint, Linkedin } from "lucide-react";
import { professor } from "@/data/professor";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/teaching", label: "Teaching" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/students", label: "Students" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  { key: "googleScholar", label: "Google Scholar", Icon: GraduationCap },
  { key: "orcid", label: "ORCID", Icon: Fingerprint },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_var(--color-border)]" : ""
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="min-w-0 leading-tight" onClick={() => setOpen(false)}>
          <span className="block truncate font-serif text-base font-semibold text-primary">
            {professor.name}
          </span>
          <span className="block truncate text-[0.7rem] tracking-wide text-muted-foreground">
            {professor.school} · {professor.university}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary after:w-full" }}
              className="relative text-[0.82rem] font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-primary hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-border" aria-hidden />
          {socials.map(({ key, label, Icon }) => {
            const href = professor.profiles[key];
            return href ? (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                title={label}
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                <Icon size={17} strokeWidth={1.7} />
              </a>
            ) : (
              <span
                key={key}
                aria-label={`${label} — link to be updated`}
                title={`${label} — link to be updated`}
                className="text-border"
              >
                <Icon size={17} strokeWidth={1.7} />
              </span>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="shrink-0 rounded-sm border border-border p-2 text-primary xl:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t bg-background px-5 pb-5 pt-2 xl:hidden"
        >
          <ul className="grid gap-0.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block border-b border-border/60 py-2.5 text-sm text-muted-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
