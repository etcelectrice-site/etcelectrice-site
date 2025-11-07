export default function PageRO() {
  return (
    <main>
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Instalații electrice de încredere în regiune</h1>
          <p className="mt-4 text-slate-600 text-lg">
            Proiectare–execuție–service până la 0,4 kV, protecție la trăsnet și prize de pământ (SR EN), sisteme de securitate și detecție incendiu, fotovoltaic (ON/OFF-grid).
          </p>
        </div>
      </section>
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Instalații electrice clădiri (≤ 0,4 kV)" text="Proiectare completă, execuție și suport tehnic pentru construcții noi și renovări." />
          <Card title="Protecție la trăsnet și prize de pământ" text="Conform SR EN, cu verificări și procese-verbale." />
          <Card title="Sisteme de securitate și supraveghere" text="Alarme, control acces, CCTV – proiectare, execuție și verificare periodică." />
          <Card title="Sisteme de detecție incendiu" text="Instalare, întreținere și documentație conform IGSU." />
          <Card title="Sisteme fotovoltaice (ON/OFF-grid)" text="Soluții PV eficiente pentru companii și instituții." />
          <Card title="Service & Verificări" text="Contracte anuale de mentenanță, inspecții și depanări." />
        </div>
      </section>
      <section id="contact" className="py-16 bg-slate-900 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <ul className="mt-5 space-y-2">
              <li><strong>E-mail:</strong> <a className="underline" href="mailto:info@etcelectrice.net">info@etcelectrice.net</a></li>
              <p><strong>Telefon:</strong> <a href="tel:+40742074084" className="hover:underline">0742 074 084</a></p>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold">Programare (măsurare priză de pământ)</h3>
              <iframe className="mt-2 w-full h-96 rounded-2xl border" src="https://cal.com/your-org/ground-testing?embed=1"></iframe>
            </div>
          </div>
          <form action="/api/contact" method="post" className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="grid gap-4">
              <input name="name" required placeholder="Nume" className="p-3 rounded-xl text-slate-900" />
              <input name="email" type="email" required placeholder="E-mail" className="p-3 rounded-xl text-slate-900" />
              <textarea name="message" rows={4} placeholder="Mesaj" className="p-3 rounded-xl text-slate-900" />
              <button className="bg-accent text-white px-5 py-3 rounded-xl">Trimite</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}
