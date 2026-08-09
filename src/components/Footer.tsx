import { Link } from "@tanstack/react-router";
import { professor, profileLabels, profileOrder } from "@/data/professor";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/teaching", label: "Academic Journey" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-serif text-lg font-semibold text-ivory">{professor.name}</h2>
          <span className="mt-4 block h-px w-14 bg-beige/60" aria-hidden />
          <p className="mt-4 text-sm leading-[1.9] text-beige">
            {professor.position}
            <br />
            {professor.school}
            <br />
            {professor.university}
            <br />
            {professor.location}
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sage-light">
            Navigation
          </h3>
          <ul className="mt-5 grid gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-beige transition-colors hover:text-ivory">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sage-light">
            Research Profiles
          </h3>
          <ul className="mt-5 grid gap-2.5">
            {profileOrder.map((k) => {
              const href = professor.profiles[k];
              return (
                <li key={k}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-beige transition-colors hover:text-ivory"
                    >
                      {profileLabels[k]}
                    </a>
                  ) : (
                    <span className="text-sm text-beige/50">{profileLabels[k]}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-beige/20">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs tracking-wide text-beige/70 lg:px-8">
          © 2026 {professor.name} · {professor.university}
        </p>
      </div>
    </footer>
  );
}
