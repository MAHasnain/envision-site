import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Understand",
    text: "We take the time to understand your business, objectives and challenges.",
  },
  {
    n: "02",
    title: "Design",
    text: "We develop a tailored solution aligned with your goals and regulatory requirements.",
  },
  {
    n: "03",
    title: "Implement",
    text: "We work with your teams to deliver and integrate the right technologies.",
  },
  {
    n: "04",
    title: "Grow",
    text: "We support you beyond delivery, helping you adapt and achieve lasting value.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-white/10 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm text-picton-200">Our process</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            From strategy to lasting value
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            We combine technical expertise with strategic consulting to deliver practical solutions
            that solve today&rsquo;s challenges and create long-term value.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden
            className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-picton/40 via-white/10 to-picton/40 lg:block"
          />
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <Reveal delay={i * 0.08}>
                <span className="relative grid h-12 w-12 place-items-center rounded-full border border-picton/40 bg-black text-sm font-semibold text-picton-200">
                  {s.n}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
