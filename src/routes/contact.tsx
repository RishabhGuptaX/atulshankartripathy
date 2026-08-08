import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { PageHeader, Section } from "@/components/Section";
import { ResearchProfiles } from "@/components/ResearchProfiles";
import { professor } from "@/data/professor";

const title = "Contact — Dr. Atul Shankar Mani Tripathi | VIT-AP University";
const description =
  "Contact Dr. Atul Shankar Mani Tripathi, Associate Professor, School of Electronics Engineering, VIT-AP University, Amaravati, India.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        intro="For research collaboration, doctoral supervision enquiries and academic correspondence."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold">{professor.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {professor.position}
              <br />
              {professor.school}
              <br />
              {professor.university}
              <br />
              {professor.location}
            </p>

            <dl className="mt-8 grid gap-4 text-sm">
              <div className="border-b border-border/70 pb-3">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Email</dt>
                <dd className="mt-1">
                  <a className="hover:text-accent" href={`mailto:${professor.email}`}>
                    {professor.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-border/70 pb-3">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Office</dt>
                <dd className="mt-1 text-muted-foreground">{professor.office}</dd>
              </div>
            </dl>

            <a
              href={`mailto:${professor.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail size={15} aria-hidden /> Send an Email
            </a>
          </div>

          <div>
            <h2 className="eyebrow">Research Profiles</h2>
            <div className="mt-5 border border-border">
              <ResearchProfiles />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
