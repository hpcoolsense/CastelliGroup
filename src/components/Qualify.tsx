"use client";

import AnimatedSection from "./ui/AnimatedSection";
import CTAButton from "./ui/CTAButton";
import { Check, X } from "lucide-react";

const YES_ITEMS = [
  "Tenés una empresa que creció y necesita profesionalizarse",
  "Querés delegar pero no sabés en qué estructura apoyarte",
  "Valorás la practicidad por encima de la teoría",
  "Buscás resultados medibles, no presentaciones bonitas",
];

const NO_ITEMS = [
  "Buscás soluciones mágicas de la noche a la mañana",
  "No estás dispuesto/a a cambiar procesos establecidos",
  "Querés un consultor que solo te diga lo que querés escuchar",
];

export default function Qualify() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm text-brand-600 uppercase tracking-widest font-medium mb-4">
            ¿Es para vos?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] gradient-text">
            No trabajamos con cualquiera.
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-xl">
            Para que funcione, necesitamos que haya un match real.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Yes column */}
          <AnimatedSection delay={0.1} direction="left">
            <div className="p-8 rounded-3xl bg-white border border-brand-100 shadow-[0_2px_16px_rgba(13,148,136,0.06)]">
              <h3 className="text-xl font-bold text-brand-700 mb-6">
                Es para vos si...
              </h3>
              <div className="space-y-4">
                {YES_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                      <Check size={13} className="text-brand-600" strokeWidth={3} />
                    </div>
                    <p className="text-slate-700 text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* No column */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-500 mb-6">
                No es para vos si...
              </h3>
              <div className="space-y-4">
                {NO_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                      <X size={13} className="text-slate-400" strokeWidth={3} />
                    </div>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-12 flex justify-center">
          <CTAButton
            text="Reservar mi lugar"
            urgencyText="Solo trabajamos con 3 organizaciones en simultáneo"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
