import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("Footer");

  const columns = [
    {
      title: t("general"),
      links: [
        { label: t("home"), href: "/" },
        { label: t("services"), href: "/services" },
        { label: t("about"), href: "/about-us" },
        { label: t("contact"), href: "/contact-us" },
      ],
    },
    {
      title: t("services"),
      links: [
        { label: t("dataCenter"), href: "/services/data-center-infrastructure" },
        { label: t("cloud"), href: "/services/cloud-services" },
        { label: t("cyber"), href: "/services/cybersecurity-nis2-compliance" },
        { label: t("ai"), href: "/services/ai-automation" },
      ],
    },
    {
      title: t("resources"),
      links: [
        { label: t("blog"), href: "/insights" },
        { label: t("terms"), href: "/terms-and-conditions" },
        { label: t("privacy"), href: "/privacy-statement-eu" },
      ],
    },
  ] as const;

  const legal = [
    { label: t("disclaimer"), href: "/disclaimer" },
    { label: t("imprint"), href: "/imprint" },
    { label: t("cookies"), href: "/cookie-policy-eu" },
  ] as const;

  return (
    <footer className="border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)_1.3fr]">
          <div>
            <Link href="/" aria-label="Envision Consulting">
              <Image
                src="/images/logo-white.png"
                alt="Envision Consulting"
                width={128}
                height={55}
                className="h-10 w-auto "
              />
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-picton-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">{t("contact")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="transition-colors hover:text-picton-200">LinkedIn</a>
              </li>
              <li>
                <a href="tel:+33632239229" className="transition-colors hover:text-picton-200">
                  +33 6 32 23 92 29
                </a>
              </li>
              <li>43 boulevard Auguste Blanqui 75013 Paris</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45">
          <p>{t("copyright")}</p>
          <ul className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}