import { Navbar } from "../../components/Navbar";
import * as React from "react";

export const metadata = {
  title:
    "Euro Top Construct – Villamos kivitelezés, biztonsági rendszerek, napelemek",
  description:
    "Euro Top Construct: villanyszerelés 0,4 kV-ig, villámvédelem, biztonsági rendszerek, tűzjelző rendszerek, napelemes rendszerek (ON/OFF-grid), Hargita megyében és környékén.",
};

export default function HuLayout({ children }) {
  return (
    <html lang="hu">
      <body className="bg-white text-slate-800">
        <Navbar isHU />
        {children}
      </body>
    </html>
  );
}
