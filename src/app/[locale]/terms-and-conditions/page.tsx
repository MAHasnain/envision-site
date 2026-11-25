import { ChevronDown, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata() {
  const t = await getTranslations("Terms");
  return { title: t("title") };
}

export default async function TermsPage() {
  const t = await getTranslations("Terms");

  const locale = await getLocale();
  const footer = await getTranslations("Footer");
  return (
    <article>
      <PageHero title={t("title")} />
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
          <div className="max-w-4xl space-y-3">
            {(["scope","acceptance","email","rights","third","use","ideas","availability","liability","privacy","trade","transfer","breach","events","claims","waiver","language","agreement","updates","law","contactInfo","download"] as const).map((key, index) => (
              <details
                key={key}
                name="legal-sections"
                open={index === 0}
                className="group rounded-2xl border border-white/15 bg-white/5 open:border-picton/45"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-2xl px-5 py-5 font-semibold focus-visible:outline-2 focus-visible:outline-picton sm:px-7 sm:text-lg [&::-webkit-details-marker]:hidden">
                  {t(`${key}.heading`)}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-current/25">
                    <ChevronDown aria-hidden="true" size={18} className="group-open:rotate-180 motion-safe:transition-transform" />
                  </span>
                </summary>
                <p className="max-w-prose px-5 pb-6 leading-7 text-white/75 sm:px-7">{t(`${key}.body`)}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/privacy-statement-eu" className="underline underline-offset-4">{footer("privacy")}</Link>
            <Link href="/cookie-policy-eu" className="underline underline-offset-4">{footer("cookies")}</Link>
            <a href={`/legal/terms-${locale}.pdf`} download className="underline underline-offset-4">{t("pdf")}</a>
            <Link href="/contact-us" className="inline-flex items-center gap-2 font-semibold underline underline-offset-4">
              {t("contact")} <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}