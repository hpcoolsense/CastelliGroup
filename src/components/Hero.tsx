"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "./ui/Counter";
import CTAButton from "./ui/CTAButton";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax values bound to scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-100/40 blur-[120px]"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-50/60 blur-[100px]"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content with scroll parallax */}
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200/60 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-sm text-brand-700 font-medium">
                Consultora en Eficiencia Operativa
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-[-0.04em] leading-[1.05]"
            >
              <span className="gradient-text">
                Tu negocio creció
                <br />
                por instinto.
              </span>
              <br />
              <span className="gradient-text-brand">
                Ahora necesita método.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl"
            >
              Diseñamos sistemas operativos que liberan a los fundadores del
              día a día. Sin humo. Sin frameworks importados. Con experiencia
              real en gestión.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <CTAButton
                text="Agendá tu diagnóstico gratuito"
                urgencyText="Trabajamos con máximo 3 organizaciones en simultáneo"
              />
            </motion.div>
          </motion.div>

          {/* Right: Hero image with scroll parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ y: imageY, scale: imageScale }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 aspect-[3/4]">
              <img
                src="/images/evento-idecom.png"
                alt="Eugenia Castelli presentando en IDECOM — Consejo Federal de Inversiones, frente a 400 personas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/90 text-sm font-medium">
                  IDECOM — Consejo Federal de Inversiones
                </p>
                <p className="text-white/60 text-xs mt-0.5">
                  Presentación frente a 400 personas de todo el país
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-brand-200/30" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-brand-100/20" />
          </motion.div>
        </div>

        {/* Stats bar with counters */}
        <motion.div
          style={{ y: statsY }}
          className="mt-12 flex flex-wrap gap-8 md:gap-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col"
          >
            <Counter
              target={6}
              suffix="+"
              className="text-3xl md:text-4xl font-bold text-brand-600 tracking-tight"
            />
            <span className="text-sm text-slate-400 mt-1">
              Años en gestión operativa
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col"
          >
            <span className="text-3xl md:text-4xl font-bold text-brand-600 tracking-tight">
              A++
            </span>
            <span className="text-sm text-slate-400 mt-1">
              Metodología propia
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col"
          >
            <Counter
              target={100}
              suffix="%"
              className="text-3xl md:text-4xl font-bold text-brand-600 tracking-tight"
            />
            <span className="text-sm text-slate-400 mt-1">
              Foco en resultados
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
