import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Section, EmptyNote } from "@/components/Section";
import { ResearchCard } from "@/components/ResearchCard";
import { PublicationCard } from "@/components/PublicationCard";
import { NewsCard } from "@/components/NewsCard";
import { researchAreas } from "@/data/research";
import { publications } from "@/data/publications";
import { news } from "@/data/news";
import { professor } from "@/data/professor";

const title = `${professor.name} | Associate Professor | VIT-AP University`;
const description =
  "Official academic and research profile of Dr. Atul Shankar Mani Tripathi, Associate Professor at the School of Electronics Engineering, VIT-AP University.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: professor.name,
          jobTitle: professor.position,
          email: `mailto:${professor.email}`,
          worksFor: {
            "@type": "CollegeOrUniversity",
            name: professor.university,
            department: { "@type": "Organization", name: professor.school },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amaravati",
              addressRegion: "Andhra Pradesh",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const selected = [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 5);

  return (
    <>
      <Hero />

      <Section
        eyebrow="Research"
        title="Areas of Research"
        intro="Research interests focused on emerging electronic materials, semiconductor devices, device modelling and low-power electronics."
      >
        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((a) => (
            <ResearchCard key={a.title} area={a} />
          ))}
        </div>
        <Link
          to="/research"
          className="mt-10 inline-block border-b border-accent pb-0.5 text-sm font-medium text-primary"
        >
          View full research overview
        </Link>
      </Section>

      <Section eyebrow="Publications" title="Selected Publications" muted>
        {selected.length === 0 ? (
          <EmptyNote>
            Verified publications are being compiled and will be listed here shortly.
          </EmptyNote>
        ) : (
          <div>
            {selected.map((p) => (
              <PublicationCard key={p.title} pub={p} />
            ))}
          </div>
        )}
        <Link
          to="/publications"
          className="mt-10 inline-block border-b border-accent pb-0.5 text-sm font-medium text-primary"
        >
          View All Publications
        </Link>
      </Section>

      <Section eyebrow="News" title="Latest Updates">
        {news.length === 0 ? (
          <EmptyNote>Academic updates will be posted here.</EmptyNote>
        ) : (
          <div>
            {news.map((n) => (
              <NewsCard key={n.title} item={n} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
