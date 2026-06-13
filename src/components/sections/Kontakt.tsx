export default function Kontakt() {
  return (
    <section id="kontakt" className="py-20 md:py-32 border-t border-leinen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-brass mb-4">06 — Kontakt & Anfahrt</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">Reden wir über Ihren Fall.</h2>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="bg-paper-warm border border-leinen rounded-sm p-8">
            <dl className="space-y-5">
              {[
                { dt: "Adresse", dd: <>Eppendorfer Baum 42<br />20249 Hamburg</> },
                { dt: "Telefon", dd: <a href="tel:+494045678901" className="text-petrol underline underline-offset-2 decoration-leinen hover:decoration-brass hover:text-brass transition-colors">040/456 789 01</a> },
                { dt: "Fax", dd: "040/456 789 02" },
                { dt: "E-Mail", dd: <a href="mailto:kontakt@hartmann-voss.de" className="text-petrol underline underline-offset-2 decoration-leinen hover:decoration-brass hover:text-brass transition-colors">kontakt@hartmann-voss.de</a> },
                { dt: "Sprechzeiten", dd: <>Termine nach Vereinbarung<span className="block text-xs text-ink/45 mt-1">Bitte rufen Sie uns an oder schreiben Sie uns.</span></> },
              ].map(({ dt, dd }) => (
                <div key={dt}>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-brass mb-1">{dt}</dt>
                  <dd className="text-sm text-ink leading-snug">{dd}</dd>
                </div>
              ))}
            </dl>
            <a
              href="mailto:kontakt@hartmann-voss.de?subject=Terminanfrage%20Kanzlei%20Hartmann%20%26%20Voss"
              className="mt-7 flex items-center justify-center w-full px-6 py-3 bg-petrol text-paper-dark font-medium rounded-sm hover:bg-brass hover:text-petrol-deep transition-all duration-200"
            >
              E-Mail schreiben
            </a>
          </div>

          <div className="border border-leinen rounded-sm overflow-hidden flex flex-col min-h-[340px]">
            <iframe
              title="Standort der Kanzlei Hartmann & Voss"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.980%2C53.584%2C10.000%2C53.594&layer=mapnik&marker=53.589%2C9.990"
              loading="lazy"
              className="flex-1 w-full min-h-[300px] grayscale-[0.2]"
              style={{ border: 0 }}
            />
            <a
              href="https://www.openstreetmap.org/?mlat=53.589&mlon=9.990#map=17/53.589/9.990"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-mono text-xs py-3 bg-paper-warm border-t border-leinen text-petrol hover:text-brass hover:bg-leinen-soft transition-colors"
            >
              Größere Karte öffnen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
