"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(0,0,0,0.75)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold tracking-tight text-[#f5f5f7] hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[#0071e3]">Y</span>B
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium transition-colors cursor-pointer"
                style={{
                  color: isActive ? "#f5f5f7" : "#86868b",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#f5f5f7")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = isActive
                    ? "#f5f5f7"
                    : "#86868b")
                }
              >
                {link.label}
                {isActive && (
                  <m.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#0071e3]"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#86868b] hover:text-[#f5f5f7] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-white/[0.06]"
          style={{
            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(20px)",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToSection(link.href);
                  setMobileOpen(false);
                }}
                className="text-left text-base font-medium text-[#86868b] hover:text-[#f5f5f7] transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </m.div>
      )}
    </m.header>
  );
}
