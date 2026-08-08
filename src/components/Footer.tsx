import { Link } from "@tanstack/react-router";
import { professor, profileLabels, type ProfileKey } from "@/data/professor";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/teaching", label: "Teaching" },
  { to: "/contact", label: "Contact" },
] as const;

const profileKeys: ProfileKey[] = [
  "googleScholar",
  "orcid",
  "scopus",
  "researchGate",
  "linkedin",
];

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-serif text-lg font-semibold">{professor.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
          <h3 className="eyebrow">Quick Links</h3>
          <ul className="mt-4 grid gap-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow">Research Profiles</h3>
          <ul className="mt-4 grid gap-2">
            {profileKeys.map((k) => {
              const href = professor.profiles[k];
              return (
                <li key={k}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {profileLabels[k]}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground/60">
                      {profileLabels[k]} — link to be updated
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground lg:px-8">
          © 2026 {professor.name} · {professor.university}
        </p>
      </div>
    </footer>
  );
}
