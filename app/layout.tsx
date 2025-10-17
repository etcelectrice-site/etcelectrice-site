import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
export const metadata: Metadata = {
  title: "Euro Top Construct – Villamos kivitelezés, biztonsági rendszerek, napelemek",
  description: "Euro Top Construct: villamos kivitelezés 0,4 kV-ig, villámvédelem, biztonsági rendszerek, tűzjelző rendszerek, napelem (ON/OFF-grid).",
  metadataBase: new URL("https://www.etcelectrice.net"),
  alternates: {
    canonical: "/",
    languages: {
      "hu": "/",
      "ro": "/ro"
    }
  },
  openGraph: {
    title: "Euro Top Construct",
    description: "Megbízható, engedéllyel rendelkező kivitelező. Teljes körű tervezés–kivitelezés–szerviz.",
    type: "website",
    locale: "hu_HU"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
