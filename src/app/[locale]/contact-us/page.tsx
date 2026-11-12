import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Compass, Route, Landmark } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Contact");
  return { title: t("meta.title"), description: t("meta.description") };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  const why = [
    { icon: Compass, title: t("why.advisory.title"), text: t("why.advisory.text") },
    { icon: Route, title: t("why.delivery.title"), text: t("why.delivery.text") },
    { icon: Landmark, title: t("why.regulatory.title"), text: t("why.regulatory.text") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        accent={t("hero.accent")}
        text={t("hero.text")}
      />

      <section className="border-t border-white/10 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: details + why */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("details.title")}</h2>
            </Reveal>

            <ul className="mt-8 space-y-4">
              <li>
                <Reveal delay={0.06}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-picton/30 bg-picton/10 text-picton-200">
                      <MapPin size={20} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-white/50">{t("details.address")}</p>
                      <address className="mt-1 not-italic text-white/85">
                        43 boulevard Auguste Blanqui
                        <br />
                        75013 Paris
                      </address>
                    </div>
                  </div>
                </Reveal>
              </li>
              <li>
                <Reveal delay={0.12}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-picton/30 bg-picton/10 text-picton-200">
                      <Phone size={20} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-white/50">{t("details.phone")}</p>
                      <a href="tel:+33632239229" className="mt-1 block text-white/85 transition-colors hover:text-picton-200">
                        +33 6 32 23 92 29
                      </a>
                    </div>
                  </div>
                </Reveal>
              </li>
            </ul>

            <Reveal delay={0.18}>
              <h2 className="mt-12 text-sm text-picton-200">{t("why.title")}</h2>
            </Reveal>
            <ul className="mt-4 space-y-6">
              {why.map((w, i) => (
                <li key={w.title}>
                  <Reveal delay={0.2 + i * 0.06}>
                    <div className="flex gap-4">
                      <w.icon size={20} aria-hidden className="mt-0.5 shrink-0 text-picton-200" />
                      <div>
                        <h3 className="font-semibold">{w.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">{w.text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/15 bg-black/60 p-2 shadow-[0_0_90px_-15px_rgba(33,164,222,0.4)]">
              <div className="rounded-[1.25rem] bg-white/[0.03] p-6 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}