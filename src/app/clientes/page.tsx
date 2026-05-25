"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, Heart, GraduationCap, Building2, ShoppingBag, Star, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = [
  {
    icon: Landmark,
    title: "Instituciones Públicas y Gubernamentales",
    bg: "bg-white",
    clients: [
      "SEP — Secretaría de Educación Pública",
      "SENER — Secretaría de Energía",
      "Secretaría de Salud",
      "Secretaría de Gobernación",
      "SOP — Secretaría de Obras Públicas",
      "SCT — Secretaría de Comunicaciones y Transportes",
      "Secretaría de Cultura",
      "ISSSTE",
      "IMSS",
      "UNAM — Universidad Nacional Autónoma de México",
      "INAH — Instituto Nacional de Antropología e Historia",
      "INBA / Conaculta",
      "SCJN — Suprema Corte de Justicia de la Nación",
      "FONHAPO",
      "FOVISSSTE",
      "FIUZ",
      "Gobierno de la Ciudad de México (CDMX)",
      "Gobierno de Michoacán",
      "Gobierno de Guanajuato",
      "Municipio de Tlalnepantla",
      "Delegación Tláhuac",
      "Delegación Álvaro Obregón",
      "Delegación Cuauhtémoc",
      "Municipio de Huixquilucan",
      "SACM — Sistema de Aguas de la Ciudad de México",
      "Renovación Habitacional Popular",
      "SITUR",
      "Probosque de Chapultepec",
    ],
  },
  {
    icon: GraduationCap,
    title: "Instituciones Educativas",
    bg: "bg-[#f8f9fa]",
    clients: [
      "UNAM — Universidad Nacional Autónoma de México",
      "Universidad La Salle (Campus Benjamín Hill y Nezahualcóyotl)",
      "UNITEC — Universidad Tecnológica de México",
      "Escuela Libre de Derecho A.C.",
      "Escuela Sierra Nevada A.C.",
      "CIDE — Centro de Investigación y Docencia Económicas",
    ],
  },
  {
    icon: Heart,
    title: "Sector Salud",
    bg: "bg-white",
    clients: [
      "Centro Médico ABC",
      "Hospital de Oncología — Centro Médico Nacional",
      "Hospital de Ortopedia — Centro Nacional de Rehabilitación",
    ],
  },
  {
    icon: Building2,
    title: "Empresas Privadas",
    bg: "bg-[#f8f9fa]",
    clients: [
      "Grupo Modelo S.A. de C.V.",
      "Industrias Resistol S.A. de C.V.",
      "Pastas Millco",
      "Grupo 3A Inmobiliaria",
      "ING Seguros S.A. de C.V.",
      "ING Bank",
      "ASA — Aeropuertos y Servicios Auxiliares",
      "Taco Jeans",
      "RECSA",
      "Bulltick — EK Ambiental S.A. de C.V.",
      "Litocolor",
      "Carrefour México",
      "Alfa Omega Siete",
      "Grupo Posadas",
      "YABER S.A. de C.V.",
      "Le Blanc Tours",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Sector Comercio",
    bg: "bg-white",
    clients: [
      "7-Eleven (16 tiendas en la Ciudad de México)",
    ],
  },
  {
    icon: Star,
    title: "Patrimonio Cultural y Otros",
    bg: "bg-[#f8f9fa]",
    clients: [
      "Centro Cultural Jardín Borda — Cuernavaca",
      "PRD — Partido de la Revolución Democrática",
      "Monumento a la Revolución",
      "Murallas de Campeche (UNESCO)",
      "Templo Mayor — Zona Arqueológica",
      "Exconvento Santo Domingo — Chiapas",
    ],
  },
  {
    icon: Users,
    title: "Estaciones de Transferencia CDMX",
    bg: "bg-white",
    clients: [
      "Estación de Transferencia Modal Norte",
      "Estación de Transferencia Modal Sur",
      "Estación de Transferencia Modal Oriente",
      "Estación de Transferencia Modal Poniente",
    ],
  },
];

const stats = [
  { value: "141+", label: "Proyectos realizados" },
  { value: "25+", label: "Años como GDI" },
  { value: "57", label: "Años exp. fundador" },
  { value: "15+", label: "Registros oficiales" },
];

export default function ClientesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          className="absolute right-0 top-8 font-display font-extrabold text-gray-50 leading-none select-none hidden lg:block"
          style={{ fontSize: "clamp(6rem, 16vw, 16rem)", letterSpacing: "-0.05em" }}
        >
          CLIENTES
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#e63946]" />
            <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
              Confianza comprobada
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-[#0d0d0d] leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)", letterSpacing: "-0.02em" }}
          >
            Nuestros
            <br />
            <span className="text-[#e63946]">Clientes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-gray-500 max-w-2xl font-body text-lg leading-relaxed"
          >
            Más de 30 años construyendo confianza con las instituciones más importantes
            de México — del sector público al privado, de la educación al patrimonio histórico.
          </motion.p>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-[#1d3557] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div
                  className="font-display font-extrabold text-white leading-none"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-white/50 text-xs font-body uppercase tracking-widest">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT CATEGORIES */}
      {categories.map((cat, i) => {
        const Icon = cat.icon;
        return (
          <section key={cat.title} className={`${cat.bg} py-16 md:py-20`}>
            <div className="max-w-7xl mx-auto px-5 md:px-8">
              <AnimatedSection delay={0.05}>
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-12 h-12 border-2 border-[#e63946] flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon size={20} className="text-[#e63946]" />
                  </div>
                  <div>
                    <p className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em] mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2
                      className="font-display font-extrabold text-[#0d0d0d] leading-none"
                      style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
                    >
                      {cat.title}
                    </h2>
                  </div>
                </div>

                <div className={`grid gap-px bg-gray-200 ${cat.clients.length <= 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                  {cat.clients.map((client, j) => (
                    <motion.div
                      key={client}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{ duration: 0.4, delay: j * 0.04, ease: "easeOut" }}
                      className={`${cat.bg === "bg-white" ? "bg-white" : "bg-[#f8f9fa]"} px-6 py-5 flex items-center gap-4
                        hover:bg-[#1d3557] group transition-colors duration-250`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e63946] flex-shrink-0 group-hover:bg-white transition-colors duration-200" />
                      <span className="font-body text-sm text-[#0d0d0d] group-hover:text-white transition-colors duration-200 leading-snug">
                        {client}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#1d3557] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#e63946]/10 skew-x-6 translate-x-12" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#e63946]" />
                <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                  Únete
                </span>
              </div>
              <h2
                className="font-display font-extrabold text-white leading-none mb-4"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                ¿Quieres ser parte de
                <br />
                <span className="text-[#e63946]">nuestros clientes?</span>
              </h2>
              <p className="text-white/60 font-body mb-8 max-w-md text-base leading-relaxed">
                Únete a las instituciones y empresas más importantes de México que confían
                en GDI para sus proyectos de infraestructura.
              </p>
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e63946] text-white font-display
                  font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200"
              >
                Iniciar Conversación
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
