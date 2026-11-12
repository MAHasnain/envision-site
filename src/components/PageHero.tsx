import Link from "next/link";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  accent?: string;
  text?: string;
  cta?: { label: string; href: string };
};

export default function PageHero({ eyebrow, title, accent, text, cta }: Props) {
  return (
    <section className="relative text-white">
      {/* Home hero jaisa subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_30%_30%,black_15%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:pb-28 lg:pt-44">
        {eyebrow && (
          <Reveal>
            <p className="text-sm text-picton-200">{eyebrow}</p>
          </Reveal>
        )}

        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            <span className="bg-linear-to-b from-white to-picton-100/80 bg-clip-text text-transparent">
              {title}
            </span>
            {accent && (
              <>
                <br />
                <span className="bg-linear-to-r from-picton-300 to-picton bg-clip-text text-transparent">
                  {accent}
                </span>
              </>
            )}
          </h1>
        </Reveal>

        {text && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{text}</p>
          </Reveal>
        )}

        {cta && (
          <Reveal delay={0.24}>
            <Link
              href={cta.href}
              className="mt-9 inline-block rounded-full bg-picton px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-picton-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {cta.label}
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
