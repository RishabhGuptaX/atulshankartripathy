import { education } from "@/data/education";

export function EducationTimeline() {
  return (
    <ol className="relative border-l border-sage/40 pl-7 md:pl-10">
      {education.map((e) => (
        <li key={e.degree + e.institution} className="reveal relative pb-12 last:pb-0">
          <span
            className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full border border-sage bg-beige md:-left-[2.6rem]"
            aria-hidden
          />
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{e.year}</p>
          <h3 className="mt-1.5 font-serif text-xl font-semibold">{e.degree}</h3>
          <p className="mt-1 text-sm text-foreground/85">{e.institution}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{e.country}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-sage">Field · {e.field}</p>
        </li>
      ))}
    </ol>
  );
}
