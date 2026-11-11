import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
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
  return { title: page.title, description: page.metaDescription };
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

  return (
    <>
      <PageHero
        title={page.hero.title}
        accent={page.hero.accent}
        text={page.hero.text}
        cta={{ label: "Get in touch", href: "/contact-us" }}
      />
      <ServiceOverview overview={page.overview} />
      <ServiceFeatures features={page.features} />
      {page.band && <ServiceBand band={page.band} />}
      <Process />
      <ContactCta />
    </>
  );
}