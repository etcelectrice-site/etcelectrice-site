'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isRO = pathname?.startsWith("/ro");
  return (
    <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand grid place-items-center text-white font-bold">ET</div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">Euro Top Construct</div>
            <div className="text-xs text-slate-500">{isRO ? 'Instalații electrice & sisteme de securitate' : 'Villamos kivitelezés & biztonsági rendszerek'}</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-accent">{isRO ? 'Servicii' : 'Szolgáltatások'}</a>
          <a href="#licenses" className="hover:text-accent">{isRO ? 'Licențe' : 'Engedélyek'}</a>
          <a href="#portfolio" className="hover:text-accent">{isRO ? 'Referințe' : 'Referenciák'}</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-xl hover:bg-accent transition">
            {isRO ? 'Cere ofertă' : 'Ajánlatkérés'}
          </a>
          <Link href={isRO ? "/" : "/ro"} className="ml-2 underline text-slate-600 hover:text-slate-900">{isRO ? "HU" : "RO"}</Link>
        </nav>
      </div>
    </header>
  );
}
