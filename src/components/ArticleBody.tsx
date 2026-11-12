import type { Block } from "@/data/insights";

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 text-2xl font-semibold tracking-tight text-white">
                {b.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3 text-lg leading-8 text-white/70">
                    <span aria-hidden className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-picton" />
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <p
                key={i}
                className="mt-10 rounded-2xl border border-picton/30 bg-picton/10 px-6 py-5 text-lg leading-8 text-white/90"
              >
                {b.text}
              </p>
            );
          default:
            return (
              <p key={i} className="mt-6 text-lg leading-8 text-white/70">
                {b.text}
              </p>
            );
        }
      })}
    </div>
  );
}
