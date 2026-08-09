import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Section, EmptyNote } from "@/components/Section";
import { ResearchAreasList } from "@/components/ResearchAreasList";
import { PublicationEntry } from "@/components/PublicationCard";
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
        index="01"
        eyebrow="Research"
        title="Areas of Research"
        intro="Research interests focused on emerging electronic materials, semiconductor devices, device modelling and low-power electronics."
      >
        <ResearchAreasList areas={researchAreas} />
        <Link
          to="/research"
          className="mt-10 inline-block border-b border-sage pb-0.5 text-sm font-medium text-primary transition-colors hover:text-sage"
        >
          View full research overview
        </Link>
      </Section>

      <Section index="02" eyebrow="Publications" title="Selected Publications" tone="beige">
        {selected.length === 0 ? (
          <EmptyNote>
            Verified publications are being compiled and will be listed here shortly.
          </EmptyNote>
        ) : (
          <div>
            {selected.map((p) => (
              <PublicationEntry key={p.title} pub={p} />
            ))}
          </div>
        )}
        <Link
          to="/publications"
          className="mt-10 inline-block border-b border-sage pb-0.5 text-sm font-medium text-primary transition-colors hover:text-sage"
        >
          View All Publications
        </Link>
      </Section>

      <Section index="03" eyebrow="News" title="Latest Updates">
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
