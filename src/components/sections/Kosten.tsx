export default function Kosten() {
  return (
    <section id="kosten" className="py-20 md:py-32 bg-petrol-deep text-paper-dark border-t border-[#0A1C19]">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-[0.85fr_1.15fr] items-start">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-brass-bright mb-4">05 — Kosten</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Transparenz von der ersten Minute an.
          </h2>
        </div>
        <div className="space-y-4 text-muted-dark leading-relaxed">
          <p>
            Rechtsberatung soll keine Blackbox sein. Wir sprechen früh und offen über die zu erwartenden Kosten, damit Sie eine fundierte Entscheidung treffen können.
          </p>
          <p>
            Anwaltliche Gebühren richten sich grundsätzlich nach dem Rechtsanwaltsvergütungsgesetz (RVG); wo es passt, vereinbaren wir eine Vergütung im Voraus. Eine außergerichtliche Einigung reduziert in vielen Fällen die Gesamtkosten erheblich.
          </p>
          <p className="text-paper-dark font-medium">
            Sie haben Anspruch auf Beratungs- oder Prozesskostenhilfe? Sprechen Sie uns an — wir prüfen das mit Ihnen.
          </p>
          <div className="pt-2">
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center px-6 py-3 bg-brass text-petrol-deep font-medium rounded-sm hover:bg-brass-bright transition-all duration-200 hover:-translate-y-0.5"
            >
              Kostenfrage besprechen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
