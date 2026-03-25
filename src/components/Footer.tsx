import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "./ui/SocialIcons";

const SOCIAL_LINKS = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn Empresa",
    href: "https://www.linkedin.com/company/castelligroup-ar/",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/castelligroup.ar/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:contacto@castelligroup.ar",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-slate-900 tracking-tight">
              Castelli Group
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Consultora en Eficiencia Operativa
            </p>
            <div className="flex items-center gap-1.5 mt-2 justify-center md:justify-start">
              <MapPin size={14} className="text-slate-300" />
              <span className="text-sm text-slate-400">
                Tucumán, Argentina
              </span>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all duration-200"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mt-8" />
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-300">
            &copy; {new Date().getFullYear()} Castelli Group. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
