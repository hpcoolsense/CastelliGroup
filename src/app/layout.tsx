import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Castelli Group — Consultora en Eficiencia Operativa",
  description:
    "Estructuramos la operación de tu empresa para que funcione con método. Diagnóstico, mejoras operativas y acompañamiento para pymes que quieren crecer con orden.",
  keywords:
    "consultora, eficiencia operativa, pymes, gestión, procesos, metodología A++, Argentina, Tucumán",
  authors: [{ name: "Castelli Group" }],
  openGraph: {
    title: "Castelli Group — Consultora en Eficiencia Operativa",
    description:
      "Estructuramos la operación de tu empresa para que funcione con método.",
    type: "website",
    locale: "es_AR",
    siteName: "Castelli Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Castelli Group — Consultora en Eficiencia Operativa",
    description:
      "Estructuramos la operación de tu empresa para que funcione con método.",
  },
  metadataBase: new URL("https://castelligroup.ar"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
