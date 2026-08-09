import type { ReactNode } from "react";

type Tone = "ivory" | "beige" | "sage" | "espresso";

const toneClass: Record<Tone, string> = {
  ivory: "bg-background",
  beige: "border-y border-beige bg-beige-light",
  sage: "border-y border-beige bg-sage/[0.06]",
  espresso: "bg-espresso text-ivory",
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  id,
  muted = false,
  tone,
  index,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  id?: string;
  muted?: boolean;
  tone?: Tone;
  index?: string;
}) {
  const resolved: Tone = tone ?? (muted ? "beige" : "ivory");
  return (
    <section id={id} className={`${toneClass[resolved]} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {(eyebrow || title) && (
          <header className="max-w-3xl">
            {(index || eyebrow) && (
              <p className="section-index">
                {index ? `${index} / ` : ""}
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-serif text-[1.75rem] font-semibold leading-tight md:text-[2.1rem]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-[1.85] text-muted-foreground">
                {intro}
              </p>
            )}
            <span className="mt-7 block h-px w-16 bg-sage/60" aria-hidden />
          </header>
        )}
        <div className={eyebrow || title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  index,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  index?: string;
}) {
  return (
    <div className="border-b border-beige bg-beige-light">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20 lg:px-8">
        <p className="section-index">
          {index ? `${index} / ` : ""}
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-[2.1rem] font-semibold leading-[1.15] md:text-[2.75rem]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-[62ch] text-[0.98rem] leading-[1.85] text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

export function EmptyNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-sage/60 bg-beige-light px-5 py-4 text-sm text-muted-foreground">
      {children}
    </p>
  );
}
