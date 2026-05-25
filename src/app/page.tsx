"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Ruler, Building2, ClipboardCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 25, suffix: "+", label: "Años como GDI" },
  { value: 57, suffix: "", label: "Años de exp. del fundador" },
  { value: 141, suffix: "+", label: "Proyectos documentados" },
  { value: 800, suffix: "+", label: "Viviendas construidas" },
  { value: 20, suffix: "+", label: "Edificios patrimoniales" },
  { value: 20, suffix: "+", label: "Escuelas" },
  { value: 16, suffix: "+", label: "Tiendas 7-Eleven" },
  { value: 4, suffix: "", label: "Estaciones transferencia CDMX" },
];

const services = [
  {
    icon: Ruler,
    title: "Diseño de Proyectos",
    desc: "Soluciones arquitectónicas e ingenieriles adaptadas a cada necesidad, con los más altos estándares técnicos.",
  },
  {
    icon: Building2,
    title: "Construcción",
    desc: "Ejecución precisa de obras con materiales de primera calidad, puntualidad y control de presupuesto.",
  },
  {
    icon: ClipboardCheck,
    title: "Supervisión",
    desc: "Monitoreo riguroso de cada etapa garantizando calidad, seguridad y cumplimiento de especificaciones.",
  },
];

const projects = [
  { src: "/general/img4.jpg", alt: "Edificio restaurado GDI", label: "Restauración de Patrimonio" },
  { src: "/general/img6.jpg", alt: "Obra de edificación GDI", label: "Edificación y Construcción" },
  { src: "/general/img7.jpg", alt: "Detalle arquitectónico GDI", label: "Supervisión de Obra" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/general/img1.jpg"
          alt="GDI – Grupo Desarrollador Industrial"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-12 top-0 bottom-0 w-px bg-[#e63946]/60 origin-top hidden xl:block"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-[#e63946]" />
            <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
              Grupo Desarrollador Industrial S.A. de C.V.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-white leading-none tracking-tight max-w-5xl"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 7rem)", letterSpacing: "-0.02em" }}
          >
            Garantizar el nivel
            <br />
            <span className="text-[#e63946]">más alto de servicio,</span>
            <br />
            cada día.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-white/75 text-lg md:text-xl max-w-xl font-body leading-relaxed"
          >
            Más de 30 años en diseño, construcción, supervisión y restauración
            de obras y proyectos para México.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link
              href="/proyectos"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-[#e63946] text-white font-display font-semibold
                uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200"
            >
              Ver Proyectos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/quienes-somos"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/60 text-white font-display font-semibold
                uppercase tracking-widest text-sm hover:bg-white/10 transition-colors duration-200"
            >
              Nuestra Historia
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs font-display uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-[#1d3557] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08} className="text-center">
                <div
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-white/50 text-xs font-body uppercase tracking-widest leading-snug px-1">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Lo que hacemos
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-[#0d0d0d] max-w-2xl leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              Servicios de
              <br />
              <span className="text-[#e63946]">Infraestructura</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.12}>
                  <Link
                    href="/servicios"
                    className="group block bg-white p-8 md:p-10 hover:bg-[#f8f9fa] transition-colors duration-300 h-full"
                  >
                    <div className="w-12 h-12 border border-[#e63946]/30 flex items-center justify-center mb-6
                      group-hover:bg-[#e63946] group-hover:border-[#e63946] transition-all duration-300">
                      <Icon size={20} className="text-[#e63946] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#0d0d0d] mb-3 group-hover:text-[#1d3557] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-body">{service.desc}</p>
                    <div className="flex items-center gap-2 mt-6 text-[#e63946] text-sm font-display font-semibold
                      group-hover:gap-3 transition-all duration-200">
                      Ver más <ChevronRight size={14} />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#1d3557] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#e63946]/10 skew-x-6 translate-x-12" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimatedSection direction="right">
            <h2
              className="font-display font-extrabold text-white max-w-xl leading-none"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              ¿Tienes un proyecto
              <br />
              <span className="text-[#e63946]">en mente?</span>
            </h2>
            <p className="mt-4 text-white/60 text-base font-body max-w-md">
              Contáctanos y descubre cómo GDI puede convertir tu visión en realidad
              con más de 30 años de experiencia.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="left">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#e63946] text-white font-display
                font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200 whitespace-nowrap"
            >
              Solicitar Cotización
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24 md:py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#e63946]" />
                <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                  Portafolio
                </span>
              </div>
              <h2
                className="font-display font-extrabold text-[#0d0d0d] leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
              >
                Nuestros
                <br />
                <span className="text-[#1d3557]">Proyectos</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link
                href="/proyectos"
                className="group inline-flex items-center gap-2 text-sm font-display font-semibold uppercase
                  tracking-widest text-[#0d0d0d] hover:text-[#e63946] transition-colors duration-200"
              >
                Ver todos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.src} delay={i * 0.12}>
                <Link href="/proyectos" className="group block relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    loading="eager"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0
                    group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white font-display font-semibold text-sm">{project.label}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-[#e63946] flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
