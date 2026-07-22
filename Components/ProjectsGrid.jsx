"use client";

import { useEffect, useState } from "react";
import Container from "@/Components/Container";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <section className="w-full bg-black py-16 md:py-20">
      <Container>
        {loading && (
          <p className="text-center text-sm text-white/60">Loading projects…</p>
        )}
        {error && (
          <p className="text-center text-sm text-red-400">{error}</p>
        )}

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
          {projects.map((p) => (
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
      </Container>
    </section>
  );
}
