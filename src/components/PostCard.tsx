import Link from "next/link";
import BlueImage from "./BlueImage";
import { categoryLabel, formatDate, type Post } from "@/data/insights";

export type PostSummary = Omit<Post, "body">;

export function CategoryPill({ id }: { id: PostSummary["category"] }) {
  return (
    <span className="inline-block rounded-full border border-picton/30 bg-picton/10 px-3 py-1 text-xs font-medium text-picton-200">
      {categoryLabel(id)}
    </span>
  );
}

export default function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/4 p-2 transition-colors hover:border-picton/50">
      <div className="relative isolate aspect-16/10 overflow-hidden rounded-xl bg-black">
        <BlueImage
          src={post.cover}
          alt=""
          sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, 100vw"
          strength="soft"
        />
      </div>
      <div className="flex flex-1 flex-col px-3 pb-4 pt-5">
        <CategoryPill id={post.category} />
        <h3 className="mt-4 text-lg font-semibold leading-snug text-white">{post.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/60">{post.excerpt}</p>
        <p className="mt-auto pt-5 text-xs text-white/45">
          {formatDate(post.date)} · {post.readTime} min read
        </p>
        <Link
          href={`/insights/${post.slug}`}
          className="absolute inset-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-picton"
        >
          <span className="sr-only">Read: {post.title}</span>
        </Link>
      </div>
    </article>
  );
}
