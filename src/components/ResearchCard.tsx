import { Atom, CircuitBoard, Cpu, Layers, Waves, Zap } from "lucide-react";
import type { ResearchArea } from "@/data/research";

const icons = {
  atom: Atom,
  circuit: CircuitBoard,
  cpu: Cpu,
  layers: Layers,
  waves: Waves,
  zap: Zap,
};

export function ResearchCard({ area }: { area: ResearchArea }) {
  const Icon = icons[area.icon];
  return (
    <article className="reveal group border-t border-border pt-6 transition-colors hover:border-accent">
      <Icon
        size={22}
        strokeWidth={1.5}
        className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden
      />
      <h3 className="mt-4 font-serif text-lg font-semibold">{area.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
    </article>
  );
}
