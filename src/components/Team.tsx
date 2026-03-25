"use client";

import AnimatedSection from "./ui/AnimatedSection";
import { LinkedinIcon, InstagramIcon } from "./ui/SocialIcons";
import Counter from "./ui/Counter";
import { GraduationCap, Award } from "lucide-react";

const CREDENTIALS = [
  {
    institution: "Universidad Siglo 21",
    title: "Gestión de Proyectos y Políticas Públicas",
    year: "2025",
  },
  {
    institution: "Universidad Católica de Córdoba",
    title: "Gobernabilidad e Innovación Pública",
    year: "2024",
  },
];

const SKILLS = [
  { name: "Capacidad de análisis", source: "UCC" },
  { name: "Coordinación de Proyectos", source: "UCC" },
  { name: "Dirección de equipos", source: "UCC" },
  { name: "Evaluación de programas", source: "UCC" },
  { name: "Coordinación de Programas", source: "UCC" },
];

export default function Team() {
  return (
    <section id="equipo" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm text-brand-600 uppercase tracking-widest font-medium mb-4">
            Equipo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-tight">
            <span className="gradient-text">Por qué trabajar</span>{" "}
            <span className="gradient-text-brand">con nosotros.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl">
            No vendemos frameworks genéricos. Traemos experiencia real de haber
            gestionado en la trinchera.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-12">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
              {/* Left column: Photo + Certificate */}
              <div className="shrink-0 flex flex-col items-center gap-5">
                {/* Profile photo */}
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden bg-brand-50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-4 ring-white">
                  <img
                    src="/images/eugenia-final.png"
                    alt="Eugenia Castelli — Directora de Estrategia y Desarrollo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Certificate image */}
                <div className="w-56 md:w-64 rounded-xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/images/certificado-siglo21.png"
                    alt="Certificado Universidad Siglo 21 — Gestión de Proyectos y Políticas Públicas"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] text-slate-400 text-center max-w-[14rem]">
                  Certificado en Gestión de Proyectos y Políticas Públicas —
                  Universidad Siglo 21
                </p>
              </div>

              {/* Right column: Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Eugenia Castelli
                </h3>
                <p className="text-brand-600 font-semibold mt-1 text-lg">
                  Directora de Estrategia y Desarrollo
                </p>

                <p className="mt-5 text-slate-500 leading-relaxed max-w-xl">
                  6+ años transformando organizaciones desde adentro. De la
                  gestión pública municipal a la consultoría privada: llevó lo
                  que aprendió gestionando equipos, presupuestos y proyectos en
                  contextos exigentes hacia el sector privado.
                </p>

                <p className="mt-3 text-slate-500 leading-relaxed max-w-xl">
                  Especializada en gestión de proyectos, metodologías ágiles y
                  articulación público-privada. Pragmatismo como filosofía:{" "}
                  <span className="text-slate-700 font-medium">
                    resolver, estructurar y avanzar con los recursos disponibles.
                  </span>
                </p>

                {/* Stats grid */}
                <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="p-4 rounded-xl bg-slate-50 text-center">
                    <Counter
                      target={6}
                      suffix="+"
                      className="text-2xl font-bold text-brand-600"
                    />
                    <p className="text-xs text-slate-400 mt-1">
                      Años en gestión
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 text-center">
                    <Counter
                      target={500}
                      suffix="+"
                      duration={2.5}
                      className="text-2xl font-bold text-brand-600"
                    />
                    <p className="text-xs text-slate-400 mt-1">
                      Red profesional
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 text-center">
                    <Counter
                      target={2}
                      className="text-2xl font-bold text-brand-600"
                      duration={1}
                    />
                    <p className="text-xs text-slate-400 mt-1">
                      Diplomaturas
                    </p>
                  </div>
                </div>

                {/* Education credentials */}
                <div className="mt-8 max-w-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={16} className="text-brand-600" />
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Formación académica
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {CREDENTIALS.map((cred) => (
                      <div
                        key={cred.title}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center shrink-0">
                          <Award size={16} className="text-brand-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 leading-tight">
                            {cred.title}
                          </p>
                          <p className="text-xs text-slate-400">
                            {cred.institution} · {cred.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills with UCC source */}
                <div className="mt-6 max-w-xl">
                  <div className="flex items-center gap-3 mb-3">
                    {/* UCC logo as CSS */}
                    <div className="w-10 h-7 rounded bg-[#1e2d5f] flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-extrabold tracking-wide">
                        UCC
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Aptitudes reconocidas por la UCC
                      </p>
                      <a
                        href="https://www.linkedin.com/school/uccoficial/people/?keywords=eugenia%20castelli"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Verificar en LinkedIn"
                        className="w-5 h-5 rounded bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#0a66c2] hover:text-white transition-all duration-200"
                        title="Verificar en LinkedIn"
                      >
                        <LinkedinIcon size={11} />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {SKILLS.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand-700 bg-brand-50 rounded-full border border-brand-100/60"
                      >
                        {skill.name}
                        <span className="text-brand-400">·</span>
                        <span className="text-brand-500 font-semibold">
                          {skill.source}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/in/eugenia-castelli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Eugenia"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/soyeugenia.castelli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Eugenia"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <InstagramIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
