import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, EmptyNote } from "@/components/Section";
import {
  phdScholars,
  researchStudents,
  projectStudents,
  alumni,
  type Student,
} from "@/data/students";

const title = "Research Group — Dr. Atul Shankar Mani Tripathi | VIT-AP University";
const description =
  "Research group of Dr. Atul Shankar Mani Tripathi: doctoral scholars, research students, project students and alumni at VIT-AP University.";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/students" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/students" }],
  }),
  component: Students,
});

const groups: { label: string; members: Student[] }[] = [
  { label: "PhD Scholars", members: phdScholars },
  { label: "Research Students", members: researchStudents },
  { label: "Project Students", members: projectStudents },
  { label: "Alumni", members: alumni },
];

function Students() {
  return (
    <>
      <PageHeader
        eyebrow="Group"
        title="Research Group"
        intro="Doctoral scholars, research and project students working on emerging electronic devices."
      />

      <Section>
        <div className="grid gap-12">
          {groups.map((g) => (
            <div key={g.label}>
              <h2 className="eyebrow">{g.label}</h2>
              <div className="mt-5">
                {g.members.length === 0 ? (
                  <EmptyNote>Research group information will be updated soon.</EmptyNote>
                ) : (
                  <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {g.members.map((m) => (
                      <li key={m.name} className="bg-background p-6">
                        <h3 className="font-serif text-lg font-semibold">{m.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{m.degree}</p>
                        <p className="mt-2 text-sm">{m.researchArea}</p>
                        <p className="mt-2 text-xs text-muted-foreground">{m.year}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
