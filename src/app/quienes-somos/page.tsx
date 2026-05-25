"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Building2, ClipboardCheck, Settings } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const areas = [
  { icon: Ruler, title: "Diseño", desc: "Ingeniería y arquitectura de vanguardia adaptada a cada proyecto." },
  { icon: Building2, title: "Construcción", desc: "Ejecución con los más altos estándares de calidad y seguridad." },
  { icon: ClipboardCheck, title: "Supervisión", desc: "Control riguroso de cada fase del proceso constructivo." },
  { icon: Settings, title: "Administración", desc: "Gestión eficiente de recursos humanos, materiales y financieros." },
];

const gallery = [
  { src: "/general/img4.jpg", alt: "Edificio colonial restaurado" },
  { src: "/general/img6.jpg", alt: "Detalle arquitectónico de obra GDI" },
  { src: "/general/img7.jpg", alt: "Restauración de patrimonio" },
];

export default function QuienesSomosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src="/general/img1.jpg"
          alt="Quiénes Somos – GDI"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#e63946]" />
            <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
              GDI
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", letterSpacing: "-0.02em" }}
          >
            Quiénes
            <br />
            <span className="text-[#e63946]">Somos</span>
          </motion.h1>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection direction="right">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#e63946]" />
                <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                  Nuestra Historia
                </span>
              </div>
              <h2
                className="font-display font-extrabold text-[#0d0d0d] leading-none mb-8"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                Tres décadas de
                <br />
                <span className="text-[#1d3557]">excelencia</span>
              </h2>
              <div className="space-y-5 text-gray-600 font-body leading-relaxed text-base md:text-lg">
                <p>
                  Grupo Desarrollador Industrial surge de la necesidad de integrar más de treinta años
                  de actividad ininterrumpida y exitosa de su fundador en la Industria de la Construcción,
                  ante un mundo moderno, dinámico, cada vez más exigente y competitivo.
                </p>
                <p>
                  Nuestra experiencia, respaldada por la capacidad y permanente capacitación de nuestro
                  personal, nos permite desempeñarnos eficazmente en las áreas de diseño, construcción,
                  supervisión, coordinación y administración de todo tipo de obras y proyectos.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="relative">
                <div
                  className="absolute -top-6 -left-4 font-display font-extrabold text-gray-100 select-none leading-none"
                  style={{ fontSize: "clamp(6rem, 15vw, 12rem)" }}
                >
                  &ldquo;
                </div>
                <blockquote className="relative z-10 border-l-4 border-[#e63946] pl-8 py-4">
                  <p
                    className="font-display font-bold text-[#1d3557] leading-snug"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
                  >
                    Garantizar el nivel más alto de servicio, confiabilidad y calidad
                    a cada cliente, cada día.
                  </p>
                  <footer className="mt-4 text-sm text-gray-400 font-body uppercase tracking-widest">
                    — Compromiso GDI
                  </footer>
                </blockquote>

                <div className="mt-12 grid grid-cols-2 gap-4">
                  {[
                    { n: "25+", label: "Años como GDI" },
                    { n: "57", label: "Años exp. fundador" },
                    { n: "141+", label: "Proyectos realizados" },
                    { n: "800+", label: "Viviendas construidas" },
                  ].map((item) => (
                    <div key={item.label} className="border border-gray-100 p-5">
                      <div className="font-display font-extrabold text-[#e63946] text-3xl">{item.n}</div>
                      <div className="text-xs text-gray-500 font-body mt-1 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Misión
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 items-center">
              <div className="lg:col-span-3">
                <h2
                  className="font-display font-extrabold text-[#0d0d0d] leading-none mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
                >
                  Nuestra <span className="text-[#1d3557]">Misión</span>
                </h2>
                <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
                  Lograr la mayor rentabilidad para nuestros accionistas, socios y empleados a través
                  de la más completa y eficiente identificación, implementación y administración de los
                  recursos humanos, financieros, materiales y tecnológicos, necesarios para la ejecución
                  de proyectos y construcciones, manteniendo como premisa la calidad, puntualidad y
                  completa satisfacción del Cliente.
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-4">
                {["Calidad", "Puntualidad", "Satisfacción del Cliente"].map((v) => (
                  <div key={v} className="flex items-center gap-4 bg-white p-5 border-l-4 border-[#e63946]">
                    <span className="font-display font-bold text-[#0d0d0d] text-base">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Capacidades
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-[#0d0d0d] leading-none max-w-lg"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Áreas de
              <br />
              <span className="text-[#1d3557]">Especialidad</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {areas.map((area, i) => {
              const Icon = area.icon;
              return (
                <AnimatedSection key={area.title} delay={i * 0.1}>
                  <div className="bg-white p-8 h-full group hover:bg-[#1d3557] transition-colors duration-300">
                    <div className="w-10 h-10 border border-[#e63946]/30 flex items-center justify-center mb-5
                      group-hover:bg-[#e63946] group-hover:border-[#e63946] transition-all duration-300">
                      <Icon size={18} className="text-[#e63946] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#0d0d0d] group-hover:text-white mb-2 transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 font-body leading-relaxed transition-colors duration-300">
                      {area.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Nuestro trabajo
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-[#0d0d0d] leading-none"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Obras <span className="text-[#1d3557]">Representativas</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 0.12}>
                <div className="relative overflow-hidden aspect-[3/2]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="eager"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR CTA */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-[#e63946]" />
                  <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                    Liderazgo
                  </span>
                </div>
                <h2
                  className="font-display font-extrabold text-white leading-none"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
                >
                  Conoce a nuestro
                  <br />
                  <span className="text-[#e63946]">Director General</span>
                </h2>
                <p className="mt-4 text-gray-400 font-body max-w-md">
                  Ing. José Hinojosa Ornelas — 57 años de experiencia ininterrumpida
                  en proyectos de ingeniería civil y construcción.
                </p>
              </div>
              <Link
                href="/director"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e63946] text-white font-display
                  font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200 whitespace-nowrap"
              >
                Ver Perfil
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d3557]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2
              className="font-display font-extrabold text-white leading-none mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Construyamos juntos el futuro
            </h2>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e63946] text-white font-display
                font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200"
            >
              Iniciar Proyecto
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
