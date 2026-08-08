import { Link } from "@tanstack/react-router";
import { GraduationCap, Fingerprint, Linkedin, ArrowRight } from "lucide-react";
import { professor } from "@/data/professor";
import portrait from "@/assets/professor.avif.asset.json";

const strip = [
  { label: "Research", value: "Emerging electronic devices" },
  { label: "Publications", value: "Peer-reviewed record" },
  { label: "Academic Experience", value: "Teaching & supervision" },
  { label: "Research Projects", value: "Device & circuit studies" },
];

const secondary = [
  { key: "googleScholar", label: "Google Scholar", Icon: GraduationCap },
  { key: "orcid", label: "ORCID", Icon: Fingerprint },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
] as const;

export function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-8">
        <div className="reveal">
          <p className="eyebrow">
            {professor.school}
            <br />
            {professor.university}
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
            {professor.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80">
            {professor.position}
            <br />
            {professor.school}
            <br />
            {professor.university}
          </p>
          <p className="mt-6 max-w-xl border-l-2 border-accent/60 pl-5 text-base leading-relaxed text-muted-foreground">
            {professor.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Research <ArrowRight size={15} aria-hidden />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-secondary"
            >
              View Publications
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
            {secondary.map(({ key, label, Icon }) => {
              const href = professor.profiles[key];
              return href ? (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Icon size={15} strokeWidth={1.7} aria-hidden /> {label}
                </a>
              ) : (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground/60"
                  title="Profile link to be updated"
                >
                  <Icon size={15} strokeWidth={1.7} aria-hidden /> {label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="reveal order-first lg:order-none">
          <figure className="mx-auto max-w-xs lg:max-w-none">
            <img
              src={portrait.url}
              alt={`Official portrait of ${professor.name}, ${professor.position}, ${professor.school}, ${professor.university}`}
              width={640}
              height={800}
              loading="eager"
              className="w-full rounded-md border border-border object-cover shadow-[var(--shadow-portrait)]"
            />
          </figure>
        </div>
      </div>

      <div className="border-t bg-secondary/40">
        <dl className="mx-auto grid max-w-7xl gap-px bg-border px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {strip.map((s) => (
            <div key={s.label} className="bg-secondary/40 px-1 py-6 sm:px-6">
              <dt className="eyebrow">{s.label}</dt>
              <dd className="mt-2 text-sm text-foreground/80">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
