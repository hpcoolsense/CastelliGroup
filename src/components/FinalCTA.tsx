"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import CTAButton from "./ui/CTAButton";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 40%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      ref={ref}
      id="contacto"
      style={{ scale, opacity }}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/50 to-brand-100/30 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100/60 border border-brand-200/40 mb-8">
            <MessageCircle size={14} className="text-brand-600" />
            <span className="text-sm text-brand-700 font-medium">
              Sin compromiso
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-tight">
            <span className="gradient-text">Tu próximo paso</span>
            <br />
            <span className="gradient-text-brand">es simple.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">
            Agendá una conversación de 30 minutos. Te escuchamos, te proponemos
            y decidís.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 flex justify-center">
            <CTAButton
              text="Quiero mi diagnóstico gratuito"
              href="mailto:contacto@castelligroup.ar"
              size="large"
              urgencyText="Trabajamos con máximo 3 organizaciones en simultáneo"
              className="items-center"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Análisis de tu situación actual
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Evaluación de oportunidades
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Propuesta personalizada
            </div>
          </div>
        </AnimatedSection>
      </div>
    </motion.section>
  );
}
