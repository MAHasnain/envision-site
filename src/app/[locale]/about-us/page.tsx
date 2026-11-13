import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Scale, Target, Users, Lightbulb, Compass, LifeBuoy, Landmark, Route,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BlueImage from "@/components/BlueImage";
import ContactCta from "@/components/ContactCta";
import { aboutStory, aboutValues, aboutWhy } from "@/data/about";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("About.meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}

const icons: Record<string, LucideIcon> = {
  scale: Scale, target: Target, users: Users, bulb: Lightbulb,
  compass: Compass, support: LifeBuoy, landmark: Landmark, route: Route,
};

const frame =
  "rounded-2xl border border-white/15 bg-black/60 p-2 shadow-[0_0_90px_-15px_rgba(33,164,222,0.4)]";

function IconBadge({ name }: { name: string }) {
  const Icon = icons[name];
  return (
    <span className="grid h-11 w-11 place-items-center rounded-full border border-picton/30 bg-picton/10 text-picton-200">
      <Icon size={20} aria-hidden />
    </span>
  );
}

export default function AboutPage() {
  const t = useTranslations("About");
  const storyParagraphs = t.raw("story.paragraphs") as string[];
  const approachParagraphs = t.raw("approach.paragraphs") as string[];

  return (
    <>
      <PageHero
        title={t("hero.title")}
        accent={t("hero.accent")}
        text={t("hero.text")}
        cta={{ label: t("hero.cta"), href: "/contact-us" }}
      />

      {/* Our story */}
      <section className="border-t border-white/10 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-sm text-picton-200">{t("story.eyebrow")}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem]">
                {t("story.heading")}
              </h2>
            </Reveal>
            {storyParagraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.08}>
                <p className={`mt-5 max-w-xl leading-relaxed ${i === 0 ? "text-lg text-white/70" : "text-white/60"}`}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className={frame}>
              <div className="relative isolate aspect-4/3 overflow-hidden rounded-xl bg-black">
                <BlueImage src={aboutStory.image} alt={t("story.imageAlt")} sizes="(min-width: 1024px) 600px, 100vw" strength="soft" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values + mission */}
      <section className="border-t border-white/10 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t("values.title")}</h2>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v, i) => (
              <li key={v.id}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/4 p-6">
                    <IconBadge name={v.icon} />
                    <h3 className="mt-5 text-lg font-semibold">{t(`values.${v.id}.title`)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{t(`values.${v.id}.text`)}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-azure/45 via-black/70 to-black px-6 py-14 sm:px-12 sm:py-16">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle, var(--color-picton) 0%, transparent 65%)" }}
              />
              <div className="relative max-w-3xl">
                <p className="text-sm text-picton-200">{t("mission.label")}</p>
                <p className="mt-3 text-2xl font-medium leading-snug sm:text-3xl">{t("mission.text")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Envision */}
      <section className="border-t border-white/10 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <p className="text-sm text-picton-200">{t("why.eyebrow")}</p>
                <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                  {t("why.line1")}
                  <br />
                  <span className="bg-gradient-to-r from-picton-300 to-picton bg-clip-text text-transparent">
                    {t("why.line2")}
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{t("why.lead")}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-4 max-w-xl leading-relaxed text-white/60">{t("why.text")}</p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className={frame}>
                <div className="relative isolate aspect-[4/3] overflow-hidden rounded-xl bg-black">
                  <BlueImage src={aboutWhy.image} alt={t("why.imageAlt")} sizes="(min-width: 1024px) 600px, 100vw" strength="soft" />
                </div>
              </div>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutWhy.items.map((it, i) => (
              <li key={it.id}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <IconBadge name={it.icon} />
                    <h3 className="mt-5 text-lg font-semibold">{t(`why.${it.id}.title`)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{t(`why.${it.id}.text`)}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our approach */}
      <section className="border-t border-white/10 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-sm text-picton-200">{t("approach.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {t("approach.heading")}
            </h2>
          </Reveal>
          <div className="lg:pt-8">
            {approachParagraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.08}>
                <p className={`max-w-xl leading-relaxed ${i === 0 ? "text-lg text-white/70" : "mt-4 text-white/60"}`}>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <Link
                href="/services"
                className="mt-8 inline-block rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-picton hover:text-picton-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-picton"
              >
                {t("approach.cta")}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}