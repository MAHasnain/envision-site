// Poore page ke peeche ek hi glow layer: sections ke beech seam nahi dikhta.
// Glows ki position % mein hai, to page lamba ho tab bhi neeche tak chalti hain.
const glows = [
  { top: "-4%", side: "right", size: 700, color: "var(--color-picton)", opacity: 0.35 },
  { top: "14%", side: "left", size: 640, color: "var(--color-azure)", opacity: 0.4 },
  { top: "36%", side: "right", size: 720, color: "var(--color-azure)", opacity: 0.28 },
  { top: "58%", side: "left", size: 640, color: "var(--color-picton)", opacity: 0.2 },
  { top: "80%", side: "right", size: 760, color: "var(--color-azure)", opacity: 0.3 },
] as const;

export default function PageBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {glows.map((g, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            top: g.top,
            [g.side]: "-10rem",
            width: g.size,
            height: g.size,
            opacity: g.opacity,
            background: `radial-gradient(circle, ${g.color} 0%, transparent 65%)`,
          }}
        />
      ))}
    </div>
  );
}
