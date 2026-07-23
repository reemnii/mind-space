"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/Components/Container";

const navItems = [
  { label: "our story", href: "/about-us" },
  { label: "our work", href: "/#work" },
  { label: "news", href: "/news" },
  { label: "directors", href: "https://hanzofilms.com/directors" },
  { label: "contact", href: "/#contact" },
];

function LanguageSwitch({ language, onSwitch, className = "" }) {
  return (
    <button
      type="button"
      onClick={onSwitch}
      aria-label={`Switch language to ${language === "DE" ? "English" : "German"}`}
      className={`relative grid cursor-pointer grid-cols-2 rounded-full border border-white/20 bg-white/5 p-1 text-xs transition-colors duration-300 hover:border-cyan-400/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/30 transition-transform duration-300 ease-out ${
          language === "EN" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      <span
        className={`relative z-10 rounded-full px-2 py-1 transition-colors duration-300 ${
          language === "DE" ? "text-black" : "text-white/60"
        }`}
      >
        DE
      </span>
      <span
        className={`relative z-10 rounded-full px-2 py-1 transition-colors duration-300 ${
          language === "EN" ? "text-black" : "text-white/60"
        }`}
      >
        EN
      </span>
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState("DE");
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLanguage = () => {
    const nextLanguage = language === "DE" ? "EN" : "DE";

    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage.toLowerCase();
  };

  return (
    <nav className="relative z-50 bg-black py-4 lg:pb-0 lg:pt-8">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Hanzo Films home"
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-[-0.04em] text-white sm:text-2xl"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-400 text-cyan-400">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="ml-0.5 h-4 w-4 fill-current"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          </span>
          <span>
            Hanzo<span className="text-cyan-400">Films</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white lg:flex">
          {navItems.map(({ label, href }) => {
            const isActive =
              (pathname === "/about-us" && label === "our story") ||
              (pathname === "/news" && label === "news") ||
              (pathname === "/" && label === "our work");

            return (
            <Link
              key={label}
              href={href}
              className={`relative pb-3 transition hover:text-cyan-400 ${
                isActive
                  ? "font-bold text-white after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-11 after:-translate-x-1/2 after:rounded-full after:bg-cyan-400 hover:text-white"
                  : ""
              }`}
            >
              {label}
            </Link>
          )})}
          <LanguageSwitch
            language={language}
            onSwitch={switchLanguage}
            className="ml-4"
          />
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 lg:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </Container>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-t border-white/10 bg-black px-5 pb-7 pt-5 shadow-2xl shadow-black/70 lg:hidden"
        >
          <div className="flex flex-col items-start gap-4 text-base text-white">
            {navItems.map(({ label, href }) => {
              const isActive =
                (pathname === "/about-us" && label === "our story") ||
                (pathname === "/news" && label === "news") ||
                (pathname === "/" && label === "our work");

              return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`w-full border-b border-white/10 pb-3 transition hover:text-cyan-400 ${
                  isActive
                    ? "relative font-bold text-white after:absolute after:bottom-1 after:left-0 after:h-1 after:w-11 after:rounded-full after:bg-cyan-400 hover:text-white"
                    : ""
                }`}
              >
                {label}
              </Link>
            )})}
            <LanguageSwitch
              language={language}
              onSwitch={switchLanguage}
              className="mt-1"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
