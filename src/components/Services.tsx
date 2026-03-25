"use client";

import AnimatedSection from "./ui/AnimatedSection";
import CTAButton from "./ui/CTAButton";
import {
  ClipboardCheck,
  Settings,
  Handshake,
  MessageSquare,
  Briefcase,
} from "lucide-react";

const MODULAR_SERVICES = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Operativo",
    description:
      "Radiografía completa de tu operación. Identificamos qué funciona, qué no, y qué oportunidades tenés.",
    tag: "Fase Analizar",
  },
  {
    icon: Settings,
    title: "Mejoras Operativas",
    description:
      "Rediseñamos procesos, creamos tableros de control y formalizamos lo que hoy es informal.",
    tag: "Fase Alinear",
  },
  {
    icon: Handshake,
    title: "Acompañamiento",
    description:
      "Te acompañamos en la implementación. Capacitamos, ajustamos y consolidamos hasta que funcione solo.",
    tag: "Fase Acompañar",
  },
];

const DEMAND_SERVICES = [
  {
    icon: MessageSquare,
    title: "Asesorías Puntuales",
    description:
      "Sesiones focalizadas para resolver problemas específicos. Sin compromiso de largo plazo.",
  },
  {
    icon: Briefcase,
    title: "Asistencia Ejecutiva",
    description:
      "Soporte estratégico continuo para la toma de decisiones y la definición de objetivos.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm text-brand-600 uppercase tracking-widest font-medium mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-tight">
            <span className="gradient-text">¿Qué hacemos</span>{" "}
            <span className="gradient-text-brand">concretamente?</span>
          </h2>
        </AnimatedSection>

        {/* Modular services */}
        <AnimatedSection delay={0.1} className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-500" />
            <h3 className="text-lg font-semibold text-slate-900">
              Servicios Modulares{" "}
              <span className="text-slate-400 font-normal">
                — Metodología A++
              </span>
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {MODULAR_SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.15 + i * 0.08}>
              <div className="group h-full p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-500 hover:translate-y-[-2px]">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                    <service.icon size={22} className="text-brand-600" />
                  </div>
                  <span className="text-[11px] font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* On-demand services */}
        <AnimatedSection delay={0.3} className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-slate-400" />
            <h3 className="text-lg font-semibold text-slate-900">
              Servicios a Demanda
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {DEMAND_SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.35 + i * 0.08}>
              <div className="group h-full p-7 rounded-2xl bg-white/60 border border-slate-100 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-400">
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-slate-100 transition-colors">
                  <service.icon size={22} className="text-slate-500" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.45} className="mt-12 flex justify-center">
          <CTAButton text="Solicitar consulta gratuita" />
        </AnimatedSection>
      </div>
    </section>
  );
}
