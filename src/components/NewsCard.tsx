import type { NewsItem } from "@/data/news";
import { ArrowUpRight } from "lucide-react";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="grid gap-2 border-b border-beige py-7 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.date}</p>
        <p className="mt-1 text-[0.68rem] uppercase tracking-[0.14em] text-sage">{item.category}</p>
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold leading-snug">{item.title}</h3>
        <p className="mt-2 max-w-[65ch] text-sm leading-[1.85] text-muted-foreground">
          {item.description}
        </p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sage link-underline"
          >
            Read more <ArrowUpRight size={12} aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
