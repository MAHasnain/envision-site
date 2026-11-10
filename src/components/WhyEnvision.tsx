import Link from "next/link";
import Reveal from "./Reveal";

export default function WhyEnvision() {
  return (
    <section className="py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-azure/45 via-black/70 to-black px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-picton) 0%, transparent 65%)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="text-sm text-picton-200">Why Envision</p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                A partner for what&rsquo;s next
              </h2>
            </Reveal>
            <div className="lg:pt-8">
              <Reveal delay={0.08}>
                <p className="max-w-xl text-lg leading-relaxed text-white/75">
                  At Envision Consulting we combine deep technical expertise with a practical,
                  business-first approach, helping organizations across France build more secure,
                  efficient and future-ready operations.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <Link
                  href="/contact-us"
                  className="mt-8 inline-block rounded-full bg-picton px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-picton-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact Us
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
