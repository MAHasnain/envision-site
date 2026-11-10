import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "General",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about-us" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Data Center and Infrastructure", href: "/data-center-infrastructure" },
      { label: "Cloud Services", href: "/cloud-services" },
      { label: "Cybersecurity", href: "/cybersecurity-nis2-compliance" },
      { label: "AI & Automation", href: "/ai-automation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/insights" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Statement", href: "/privacy-statement-eu" },
    ],
  },
];

const legal = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Imprint", href: "/imprint" },
  { label: "Cookie Policy", href: "/cookie-policy-eu" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)_1.3fr]">
          <div>
            <Link href="/" aria-label="Envision Consulting home">
              <Image
                src="/images/logo-white.png"
                alt="Envision Consulting"
                width={128}
                height={55}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-picton-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
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
          <p>Copyright © 2026 Envision Consulting</p>
          <ul className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <li key={l.label}>
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
