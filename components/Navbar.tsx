import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  isHU?: boolean;
};

export function Navbar({ isHU }: NavbarProps) {
  return (
    <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* BAL OLDAL: LOGÓ + SZLOGEN VÍZSZINTESEN */}
        <div className="flex items-center gap-4">
          <div className="relative w-48 h-12">
            <Image
              src="/logo-web.jpg"
              alt="Euro Top Construct logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
            {isHU
              ? "Villamos kivitelezés & biztonsági rendszerek"
              : "Instalații electrice & sisteme de securitate"}
          </div>
        </div>

        {/* JOBB OLDAL: MENÜ + NYELVVÁLTÓ */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-accent">
            {isHU ? "Szolgáltatások" : "Servicii"}
          </a>
          <a href="#licenses" className="hover:text-accent">
            {isHU ? "Engedélyek" : "Licențe"}
          </a>
          <a href="#portfolio" className="hover:text-accent">
            {isHU ? "Referenciák" : "Referințe"}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-xl hover:bg-accent transition"
          >
            {isHU ? "Ajánlatkérés" : "Cere ofertă"}
          </a>
          <Link
            href={isHU ? "/" : "/hu"}
            className="ml-2 underline text-slate-600 hover:text-slate-900"
          >
            {isHU ? "RO" : "HU"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
