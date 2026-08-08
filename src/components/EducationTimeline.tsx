import { education } from "@/data/education";

export function EducationTimeline() {
  return (
    <ol className="relative border-l border-border pl-6 md:pl-8">
      {education.map((e) => (
        <li key={e.degree + e.institution} className="reveal relative pb-10 last:pb-0">
          <span
            className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background md:-left-[2.1rem]"
            aria-hidden
          />
          <h3 className="font-serif text-xl font-semibold">{e.degree}</h3>
          <p className="mt-1 text-sm text-foreground">{e.institution}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{e.country}</p>
          <dl className="mt-3 grid gap-1 text-xs text-muted-foreground sm:grid-cols-2">
            <div className="flex gap-2">
              <dt className="font-semibold uppercase tracking-wider">Year</dt>
              <dd>{e.year}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold uppercase tracking-wider">Field</dt>
              <dd>{e.field}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ol>
  );
}
