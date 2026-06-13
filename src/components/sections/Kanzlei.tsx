export default function Kanzlei() {
  return (
    <section id="kanzlei" className="py-20 md:py-32 border-t border-leinen">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-[0.85fr_1.15fr] items-start">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-brass mb-4">01 — Die Kanzlei</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-tight">
            Eine Adresse in Eppendorf, an der man Sie kennt.
          </h2>
        </div>
        <div className="space-y-4 text-ink/85 leading-relaxed">
          <p>
            1982 in Hamburg gegründet, ist Hartmann & Voss über die Jahre das geblieben, was im Rechtsleben selten geworden ist: eine Kanzlei, in der Ihr Anliegen kein Vorgang unter vielen ist, sondern Ihre Sache.
          </p>
          <p>
            Wir nehmen uns Zeit, hören zu und entwickeln eine Lösung, die zu Ihrer Situation passt — nicht die nächstbeste aus der Schublade. Wo es sinnvoll ist, suchen wir die außergerichtliche Einigung; wo es nötig ist, vertreten wir Sie konsequent vor Gericht.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-leinen mt-6">
            {[
              { num: "1982", label: "in Hamburg gegründet" },
              { num: "3", label: "Kernrechtsgebiete, eng verzahnt" },
              { num: "HH+", label: "bundesweit vertreten" },
            ].map((f) => (
              <div key={f.label}>
                <span className="block font-display text-4xl text-petrol leading-none">{f.num}</span>
                <span className="block mt-2 text-xs text-ink/55 leading-snug">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
