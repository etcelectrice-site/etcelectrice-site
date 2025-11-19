export default function Page() {
  return (
    <main>
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Megbízható villamos kivitelező a régióban
          </h1>
          <p className="mt-4 text-slate-600">
            Euro Top Construct – villanyszerelés tervezéssel és kivitelezéssel,
            ipari és épületvillamossági munkák, biztonságtechnika, tűzjelzés és
            napelemes rendszerek, Hargita megyében és környékén.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900">Szolgáltatások</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Épületvillamosság 0,4 kV-ig</li>
            <li>• Villámvédelem és földelés</li>
            <li>• Biztonságtechnika, videómegfigyelés, riasztók</li>
            <li>• Tűzjelző rendszerek</li>
            <li>• Napelemes rendszerek </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-12 bg-slate-900 text-slate-50">
        <div className="max-w-5xl mx-auto px-4 space-y-2">
          <h2 className="text-2xl font-bold">Kapcsolat</h2>
          <p>
            <strong>E-mail: </strong>
            <a
              className="underline hover:no-underline"
              href="mailto:info@etcelectrice.net"
            >
              info@etcelectrice.net
            </a>
          </p>
          <p>
            <strong>Telefon: </strong>
            <a className="underline hover:no-underline" href="tel:+40742074084">
              0742 074 084
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
