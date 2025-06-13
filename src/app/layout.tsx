import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Cocinero - Buscador de Recetas",
  description: "Encuentra recetas basadas en los ingredientes que tienes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
