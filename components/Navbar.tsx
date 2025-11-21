import Link from "next/link";

type NavbarProps = {
  isHU?: boolean;
};

export function Navbar({ isHU }: NavbarProps) {
  return (
    <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand grid place-items-center text-white font-bold">
            ET
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">Euro Top Construct</div>

            {/* Alcím nyelv szerint */}
            <div className="text-xs text-slate-500">
              {isHU
                ? "Villamos kivitelezés & biztonsági rendszerek"
                : "Instalații electrice & sisteme de securitate"}
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Menüelemek */}
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

          {/* Nyelvváltó */}
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
