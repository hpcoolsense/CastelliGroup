"use client";

import { Quote } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { asset } from "@/lib/config";

const TESTIMONIALS = [
  {
    before: "Trabajar con Euge fue ",
    highlight: "un antes y un después.",
    after:
      " Con su acompañamiento pude ordenar lo que hacía, entender los procesos y transformarlos en una base sólida preparada para el crecimiento.",
    author: "Paulina González",
    role: "Founder, INNA",
    photo: "/images/paulina.png",
  },
  {
    before: "Eugenia ha demostrado un nivel de ",
    highlight: "compromiso y profesionalismo fundamental",
    after:
      " para el éxito de nuestro proyecto anual. Su desempeño se caracterizó por un rigor institucional ejemplar.",
    author: "Facundo Cabral",
    role: "Presidente, IBATIN",
    photo: "/images/facundo.png",
  },
  {
    before: "Gracias a su mirada estratégica y humana, INNA pasó de ser 'solo un negocio' a ",
    highlight: "un estudio con dirección, propósito y proyección.",
    after: "",
    author: "Paulina González",
    role: "Founder, INNA",
    photo: "/images/paulina.png",
  },
  {
    before:
      "En un contexto donde la adaptabilidad fue clave, Eugenia supo ",
    highlight: "integrar nuevas tecnologías de manera eficiente y creativa,",
    after:
      " modernizando procesos y facilitando una participación más amplia y dinámica.",
    author: "Facundo Cabral",
    role: "Presidente, IBATIN",
    photo: "/images/facundo.png",
  },
];

export default function SocialProof() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 md:py-24 overflow-hidden">
      {/* Title — big and impactful */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <AnimatedSection>
          <p className="text-sm text-brand-600 uppercase tracking-widest font-medium mb-4">
            Casos reales
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-tight">
            <span className="gradient-text">No lo decimos nosotros.</span>
            <br />
            <span className="gradient-text-brand">Lo dicen ellos.</span>
          </h2>
        </AnimatedSection>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Ticker */}
        <div className="flex ticker-track">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[400px] md:w-[480px] mx-3 p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <Quote size={24} className="text-brand-400 mb-4" />
              <p className="text-slate-500 text-[15px] leading-relaxed mb-5">
                &ldquo;{t.before}
                <span className="text-brand-600 font-bold">
                  {t.highlight}
                </span>
                {t.after}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-brand-100 shrink-0">
                  <img
                    src={asset(t.photo)}
                    alt={t.author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
