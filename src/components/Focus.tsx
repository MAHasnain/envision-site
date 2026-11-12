import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function Focus() {
  const t = useTranslations("Focus");

  return (
    <section className="border-t border-white/10 py-24 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-sm text-picton-200">{t("eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem]">
              {t("heading")}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{t("p1")}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-xl leading-relaxed text-white/55">{t("p2")}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href="/about-us"
              className="mt-8 inline-block rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-picton hover:text-picton-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-picton"
            >
              {t("cta")}
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/15 bg-black/60 p-2 shadow-[0_0_90px_-15px_rgba(33,164,222,0.4)]">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src="/images/focus.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}