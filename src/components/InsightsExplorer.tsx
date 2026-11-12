"use client";

import { useState } from "react";
import PostCard, { type PostSummary } from "./PostCard";
import { categories, type CategoryId } from "@/data/insights";

export default function InsightsExplorer({ posts }: { posts: PostSummary[] }) {
  const [active, setActive] = useState<CategoryId | "all">("all");
  const visible = active === "all" ? posts : posts.filter((p) => p.category === active);

  const chip = (on: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition-colors ${
      on
        ? "border-picton bg-picton/15 text-white"
        : "border-white/15 bg-white/5 text-white/65 hover:border-white/30 hover:text-white"
    }`;

  return (
    <div>
      <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-3">
        <button className={chip(active === "all")} aria-pressed={active === "all"} onClick={() => setActive("all")}>
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={chip(active === c.id)}
            aria-pressed={active === c.id}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {visible.length ? (
        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-white/55">No articles in this topic yet.</p>
      )}
    </div>
  );
}
