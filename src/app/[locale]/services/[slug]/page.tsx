import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ServiceOverview from "@/components/ServiceOverview";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceBand from "@/components/ServiceBand";
import Process from "@/components/Process";
import ContactCta from "@/components/ContactCta";
import { servicePages, getServicePage } from "@/data/service-pages";

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  const t = await getTranslations("ServicePages");
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.metaDescription`),
  };
}

export default function ServiceDetailPage({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <ServiceDetail params={params} />
    </Suspense>
  );
}

async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const t = await getTranslations("ServicePages");

  const band = page.hasBand
    ? {
        partnersLabel: t(`${slug}.band.partnersLabel`),
        partnersText: t(`${slug}.band.partnersText`),
        missionLabel: t(`${slug}.band.missionLabel`),
        missionText: t(`${slug}.band.missionText`),
      }
    : null;

  return (
    <>
      <PageHero
        title={t(`${slug}.hero.title`)}
        accent={t(`${slug}.hero.accent`)}
        text={t(`${slug}.hero.text`)}
        cta={{ label: t("cta"), href: "/contact-us" }}
      />
      <ServiceOverview slug={slug} benefitIcons={page.benefitIcons} />
      <ServiceFeatures slug={slug} image={page.image} />
      {band && <ServiceBand band={band} />}
      <Process />
      <ContactCta />
    </>
  );
}