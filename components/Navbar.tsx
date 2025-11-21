<div className="flex items-center gap-4">
  {/* LOGÓ */}
  <div className="relative w-32 h-10 flex items-center">
    <Image
      src="/logo WEB.jpg"
      alt="Euro Top Construct logo"
      fill
      className="object-contain"
      priority
    />
  </div>

  {/* ALÁÍRÁS (nagyobb, középre rendezve) */}
  <div className="leading-tight flex flex-col justify-center">
    <div className="text-base sm:text-lg font-semibold text-slate-900 text-center">
      {isHU
        ? "Villamos kivitelezés & biztonsági rendszerek"
        : "Instalații electrice & sisteme de securitate"}
    </div>
  </div>
</div>
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
