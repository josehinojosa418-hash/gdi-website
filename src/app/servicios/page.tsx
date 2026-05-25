"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Heart, Warehouse, Home, Building2, ShoppingBag, Landmark, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Supervisión de Obra",
    desc: "Vigilancia técnica y administrativa integral de proyectos de alta complejidad. Control de calidad, avance y presupuesto en tiempo real.",
    refs: ["Monumento a la Revolución", "SCJN Canal Judicial", "Apuntalamientos INAH 2017"],
    // Apuntalamientos INAH: trabajo de supervisión estructural con andamios
    image: "/projects/p14-apuntalamientos/img1.jpg",
  },
  {
    icon: Heart,
    number: "02",
    title: "Hospitales y Centros de Salud",
    desc: "Construcción y rehabilitación de infraestructura hospitalaria con los más altos estándares normativos y funcionales.",
    refs: ["Hospital de Oncología CMN", "Hospital de Ortopedia CNR", "Hospital ABC Observatorio"],
    // Palacio UNAM: obra de rehabilitación institucional de alto nivel
    image: "/projects/p02-palacio-unam/img1.jpg",
  },
  {
    icon: Warehouse,
    number: "03",
    title: "Naves Industriales",
    desc: "Diseño y construcción de instalaciones industriales con tecnología de punta y cumplimiento de normas ambientales.",
    refs: ["Planta Grupo MILLCO Toluca", "4 Estaciones de Transferencia CDMX", "YABER S.A."],
    // Planta Millco: construcción de planta industrial
    image: "/projects/p01-millco/img1.jpg",
  },
  {
    icon: Home,
    number: "04",
    title: "Vivienda",
    desc: "Más de 800 viviendas de interés social y edificios de departamentos en la Zona Metropolitana de la CDMX.",
    refs: ["800+ viviendas de interés social", "Edificio Sierra Nevada Interlomas", "7 edificios de departamentos"],
    // Edificio Sierra Nevada: edificio residencial construido por GDI
    image: "/projects/p06-sierra-nevada/img1.jpg",
  },
  {
    icon: Building2,
    number: "05",
    title: "Oficinas",
    desc: "Construcción y remodelación de espacios corporativos para instituciones públicas y privadas de alto perfil.",
    refs: ["SCJN Canal Judicial", "Secretaría de Gobernación", "ING Seguros / Bank"],
    // Canal Judicial SCJN: remodelación de espacios de oficinas institucionales
    image: "/projects/p10-canal-judicial/img1.jpg",
  },
  {
    icon: ShoppingBag,
    number: "06",
    title: "Comercios",
    desc: "Ejecución de locales comerciales con altos estándares de calidad, eficiencia y cumplimiento de tiempos.",
    refs: ["16 tiendas 7-Eleven en CDMX", "Central de Autobuses Tepic", "Carrefour"],
    // Central de Autobuses Tepic: instalación comercial de transporte
    image: "/projects/p18-central-camionera/img2.jpg",
  },
  {
    icon: Landmark,
    number: "07",
    title: "Restauración de Patrimonio",
    desc: "Restauración y conservación de edificios históricos con profundo respeto a su valor patrimonial y normativa INAH/INBA.",
    refs: ["Murallas de Campeche UNESCO", "Exconvento Santo Domingo Chiapas", "Templo de Jesús María CDMX"],
    // Murallas de Campeche: restauración de patrimonio UNESCO
    image: "/projects/p11-murallas/img1.jpg",
  },
  {
    icon: GraduationCap,
    number: "08",
    title: "Escuelas y Universidades",
    desc: "Construcción de instalaciones educativas de todos los niveles, desde primarias hasta campus universitarios.",
    refs: ["ENES Juriquilla UNAM $70.2M", "Preparatoria Neza La Salle", "20+ escuelas DDF/SEP"],
    // ENES Juriquilla: edificios universitarios UNAM
    image: "/projects/p15-enes-juriquilla/img1.jpg",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute right-0 top-8 font-display font-extrabold text-gray-50 leading-none select-none hidden lg:block"
          style={{ fontSize: "clamp(8rem, 20vw, 20rem)", letterSpacing: "-0.05em" }}>
          GDI
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
              Lo que hacemos
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
            <span className="text-[#e63946]">Servicios</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-gray-500 max-w-xl font-body text-lg leading-relaxed"
          >
            Ocho especialidades constructivas que abarcan desde infraestructura pública
            hasta la restauración del patrimonio histórico de México.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.number} delay={(i % 4) * 0.08}>
                  <div className="group bg-white overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-[#1d3557]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="absolute top-3 left-3 font-display font-extrabold text-white/20 leading-none select-none"
                        style={{ fontSize: "3rem" }}>
                        {service.number}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 border border-[#e63946]/30 flex items-center justify-center flex-shrink-0
                          group-hover:bg-[#e63946] group-hover:border-[#e63946] transition-all duration-300">
                          <Icon size={14} className="text-[#e63946] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-base text-[#0d0d0d] mb-2 group-hover:text-[#1d3557] transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-body leading-relaxed flex-1 mb-4">{service.desc}</p>
                      <ul className="space-y-1">
                        {service.refs.map((ref) => (
                          <li key={ref} className="text-xs text-gray-400 font-body flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#e63946] flex-shrink-0" />
                            {ref}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden bg-[#1d3557] p-12 md:p-16">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#e63946]/10 skew-x-6 translate-x-12" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display font-extrabold text-white leading-none mb-4"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
                  ¿Listo para tu
                  <br />
                  <span className="text-[#e63946]">próximo proyecto?</span>
                </h2>
                <p className="text-white/60 font-body mb-8 max-w-md">
                  Cuéntanos sobre tu proyecto y te brindamos una solución a la medida
                  de tus necesidades y presupuesto.
                </p>
                <Link href="/contacto"
                  className="group inline-flex items-center gap-2 px-7 py-4 bg-[#e63946] text-white font-display
                    font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200">
                  Solicitar Cotización
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
