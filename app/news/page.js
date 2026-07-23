/* eslint-disable @next/next/no-img-element */

import { cache } from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Container from "@/Components/Container";
import LatestNews from "@/Components/LatestNews";
import Hero from "@/Components/Hero";

const NEWS_API = "https://hanzo.dxpshift.com/api/page/news";

export const dynamic = "force-dynamic";

const getNews = cache(async () => {
  const response = await fetch(NEWS_API, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`News API returned ${response.status}`);
  }

  const payload = await response.json();
  return payload?.data ?? null;
});

export async function generateMetadata() {
  try {
    const page = await getNews();

    return {
      title: "News | Hanzo Films",
      description:
        page?.seo_description ||
        "Latest news, projects, collaborations, and industry insights from Hanzo Films.",
    };
  } catch {
    return {
      title: "News | Hanzo Films",
      description:
        "Latest news, projects, collaborations, and industry insights from Hanzo Films.",
    };
  }
}

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

export default async function NewsPage() {
  let page;

  try {
    page = await getNews();
  } catch {
    page = null;
  }

  if (!page) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-400">
              News
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em]">
              News is unavailable right now.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              We couldn&rsquo;t load the latest stories. Please try again shortly.
            </p>
            <Link
              href="/"
              className="mt-8 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Back to home
            </Link>
          </Container>
        </main>
        <Footer showAccent={false} />
      </div>
    );
  }

  const articles = (page.sections ?? [])
    .filter(
      (section) =>
        section.section_type === "image" && section.details?.is_active !== 0,
    )
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const [featured, ...moreArticles] = articles;
  const featuredExcerpt = toPlainText(featured?.details?.text);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero
          lines={[
            "the latest from",
            "behind the scenes.",
            "discover stories making",
          ]}
          accentText="the"
          emphasisText="headlines"
        />

        {featured && (
          <section className="border-b border-white/10 py-16 sm:py-24">
            <Container>
              <p className="mb-7 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Featured story
              </p>
              <article className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:grid-cols-[1.25fr_0.75fr]">
                <a
                  href={featured.details?.cta_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block min-h-72 overflow-hidden bg-neutral-900 lg:min-h-[440px]"
                  aria-label={`Read ${featured.title}`}
                >
                  {featured.details?.image && (
                    <img
                      src={featured.details.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}
                </a>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  {featured.details?.cta_text && (
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff414d]">
                      {featured.details.cta_text}
                    </p>
                  )}
                  <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                    {featured.title}
                  </h2>
                  {featuredExcerpt && (
                    <p className="mt-5 text-sm leading-7 text-white/55">
                      {featuredExcerpt}
                    </p>
                  )}
                  {featured.details?.cta_link && (
                    <a
                      href={featured.details.cta_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 self-start rounded-lg bg-[#ff414d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#ff5b66]"
                    >
                      Read full story
                      <ArrowIcon />
                    </a>
                  )}
                </div>
              </article>
            </Container>
          </section>
        )}

        {moreArticles.length > 0 && (
          <section className="py-16 sm:py-24">
            <Container>
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  In the press
                </p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                  Latest stories
                </h2>
              </div>
              <LatestNews articles={moreArticles} />
            </Container>
          </section>
        )}
      </main>

      <Footer showAccent={false} />
    </div>
  );
}
