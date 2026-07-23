/* eslint-disable @next/next/no-img-element */

import { cache } from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Container from "@/Components/Container";
import PartnersSwiper from "@/Components/PartnersSwiper";
import AwardsSwiper from "@/Components/AwardsSwiper";

const OUR_STORY_API = "https://hanzo.dxpshift.com/api/page/our-story";

export const dynamic = "force-dynamic";

const getOurStory = cache(async () => {
  const response = await fetch(OUR_STORY_API, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Our Story API returned ${response.status}`);
  }

  const payload = await response.json();
  return payload?.data ?? null;
});

export async function generateMetadata() {
  try {
    const page = await getOurStory();

    return {
      title: "Our Story | Hanzo Films",
      description: page?.seo_description || undefined,
    };
  } catch {
    return {
      title: "Our Story | Hanzo Films",
      description: "Discover the story, clients, and awards behind the work.",
    };
  }
}

function activeItems(section) {
  return (section?.details?.list ?? [])
    .filter((item) => item.is_active !== 0)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export default async function AboutUsPage() {
  let page;

  try {
    page = await getOurStory();
  } catch {
    page = null;
  }

  if (!page) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Our story
            </p>
            <h1 className="mt-4 text-4xl font-bold">The story is unavailable.</h1>
            <p className="mt-4 max-w-md text-white/60">
              We couldn&rsquo;t load this page right now. Please try again shortly.
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

  const sections = (page.sections ?? [])
    .filter((section) => section.details?.is_active !== 0)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const banner = sections.find((section) => section.section_type === "banner");
  const story = sections.find((section) => section.section_type === "rich_text");
  const lists = sections.filter((section) => section.section_type === "list");
  const clients = activeItems(
    lists.find((section) => section.title?.toUpperCase() === "CLIENTS"),
  );
  const awards = lists
    .filter((section) => section.title?.toUpperCase() !== "CLIENTS")
    .flatMap(activeItems);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="relative min-h-[60vh] overflow-hidden border-b border-white/10">
          {banner?.details?.image && (
            <img
              src={banner.details.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
          <Container className="relative flex min-h-[60vh] flex-col justify-end pb-16 pt-28 sm:pb-20 lg:pb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
              About us
            </p>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              {banner?.title || "Our Story"}
            </h1>
            {banner?.subtitle && (
              <p className="mt-5 text-sm font-medium tracking-[0.18em] text-white/75 sm:text-base">
                {banner.subtitle.replaceAll('"', "")}
              </p>
            )}
          </Container>
        </section>

        {story?.details?.text && (
          <section className="border-b border-white/10 py-20 sm:py-28">
            <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#ff414d]">
                  Since 2012
                </p>
                <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                  Stories that defy convention.
                </h2>
              </div>
              <div>
                <div
                  className="space-y-5 text-base leading-8 text-white/68 [&_br]:block [&_br]:mb-5"
                  dangerouslySetInnerHTML={{ __html: story.details.text }}
                />
                {story.details.cta_text && (
                  <Link
                    href="/#work"
                    className="mt-9 inline-flex rounded-lg bg-[#ff414d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#ff5b66]"
                  >
                    {story.details.cta_text}
                  </Link>
                )}
              </div>
            </Container>
          </section>
        )}

        {clients.length > 0 && (
          <section className="overflow-hidden border-b border-white/10 py-20 sm:py-28">
            <Container>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-400">
                  Trusted by
                </p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                  Clients
                </h2>
                <p className="mt-5 text-sm leading-6 text-white/55">
                  Global brands brought together by ambitious ideas and memorable
                  storytelling.
                </p>
              </div>
              <PartnersSwiper items={clients} />
            </Container>
          </section>
        )}

        {awards.length > 0 && (
          <section className="overflow-hidden py-20 sm:py-28">
            <Container>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#ff414d]">
                  Recognition
                </p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                  Awards
                </h2>
                <p className="mt-5 text-sm leading-6 text-white/55">
                  Celebrated around the world for craft, direction, animation, and
                  original storytelling.
                </p>
              </div>
              <AwardsSwiper items={awards} />
            </Container>
          </section>
        )}
      </main>

      <Footer showAccent={false} />
    </div>
  );
}
