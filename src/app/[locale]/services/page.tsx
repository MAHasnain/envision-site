import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ServicesPage");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        accent={t("hero.accent")}
        text={t("hero.text")}
        cta={{ label: t("hero.cta"), href: "/contact-us" }}
      />

      <section className="border-t border-white/10 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
              <p className="text-sm text-picton-200">{t("intro.eyebrow")}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                {t("intro.heading")}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="lg:pt-8">
                <p className="max-w-lg text-lg leading-relaxed text-white/65">{t("intro.text")}</p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-block text-sm font-medium text-picton-200 hover:text-picton-100 hover:underline"
                >
                  {t("intro.link")}
                </Link>
              </div>
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.id}>
                <Reveal delay={i * 0.08} className="h-full">
                  <ServiceCard service={s} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <ContactCta />
    </>
  );
}