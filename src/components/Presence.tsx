import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";
import LandmarkCard from "./LandmarkCard";
import { KingdomCentre, BurjKhalifa, BrandenburgGate, EiffelTower } from "./landmarks";

export default async function Presence() {
  const t = await getTranslations("Presence");

  const countries = [
    { key: "saudi", icon: <KingdomCentre /> },
    { key: "uae", icon: <BurjKhalifa /> },
    { key: "germany", icon: <BrandenburgGate /> },
    { key: "france", icon: <EiffelTower /> },
  ] as const;

  return (
    <section className="border-t border-white/10 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-sm text-picton-200">{t("eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {t("heading")}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-lg text-lg leading-relaxed text-white/65 lg:pt-8">{t("text")}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {countries.map((c, i) => (
            <li key={c.key}>
              <Reveal delay={i * 0.08} className="h-full">
                <LandmarkCard name={t(`countries.${c.key}`)} delay={0.15 + i * 0.15}>
                  {c.icon}
                </LandmarkCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
