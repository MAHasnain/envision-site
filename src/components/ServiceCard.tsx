import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

// id = key in messages: Services.items.<id>
type Service = { id: string; src: string; href: string };

export default function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations("Services");
  const title = t(`items.${service.id}.title`);

  return (
    <article className="group relative h-full rounded-2xl border border-white/10 bg-white/4 p-2 transition-colors hover:border-picton/50">
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-black">
        <Image
          src={service.src}
          alt=""
          fill
          sizes="(min-width: 1280px) 290px, (min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="px-3 pb-4 pt-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {t(`items.${service.id}.text`)}
        </p>
        <Link
          href={service.href}
          className="mt-4 inline-block text-sm font-medium text-picton-200 after:absolute after:inset-0 after:content-[''] group-hover:text-picton-100 group-hover:underline"
        >
          {t("learnMore")}
          <span className="sr-only">: {title}</span>
        </Link>
      </div>
    </article>
  );
}