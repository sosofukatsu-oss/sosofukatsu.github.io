"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "WORKS", href: "#works" },
  { label: "YOUTUBE", href: "#youtube" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/95 border-b border-[var(--border-pixel)] shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#top" className="font-pixel text-xl text-[var(--text-primary)] tracking-wider hover:text-[var(--accent-blue)] transition-colors">
            SO-SO
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-pixel-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 py-2 transition-colors hover:bg-[var(--bg-base)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-pixel ml-4 text-sm px-4" style={{ paddingTop: "3px", paddingBottom: "3px" }}
            >
              依頼する
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border-pixel)] px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block font-pixel-sm text-[var(--text-secondary)] py-3 border-b border-[var(--border-pixel)] last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-pixel mt-4 w-full justify-center text-sm"
            onClick={() => setMenuOpen(false)}
          >
            依頼する
          </a>
        </div>
      )}
    </header>
  );
}
