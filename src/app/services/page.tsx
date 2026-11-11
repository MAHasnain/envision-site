import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Cloud, infrastructure, cybersecurity, data and AI: integrated technology services designed around real business needs.",
};

export default function ServicesPage() {
    return (
        <>
            <PageHero
                eyebrow="People · Technology · Progress"
                title="Technology That Moves"
                accent="Business Forward"
                text="From cloud and infrastructure to cybersecurity, data, AI and smart buildings, we deliver integrated technology services designed around real business needs."
                cta={{ label: "Get in touch", href: "/contact-us" }}
            />

            <section className="border-t border-white/10 py-24 sm:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
                        <Reveal>
                            <p className="text-sm text-picton-200">Our services</p>
                            <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                                Technology solutions for real business impact
                            </h2>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <div className="lg:pt-8">
                                <p className="max-w-lg text-lg leading-relaxed text-white/65">
                                    We help organisations design, secure and modernise their digital environments
                                    across cybersecurity, AI and data.
                                </p>
                                <Link
                                    href="/contact-us"
                                    className="mt-6 inline-block text-sm font-medium text-picton-200 hover:text-picton-100 hover:underline"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </Reveal>
                    </div>

                    <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {services.map((s, i) => (
                            <li key={s.title}>
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