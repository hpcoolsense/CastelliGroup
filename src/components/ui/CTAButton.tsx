"use client";

import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href?: string;
  size?: "default" | "large";
  urgencyText?: string;
  className?: string;
}

export default function CTAButton({
  text,
  href = "#contacto",
  size = "default",
  urgencyText,
  className = "",
}: CTAButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-10 py-5 text-lg gap-3"
      : "px-7 py-3.5 text-base gap-2";

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <a
        href={href}
        className={`cta-button group relative inline-flex items-center justify-center w-full sm:w-auto text-center ${sizeClasses} font-semibold text-white rounded-full overflow-hidden transition-all duration-500 hover:translate-y-[-2px] active:translate-y-0`}
      >
        {/* Background gradient */}
        <span className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 bg-[length:200%_100%] animate-none group-hover:animate-[shimmer_2s_ease-in-out_infinite] transition-all" />

        {/* Shine sweep */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </span>

        {/* Glow */}
        <span className="absolute inset-0 rounded-full shadow-[0_4px_20px_rgba(13,148,136,0.4)] group-hover:shadow-[0_8px_36px_rgba(13,148,136,0.55)] transition-shadow duration-500" />

        {/* Text */}
        <span className="relative z-10">{text}</span>

        {/* Arrow with slide-in */}
        <span className="relative z-10 overflow-hidden w-5 h-5 flex items-center justify-center">
          <ArrowRight
            size={size === "large" ? 20 : 18}
            className="transition-all duration-300 group-hover:translate-x-0.5"
          />
        </span>
      </a>

      {urgencyText && (
        <p className="text-sm text-gold font-medium mt-3 ml-1">
          {urgencyText}
        </p>
      )}
    </div>
  );
}
