import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <ol className="relative border-l border-sage/40 pl-7 md:pl-10">
      {experience.map((e) => (
        <li key={e.institution + e.position} className="reveal relative pb-12 last:pb-0">
          <span
            className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full border border-sage bg-beige md:-left-[2.6rem]"
            aria-hidden
          />
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{e.duration}</p>
          <h3 className="mt-1.5 font-serif text-xl font-semibold">{e.position}</h3>
          <p className="mt-1 text-sm text-foreground/85">{e.institution}</p>
          <p className="text-sm text-muted-foreground">{e.location}</p>
          <p className="mt-3 max-w-[60ch] text-sm leading-[1.85] text-muted-foreground">
            {e.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
