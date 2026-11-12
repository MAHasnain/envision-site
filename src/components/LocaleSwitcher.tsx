"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname(); // locale prefix ke bina, e.g. /services/cloud-services
  const router = useRouter();

  return (
    <div className="flex items-center text-sm" role="group" aria-label={t("language")}>
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-2 text-white/25">|</span>}
          <button
            lang={l}
            aria-pressed={l === locale}
            onClick={() => router.replace(pathname, { locale: l })}
            className={
              l === locale ? "font-medium text-white" : "text-white/55 transition-colors hover:text-white"
            }
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
