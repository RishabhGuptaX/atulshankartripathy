import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <ol className="relative border-l border-border pl-6 md:pl-8">
      {experience.map((e) => (
        <li key={e.institution + e.position} className="reveal relative pb-10 last:pb-0">
          <span
            className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background md:-left-[2.1rem]"
            aria-hidden
          />
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{e.duration}</p>
          <h3 className="mt-1 font-serif text-xl font-semibold">{e.position}</h3>
          <p className="mt-1 text-sm text-foreground">{e.institution}</p>
          <p className="text-sm text-muted-foreground">{e.location}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {e.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
