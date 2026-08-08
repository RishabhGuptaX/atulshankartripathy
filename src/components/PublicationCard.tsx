import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import type { Publication } from "@/data/publications";

export function PublicationCard({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="border-t border-border py-7">
      <p className="eyebrow">{pub.type}</p>
      <h3 className="mt-2 font-serif text-lg font-semibold leading-snug md:text-xl">
        {pub.title}
      </h3>
      <p className="mt-2 text-sm text-foreground/80">{pub.authors}</p>
      <p className="mt-1 text-sm italic text-muted-foreground">
        {pub.journal}
        {pub.journal ? ", " : ""}
        {pub.year}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-sm border border-primary/30 px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-secondary"
          >
            View Paper <ExternalLink size={13} aria-hidden />
          </a>
        )}
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi.replace(/^https?:\/\/doi\.org\//, "")}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            DOI
          </a>
        )}
        {pub.abstract && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 px-1 py-1.5 text-xs font-medium text-accent"
          >
            {open ? "Hide abstract" : "Abstract"}
            <ChevronDown
              size={13}
              aria-hidden
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {open && pub.abstract && (
        <p className="mt-4 max-w-3xl border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
          {pub.abstract}
        </p>
      )}
    </article>
  );
}
