import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-brass hover:text-petrol mb-10 transition-colors">
          ← Zurück zur Startseite
        </Link>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">Impressum</h1>
        <p className="text-ink/60 mb-10 max-w-xl">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).</p>

        <div className="prose-legal space-y-8 text-ink/85 leading-relaxed">
          <div className="border-l-2 border-brass bg-paper-warm px-5 py-4 rounded-sm text-sm text-ink/70">
            <strong className="text-brass">Hinweis:</strong> Diese Seite ist eine Vorlage. Alle Angaben (Name, Adresse, Steuernummer, Berufshaftpflicht) sind fiktiv und müssen vor Veröffentlichung durch echte Daten ersetzt und anwaltlich geprüft werden.
          </div>

          {[
            { title: "Diensteanbieter", content: <>Rechtsanwälte Hartmann & Voss<br />Eppendorfer Baum 42<br />20249 Hamburg</> },
            { title: "Vertreten durch", content: <>Dr. Sabine Hartmann<br />Marcus Voss</> },
            { title: "Kontakt", content: <>Telefon: 040/456 789 01<br />Fax: 040/456 789 02<br />E-Mail: <a href="mailto:kontakt@hartmann-voss.de" className="text-petrol underline underline-offset-2">kontakt@hartmann-voss.de</a></> },
            { title: "Umsatzsteuer-ID", content: "[bitte ergänzen]" },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="font-display text-2xl text-ink mb-2">{title}</h2>
              <p>{content}</p>
            </section>
          ))}

          <section>
            <h2 className="font-display text-2xl text-ink mb-2">Berufsrechtliche Angaben</h2>
            <p>Berufsbezeichnung „Rechtsanwalt/Rechtsanwältin" verliehen in der Bundesrepublik Deutschland.</p>
            <p className="mt-2"><strong>Zuständige Kammer:</strong><br />Hanseatische Rechtsanwaltskammer Hamburg<br />Bleichenbrücke 9, 20354 Hamburg</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
              {["BRAO", "BORA", "FAO", "RVG", "CCBE"].map((r) => <li key={r}>{r}</li>)}
            </ul>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/datenschutz" className="font-mono text-xs tracking-wide uppercase text-brass hover:text-petrol transition-colors">
            Zur Datenschutzerklärung →
          </Link>
        </div>
      </div>
    </main>
  );
}
