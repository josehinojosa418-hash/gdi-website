import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Nosotros" },
  { href: "/director", label: "Director" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/clientes", label: "Clientes" },
  { href: "/certificaciones", label: "Certificaciones" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="h-1 bg-[#e63946]" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="inline-block bg-white px-3 py-2 mb-6">
              <Image
                src="/GDI_logo_v2.png"
                alt="GDI - Grupo Desarrollador Industrial"
                width={160}
                height={64}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-body">
              Grupo Desarrollador Industrial S.A. de C.V. — Más de 30 años construyendo
              infraestructura de clase mundial para el sector público y privado de México.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: Globe, label: "Web", href: "https://www.gdisa.com" },
                { icon: Mail, label: "Email", href: "mailto:grupogdi@gdisa.com" },
                { icon: Phone, label: "Teléfono", href: "tel:+525552807249" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center
                    text-gray-400 hover:border-[#e63946] hover:text-[#e63946] transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-display font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-display font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-body">
              <li>
                <a href="mailto:grupogdi@gdisa.com" className="hover:text-white transition-colors duration-200">
                  grupogdi@gdisa.com
                </a>
              </li>
              <li>
                <a href="tel:+525552807249" className="hover:text-white transition-colors duration-200">
                  55-5280-7249
                </a>
              </li>
              <li>
                <a href="tel:+525550386207" className="hover:text-white transition-colors duration-200">
                  55-5038-6207
                </a>
              </li>
              <li className="text-gray-500 leading-relaxed">
                Primera Privada de Séneca 116-14<br />
                Col. Polanco, C.P. 11560<br />
                Ciudad de México
              </li>
            </ul>
            <Link
              href="/contacto"
              className="inline-block mt-6 px-5 py-2.5 border border-[#e63946] text-[#e63946] text-xs font-display
                font-semibold uppercase tracking-widest hover:bg-[#e63946] hover:text-white transition-all duration-200"
            >
              Contactar
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-body">
            © 2026 GDI – Grupo Desarrollador Industrial S.A. de C.V. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-700 font-body tracking-wide">
            RFC: GDI 000 607 KE7 · www.gdisa.com
          </p>
        </div>
      </div>
    </footer>
  );
}
