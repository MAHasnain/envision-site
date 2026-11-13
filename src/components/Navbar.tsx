"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const links = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/about-us", label: t("about") },
    { href: "/insights", label: t("insights") },
    { href: "/contact-us", label: t("contact") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
        if (entry.isIntersecting) setOpen(false);
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 px-4 transition-[transform,visibility] duration-300 ease-out motion-reduce:transition-none ${
        hidden ? "invisible -translate-y-[200%]" : "visible translate-y-0"
      }`}
    >
      <nav
        data-scrolled={scrolled}
        className="glass-nav relative mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-6 pr-2"
      >
        <Link href="/" aria-label="Envision Consulting">
          <Logo priority />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-white/75 transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href="/contact-us"
            className="rounded-full bg-picton px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-picton-300"
          >
            {t("cta")}
          </Link>
        </div>

        <button
          className="mr-3 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {open && (
          <div className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-white/15 bg-black/70 p-3 backdrop-blur-2xl md:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base text-white/85 hover:bg-white/10"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-white/10 px-3 pb-2 pt-3">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}