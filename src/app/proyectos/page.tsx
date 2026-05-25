"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, MapPin, Calendar, DollarSign } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

type Category = "todos" | "patrimonio" | "educacion" | "industrial" | "vivienda" | "cultura" | "infraestructura";

const projects = [
  {
    id: 1,
    name: "Planta Millco",
    period: "2001–2002",
    location: "Toluca, Estado de México",
    client: "Pastas Millco",
    amount: "$11.3M",
    category: "industrial" as Category,
    images: ["/projects/p01-millco/img1.jpg", "/projects/p01-millco/img2.jpg", "/projects/p01-millco/img3.jpg"],
    desc: "Construcción de planta industrial para producción de pastas alimenticias.",
  },
  {
    id: 2,
    name: "Palacio de la Autonomía UNAM",
    period: "2002–2003",
    location: "Ciudad de México",
    client: "UNAM",
    amount: "$23.8M",
    category: "patrimonio" as Category,
    images: ["/projects/p02-palacio-unam/img1.jpg", "/projects/p02-palacio-unam/img2.jpg", "/projects/p02-palacio-unam/img3.jpg"],
    desc: "Restauración y adecuación del Palacio de la Autonomía para la UNAM.",
  },
  {
    id: 3,
    name: "Parroquia El Señor de la Misericordia",
    period: "2005",
    location: "Ciudad de México",
    client: "Arquidiócesis de México",
    amount: "$11.1M",
    category: "cultura" as Category,
    images: ["/projects/p03-parroquia/img1.jpg", "/projects/p03-parroquia/img2.jpg", "/projects/p03-parroquia/img3.jpg"],
    desc: "Construcción de parroquia con capacidad para 800 feligreses.",
  },
  {
    id: 4,
    name: "Pabellón 40 Universidad La Salle",
    period: "2005–2006",
    location: "Ciudad de México",
    client: "Universidad La Salle",
    amount: "$20.6M",
    category: "educacion" as Category,
    images: ["/projects/p04-pabellon-lasalle/img1.jpg", "/projects/p04-pabellon-lasalle/img2.jpg", "/projects/p04-pabellon-lasalle/img3.jpg"],
    desc: "Construcción de nuevo pabellón académico en campus Benjamín Hill.",
  },
  {
    id: 5,
    name: "Preparatoria Neza La Salle",
    period: "2005–2006",
    location: "Nezahualcóyotl, Estado de México",
    client: "Universidad La Salle",
    amount: "$30.7M",
    category: "educacion" as Category,
    images: ["/projects/p05-preparatoria-neza/img1.jpg", "/projects/p05-preparatoria-neza/img2.jpg", "/projects/p05-preparatoria-neza/img3.jpg"],
    desc: "Construcción del campus de preparatoria La Salle en Nezahualcóyotl.",
  },
  {
    id: 6,
    name: "Edificio Sierra Nevada Interlomas",
    period: "2006–2007",
    location: "Huixquilucan, Estado de México",
    client: "Grupo 3A Inmobiliaria",
    amount: "$13.8M",
    category: "vivienda" as Category,
    images: ["/projects/p06-sierra-nevada/img1.jpg", "/projects/p06-sierra-nevada/img2.jpg"],
    desc: "Torre residencial de uso mixto en zona Interlomas.",
  },
  {
    id: 7,
    name: "Restauración MUMCI Toluca",
    period: "2008",
    location: "Toluca, Estado de México",
    client: "Gobierno del Estado de México",
    amount: "$30.6M",
    category: "patrimonio" as Category,
    images: ["/projects/p07-mumci/img1.jpg", "/projects/p07-mumci/img2.jpg"],
    desc: "Restauración del Museo de la Moneda de la Ciudad de Toluca.",
  },
  {
    id: 8,
    name: "Restauración Monumento a la Revolución",
    period: "2009–2010",
    location: "Ciudad de México",
    client: "Gobierno de la Ciudad de México",
    amount: "$3.3M",
    category: "patrimonio" as Category,
    images: ["/projects/p08-monumento/img1.jpg", "/projects/p08-monumento/img2.jpg", "/projects/p08-monumento/img3.jpg"],
    desc: "Restauración del icónico Monumento a la Revolución en la Plaza de la República.",
  },
  {
    id: 9,
    name: "Exconvento Santo Domingo Chiapas",
    period: "2010",
    location: "Chiapas",
    client: "INAH / Secretaría de Cultura",
    amount: "$23.9M",
    category: "patrimonio" as Category,
    images: ["/projects/p09-exconvento/img1.jpg", "/projects/p09-exconvento/img2.jpg", "/projects/p09-exconvento/img3.jpg"],
    desc: "Restauración de exconvento colonial declarado Patrimonio de la Humanidad.",
  },
  {
    id: 10,
    name: "Restauración Canal Judicial SCJN",
    period: "2012",
    location: "Ciudad de México",
    client: "Suprema Corte de Justicia de la Nación",
    amount: "$16.2M",
    category: "patrimonio" as Category,
    images: ["/projects/p10-canal-judicial/img1.jpg", "/projects/p10-canal-judicial/img2.jpg", "/projects/p10-canal-judicial/img3.jpg"],
    desc: "Restauración del edificio histórico sede del Canal Judicial.",
  },
  {
    id: 11,
    name: "Murallas de Campeche",
    period: "2012",
    location: "Campeche, Campeche",
    client: "INAH / Gobierno de Campeche",
    amount: "$48.6M",
    category: "patrimonio" as Category,
    images: ["/projects/p11-murallas/img1.jpg", "/projects/p11-murallas/img2.jpg", "/projects/p11-murallas/img3.jpg"],
    desc: "Restauración integral de las Murallas de Campeche, Patrimonio de la Humanidad UNESCO.",
  },
  {
    id: 12,
    name: "Museo de las Constituciones UNAM",
    period: "2016–2017",
    location: "Ciudad de México",
    client: "UNAM",
    amount: "$8.4M",
    category: "cultura" as Category,
    images: ["/projects/p12-museo-constituciones/img1.jpg", "/projects/p12-museo-constituciones/img2.jpg", "/projects/p12-museo-constituciones/img3.jpg"],
    desc: "Adecuación del espacio histórico para albergar el Museo de las Constituciones.",
  },
  {
    id: 13,
    name: "Plaza Gamio — Templo Mayor",
    period: "2017–2019",
    location: "Ciudad de México",
    client: "INAH / Secretaría de Cultura",
    amount: "$13.4M",
    category: "patrimonio" as Category,
    images: ["/projects/p13-plaza-gamio/img1.jpg", "/projects/p13-plaza-gamio/img2.jpg", "/projects/p13-plaza-gamio/img3.jpg"],
    desc: "Proyecto arquitectónico para revalorización de la Plaza Gamio en el Templo Mayor.",
  },
  {
    id: 14,
    name: "Apuntalamientos INAH Morelos",
    period: "2017",
    location: "Morelos",
    client: "INAH",
    amount: "Post-sismo",
    category: "patrimonio" as Category,
    images: ["/projects/p14-apuntalamientos/img1.jpg", "/projects/p14-apuntalamientos/img2.jpg", "/projects/p14-apuntalamientos/img3.jpg"],
    desc: "Apuntalamiento de emergencia en edificios patrimoniales afectados por el sismo de 2017.",
  },
  {
    id: 15,
    name: "Edificios 4 y 5 — ENES Juriquilla UNAM",
    period: "2018–2020",
    location: "Querétaro",
    client: "UNAM",
    amount: "$70.2M",
    category: "educacion" as Category,
    images: ["/projects/p15-enes-juriquilla/img1.jpg", "/projects/p15-enes-juriquilla/img2.jpg", "/projects/p15-enes-juriquilla/img3.jpg"],
    desc: "Construcción de dos nuevos edificios académicos en la Escuela Nacional de Estudios Superiores campus Juriquilla.",
  },
  {
    id: 16,
    name: "Centro Cultural Jardín Borda",
    period: "2023",
    location: "Cuernavaca, Morelos",
    client: "Centro Cultural Jardín Borda",
    amount: "$6.9M",
    category: "cultura" as Category,
    images: ["/projects/p16-jardin-borda/img1.jpg", "/projects/p16-jardin-borda/img2.jpg", "/projects/p16-jardin-borda/img3.jpg"],
    desc: "Restauración y adecuación del emblemático Centro Cultural Jardín Borda en Cuernavaca.",
  },
  {
    id: 17,
    name: "Templo de Jesús María",
    period: "2023",
    location: "Ciudad de México",
    client: "Arquidiócesis de México",
    amount: "$16.2M",
    category: "patrimonio" as Category,
    images: ["/projects/p17-templo-jesus-maria/img1.jpg", "/projects/p17-templo-jesus-maria/img2.jpg", "/projects/p17-templo-jesus-maria/img3.jpg"],
    desc: "Restauración integral del Templo de Jesús María en el Centro Histórico de la CDMX.",
  },
  {
    id: 18,
    name: "Central de Autobuses Tepic",
    period: "2000s",
    location: "Tepic, Nayarit",
    client: "SCT / Gobierno de Nayarit",
    amount: "—",
    category: "infraestructura" as Category,
    images: ["/projects/p18-central-camionera/img1.jpg", "/projects/p18-central-camionera/img2.jpg", "/projects/p18-central-camionera/img3.jpg"],
    desc: "Construcción de la Central de Autobuses de Tepic, Nayarit.",
  },
];

const filters: { key: Category | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "patrimonio", label: "Patrimonio" },
  { key: "educacion", label: "Educación" },
  { key: "industrial", label: "Industrial" },
  { key: "vivienda", label: "Vivienda" },
  { key: "cultura", label: "Cultura" },
  { key: "infraestructura", label: "Infraestructura" },
];

export default function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState<Category | "todos">("todos");
  const [lightbox, setLightbox] = useState<{ projectId: number; imageIndex: number } | null>(null);

  const filtered = activeFilter === "todos"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const currentProject = lightbox ? projects.find((p) => p.id === lightbox.projectId) : null;

  const prevImage = () => {
    if (!lightbox || !currentProject) return;
    setLightbox({ ...lightbox, imageIndex: (lightbox.imageIndex - 1 + currentProject.images.length) % currentProject.images.length });
  };

  const nextImage = () => {
    if (!lightbox || !currentProject) return;
    setLightbox({ ...lightbox, imageIndex: (lightbox.imageIndex + 1) % currentProject.images.length });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute right-0 top-8 font-display font-extrabold text-gray-50 leading-none select-none hidden lg:block"
          style={{ fontSize: "clamp(8rem, 20vw, 20rem)", letterSpacing: "-0.05em" }}>
          OBRAS
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
              Portafolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-[#0d0d0d] leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)", letterSpacing: "-0.02em" }}
          >
            141+ Proyectos
            <br />
            <span className="text-[#1d3557]">Realizados</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-gray-500 max-w-xl font-body text-lg"
          >
            Desde plantas industriales hasta patrimonio histórico UNESCO — tres décadas
            construyendo el México que todos compartimos.
          </motion.p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 md:top-24 z-30">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 text-xs font-display font-semibold uppercase tracking-widest transition-all duration-200
                ${activeFilter === filter.key
                  ? "bg-[#e63946] text-white"
                  : "bg-transparent text-gray-500 border border-gray-200 hover:border-[#e63946] hover:text-[#e63946]"
                }`}
            >
              {filter.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400 font-body">
            {filtered.length} obra{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* PROJECT CARDS GRID */}
      <section className="py-10 md:py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setLightbox({ projectId: project.id, imageIndex: 0 })}
                    className="relative w-full overflow-hidden aspect-[4/3] block"
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-10 h-10 border-2 border-white flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                      </div>
                    </div>
                    {project.amount !== "Post-sismo" && project.amount !== "—" && (
                      <div className="absolute top-3 left-3 bg-[#1d3557]/90 text-white text-xs font-display font-semibold px-3 py-1.5 backdrop-blur-sm">
                        {project.amount}
                      </div>
                    )}
                    {project.amount === "Post-sismo" && (
                      <div className="absolute top-3 left-3 bg-[#e63946]/90 text-white text-xs font-display font-semibold px-3 py-1.5">
                        Post-sismo
                      </div>
                    )}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-body px-2 py-1">
                        {project.images.length} fotos
                      </div>
                    )}
                  </button>

                  <div className="p-5">
                    <h3 className="font-display font-bold text-[#0d0d0d] text-base leading-snug mb-2">
                      {project.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-body mb-3 leading-relaxed">{project.desc}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-body">
                        <Calendar size={11} className="text-[#e63946] flex-shrink-0" />
                        {project.period}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-body">
                        <MapPin size={11} className="text-[#e63946] flex-shrink-0" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-body">
                        <DollarSign size={11} className="text-[#e63946] flex-shrink-0" />
                        {project.client}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4 md:p-8"
            onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="absolute top-4 left-4 max-w-sm">
              <p className="text-white font-display font-bold text-lg leading-snug">{currentProject.name}</p>
              <p className="text-white/60 text-xs font-body mt-1">{currentProject.period} · {currentProject.location}</p>
              {currentProject.amount !== "Post-sismo" && currentProject.amount !== "—" && (
                <p className="text-[#e63946] text-xs font-display font-semibold mt-1">{currentProject.amount}</p>
              )}
            </div>

            {currentProject.images.length > 1 && (
              <button onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Anterior">
                <ChevronLeft size={20} />
              </button>
            )}

            <motion.div
              key={lightbox.imageIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl aspect-[16/10]"
            >
              <Image
                src={currentProject.images[lightbox.imageIndex]}
                alt={currentProject.name}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {currentProject.images.length > 1 && (
              <button onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Siguiente">
                <ChevronRight size={20} />
              </button>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {currentProject.images.map((_, idx) => (
                <button key={idx}
                  onClick={() => setLightbox({ projectId: lightbox.projectId, imageIndex: idx })}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200
                    ${idx === lightbox.imageIndex ? "bg-[#e63946]" : "bg-white/30 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display font-extrabold text-[#0d0d0d] leading-none mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              ¿Tu proyecto podría ser el siguiente?
            </h2>
            <p className="text-gray-500 font-body mb-8 max-w-md mx-auto">
              Contáctanos y hablemos sobre cómo GDI puede hacer realidad tu visión.
            </p>
            <Link href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e63946] text-white font-display
                font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f] transition-colors duration-200">
              Contactar ahora
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
