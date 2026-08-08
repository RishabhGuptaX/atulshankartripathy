import { professor, profileLabels, type ProfileKey } from "@/data/professor";
import { ExternalLink } from "lucide-react";

const order: ProfileKey[] = [
  "googleScholar",
  "orcid",
  "scopus",
  "researcherId",
  "researchGate",
  "linkedin",
];

export function ResearchProfiles() {
  return (
    <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {order.map((k) => {
        const href = professor.profiles[k];
        return (
          <li key={k} className="bg-background">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between gap-3 px-5 py-5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
              >
                {profileLabels[k]} <ExternalLink size={14} aria-hidden />
              </a>
            ) : (
              <div className="flex items-center justify-between gap-3 px-5 py-5 text-sm text-muted-foreground/70">
                {profileLabels[k]}
                <span className="text-xs">to be updated</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
