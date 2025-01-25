import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markel Ramiro - Portfolio",
  description: "Mostrando mis proyectos y habilidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es">
        <body className={montserrat.className}>{children}</body>
      </html>
  );
}
