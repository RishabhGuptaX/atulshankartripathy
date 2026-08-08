import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  id,
  muted = false,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={muted ? "border-y bg-secondary/40 py-16 md:py-20" : "py-16 md:py-20"}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {(eyebrow || title) && (
          <header className="max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{title}</h2>
            )}
            {intro && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
            )}
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
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
    </div>
  );
}

export function EmptyNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-accent/50 bg-secondary/60 px-5 py-4 text-sm text-muted-foreground">
      {children}
    </p>
  );
}
