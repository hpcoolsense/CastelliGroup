"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import CTAButton from "./ui/CTAButton";

const FAQS = [
  {
    question: "¿Cuánto dura el proceso?",
    answer:
      "Un diagnóstico: 2 a 4 semanas. Una implementación completa: 2 a 3 meses. Depende de la complejidad y urgencia de tu organización. En la primera conversación te damos un estimado concreto.",
  },
  {
    question: "¿Trabajan con empresas chicas?",
    answer:
      "Sí. Nuestro foco son pymes y equipos de 5 a 50 personas. No somos McKinsey ni queremos serlo. Trabajamos con organizaciones que valoran el trato directo y las soluciones prácticas.",
  },
  {
    question: "¿Necesito parar la operación durante el proceso?",
    answer:
      "No. Trabajamos integrados a tu día a día. El diagnóstico se hace sin interrumpir la operación, y las mejoras se implementan de forma gradual para minimizar la resistencia al cambio.",
  },
  {
    question: "¿Qué incluye la primera conversación?",
    answer:
      "Escuchamos tu situación, hacemos preguntas clave y te damos una devolución honesta. Sin compromiso ni costo. Si hay fit, te proponemos un plan con alcance, tiempos y presupuesto claros.",
  },
  {
    question: "¿Trabajan de forma remota?",
    answer:
      "Sí. Trabajamos con organizaciones de toda Argentina. Las sesiones son virtuales y el seguimiento es continuo. Para diagnósticos presenciales en Tucumán, también estamos disponibles.",
  },
  {
    question: "¿Qué pasa si ya intenté con otra consultora y no funcionó?",
    answer:
      "Es más común de lo que pensás. Muchas consultoras venden frameworks genéricos que no se adaptan a la realidad de pymes argentinas. Nosotros partimos de tu contexto real, no de un template.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border-b border-slate-100 transition-colors duration-300 ${
        isOpen ? "border-l-2 border-l-brand-500 pl-5" : "pl-0"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className={`text-base md:text-lg font-medium transition-colors duration-200 pr-4 ${
            isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
          }`}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-500" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate-500 text-[15px] leading-relaxed pr-8">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm text-brand-600 uppercase tracking-widest font-medium mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] gradient-text">
            Lo que nos preguntan siempre.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <CTAButton text="Empezar ahora" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
