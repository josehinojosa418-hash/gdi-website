"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, FileText, Building2, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const padrones = [
  { code: "GCDMX-SOS 4804", registry: "Obra Pública CDMX", issuer: "Gobierno de la Ciudad de México" },
  { code: "DGSMPC-062-07", registry: "CONACULTA", issuer: "Consejo Nacional para la Cultura y las Artes" },
  { code: "OP-001-13", registry: "INBA", issuer: "Instituto Nacional de Bellas Artes" },
  { code: "90377", registry: "INFONAVIT", issuer: "Instituto del Fondo Nacional de la Vivienda" },
  { code: "656", registry: "Consejo Judicatura Federal", issuer: "Consejo de la Judicatura Federal" },
  { code: "101032", registry: "PEMEX", issuer: "Petróleos Mexicanos" },
  { code: "00001518", registry: "Estado de Querétaro", issuer: "Gobierno del Estado de Querétaro" },
  { code: "09080914", registry: "FOVI", issuer: "Fondo de Operación y Financiamiento Bancario a la Vivienda" },
  { code: "0178GCySO2011-M", registry: "INIFED", issuer: "Instituto Nacional de la Infraestructura Física Educativa" },
  { code: "SAOP/090310/6406/N", registry: "Estado de México", issuer: "Secretaría de Obras Públicas del Estado de México" },
  { code: "GRUDEISA/3732", registry: "Guadalajara", issuer: "Municipio de Guadalajara" },
  { code: "LC-2682", registry: "Estado de Puebla", issuer: "Gobierno del Estado de Puebla" },
  { code: "N1529515", registry: "UNAM Obras", issuer: "Universidad Nacional Autónoma de México" },
  { code: "IVDF-C-316", registry: "INVI", issuer: "Instituto de Vivienda del Distrito Federal" },
];

const fiscalData = [
  { label: "Razón Social", value: "Grupo Desarrollador Industrial S.A. de C.V." },
  { label: "RFC", value: "GDI 000 607 KE7" },
  { label: "Registro IMSS", value: "Y543020110" },
  { label: "Domicilio Fiscal", value: "Primera Privada de Séneca 116-14, Col. Polanco, C.P. 11560, CDMX" },
];

export default function CertificacionesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute right-0 top-8 font-display font-extrabold text-gray-50 leading-none select-none hidden lg:block"
          style={{ fontSize: "clamp(5rem, 13vw, 13rem)", letterSpacing: "-0.05em" }}>
          REGISTROS
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
              Transparencia y legalidad
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-[#0d0d0d] leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)", letterSpacing: "-0.02em" }}
          >
            Certificaciones
            <br />
            <span className="text-[#1d3557]">y Registros</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-gray-500 max-w-2xl font-body text-lg leading-relaxed"
          >
            GDI está debidamente registrada ante las principales instituciones públicas de México,
            lo que nos permite participar en licitaciones públicas y obra pública a nivel federal,
            estatal y municipal.
          </motion.p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1d3557] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Registros oficiales" },
              { value: "25+", label: "Años como GDI" },
              { value: "141+", label: "Proyectos realizados" },
              { value: "100%", label: "Cumplimiento legal" },
            ].map((stat, i) => (
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

      {/* DATOS FISCALES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Información Fiscal
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-[#0d0d0d] leading-none"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Datos <span className="text-[#1d3557]">Fiscales</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 max-w-4xl">
            {fiscalData.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <div className="bg-white p-6 md:p-8 flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#e63946]/30 flex items-center justify-center flex-shrink-0">
                    <FileText size={16} className="text-[#e63946]" />
                  </div>
                  <div>
                    <p className="text-xs font-display font-semibold uppercase tracking-widest text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <p className="font-display font-bold text-[#0d0d0d] text-base">{item.value}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PADRONES */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Padrones de Contratistas
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-[#0d0d0d] leading-none"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Registros <span className="text-[#1d3557]">Oficiales</span>
            </h2>
            <p className="mt-4 text-gray-500 font-body max-w-xl">
              GDI está inscrita en los padrones de contratistas de las principales instituciones
              públicas de México, habilitándola para participar en obra pública.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {padrones.map((item, i) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                className="bg-[#f8f9fa] p-6 group hover:bg-[#1d3557] transition-colors duration-250"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-[#e63946] flex items-center justify-center flex-shrink-0 mt-0.5
                    group-hover:bg-[#e63946] transition-colors duration-200">
                    <Shield size={16} className="text-[#e63946] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-widest mb-1 group-hover:text-[#e63946]">
                      {item.registry}
                    </p>
                    <p className="font-display font-bold text-[#0d0d0d] text-sm group-hover:text-white transition-colors duration-200 break-all">
                      {item.code}
                    </p>
                    <p className="text-xs text-gray-400 group-hover:text-white/60 font-body mt-1 transition-colors duration-200 leading-snug">
                      {item.issuer}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                  <span className="text-xs text-green-600 group-hover:text-green-400 font-body transition-colors duration-200">
                    Registro vigente
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Lo que nos habilita
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-[#0d0d0d] leading-none"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Capacidad para
              <br />
              <span className="text-[#1d3557]">obra pública y privada</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {[
              { icon: Building2, title: "Licitaciones Federales", desc: "Habilitados para participar en licitaciones de obra pública a nivel federal." },
              { icon: Shield, title: "Obra Patrimonial", desc: "Registros INAH e INBA para restauración de edificios históricos y patrimonio." },
              { icon: FileText, title: "Vivienda Social", desc: "Registros INFONAVIT, FOVISSSTE e INVI para desarrollos de vivienda de interés social." },
              { icon: CheckCircle, title: "Obra Educativa", desc: "INIFED y UNAM habilitados para construcción y rehabilitación de planteles." },
              { icon: Building2, title: "Obra Estatal", desc: "Registros en Estado de México, Querétaro, Puebla y Guadalajara." },
              { icon: Shield, title: "Sector Energético", desc: "Registro PEMEX para obra industrial en el sector energético." },
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <AnimatedSection key={cap.title} delay={i * 0.08}>
                  <div className="bg-white p-8 group hover:bg-[#1d3557] transition-colors duration-300 h-full">
                    <div className="w-10 h-10 border border-[#e63946]/30 flex items-center justify-center mb-5
                      group-hover:bg-[#e63946] group-hover:border-[#e63946] transition-all duration-300">
                      <Icon size={18} className="text-[#e63946] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#0d0d0d] group-hover:text-white mb-2 transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 font-body leading-relaxed transition-colors duration-300">
                      {cap.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
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
              ¿Necesitas documentación
              <br />
              <span className="text-[#e63946]">oficial de GDI?</span>
            </h2>
            <p className="text-white/60 font-body mb-8 max-w-md mx-auto">
              Contáctanos para obtener copias de nuestros registros y certificaciones
              para tu proceso de licitación.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e63946] text-white font-display
                font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200"
            >
              Solicitar Documentación
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
