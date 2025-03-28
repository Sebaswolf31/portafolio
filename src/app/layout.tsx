import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markel Ramiro - Portfolio",
  description: "AI Engineer & Backend Developer specialized in cloud solutions",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Markel Ramiro - AI Engineer & Backend Developer" />
        <meta name="keywords" content="AI, Machine Learning, Cloud, Backend Development, Data Engineering" />
      </head>
      <body className={montserrat.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}