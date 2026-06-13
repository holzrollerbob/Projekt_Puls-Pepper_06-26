import { Link } from "react-router-dom";

export default function Datenschutz() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-brass hover:text-petrol mb-10 transition-colors">
          ← Zurück zur Startseite
        </Link>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">Datenschutzerklärung</h1>
        <p className="text-ink/60 mb-10 max-w-xl">Gemäß Art. 13, 14 DSGVO informieren wir Sie über die Verarbeitung Ihrer personenbezogenen Daten.</p>

        <div className="border-l-2 border-brass bg-paper-warm px-5 py-4 rounded-sm text-sm text-ink/70 mb-8">
          <strong className="text-brass">Hinweis:</strong> Diese Datenschutzerklärung ist eine Vorlage und muss vor Veröffentlichung juristisch geprüft und auf die tatsächlichen Verarbeitungsvorgänge angepasst werden.
        </div>

        <div className="space-y-10 text-ink/85 leading-relaxed">
          {[
            {
              h: "1. Verantwortlicher",
              body: <>Rechtsanwälte Hartmann & Voss<br />Eppendorfer Baum 42, 20249 Hamburg<br />E-Mail: <a href="mailto:kontakt@hartmann-voss.de" className="text-petrol underline underline-offset-2">kontakt@hartmann-voss.de</a><br />Tel.: 040/456 789 01</>,
            },
            {
              h: "2. Erhobene Daten & Zweck",
              body: "Beim Besuch dieser Website verarbeitet unser Webserver technisch erforderliche Verbindungsdaten (IP-Adresse, Datum/Uhrzeit, aufgerufene URL, übertragene Datenmenge, Browsertyp). Diese Daten dienen ausschließlich dem Betrieb und der Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO) und werden nach spätestens 7 Tagen gelöscht.",
            },
            {
              h: "3. Kontaktaufnahme per E-Mail / Telefon",
              body: "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre angegebenen Daten zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO). Die Daten werden nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
            },
            {
              h: "4. Keine Analyse- oder Tracking-Tools",
              body: "Diese Website verwendet keine Cookies, kein Google Analytics und keine sonstigen Tracking- oder Analyse-Dienste. Es werden keine Daten an Dritte weitergegeben, sofern keine gesetzliche Verpflichtung besteht.",
            },
            {
              h: "5. Eingebettete Karte (OpenStreetMap)",
              body: "Auf der Kontaktseite ist eine Karte von OpenStreetMap (OSMF, St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, UK) eingebettet. Beim Laden der Karte wird Ihre IP-Adresse an OSMF übermittelt. Bitte beachten Sie die Datenschutzerklärung von OpenStreetMap: openstreetmap.org/copyright.",
            },
            {
              h: "6. Ihre Rechte",
              body: <>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Zuständige Aufsichtsbehörde ist der <strong>Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</strong>, Ludwig-Erhard-Str. 22, 20459 Hamburg.</>,
            },
          ].map(({ h, body }) => (
            <section key={h}>
              <h2 className="font-display text-2xl text-ink mb-3">{h}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/impressum" className="font-mono text-xs tracking-wide uppercase text-brass hover:text-petrol transition-colors">
            Zum Impressum →
          </Link>
        </div>
      </div>
    </main>
  );
}
