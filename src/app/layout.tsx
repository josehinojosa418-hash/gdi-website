import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GDI – Grupo Desarrollador Industrial | Construcción e Infraestructura",
    template: "%s | GDI – Grupo Desarrollador Industrial",
  },
  description:
    "Más de 30 años construyendo infraestructura de clase mundial. Diseño, construcción, supervisión y administración de obras para sector público y privado.",
  keywords: ["construcción", "infraestructura", "ingeniería", "obras", "México", "GDI"],
  openGraph: {
    title: "GDI – Grupo Desarrollador Industrial",
    description: "30+ años construyendo infraestructura de clase mundial en México.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
