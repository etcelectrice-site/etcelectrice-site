import "../styles/globals.css";
import * as React from "react";
import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "Euro Top Construct – Villamos kivitelezés, biztonsági rendszerek, napelemek",
  description:
    "Euro Top Construct: villamos kivitelezés 0,4 kV-ig, villámvédelem, biztonsági rendszerek, tűzjelző rendszerek, napelem (ON/OFF-grid).",
  metadataBase: new URL("https://www.etcelectrice.net"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
