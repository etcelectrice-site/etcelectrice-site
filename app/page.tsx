export default function Page() {
  return (
    <main>
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Instalații electrice de încredere în regiune
          </h1>
          <p className="mt-4 text-slate-600">
            Euro Top Construct – instalații electrice cu proiectare și execuție,
            lucrări de electricitate industrială și pentru clădiri, sisteme de
            securitate, detecție incendiu și sisteme fotovoltaice, în județul
            Harghita și împrejurimi.
          </p>
        </div>
      </section>

      <section id="services" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900">Servicii</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Instalații electrice pentru clădiri (până la 0,4 kV)</li>
            <li>• Paratrăsnet și prize de pământ</li>
            <li>• Sisteme de securitate, CCTV, alarme</li>
            <li>• Sisteme de detecție și avertizare incendiu</li>
            <li>• Sisteme fotovoltaice</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-12 bg-slate-900 text-slate-50">
        <div className="max-w-5xl mx-auto px-4 space-y-2">
          <h2 className="text-2xl font-bold">Contact</h2>
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
