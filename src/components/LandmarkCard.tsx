"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

type Props = { name: string; delay?: number; children: React.ReactNode };

export default function LandmarkCard({ name, delay = 0, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <div
      ref={ref}
      data-draw={inView}
      style={{ ["--d" as string]: `${delay}s` }}
      className="landmark-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/6 to-white/1 px-6 pb-6 pt-8 text-center transition-colors duration-300 hover:border-picton/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-picton/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-70"
      />
      <div className="relative mx-auto h-36 w-full shrink-0 max-w-[190px] text-picton-200 sm:h-44">{children}</div>
      <h3 className="relative mt-auto pt-5 text-base font-medium text-white/85 sm:text-lg">{name}</h3>
    </div>
  );
}
