"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Star, Handshake, Smile, Layers, Shield } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const valores = [
  {
    number: "01",
    icon: Shield,
    title: "HONESTIDAD",
    subtitle: "Transparencia en todo momento",
    body: "Actuamos con verdad y rectitud en cada proyecto, relación y decisión. La honestidad es la base sobre la cual construimos confianza duradera con nuestros clientes, socios y colaboradores.",
    highlight: "La confianza se construye acto a acto, obra a obra.",
    bg: "bg-white",
  },
  {
    number: "02",
    icon: Heart,
    title: "RESPETO",
    subtitle: "Dignidad en cada interacción",
    body: "Valoramos la dignidad de cada persona — clientes, colaboradores y comunidades. El respeto mutuo es el fundamento de relaciones profesionales sólidas y de un ambiente de trabajo positivo.",
    highlight: "Cada persona merece ser tratada con dignidad.",
    bg: "bg-[#1d3557]",
  },
  {
    number: "03",
    icon: Star,
    title: "HUMILDAD",
    subtitle: "Siempre aprendiendo",
    body: "Reconocemos que siempre hay oportunidad de mejorar. La humildad nos permite escuchar a nuestros clientes, aprender de cada proyecto y crecer continuamente como organización.",
    highlight: "El que no aprende, no crece.",
    bg: "bg-[#f8f9fa]",
  },
  {
    number: "04",
    icon: Users,
    title: "TRABAJO EN EQUIPO",
    subtitle: "Nuestro principal activo",
    body: "Nuestro principal activo es nuestro personal. Grupo Desarrollador Industrial debe ser una empresa que logre un ambiente de trabajo en equipo y que provea las oportunidades necesarias para que el personal pueda aspirar a desarrollar su potencial.",
    highlight: "El talento colectivo supera siempre al individual.",
    bg: "bg-white",
  },
  {
    number: "05",
    icon: Smile,
    title: "CALIDEZ EN EL SERVICIO",
    subtitle: "Más allá del contrato",
    body: "Nos importan las personas detrás de cada proyecto. Atendemos con genuino interés las necesidades de nuestros clientes, brindando un servicio cálido y personalizado que va más allá de la simple entrega de obra.",
    highlight: "Un cliente satisfecho es nuestro mejor proyecto.",
    bg: "bg-[#1d3557]",
  },
  {
    number: "06",
    icon: Layers,
    title: "ACTITUD INTEGRADORA",
    subtitle: "Visión de conjunto",
    body: "Buscamos siempre soluciones que beneficien a todas las partes involucradas. Integramos visiones, disciplinas y equipos para lograr resultados que superan las expectativas individuales.",
    highlight: "La integración genera soluciones superiores.",
    bg: "bg-[#f8f9fa]",
  },
  {
    number: "07",
    icon: Handshake,
    title: "LEALTAD A LA EMPRESA",
    subtitle: "Compromiso institucional",
    body: "Nos comprometemos con los objetivos y valores de GDI. La lealtad institucional significa defender la reputación y los intereses de la empresa con integridad, contribuyendo activamente a su crecimiento sostenido.",
    highlight: "Cada acción individual construye la reputación colectiva.",
    bg: "bg-white",
  },
];

export default function ValoresPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src="/general/img3.jpg"
          alt="Valores GDI"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#e63946]" />
            <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
              Cultura GDI
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", letterSpacing: "-0.02em" }}
          >
            Nuestros
            <br />
            <span className="text-[#e63946]">Valores</span>
          </motion.h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start gap-10 md:gap-20">
          <AnimatedSection direction="right" className="flex-1">
            <p className="text-gray-600 font-body text-lg md:text-xl leading-relaxed">
              Los valores de GDI no son palabras en un muro — son los principios que guían cada
              decisión, cada obra y cada relación con nuestros clientes y colaboradores desde
              hace más de <span className="font-semibold text-[#0d0d0d]">treinta años</span>.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="left" className="flex-shrink-0">
            <div className="flex gap-8 md:gap-12">
              {[
                { num: "30+", label: "Años" },
                { num: "7", label: "Valores" },
                { num: "100%", label: "Compromiso" },
              ].map(({ num, label }) => (
                <div key={num} className="text-center">
                  <div className="font-display font-extrabold text-[#e63946]"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                    {num}
                  </div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUES */}
      {valores.map((valor) => {
        const Icon = valor.icon;
        const isDark = valor.bg === "bg-[#1d3557]";
        return (
          <AnimatedSection key={valor.number}>
            <section className={`${valor.bg} py-20 md:py-28 relative overflow-hidden`}>
              <div
                className={`absolute right-0 top-0 bottom-0 flex items-center font-display font-extrabold leading-none select-none pointer-events-none
                  ${isDark ? "text-white/5" : "text-gray-900/5"}`}
                style={{ fontSize: "clamp(10rem, 25vw, 22rem)", paddingRight: "2rem" }}
              >
                {valor.number}
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 border-2 flex items-center justify-center flex-shrink-0
                      ${isDark ? "border-[#e63946] bg-[#e63946]" : "border-[#e63946]"}`}>
                      <Icon size={18} className={isDark ? "text-white" : "text-[#e63946]"} />
                    </div>
                    <span className="text-xs font-display font-semibold uppercase tracking-[0.3em] text-[#e63946]">
                      {valor.subtitle}
                    </span>
                  </div>

                  <h2
                    className={`font-display font-extrabold leading-none mb-8 ${isDark ? "text-white" : "text-[#0d0d0d]"}`}
                    style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
                  >
                    {valor.title}
                  </h2>

                  <div className="w-16 h-1 bg-[#e63946] mb-8" />

                  <p className={`font-body text-base md:text-lg leading-relaxed mb-8 max-w-2xl
                    ${isDark ? "text-white/75" : "text-gray-600"}`}>
                    {valor.body}
                  </p>

                  <div className="border-l-4 border-[#e63946] pl-6 py-2">
                    <p className={`font-display font-semibold text-base md:text-lg
                      ${isDark ? "text-white/90" : "text-[#1d3557]"}`}>
                      &ldquo;{valor.highlight}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        );
      })}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#e63946] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 40px)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2
              className="font-display font-extrabold text-white leading-none mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Estos valores nos definen.
              <br />
              Conócenos de cerca.
            </h2>
            <p className="text-white/70 font-body mb-8 max-w-md mx-auto">
              Agenda una reunión con nuestro equipo y experimenta de primera mano
              cómo operamos.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#e63946] font-display
                font-semibold uppercase tracking-widest text-sm hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200"
            >
              Contáctanos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
