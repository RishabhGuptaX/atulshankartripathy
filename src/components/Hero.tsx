import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { professor } from "@/data/professor";
import portrait from "@/assets/professor.avif.asset.json";

const strip = [
  { label: "Field", value: "Organic & flexible electronics" },
  { label: "Modelling", value: "Semiconductor devices" },
  { label: "Circuits", value: "Low-power CMOS VLSI" },
  { label: "International", value: "Japan · Hong Kong · France" },
];

export function Hero() {
  return (
    <section className="border-b border-beige">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-8">
        <div className="reveal order-last lg:order-none">
          <p className="text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.2em] text-sage">
            {professor.school}
            <br />
            {professor.university}
          </p>

          <h1 className="mt-6 max-w-[16ch] font-serif text-[2.1rem] font-semibold leading-[1.12] md:text-[2.75rem] lg:text-[3.1rem]">
            {professor.name}
          </h1>

          <p className="mt-4 border-t border-beige pt-4 text-sm uppercase tracking-[0.16em] text-muted-foreground">
            {professor.position}
          </p>

          <p className="mt-7 max-w-[54ch] text-[1.02rem] leading-[1.85] text-foreground/85">
            {professor.intro}
          </p>

          <p className="mt-5 max-w-[54ch] border-l-2 border-sage/50 pl-5 text-sm leading-[1.85] text-muted-foreground">
            His work sits at the intersection of materials, device engineering and circuit-level
            implementation, alongside teaching and doctoral supervision at VIT-AP University.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-espresso-deep"
            >
              Explore Research <ArrowRight size={15} aria-hidden />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 border border-beige px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-beige-light"
            >
              View Publications
            </Link>
          </div>
        </div>

        <div className="reveal">
          <figure className="mx-auto max-w-[19rem] lg:ml-auto lg:mr-0 lg:max-w-none">
            <div className="border border-beige bg-beige-light p-3">
              <img
                src={portrait.url}
                alt={`Official portrait of ${professor.name}, ${professor.position}, ${professor.school}, ${professor.university}`}
                width={640}
                height={800}
                loading="eager"
                className="w-full object-cover shadow-[var(--shadow-portrait)]"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
              {professor.position} · {professor.university}
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="border-t border-beige bg-beige-light/60">
        <dl className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {strip.map((s) => (
            <div key={s.label} className="bg-beige-light/80 px-5 py-6 lg:px-8">
              <dt className="eyebrow">{s.label}</dt>
              <dd className="mt-2 text-sm text-foreground/85">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
