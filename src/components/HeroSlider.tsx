"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const slides = [
  { id: "cloud-services", src: "/images/services/cloud.png" },
  { id: "data-center-infrastructure", src: "/images/services/data-center.png" },
  { id: "cybersecurity-nis2-compliance", src: "/images/services/cybersecurity.png" },
  { id: "ai-automation", src: "/images/services/ai-automation.png" },
] as const;

export default function HeroSlider() {
  const t = useTranslations("Services");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((v) => (v + 1) % slides.length);

  return (
    <div
      className="rounded-2xl border border-white/15 bg-black/60 p-2 shadow-[0_0_90px_-15px_rgba(33,164,222,0.45)] backdrop-blur"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-16/11 overflow-hidden rounded-xl bg-white/5 sm:aspect-16/10">
        {slides.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${i === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={s.src}
              alt={i === index ? t(`items.${s.id}.title`) : ""}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/75 to-transparent px-5 pb-5 pt-24 sm:px-6 sm:pb-6">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {t(`items.${s.id}.title`)}
              </h3>
              <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-white/70">
                {t(`items.${s.id}.text`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label={t("tabsLabel")} className="grid grid-cols-4 gap-2 px-2 pb-2 pt-4 sm:gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className="group text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-picton"
          >
            <span className="relative block h-0.5 overflow-hidden rounded-full bg-white/15">
              {i === index && (
                <span
                  key={index}
                  onAnimationEnd={next}
                  style={{ animationPlayState: paused ? "paused" : "running" }}
                  className="slide-progress absolute inset-0 origin-left bg-picton"
                />
              )}
            </span>
            <span
              className={`mt-2 block text-xs transition-colors sm:text-sm ${i === index ? "text-white" : "text-white/45 group-hover:text-white/75"
                }`}
            >
              {t(`items.${s.id}.tab`)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}