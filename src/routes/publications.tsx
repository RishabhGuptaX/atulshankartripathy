import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Section, EmptyNote } from "@/components/Section";
import { PublicationCard } from "@/components/PublicationCard";
import { PublicationFilters, type Filters } from "@/components/PublicationFilters";
import { publications } from "@/data/publications";

const title = "Publications — Dr. Atul Shankar Mani Tripathi | VIT-AP University";
const description =
  "Peer-reviewed journal articles, conference papers and book chapters by Dr. Atul Shankar Mani Tripathi, School of Electronics Engineering, VIT-AP University.";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/publications" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
  component: Publications,
});

function Publications() {
  const [filters, setFilters] = useState<Filters>({ query: "", year: "all", type: "all" });

  const years = useMemo(
    () => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a),
    [],
  );

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return publications
      .filter((p) => (filters.year === "all" ? true : String(p.year) === filters.year))
      .filter((p) => (filters.type === "all" ? true : p.type === filters.type))
      .filter((p) =>
        q
          ? `${p.title} ${p.authors} ${p.journal}`.toLowerCase().includes(q)
          : true,
      )
      .sort((a, b) => b.year - a.year);
  }, [filters]);

  return (
    <>
      <PageHeader
        eyebrow="Scholarly Record"
        title="Publications"
        intro="Journal articles, conference papers, book chapters and reviews. Only verified records are listed."
      />

      <Section>
        <PublicationFilters filters={filters} years={years} onChange={setFilters} />

        {publications.length === 0 ? (
          <div className="mt-8">
            <EmptyNote>
              The verified publication list is being compiled and will be published here. Records
              are added only after verification against publisher or DOI sources.
            </EmptyNote>
          </div>
        ) : results.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">
            No publications match the current filters.
          </p>
        ) : (
          <>
            <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
              {results.length} {results.length === 1 ? "record" : "records"}
            </p>
            <div className="mt-2">
              {results.map((p) => (
                <PublicationCard key={p.title} pub={p} />
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  );
}
