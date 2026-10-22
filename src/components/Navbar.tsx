"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glassmorphism bar — solid tokens only, ultra-soft shadow. */}
      <div
        className={`border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out ${
          scrolled || menuOpen
            ? "border-ink/[0.08] bg-canvas/80 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(44,38,35,0.05)]"
            : "border-transparent bg-canvas/40 backdrop-blur-md backdrop-saturate-150"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-70"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-medium tracking-tight text-ink">
              {profile.name.charAt(0)}
            </span>
            <span className="text-sm font-medium tracking-[-0.01em] text-ink">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-ink/70 transition-colors duration-300 hover:text-accent-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent-deep md:inline-block"
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/15 transition-colors duration-300 hover:border-ink/30 md:hidden"
            >
              <span
                className={`h-px w-4 bg-ink transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-4 bg-ink transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`overflow-hidden border-ink/[0.08] bg-canvas/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-6 pb-10 pt-4">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="border-b border-ink/[0.06] last:border-b-0"
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className="flex items-center justify-between py-5 text-2xl font-medium tracking-[-0.02em] text-ink"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-sm text-ink/40">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
