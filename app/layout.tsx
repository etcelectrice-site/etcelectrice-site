import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import * as React from "react";

// Típus nélküli, egyszerű metadata – ez nem fog TypeScript hibát dobni
export const metadata = {
  title: "Euro Top Construct – Villamos kivitelezés, biztonsági rendszerek, napelemek",
  description:
    "Euro Top Construct: villamos kivitelezés 0,4 kV-ig, villámvédelem, biztonsági rendszerek, tűzjelző rendszerek, napelem (ON/OFF-grid).",
  metadataBase: new URL("https://www.etcelectrice.net"),
  alternates: { canonical: "/", languages: { hu: "/", ro: "/ro" } },
  openGraph: {
    title: "Euro Top Construct",
    description:
      "Megbízható, engedéllyel rendelkező kivitelező. Teljes körű tervezés–kivitelezés–szerviz.",
    type: "website",
    locale: "hu_HU",
  },
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="hu">
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
