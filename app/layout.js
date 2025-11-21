import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import * as React from "react";

export const metadata = {
  title: "Euro Top Construct – Instalații electrice, sisteme de securitate, panouri fotovoltaice",
  description:
    "Euro Top Construct: instalații electrice până la 0,4 kV, protecție la trăsnet și prize de pământ, sisteme de securitate și detecție incendiu, panouri fotovoltaice (ON/OFF-grid), în județul Harghita și împrejurimi.",
  metadataBase: new URL("https://www.etcelectrice.net"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        {/* Faviconok */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon_32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon_64.png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/favicon_180.png" />
      </head>

      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
