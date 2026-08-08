import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, EmptyNote } from "@/components/Section";
import { projects } from "@/data/projects";

const title = "Research Projects — Dr. Atul Shankar Mani Tripathi | VIT-AP University";
const description =
  "Funded and institutional research projects of Dr. Atul Shankar Mani Tripathi, School of Electronics Engineering, VIT-AP University.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Funded & Institutional"
        title="Research Projects"
        intro="Only verified project records are listed."
      />

      <Section>
        {projects.length === 0 ? (
          <EmptyNote>Research project details will be updated.</EmptyNote>
        ) : (
          <div className="grid gap-px bg-border md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="bg-background p-8">
                <p className="eyebrow">{p.status}</p>
                <h2 className="mt-3 font-serif text-xl font-semibold">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <dl className="mt-6 grid gap-2 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-40 shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                      Principal Investigator
                    </dt>
                    <dd>{p.principalInvestigator}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-40 shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                      Funding Agency
                    </dt>
                    <dd>{p.fundingAgency}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-40 shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                      Institution
                    </dt>
                    <dd>{p.institution}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-40 shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                      Duration
                    </dt>
                    <dd>{p.duration}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
