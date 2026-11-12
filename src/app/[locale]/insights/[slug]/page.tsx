import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import BlueImage from "@/components/BlueImage";
import ArticleBody from "@/components/ArticleBody";
import PostCard, { CategoryPill } from "@/components/PostCard";
import ContactCta from "@/components/ContactCta";
import { getPosts, getPost, formatDate } from "@/data/insights";

// slugs locale-independent hain, isliye English list se kaafi hai
export function generateStaticParams() {
  return getPosts("en").map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const post = getPost(slug, locale);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function ArticlePage({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <Article params={params} />
    </Suspense>
  );
}

async function Article({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const post = getPost(slug, locale);
  if (!post) notFound();

  const t = await getTranslations("Insights");

  const others = getPosts(locale).filter((p) => p.slug !== post.slug);
  const related = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ]
    .slice(0, 3)
    .map(({ body, ...summary }) => summary);

  return (
    <>
      <article className="text-white">
        <header className="mx-auto max-w-3xl px-5 pb-10 pt-36 sm:px-8 lg:pt-44">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-picton-200"
          >
            <ArrowLeft size={16} aria-hidden /> {t("article.back")}
          </Link>
          <div className="mt-8">
            <CategoryPill id={post.category} />
          </div>
          <h1 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/65">{post.excerpt}</p>
          <p className="mt-6 text-sm text-white/45">
            {t("article.by")} · {formatDate(post.date, locale)} · {t("minRead", { count: post.readTime })}
          </p>
        </header>

        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-2xl border border-white/15 bg-black/60 p-2 shadow-[0_0_90px_-15px_rgba(33,164,222,0.4)]">
            <div className="relative isolate aspect-16/8 overflow-hidden rounded-xl bg-black">
              <BlueImage src={post.cover} alt="" sizes="(min-width: 1024px) 960px, 100vw" strength="soft" priority />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 pb-24 pt-6 sm:px-8">
          <ArticleBody blocks={post.body} />
        </div>
      </article>

      <section className="border-t border-white/10 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("article.keepReading")}</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}