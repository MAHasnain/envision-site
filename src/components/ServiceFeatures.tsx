import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import type { ServicePage } from "@/data/service-pages";

export default function ServiceFeatures({ features }: { features: ServicePage["features"] }) {
  return (
    <section className="border-t border-white/10 py-24 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="rounded-2xl border border-white/15 bg-black/60 p-2 shadow-[0_0_90px_-15px_rgba(33,164,222,0.4)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black">
              <Image
                src={features.image}
                alt={features.imageAlt}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem]">
              {features.heading}
            </h2>
          </Reveal>

          <ul className="mt-10 space-y-7">
            {features.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={0.12 + i * 0.06}>
                  <div className="flex gap-4">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-picton/40 bg-picton/10 text-picton-200">
                      <Check size={15} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 max-w-lg text-sm leading-relaxed text-white/60">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
