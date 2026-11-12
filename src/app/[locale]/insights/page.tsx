import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BlueImage from "@/components/BlueImage";
import InsightsExplorer from "@/components/InsightsExplorer";
import { CategoryPill } from "@/components/PostCard";
import ContactCta from "@/components/ContactCta";
import { getPosts, getFeaturedPost, formatDate } from "@/data/insights";
import { servicePages } from "@/data/service-pages";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Insights.meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function InsightsPage() {
  const t = useTranslations("Insights");
  const ts = useTranslations("ServicePages");
  const locale = useLocale();

  const posts = getPosts(locale);
  const featured = getFeaturedPost(locale);

  const hero = (
    <PageHero
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      accent={t("hero.accent")}
      text={t("hero.text")}
    />
  );

  if (!featured) {
    return (
      <>
        {hero}
        <section className="border-t border-white/10 py-24 text-center text-white/65">
          <p className="mx-auto max-w-xl px-5">{t("noneYet")}</p>
        </section>
        <ContactCta />
      </>
    );
  }

  const rest = posts
    .filter((p) => p.slug !== featured.slug)
    .map(({ body, ...summary }) => summary);

  return (
    <>
      {hero}

      {/* Featured */}
      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <article className="group relative grid overflow-hidden rounded-3xl border border-white/15 bg-white/4 shadow-[0_0_90px_-20px_rgba(33,164,222,0.35)] transition-colors hover:border-picton/50 lg:grid-cols-2">
              <div className="relative isolate aspect-16/10 bg-black lg:aspect-auto lg:min-h-105">
                <BlueImage
                  src={featured.cover}
                  alt=""
                  sizes="(min-width: 1024px) 600px, 100vw"
                  strength="soft"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-picton px-3 py-1 text-xs font-semibold text-ink">
                    {t("featured")}
                  </span>
                  <CategoryPill id={featured.category} />
                </div>
                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-white/65">{featured.excerpt}</p>
                <p className="mt-6 text-sm text-white/45">
                  {formatDate(featured.date, locale)} · {t("minRead", { count: featured.readTime })}
                </p>
                <Link
                  href={`/insights/${featured.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-picton-200 after:absolute after:inset-0 after:content-[''] group-hover:text-picton-100"
                >
                  {t("readArticle")} <ArrowUpRight size={16} aria-hidden />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Latest + filters */}
      <section className="pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">{t("latest")}</h2>
          </Reveal>
          <InsightsExplorer posts={rest} />
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-white/10 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm text-picton-200">{t("expertise.eyebrow")}</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              {t("expertise.heading")}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicePages.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={i * 0.08} className="h-full">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/4 p-5 transition-colors hover:border-picton/50"
                  >
                    <span className="font-medium">{ts(`${s.slug}.title`)}</span>
                    <ArrowUpRight size={18} aria-hidden className="shrink-0 text-white/40 transition-colors group-hover:text-picton-200" />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}