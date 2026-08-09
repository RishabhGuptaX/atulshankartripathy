import type { ResearchArea } from "@/data/research";

export function ResearchAreasList({ areas }: { areas: ResearchArea[] }) {
  return (
    <ol className="border-t border-beige">
      {areas.map((area, i) => (
        <li
          key={area.title}
          className="group grid gap-3 border-b border-beige py-8 md:grid-cols-[4rem_minmax(0,20rem)_minmax(0,1fr)] md:items-baseline md:gap-8 md:py-10"
        >
          <span className="font-serif text-sm text-sage md:text-base">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-xl font-semibold leading-snug transition-colors group-hover:text-sage md:text-[1.4rem]">
            {area.title}
          </h3>
          <p className="max-w-[60ch] text-sm leading-[1.85] text-muted-foreground">
            {area.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
