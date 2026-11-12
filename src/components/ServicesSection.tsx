"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { services } from "@/data/services";
import Reveal from "./Reveal";

const n = services.length;
const sets = [0, 1, 2];

export default function ServicesSection() {
  const t = useTranslations("Services");
  const tSection = useTranslations("ServicesSection");
  const scroller = useRef<HTMLDivElement>(null);

  const setWidth = (el: HTMLDivElement) => {
    const cards = el.querySelectorAll<HTMLElement>("article");
    if (cards.length < n + 1) return 0;
    return cards[n].offsetLeft - cards[0].offsetLeft;
  };

  // Start beech wale set se
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollLeft = setWidth(el);
  }, []);

  // Scroll ruk jaye to loop reset (invisible jump)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onScroll = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const el = scroller.current;
      if (!el) return;
      const w = setWidth(el);
      if (!w) return;
      if (el.scrollLeft >= w * 1.5) el.scrollLeft -= w;
      else if (el.scrollLeft < w * 0.5) el.scrollLeft += w;
    }, 120);
  };

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const next = () => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("article") as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 400;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="relative overflow-x-clip border-t border-white/10 py-24 text-white sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              {tSection("heading")}
            </h2>

            <div className="flex items-center gap-3">
              <Link
                href="/services"
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-picton hover:text-picton-200"
              >
                {t("exploreAll")}
              </Link>
              <button
                onClick={next}
                aria-label={t("next")}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-picton hover:text-picton-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Cards: right edge tak bleed, last card aadha cut (scroll ka hint) */}
        <Reveal delay={0.08} className="mt-12">
          <div
            ref={scroller}
            onScroll={onScroll}
            style={{ marginRight: "calc(50% - 50vw)" }}
            className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pr-5 scrollbar-none sm:pr-8 [&::-webkit-scrollbar]:hidden"
          >
            {sets.map((set) =>
              services.map((s) => {
                const clone = set !== 1;
                const title = t(`items.${s.id}.title`);
                return (
                  <div
                    key={`${set}-${s.id}`}
                    className="w-75 shrink-0 snap-start sm:w-95 lg:w-110"
                  >
                    <article
                      aria-hidden={clone || undefined}
                      className="h-full rounded-2xl border border-white/10 bg-white/4 p-2 transition-colors hover:border-picton/50"
                    >
                      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-black">
                        <Image
                          src={s.src}
                          alt={clone ? "" : title}
                          fill
                          sizes="(min-width: 1024px) 440px, 380px"
                          className="object-cover"
                        />
                      </div>
                      <div className="px-3 pb-4 pt-5">
                        <h3 className="text-lg font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          {t(`items.${s.id}.text`)}
                        </p>
                        <Link
                          href={s.href}
                          tabIndex={clone ? -1 : undefined}
                          className="mt-4 inline-block text-sm font-medium text-picton-200 hover:text-picton-100 hover:underline"
                        >
                          {t("learnMore")}
                        </Link>
                      </div>
                    </article>
                  </div>
                );
              })
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}