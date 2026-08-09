import { Search } from "lucide-react";
import { publicationTypes, type PublicationType } from "@/data/publications";

export type Filters = {
  query: string;
  year: string;
  type: string;
};

const typeLabels: Record<PublicationType | "all", string> = {
  all: "All",
  Journal: "Journals",
  Conference: "Conferences",
  Review: "Reviews",
  "Book Chapter": "Book Chapters",
  Other: "Other",
};

function pill(active: boolean) {
  return `shrink-0 border px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
    active
      ? "border-sage bg-sage text-ivory"
      : "border-beige text-primary hover:bg-beige-light"
  }`;
}

export function PublicationFilters({
  filters,
  years,
  onChange,
}: {
  filters: Filters;
  years: number[];
  onChange: (f: Filters) => void;
}) {
  const types: (PublicationType | "all")[] = ["all", ...publicationTypes];

  return (
    <div className="border-y border-beige py-6">
      <label className="relative block max-w-xl">
        <span className="sr-only">Search publications</span>
        <Search
          size={16}
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sage"
        />
        <input
          type="search"
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
          placeholder="Search publications..."
          className="w-full border border-beige bg-card py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-sage"
        />
      </label>

      <div className="mt-5 flex items-center gap-3 overflow-x-auto pb-1">
        <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          Type
        </span>
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onChange({ ...filters, type: t })}
            className={pill(filters.type === t)}
          >
            {typeLabels[t]}
          </button>
        ))}
      </div>

      {years.length > 0 && (
        <div className="mt-3 flex items-center gap-3 overflow-x-auto pb-1">
          <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            Year
          </span>
          <button
            type="button"
            onClick={() => onChange({ ...filters, year: "all" })}
            className={pill(filters.year === "all")}
          >
            All
          </button>
          {years.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => onChange({ ...filters, year: String(y) })}
              className={pill(filters.year === String(y))}
            >
              {y}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
