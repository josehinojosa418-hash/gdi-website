"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, AlertCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const projectTypes = [
  "Diseño de Proyecto",
  "Construcción de Infraestructura",
  "Supervisión de Obra",
  "Coordinación de Proyecto",
  "Administración de Obra",
  "Restauración de Patrimonio",
  "Consultoría Técnica",
  "Otro",
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value.trim(),
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value.trim(),
      tipo: (form.elements.namedItem("tipo") as HTMLSelectElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value.trim(),
    };

    if (!data.nombre || !data.email || !data.tipo || !data.mensaje) {
      setError("Por favor completa todos los campos obligatorios (*).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError("Por favor ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json();
        setError(json.error || "Error al enviar. Intenta de nuevo o escríbenos directamente.");
      }
    } catch {
      setError("Error de red. Por favor escríbenos a grupogdi@gdisa.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
        <div className="absolute right-0 top-8 font-display font-extrabold text-gray-50 leading-none select-none hidden lg:block"
          style={{ fontSize: "clamp(8rem, 18vw, 18rem)", letterSpacing: "-0.05em" }}>
          HOLA
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
              Hablemos
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-[#0d0d0d] leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            Contacto
          </motion.h1>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* FORM — 3/5 */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-[#e63946]" />
                  <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                    Solicitud de cotización
                  </span>
                </div>
                <h2
                  className="font-display font-extrabold text-[#0d0d0d] leading-none mb-10"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
                >
                  Cuéntanos tu <span className="text-[#1d3557]">proyecto</span>
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-start gap-4 py-12"
                  >
                    <div className="w-14 h-14 bg-green-50 border border-green-200 flex items-center justify-center">
                      <CheckCircle size={28} className="text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#0d0d0d]">
                      Mensaje enviado
                    </h3>
                    <p className="text-gray-500 font-body">
                      Gracias por contactarnos. Nuestro equipo se comunicará contigo
                      en un plazo de 24 horas hábiles.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="nombre" className="text-xs font-display font-semibold uppercase tracking-widest text-gray-500">
                          Nombre completo <span className="text-[#e63946]">*</span>
                        </label>
                        <input id="nombre" name="nombre" type="text" autoComplete="name"
                          className="h-12 px-4 border border-gray-200 font-body text-sm text-[#0d0d0d] bg-[#f8f9fa]
                            focus:outline-none focus:border-[#1d3557] focus:bg-white transition-colors duration-200"
                          placeholder="Juan García" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="empresa" className="text-xs font-display font-semibold uppercase tracking-widest text-gray-500">
                          Empresa
                        </label>
                        <input id="empresa" name="empresa" type="text" autoComplete="organization"
                          className="h-12 px-4 border border-gray-200 font-body text-sm text-[#0d0d0d] bg-[#f8f9fa]
                            focus:outline-none focus:border-[#1d3557] focus:bg-white transition-colors duration-200"
                          placeholder="Mi Empresa S.A." />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-display font-semibold uppercase tracking-widest text-gray-500">
                          Correo electrónico <span className="text-[#e63946]">*</span>
                        </label>
                        <input id="email" name="email" type="email" autoComplete="email"
                          className="h-12 px-4 border border-gray-200 font-body text-sm text-[#0d0d0d] bg-[#f8f9fa]
                            focus:outline-none focus:border-[#1d3557] focus:bg-white transition-colors duration-200"
                          placeholder="juan@empresa.com" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="telefono" className="text-xs font-display font-semibold uppercase tracking-widest text-gray-500">
                          Teléfono
                        </label>
                        <input id="telefono" name="telefono" type="tel" autoComplete="tel"
                          className="h-12 px-4 border border-gray-200 font-body text-sm text-[#0d0d0d] bg-[#f8f9fa]
                            focus:outline-none focus:border-[#1d3557] focus:bg-white transition-colors duration-200"
                          placeholder="+52 55 0000-0000" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="tipo" className="text-xs font-display font-semibold uppercase tracking-widest text-gray-500">
                        Tipo de proyecto <span className="text-[#e63946]">*</span>
                      </label>
                      <select id="tipo" name="tipo"
                        className="h-12 px-4 border border-gray-200 font-body text-sm text-[#0d0d0d] bg-[#f8f9fa]
                          focus:outline-none focus:border-[#1d3557] focus:bg-white transition-colors duration-200 appearance-none cursor-pointer">
                        <option value="">Selecciona una opción</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="mensaje" className="text-xs font-display font-semibold uppercase tracking-widest text-gray-500">
                        Mensaje <span className="text-[#e63946]">*</span>
                      </label>
                      <textarea id="mensaje" name="mensaje" rows={5}
                        className="px-4 py-3 border border-gray-200 font-body text-sm text-[#0d0d0d] bg-[#f8f9fa]
                          focus:outline-none focus:border-[#1d3557] focus:bg-white transition-colors duration-200 resize-none"
                        placeholder="Describe tu proyecto: ubicación, dimensiones, plazos, requerimientos especiales..." />
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 p-4 bg-red-50 border border-red-200"
                      >
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600 font-body">{error}</p>
                      </motion.div>
                    )}

                    <button type="submit" disabled={loading}
                      className="group w-full h-14 flex items-center justify-center gap-3 bg-[#e63946] text-white
                        font-display font-semibold uppercase tracking-widest text-sm hover:bg-[#c1121f]
                        transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Enviando...
                        </span>
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* INFO — 2/5 */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2} direction="left">
                <div className="bg-[#1d3557] p-8 md:p-10">
                  <h3 className="font-display font-bold text-white text-lg mb-8">
                    Información de Contacto
                  </h3>
                  <div className="space-y-7">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail size={16} className="text-[#e63946]" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-display uppercase tracking-widest mb-1">Correo</p>
                        <a href="mailto:grupogdi@gdisa.com" className="text-white font-body text-sm hover:text-[#e63946] transition-colors duration-200">
                          grupogdi@gdisa.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Phone size={16} className="text-[#e63946]" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-display uppercase tracking-widest mb-1">Teléfonos</p>
                        <a href="tel:+525552807249" className="block text-white font-body text-sm hover:text-[#e63946] transition-colors duration-200">
                          55-5280-7249
                        </a>
                        <a href="tel:+525550386207" className="block text-white font-body text-sm hover:text-[#e63946] transition-colors duration-200 mt-0.5">
                          55-5038-6207
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Globe size={16} className="text-[#e63946]" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-display uppercase tracking-widest mb-1">Web</p>
                        <a href="https://www.gdisa.com" target="_blank" rel="noopener noreferrer"
                          className="text-white font-body text-sm hover:text-[#e63946] transition-colors duration-200">
                          www.gdisa.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin size={16} className="text-[#e63946]" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-display uppercase tracking-widest mb-1">Dirección</p>
                        <p className="text-white font-body text-sm leading-relaxed">
                          Primera Privada de Séneca 116-14<br />
                          Col. Polanco, C.P. 11560<br />
                          Ciudad de México
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="my-10 h-px bg-white/10" />

                  <div>
                    <p className="text-white/40 text-xs font-display uppercase tracking-widest mb-3">Horario</p>
                    <p className="text-white font-body text-sm">Lunes a Viernes</p>
                    <p className="text-[#e63946] font-display font-semibold text-lg">8:00 – 18:00 hrs</p>
                  </div>
                  <div className="mt-8">
                    <p className="text-white/40 text-xs font-display uppercase tracking-widest mb-3">Respuesta</p>
                    <p className="text-white font-body text-sm leading-relaxed">
                      Máximo <span className="text-white font-semibold">24 horas hábiles</span>.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* MAP — OpenStreetMap (sin API key) */}
      <section className="bg-[#f8f9fa] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#e63946]" />
              <span className="text-[#e63946] text-xs font-display font-semibold uppercase tracking-[0.3em]">
                Ubicación
              </span>
            </div>
            <h2 className="font-display font-extrabold text-[#0d0d0d] leading-none"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Estamos en <span className="text-[#1d3557]">Polanco</span>
            </h2>
            <p className="mt-2 text-gray-500 font-body text-sm">
              Primera Privada de Séneca 116-14, Col. Polanco, C.P. 11560, Ciudad de México
            </p>
            <a
              href="https://maps.app.goo.gl/WEt1h3UMwUSZms6FA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-xs font-display font-semibold uppercase tracking-widest text-[#e63946] hover:text-[#c1121f] transition-colors duration-200"
            >
              <MapPin size={12} />
              Abrir en Google Maps
            </a>
          </AnimatedSection>

          <div className="relative w-full overflow-hidden border border-gray-200" style={{ height: "420px" }}>
            <iframe
              title="Ubicación GDI — Polanco, Ciudad de México"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-99.2089%2C19.4308%2C-99.1949%2C19.4448&layer=mapnik&marker=19.4378%2C-99.2019"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
