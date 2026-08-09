import { professor, profileLabels, profileMeta, profileOrder } from "@/data/professor";
import { ArrowUpRight } from "lucide-react";

export function ResearchProfiles() {
  return (
    <ul className="border-t border-beige">
      {profileOrder.map((k) => {
        const href = professor.profiles[k];
        return (
          <li
            key={k}
            className="grid gap-2 border-b border-beige py-6 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] md:items-center md:gap-8"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              {profileLabels[k]}
            </p>
            <p className="text-sm text-muted-foreground">{profileMeta[k]}</p>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sage link-underline md:justify-self-end"
              >
                Visit Profile <ArrowUpRight size={13} aria-hidden />
              </a>
            ) : (
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground/70 md:justify-self-end">
                Link to be updated
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
