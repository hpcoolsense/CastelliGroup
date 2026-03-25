"use client";

import AnimatedSection from "./ui/AnimatedSection";
import ParallaxImage from "./ui/ParallaxImage";
import TextReveal from "./ui/TextReveal";
import { asset } from "@/lib/config";
import { Search, Wrench, Users } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    label: "Analizar",
    title: "Escuchamos y diagnosticamos",
    description:
      "Relevamiento mixto sin interrumpir tu operación. Identificamos cuellos de botella, ineficiencias y oportunidades que no se ven desde adentro.",
    deliverable: "Informe ejecutivo con hallazgos priorizados y recomendaciones",
    color: "brand-400",
  },
  {
    icon: Wrench,
    label: "Alinear",
    title: "Diseñamos herramientas reales",
    description:
      "Transformamos los hallazgos en procesos optimizados y tableros de control que tu equipo realmente use. Nada de PowerPoints que nadie aplica.",
    deliverable: "Manual de procesos y tableros de control personalizados",
    color: "brand-500",
  },
  {
    icon: Users,
    label: "Acompañar",
    title: "Hasta que el cambio sea irreversible",
    description:
      "Te acompañamos en la implementación. Capacitamos a tu equipo, ajustamos lo que haga falta y consolidamos una cultura de mejora continua.",
    deliverable: "Equipo autónomo ejecutando los nuevos procesos",
    color: "brand-600",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm text-brand-600 uppercase tracking-widest font-medium mb-4">
            Metodología A++
          </p>
          <TextReveal
            tag="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-tight gradient-text"
          >
            Un sistema, no una receta.
          </TextReveal>
          <p className="mt-4 text-lg text-slate-500 max-w-xl">
            Tres fases que se adaptan a tu realidad. Se activan integral o por
            etapas individuales.
          </p>
        </AnimatedSection>

        {/* Photo banner — real work */}
        <AnimatedSection delay={0.1} className="mt-14">
          <ParallaxImage
            src={asset("/images/capacitacion.png")}
            alt="Capacitación y formación de equipos — Castelli Group en acción"
            className="rounded-2xl shadow-lg shadow-slate-200/40 aspect-[21/7]"
            speed={0.4}
          />
        </AnimatedSection>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.label} delay={i * 0.12}>
              <div className="relative group h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:translate-y-[-2px]">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-${step.color}/10 flex items-center justify-center`}>
                    <step.icon size={20} className={`text-${step.color}`} />
                  </div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                    Fase {i + 1}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-2xl font-bold text-brand-600 mb-2">
                  {step.label}
                </h3>

                {/* Title */}
                <p className="text-lg font-semibold text-slate-900 mb-3">
                  {step.title}
                </p>

                {/* Description */}
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverable */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Entregable
                  </p>
                  <p className="text-sm text-slate-700 font-medium">
                    {step.deliverable}
                  </p>
                </div>

                {/* Connector line (desktop only) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-brand-200" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
