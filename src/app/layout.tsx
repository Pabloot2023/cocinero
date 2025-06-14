import type { Metadata } from "next";
import "./globals.css";
import UnderConstructionPage from "./under-construction/page";

export const metadata: Metadata = {
  title: "El Cocinero - Buscador de Recetas",
  description: "Encuentra recetas basadas en los ingredientes que tienes",
};

const SITE_PAUSED = process.env.NEXT_PUBLIC_SITE_PAUSED === "true";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{SITE_PAUSED ? <UnderConstructionPage /> : children}</body>
    </html>
  );
}
