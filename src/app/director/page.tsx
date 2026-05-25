"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const timeline = [
  {
    period: "2000–Presente",
    role: "Director General",
    company: "Grupo Desarrollador Industrial S.A. de C.V. (GDI)",
    current: true,
  },
  {
    period: "1983–1999",
    role: "Director General",
    company: "General de Proyectos y Mantenimientos",
    current: false,
  },
  {
    period: "1983–1993",
    role: "Director General",
    company: "Coprola S.A. de C.V.",
    current: false,
  },
  {
    period: "1981–1984",
    role: "Director General",
    company: "Villamonin Construcciones",
    current: false,
  },
  {
    period: "1978–1980",
    role: "Apoderado General",
    company: "Edificadora Promotora Inversionista",
    current: false,
  },
  {
    period: "1976–1977",
    role: "Gerente General",
    company: "Constructora y Edificadora",
    current: false,
  },
  {
    period: "1974–1975",
    role: "Superintendente de Obra",
    company: "Constructora MARHNOS",
    current: false,
  },
  {
    period: "1968–1973",
    role: "De Ayudante a Superintendente",
    company: "Constructora TAB",
    current: false,
  },
];

const specializations = [
  "Proyecto ejecutivo de grandes obras de edificación",
  "Urbanización y equipamiento urbano",
  "Hoteles y conjuntos turísticos",
  "Edificios de oficinas corporativas",
  "Desarrollo habitacional y residencial",
  "Restauración de patrimonio histórico",
  "Obras universitarias y educativas",
  "Infraestructura pública y urbana",
];

export default function DirectorPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0d0d0d] pt-32 pb-0 overflow-hidden">
        <div className="absolute right-0 top-8 font-display font-extrabold text-white/5 leading-none select-none hidden lg:block"
          style={{ fontSize: "clamp(6rem, 16vw, 16rem)", letterSpacing: "-0.05em" }}>
          DIRECTOR
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#e63946]" />
            <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
              Liderazgo
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "-0.02em" }}
              >
                Ing. José
                <br />
                <span className="text-[#e63946]">Hinojosa</span>
                <br />
                Ornelas
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 text-white/50 text-sm font-display uppercase tracking-widest"
              >
                Director General — GDI
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-6 mt-8"
              >
                <div className="text-center">
                  <div className="font-display font-extrabold text-[#e63946]"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    57
                  </div>
                  <div className="text-xs text-white/40 font-body uppercase tracking-widest mt-1">Años de exp.</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-extrabold text-[#e63946]"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    141+
                  </div>
                  <div className="text-xs text-white/40 font-body uppercase tracking-widest mt-1">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-extrabold text-[#e63946]"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    1967
                  </div>
                  <div className="text-xs text-white/40 font-body uppercase tracking-widest mt-1">Graduación</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] max-w-sm ml-auto overflow-hidden">
                <Image
                  src="/general/img5.jpg"
                  alt="Ing. José Hinojosa Ornelas — Director General GDI"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PERFIL */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="right">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#e63946]" />
                <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                  Perfil Profesional
                </span>
              </div>
              <h2
                className="font-display font-extrabold text-[#0d0d0d] leading-none mb-8"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                57 años de
                <br />
                <span className="text-[#1d3557]">experiencia continua</span>
              </h2>
              <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
                Ingeniero Civil con 57 años ininterrumpidos de experiencia en el proyecto ejecutivo
                y construcción de grandes obras de edificación, urbanización, equipamiento urbano,
                hoteles, oficinas y residencial.
              </p>

              <div className="mt-10 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-[#e63946]" />
                  <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                    Áreas de Especialidad
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-px bg-gray-100">
                  {specializations.map((spec, i) => (
                    <motion.div
                      key={spec}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="bg-white px-5 py-3.5 flex items-center gap-3 group hover:bg-[#1d3557] transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e63946] flex-shrink-0 group-hover:bg-white transition-colors" />
                      <span className="text-sm font-body text-[#0d0d0d] group-hover:text-white transition-colors">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              {/* Formación */}
              <div className="bg-[#f8f9fa] p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 border-2 border-[#e63946] flex items-center justify-center">
                    <GraduationCap size={18} className="text-[#e63946]" />
                  </div>
                  <span className="text-xs font-display font-semibold uppercase tracking-[0.3em] text-[#e63946]">
                    Formación Académica
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-[#e63946] pl-5">
                    <p className="font-display font-bold text-[#0d0d0d] text-base">Ingeniería Civil</p>
                    <p className="text-gray-600 font-body text-sm mt-1">Universidad de Guanajuato</p>
                    <p className="text-gray-400 font-body text-xs mt-0.5">1963–1967</p>
                  </div>
                  <div className="border-l-4 border-gray-200 pl-5">
                    <p className="font-display font-bold text-[#0d0d0d] text-base">Preparatoria y Secundaria</p>
                    <p className="text-gray-600 font-body text-sm mt-1">Colegio La Salle</p>
                    <p className="text-gray-400 font-body text-xs mt-0.5">León, Guanajuato</p>
                  </div>
                </div>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Trayectoria
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-[#0d0d0d] leading-none"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              57 años de
              <br />
              <span className="text-[#1d3557]">liderazgo ininterrumpido</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="relative flex items-start gap-8 md:gap-12 pb-10">
                    {/* Dot */}
                    <div className={`relative z-10 w-12 md:w-16 flex-shrink-0 flex items-start justify-center pt-1`}>
                      <div className={`w-3 h-3 rounded-full border-2 transition-colors
                        ${item.current
                          ? "bg-[#e63946] border-[#e63946] ring-4 ring-[#e63946]/20"
                          : "bg-white border-gray-300"}`}
                      />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pb-10 border-b border-gray-100 ${i === timeline.length - 1 ? "border-none" : ""}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                        <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#e63946]">
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="inline-flex items-center px-2 py-0.5 bg-[#e63946] text-white text-xs font-display font-semibold uppercase tracking-wider">
                            Actual
                          </span>
                        )}
                      </div>
                      <h3 className={`font-display font-bold text-lg leading-snug ${item.current ? "text-[#e63946]" : "text-[#0d0d0d]"}`}>
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={12} className="text-gray-400 flex-shrink-0" />
                        <p className="font-body text-sm text-gray-500">{item.company}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d3557]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2
              className="font-display font-extrabold text-white leading-none mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Hable directamente con
              <br />
              <span className="text-[#e63946]">nuestro Director</span>
            </h2>
            <p className="text-white/60 font-body mb-8 max-w-md mx-auto">
              El Ing. Hinojosa supervisa personalmente cada proyecto estratégico.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e63946] text-white font-display
                font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200"
            >
              Solicitar Reunión
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
