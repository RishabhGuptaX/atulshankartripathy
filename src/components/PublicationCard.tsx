import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Publication } from "@/data/publications";

export function PublicationEntry({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);
  const doiUrl = pub.doi
    ? `https://doi.org/${pub.doi.replace(/^https?:\/\/doi\.org\//, "")}`
    : undefined;

  return (
    <article className="grid gap-3 border-b border-beige py-8 md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-8">
      <p className="font-serif text-base text-sage md:pt-0.5">{pub.year}</p>

      <div>
        <h3 className="font-serif text-lg font-semibold leading-snug text-primary md:text-xl">
          {pub.title}
        </h3>
        <p className="mt-2 text-sm text-foreground/85">{pub.authors}</p>
        <p className="mt-1 text-sm italic text-muted-foreground">
          {pub.journal}
          {pub.doi ? ` · DOI: ${pub.doi.replace(/^https?:\/\/doi\.org\//, "")}` : ""}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="border border-sage/50 px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-sage">
            {pub.type}
          </span>
          {pub.link && (
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary link-underline"
            >
              Publisher <ArrowUpRight size={12} aria-hidden />
            </a>
          )}
          {doiUrl && (
            <a
              href={doiUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary link-underline"
            >
              DOI <ArrowUpRight size={12} aria-hidden />
            </a>
          )}
          {pub.abstract && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1 text-xs font-medium text-sage"
            >
              {open ? "Hide abstract" : "Abstract"}
              <ChevronDown
                size={12}
                aria-hidden
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>

        {open && pub.abstract && (
          <p className="mt-4 max-w-[70ch] border-l-2 border-beige pl-4 text-sm leading-[1.85] text-muted-foreground">
            {pub.abstract}
          </p>
        )}
      </div>
    </article>
  );
}

export const PublicationCard = PublicationEntry;
