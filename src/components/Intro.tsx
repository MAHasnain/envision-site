import Link from "next/link";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="py-24 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            IT Services &amp; Technology Consulting in France
          </h2>
        </Reveal>

        <div className="lg:pt-2">
          <Reveal delay={0.08}>
            <p className="max-w-lg text-lg leading-relaxed text-white/65">
              Envision Technologies help organizations modernize IT infrastructure, prepare for
              NIS2, and unlock value through data, cloud and AI.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Link
              href="/about-us"
              className="mt-8 inline-block rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-picton hover:text-picton-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-picton"
            >
              About Us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}