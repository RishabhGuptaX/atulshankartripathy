import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, EmptyNote } from "@/components/Section";
import { courses, teachingInterests, academicResponsibilities } from "@/data/teaching";

const title = "Teaching — Dr. Atul Shankar Mani Tripathi | VIT-AP University";
const description =
  "Courses, teaching interests, academic responsibilities and student mentoring by Dr. Atul Shankar Mani Tripathi at VIT-AP University.";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/teaching" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/teaching" }],
  }),
  component: Teaching,
});

function Teaching() {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Education"
        title="Teaching"
        intro="Classroom and laboratory instruction, project supervision and mentoring within the School of Electronics Engineering."
      />

      <Section eyebrow="Curriculum" title="Courses Taught">
        {courses.length === 0 ? (
          <EmptyNote>Course details will be updated.</EmptyNote>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-xs uppercase tracking-widest text-muted-foreground">
                    Course
                  </th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-widest text-muted-foreground">
                    Code
                  </th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-widest text-muted-foreground">
                    Level
                  </th>
                  <th className="py-3 text-xs uppercase tracking-widest text-muted-foreground">
                    Semester
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.code} className="border-b border-border/70">
                    <td className="py-3 pr-4 font-medium">{c.name}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{c.code}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{c.level}</td>
                    <td className="py-3 text-muted-foreground">{c.semester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>

      <Section muted>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="eyebrow">Teaching Interests</h2>
            <ul className="mt-5 grid gap-3">
              {teachingInterests.map((t) => (
                <li key={t} className="border-b border-border/70 pb-3 text-sm text-foreground/85">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow">Academic Responsibilities</h2>
            <ul className="mt-5 grid gap-3">
              {academicResponsibilities.map((t) => (
                <li key={t} className="border-b border-border/70 pb-3 text-sm text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Supervision" title="Student Mentoring">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Supervision of doctoral, postgraduate and undergraduate project students in areas related
          to semiconductor devices and emerging electronics. Prospective students may write to the
          email address listed on the contact page.
        </p>
      </Section>
    </>
  );
}
