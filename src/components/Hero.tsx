"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  const reduce = useReducedMotion();

  // Ek hi orchestrated page-load reveal
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  });

  return (
    <section className="relative text-white">
      {/* Subtle grid, edges pe fade (glows ab PageBackground mein hain) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_60%_40%,black_20%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:min-h-screen lg:grid-cols-[1fr_1.05fr] lg:pb-20">
        {/* Left */}
        <div>
          <motion.p {...item(0)} className="text-sm text-picton-200">
            People · Technology · Progress
          </motion.p>

          <motion.h1
            {...item(1)}
            className="mt-4 bg-linear-to-b from-white to-picton-100/80 bg-clip-text text-4xl font-semibold leading-[1.08] tracking-tight text-transparent sm:text-5xl lg:text-[3.6rem]"
          >
            Building Smarter, more Resilient Tomorrow
          </motion.h1>

          <motion.p {...item(2)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            IT consulting, cybersecurity and data solutions for a stronger, more secure and
            intelligent future in France.
          </motion.p>

          <motion.div {...item(3)} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="rounded-full bg-picton px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-picton-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-picton hover:text-picton-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Our Services
            </Link>
          </motion.div>

          <motion.dl
            {...item(4)}
            className="mt-14 grid max-w-xl grid-cols-2 gap-8 border-t border-white/10 pt-6"
          >
            <div>
              <dt className="text-3xl font-semibold text-white">15+</dt>
              <dd className="mt-1 text-sm text-white/55">years of technology delivery across GCC</dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold text-white">4</dt>
              <dd className="mt-1 text-sm text-white/55">
                countries: Saudi Arabia, UAE, Germany, France
              </dd>
            </div>
          </motion.dl>
        </div>

        {/* Right */}
        <motion.div {...item(2)}>
          <HeroSlider />
        </motion.div>
      </div>
    </section>
  );
}