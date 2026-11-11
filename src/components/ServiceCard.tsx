import Image from "next/image";
import Link from "next/link";

type Service = { title: string; text: string; src: string; href: string };

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-2 transition-colors hover:border-picton/50">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black">
        <Image
          src={service.src}
          alt=""
          fill
          sizes="(min-width: 1280px) 290px, (min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="px-3 pb-4 pt-5">
        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{service.text}</p>
        <Link
          href={service.href}
          className="mt-4 inline-block text-sm font-medium text-picton-200 after:absolute after:inset-0 after:content-[''] group-hover:text-picton-100 group-hover:underline"
        >
          Learn more
          <span className="sr-only">: {service.title}</span>
        </Link>
      </div>
    </article>
  );
}
