import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import * as React from "react";

export const metadata = {
  title: "Euro Top Construct – Villamos kivitelezés, biztonsági rendszerek, napelemek",
  description:
    "Euro Top Construct: villamos kivitelezés 0,4 kV-ig, villámvédelem, biztonsági rendszerek, tűzjelző rendszerek, napelem (ON/OFF-grid).",
  metadataBase: new URL("https://www.etcelectrice.net")
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
