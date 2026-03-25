"use client";

import AnimatedSection from "./ui/AnimatedSection";
import TextReveal from "./ui/TextReveal";
import CTAButton from "./ui/CTAButton";

const PAIN_POINTS = [
  {
    number: "01",
    text: "Trabajás más horas que nunca pero sentís que el negocio no avanza",
  },
  {
    number: "02",
    text: "Cada problema urgente te aleja de lo que realmente importa",
  },
  {
    number: "03",
    text: "Dependés de 2 o 3 personas clave — si se van, se cae todo",
  },
  {
    number: "04",
    text: "Invertiste en tecnología que nadie terminó de adoptar",
  },
  {
    number: "05",
    text: "Sabés que tenés que ordenar pero no sabés por dónde empezar",
  },
];

export default function Pain() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm text-brand-600 uppercase tracking-widest font-medium mb-4">
            El problema
          </p>
          <TextReveal
            tag="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] gradient-text"
          >
            ¿Te suena familiar?
          </TextReveal>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 space-y-4">
          {PAIN_POINTS.map((pain, i) => (
            <AnimatedSection key={pain.number} delay={i * 0.08}>
              <div className="group flex items-start gap-5 md:gap-6 p-5 md:p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white/60 hover:shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-all duration-300">
                <span className="text-2xl md:text-3xl font-bold text-brand-200 group-hover:text-brand-400 transition-colors duration-300 tabular-nums shrink-0">
                  {pain.number}
                </span>
                <p className="text-lg md:text-xl text-slate-600 group-hover:text-slate-900 transition-colors duration-300 leading-relaxed pt-1">
                  {pain.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12">
          <p className="text-lg text-slate-500 max-w-xl mb-8">
            Si marcaste 3 o más, tu empresa no tiene un problema de esfuerzo.
            <span className="text-slate-900 font-semibold">
              {" "}
              Tiene un problema de sistema.
            </span>
          </p>
          <CTAButton text="Quiero resolver esto" />
        </AnimatedSection>
      </div>
    </section>
  );
}
