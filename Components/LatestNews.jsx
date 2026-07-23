"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const POSTS_PER_PAGE = 4;

function toPlainText(html = "") {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;|&#39;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function NewsCard({ article }) {
  const excerpt = toPlainText(article.details?.text);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] transition hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.045]">
      <a
        href={article.details?.cta_link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
        aria-label={`Read ${article.title}`}
      >
        <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
          {article.details?.image && (
            <img
              src={article.details.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          )}
        </div>
      </a>

      <div className="flex flex-1 flex-col p-6">
        {article.details?.cta_text && (
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-400">
            {article.details.cta_text}
          </p>
        )}
        <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.025em] text-white">
          {article.title}
        </h3>
        {excerpt && (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/55">
            {excerpt}
          </p>
        )}
        {article.details?.cta_link && (
          <a
            href={article.details.cta_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-white transition hover:text-cyan-400"
          >
            Read article
            <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function LatestNews({ articles }) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {visibleArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) => count + POSTS_PER_PAGE)
            }
            className="cursor-pointer rounded-lg border border-white/20 bg-white/[0.06] px-7 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
