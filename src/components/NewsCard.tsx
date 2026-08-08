import type { NewsItem } from "@/data/news";
import { ExternalLink } from "lucide-react";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="grid gap-2 border-t border-border py-6 md:grid-cols-[10rem_minmax(0,1fr)]">
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.date}</p>
        <p className="mt-1 text-xs font-semibold text-accent">{item.category}</p>
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent"
          >
            Read more <ExternalLink size={12} aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
