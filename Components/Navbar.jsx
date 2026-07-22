"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png";

export default function Navbar() {
  const navItems = ["about us", "our work", "our clients", "our team", "contact us"];
  const [language, setLanguage] = useState("DE");

  const switchLanguage = () => {
    const nextLanguage = language === "DE" ? "EN" : "DE";

    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage.toLowerCase();
  };

  return (

      <nav className="flex items-center justify-between px-10 pt-8">
        {/* Logo */}
        <Image
          src={logo}
          alt="Mindspace"
          width={80}
          height={80}
          priority
          className="h-20 w-20 object-contain"
        />

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-white text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`hover:text-cyan-400 transition ${
                item === "our work"
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
          <button
            type="button"
            onClick={switchLanguage}
            aria-label={`Switch language to ${language === "DE" ? "English" : "German"}`}
            className="relative ml-4 grid grid-cols-2 rounded-full border border-white/20 bg-white/5 p-1 text-xs transition-colors duration-300 hover:border-cyan-400/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <span
              aria-hidden="true"
              className={`absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/30 transition-transform duration-300 ease-out ${
                language === "EN" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <span
              className={`relative z-10 rounded-full px-2 py-1 transition-colors duration-300 ${
                language === "DE"
                  ? "text-black"
                  : "text-white/60"
              }`}
            >
              DE
            </span>
            <span
              className={`relative z-10 rounded-full px-2 py-1 transition-colors duration-300 ${
                language === "EN"
                  ? "text-black"
                  : "text-white/60"
              }`}
            >
              EN
            </span>
          </button>
        </div>
      </nav>

  );
}
