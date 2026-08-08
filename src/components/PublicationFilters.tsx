import { Search } from "lucide-react";
import { publicationTypes, type PublicationType } from "@/data/publications";

export type Filters = {
  query: string;
  year: string;
  type: string;
};

export function PublicationFilters({
  filters,
  years,
  onChange,
}: {
  filters: Filters;
  years: number[];
  onChange: (f: Filters) => void;
}) {
  return (
    <div className="grid gap-4 border-y border-border py-5 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-center">
      <label className="relative block">
        <span className="sr-only">Search publications</span>
        <Search
          size={16}
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="search"
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
          placeholder="Search by title, author or venue"
          className="w-full rounded-sm border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </label>

      <label className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Year</span>
        <select
          value={filters.year}
          onChange={(e) => onChange({ ...filters, year: e.target.value })}
          className="rounded-sm border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
        >
          <option value="all">All</option>
          {years.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Type</span>
        <select
          value={filters.type}
          onChange={(e) => onChange({ ...filters, type: e.target.value })}
          className="rounded-sm border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
        >
          <option value="all">All</option>
          {publicationTypes.map((t: PublicationType) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
