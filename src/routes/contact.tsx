import { createFileRoute } from "@tanstack/react-router";
import { Mail, ArrowUpRight } from "lucide-react";
import { professor, profileLabels, profileOrder } from "@/data/professor";

const title = "Contact — Dr. Atul Shankar Mani Tripathi | VIT-AP University";
const description =
  "Contact Dr. Atul Shankar Mani Tripathi, Associate Professor, School of Electronics Engineering, VIT-AP University, Amaravati, India.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage-light">
          09 / Contact
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-[2.1rem] font-semibold leading-[1.15] text-ivory md:text-[2.75rem]">
          Get in Touch
        </h1>
        <p className="mt-5 max-w-[62ch] text-[0.98rem] leading-[1.85] text-beige">
          For research collaboration, doctoral supervision enquiries and academic correspondence.
        </p>
        <span className="mt-8 block h-px w-16 bg-beige/50" aria-hidden />

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ivory">{professor.name}</h2>
            <p className="mt-4 text-sm leading-[1.9] text-beige">
              {professor.position}
              <br />
              {professor.school}
              <br />
              {professor.university}
              <br />
              {professor.location}
            </p>

            <dl className="mt-10 grid gap-5 text-sm">
              <div className="border-b border-beige/25 pb-4">
                <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-sage-light">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a className="text-ivory transition-colors hover:text-beige" href={`mailto:${professor.email}`}>
                    {professor.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-beige/25 pb-4">
                <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-sage-light">
                  Office
                </dt>
                <dd className="mt-1.5 text-beige">{professor.office}</dd>
              </div>
            </dl>

            <a
              href={`mailto:${professor.email}`}
              className="mt-10 inline-flex items-center gap-2 bg-beige px-6 py-3 text-sm font-medium text-espresso transition-colors hover:bg-ivory"
            >
              <Mail size={15} aria-hidden /> Send an Email
            </a>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sage-light">
              Research Profiles
            </h2>
            <ul className="mt-6 border-t border-beige/25">
              {profileOrder.map((k) => {
                const href = professor.profiles[k];
                return (
                  <li key={k} className="border-b border-beige/25">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center justify-between gap-4 py-4 text-sm text-ivory transition-colors hover:text-beige"
                      >
                        {profileLabels[k]}
                        <ArrowUpRight size={14} aria-hidden />
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-4 py-4 text-sm text-beige/60">
                        {profileLabels[k]}
                        <span className="text-[0.65rem] uppercase tracking-[0.14em]">
                          To be updated
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
