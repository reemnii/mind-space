"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/Components/Container";

const PROJECTS_PER_PAGE = 4;

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();

    const matches = projects.filter(
      (project) =>
        !query ||
        [
          project.title,
          project.text,
          project.description,
          project.alias,
          project.client,
          project.agency,
          project.directors,
        ]
          .filter(Boolean)
          .some((value) => String(value).toLocaleLowerCase().includes(query)),
    );

    return [...matches].sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.created_at || 0) - new Date(a.created_at || 0);
      }
      if (sortBy === "title-asc") {
        return (a.title || "").localeCompare(b.title || "");
      }
      if (sortBy === "title-desc") {
        return (b.title || "").localeCompare(a.title || "");
      }

      return (a.order ?? Number.MAX_SAFE_INTEGER) -
        (b.order ?? Number.MAX_SAFE_INTEGER);
    });
  }, [projects, searchQuery, sortBy]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  useEffect(() => {
    let cancelled = false;
    fetch("https://hanzo.dxpshift.com/api/projects")
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return;
        const data = Array.isArray(json?.data) ? json.data : [];
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.message || "Failed to load projects");
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="work" className="w-full bg-black py-16 md:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:mb-12">
          <div className="w-full sm:max-w-md">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <div className="relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16.5 16.5 4 4" />
              </svg>
              <input
                id="project-search"
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setVisibleCount(PROJECTS_PER_PAGE);
                }}
                placeholder="Search our work..."
                autoComplete="off"
                className="w-full rounded-lg border border-white/15 bg-white/[0.06] py-3.5 pl-12 pr-5 text-sm text-white outline-none transition placeholder:text-white/40 hover:border-white/25 focus:border-white/50 focus:bg-white/[0.09] focus:ring-2 focus:ring-white/10"
              />
            </div>
          </div>

          <div className="relative w-full sm:w-52">
            <label htmlFor="project-sort" className="sr-only">
              Sort projects
            </label>
            <select
              id="project-sort"
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value);
                setVisibleCount(PROJECTS_PER_PAGE);
              }}
              className="w-full appearance-none rounded-lg border border-white/15 bg-neutral-950 py-3.5 pl-4 pr-10 text-sm text-white outline-none transition hover:border-white/25 focus:border-white/50 focus:ring-2 focus:ring-white/10"
            >
              <option value="recommended">Recommended</option>
              <option value="newest">Newest</option>
              <option value="title-asc">A–Z</option>
              <option value="title-desc">Z–A</option>
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
            >
              <path d="m7 10 5 5 5-5" />
            </svg>
          </div>
        </div>

        {loading && (
          <p className="text-center text-sm text-white/60">Loading projects…</p>
        )}
        {error && (
          <p className="text-center text-sm text-red-400">{error}</p>
        )}

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
          {visibleProjects.map((p) => (
            <article key={p.id} className="flex flex-col">
              <a
                href={
                  p.vimeo_id
                    ? `https://vimeo.com/${p.vimeo_id}`
                    : `#${p.alias || p.id}`
                }
                target={p.vimeo_id ? "_blank" : undefined}
                rel={p.vimeo_id ? "noreferrer" : undefined}
                className="group block overflow-hidden"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}
                </div>
              </a>

              <h3 className="mt-4 text-lg font-bold text-white md:text-xl">
                {p.title}
              </h3>

              {(p.text || p.description) && (
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                  {(p.text || p.description).split(/\r?\n/)[0]}
                </p>
              )}
            </article>
          ))}
        </div>

        {!loading && !error && filteredProjects.length === 0 && (
          <p className="py-16 text-center text-sm text-white/60">
            No projects found for &ldquo;{searchQuery.trim()}&rdquo;.
          </p>
        )}

        {!loading && !error && hasMoreProjects && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) => count + PROJECTS_PER_PAGE)
              }
              className="cursor-pointer rounded-lg border border-white/20 bg-white/[0.06] px-7 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Load more
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
