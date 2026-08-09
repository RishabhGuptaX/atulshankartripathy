import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, EmptyNote } from "@/components/Section";
import { awards, memberships } from "@/data/awards";
import { ResearchProfiles } from "@/components/ResearchProfiles";

const title = "Achievements — Dr. Atul Shankar Mani Tripathi | VIT-AP University";
const description =
  "Awards, honours and professional memberships of Dr. Atul Shankar Mani Tripathi, School of Electronics Engineering, VIT-AP University.";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/achievements" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: Achievements,
});

function Achievements() {
  return (
    <>
      <PageHeader
        index="07"
        eyebrow="Recognition"
        title="Awards & Honours"
        intro="Only verified awards, honours and memberships are listed."
      />

      <Section>
        {awards.length === 0 ? (
          <EmptyNote>Awards and honours will be updated.</EmptyNote>
        ) : (
          <ol className="relative border-l border-border pl-6 md:pl-8">
            {awards.map((a) => (
              <li key={a.title} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background md:-left-[2.1rem]"
                  aria-hidden
                />
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{a.year}</p>
                <h2 className="mt-1 font-serif text-xl font-semibold">{a.title}</h2>
                <p className="mt-1 text-sm">{a.organization}</p>
                <p className="text-sm text-muted-foreground">{a.location}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </li>
            ))}
          </ol>
        )}
      </Section>

      <Section eyebrow="Affiliations" title="Professional Memberships" muted>
        {memberships.length === 0 ? (
          <EmptyNote>Professional membership details will be updated.</EmptyNote>
        ) : (
          <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {memberships.map((m) => (
              <li key={m.organization} className="bg-background p-6">
                <h3 className="font-serif text-lg font-semibold">{m.organization}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.detail}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section eyebrow="Identifiers" title="Research Profiles">
        <ResearchProfiles />
      </Section>
    </>
  );
}
