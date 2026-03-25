"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Equipo", href: "#equipo" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold text-slate-900 tracking-tight"
        >
          Castelli Group
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 bg-brand-600 text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-all duration-200 shadow-[0_2px_8px_rgba(13,148,136,0.3)] hover:shadow-[0_4px_16px_rgba(13,148,136,0.4)]"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-900 p-1"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-2xl transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-lg text-slate-700 hover:text-slate-900 transition-colors py-3 border-b border-slate-100"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="block w-full px-5 py-3 bg-brand-600 text-white text-base font-medium rounded-full text-center hover:bg-brand-700 transition-colors shadow-[0_2px_8px_rgba(13,148,136,0.3)]"
            >
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
