"use client";

import AnimatedSection from "./ui/AnimatedSection";
import ParallaxImage from "./ui/ParallaxImage";
import CTAButton from "./ui/CTAButton";
import { asset } from "@/lib/config";
import { Target, Zap, Shield, TrendingUp } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "./ui/SocialIcons";

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: "Foco en pymes reales",
    description:
      "Trabajamos con organizaciones que se parecen a las que nosotros mismos gestionamos.",
  },
  {
    icon: Zap,
    title: "Pragmatismo, no teoría",
    description:
      "Plazos ajustados, presupuestos limitados. Sabemos resolver con lo que hay.",
  },
  {
    icon: Shield,
    title: "Método probado",
    description:
      "La Metodología A++ nace de años de modernizar procesos en organizaciones reales.",
  },
  {
    icon: TrendingUp,
    title: "Resultados medibles",
    description:
      "Cada intervención se acompaña de indicadores claros y accionables.",
  },
];

export default function Company() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/60 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Company card — two columns: info + photo */}
        <AnimatedSection>
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
              {/* Left: Company info */}
              <div>
                <p className="text-sm text-brand-600 uppercase tracking-widest font-medium mb-4">
                  Castelli Group
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] leading-tight">
                  <span className="gradient-text">
                    Las transformaciones reales
                    <br />
                    no suceden por inspiración.
                  </span>
                  <br />
                  <span className="gradient-text-brand">
                    Suceden por método.
                  </span>
                </h2>

                <p className="mt-6 text-slate-500 leading-relaxed">
                  Consultora B2B especializada en eficiencia operativa.
                  Acompañamos a pymes y organizaciones con historia en su
                  evolución hacia modelos de trabajo más inteligentes y
                  sostenibles.
                </p>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  No vendemos sueños ni diagnósticos que terminan en un cajón.{" "}
                  <span className="text-slate-700 font-medium">
                    Diseñamos sistemas que tu equipo realmente adopta
                  </span>
                  , porque los construimos a partir de tu realidad.
                </p>

                {/* Company tagline */}
                <div className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-brand-50/50 border border-brand-100/60">
                  <div className="w-1 h-10 rounded-full bg-brand-500 shrink-0" />
                  <p className="text-slate-600 italic text-sm leading-relaxed">
                    &ldquo;Smarter workflows, stronger teams, lasting
                    impact.&rdquo;
                  </p>
                </div>

                {/* Company details */}
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                  <span>B2B Consulting</span>
                  <span>Framework A++</span>
                  <span>Tucumán, Argentina</span>
                </div>

                {/* Company social links */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/castelligroup-ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Castelli Group"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/castelligroup.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Castelli Group"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <InstagramIcon size={18} />
                  </a>
                </div>

                <CTAButton
                  text="Hablemos de tu negocio"
                  className="mt-6"
                />
              </div>

              {/* Right: Team photo with parallax */}
              <AnimatedSection delay={0.15} direction="right">
                <div className="rounded-2xl overflow-hidden shadow-lg shadow-slate-200/40">
                  <ParallaxImage
                    src={asset("/images/equipo-yerba-buena.png")}
                    alt="Equipo de trabajo — Castelli Group en Municipalidad de Yerba Buena"
                    className="aspect-[4/3]"
                    speed={0.15}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom: Differentiators grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIFFERENTIATORS.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.1 + i * 0.08}>
              <div className="group h-full p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-500">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 group-hover:scale-110 transition-all duration-300">
                  <item.icon size={22} className="text-brand-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
