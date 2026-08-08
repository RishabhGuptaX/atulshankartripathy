import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/Section";
import { ResearchCard } from "@/components/ResearchCard";
import { researchAreas, featuredResearch } from "@/data/research";
import { ResearchProfiles } from "@/components/ResearchProfiles";

const title = "Research — Dr. Atul Shankar Mani Tripathi | VIT-AP University";
const description =
  "Research in organic and flexible electronics, semiconductor device modelling, thin-film transistors and low-power VLSI at VIT-AP University.";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/research" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: Research,
});

function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Research"
        intro="Research interests focused on emerging electronic materials, semiconductor devices, device modelling and low-power electronics."
      />

      <Section eyebrow="Areas" title="Research Areas">
        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((a) => (
            <ResearchCard key={a.title} area={a} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Themes" title="Featured Research" muted>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {featuredResearch.map((f) => (
            <article key={f.title} className="bg-secondary/40 p-8">
              <p className="eyebrow">{f.area}</p>
              <h3 className="mt-3 font-serif text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
              <p className="mt-5 text-xs text-muted-foreground/80">{f.related}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Identifiers" title="Research Profiles">
        <ResearchProfiles />
      </Section>
    </>
  );
}
