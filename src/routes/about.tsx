import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/Section";
import { EducationTimeline } from "@/components/EducationTimeline";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { professor } from "@/data/professor";
import { international } from "@/data/experience";
import portrait from "@/assets/professor.avif.asset.json";

const title = `About — ${professor.name} | VIT-AP University`;
const description =
  "Academic biography, education and career of Dr. Atul Shankar Mani Tripathi, Associate Professor, School of Electronics Engineering, VIT-AP University.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const quickProfile = [
  { label: "Current Position", value: professor.position },
  { label: "Institution", value: professor.university },
  { label: "School", value: professor.school },
  { label: "Location", value: professor.location },
  { label: "Email", value: professor.email, href: `mailto:${professor.email}` },
];

function About() {
  return (
    <>
      <PageHeader index="02" eyebrow="Profile" title={`About ${professor.name}`} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="max-w-2xl">
            {professor.biography.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 text-base leading-[1.85] text-foreground/85">
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:border-l lg:pl-10">
            <img
              src={portrait.url}
              alt={`Portrait of ${professor.name}`}
              width={480}
              height={600}
              loading="lazy"
              className="mb-8 w-full max-w-[16rem] rounded-md border border-border object-cover shadow-[var(--shadow-soft)]"
            />
            <h2 className="eyebrow">Quick Academic Profile</h2>
            <dl className="mt-5 grid gap-4">
              {quickProfile.map((r) => (
                <div key={r.label} className="border-b border-border/70 pb-3">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    {r.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">
                    {r.href ? (
                      <a className="hover:text-accent" href={r.href}>
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Academic Background" title="Education" muted>
        <EducationTimeline />
      </Section>

      <Section eyebrow="Career" title="Academic & Research Experience">
        <ExperienceTimeline />
      </Section>

      <Section
        eyebrow="Global"
        title="International Experience"
        intro="Research and academic engagement across institutions in different countries."
        muted
      >
        <ul className="grid gap-px bg-border md:grid-cols-3">
          {international.map((i) => (
            <li key={i.country} className="bg-background p-7">
              <p className="eyebrow">{i.country}</p>
              <h3 className="mt-3 font-serif text-lg font-semibold">{i.nature}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.detail}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
