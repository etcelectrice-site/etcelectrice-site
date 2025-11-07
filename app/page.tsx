export default function PageHU() {
  return (
    <main>
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Megbízható villamos kivitelező a régióban</h1>
          <p className="mt-4 text-slate-600 text-lg">
            0,4 kV-ig tervezés–kivitelezés–szerviz, villámvédelem és földelés (SR EN), biztonsági és tűzjelző rendszerek, napelem (ON/OFF-grid).
          </p>
        </div>
      </section>
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Épületvillamosság (≤ 0,4 kV)" text="Teljes körű tervezés, kivitelezés és mérnöki támogatás új és felújítási projektekhez." />
          <Card title="Villámvédelem és földelés" text="SR EN szabványok szerint, felülvizsgálattal és jegyzőkönyvvel." />
          <Card title="Biztonsági és megfigyelő rendszerek" text="Riasztók, beléptetés, CCTV – tervezés, kivitelezés és ellenőrzés." />
          <Card title="Tűzjelző rendszerek" text="Telepítés, karbantartás és IGSU-kompatibilis dokumentáció." />
          <Card title="Napelem rendszerek (ON/OFF-grid)" text="Költséghatékony PV megoldások." />
          <Card title="Szerviz & Felülvizsgálat" text="Éves karbantartási szerződések, ellenőrzések és hibaelhárítás." />
        </div>
      </section>
      <section id="contact" className="py-16 bg-slate-900 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold">Kapcsolat</h2>
            <ul className="mt-5 space-y-2">
              <li><strong>E-mail:</strong> <a className="underline" href="mailto:info@etcelectrice.net">info@etcelectrice.net</a></li>
              <li><strong>Telefon:</strong> <a className="underline" href="tel:+40742074084">0742 074 084</a></li>
              <li><strong>Facebook:</strong> <a className="underline" href="https://facebook.com/eurotopconstruct" target="_blank">facebook.com/eurotopconstruct</a></li>
              <li><strong>Székhely:</strong> Gyergyóújfalu &nbsp;&nbsp; <strong>Munkapont:</strong> Gyergyószentmiklós</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold">Időpontfoglalás (földelésmérés)</h3>
              <iframe className="mt-2 w-full h-96 rounded-2xl border" src="https://cal.com/your-org/ground-testing?embed=1"></iframe>
            </div>
          </div>
          <form action="/api/contact" method="post" className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="grid gap-4">
              <input name="name" required placeholder="Név" className="p-3 rounded-xl text-slate-900" />
              <input name="email" type="email" required placeholder="E-mail" className="p-3 rounded-xl text-slate-900" />
              <textarea name="message" rows={4} placeholder="Üzenet" className="p-3 rounded-xl text-slate-900" />
              <button className="bg-accent text-white px-5 py-3 rounded-xl">Küldés</button>
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
