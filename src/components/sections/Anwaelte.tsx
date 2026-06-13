const lawyers = [
  {
    initials: "SH",
    title: "Rechtsanwältin · Fachanwältin für Familienrecht",
    name: "Dr. Sabine Hartmann",
    bio: "Gründerin der Kanzlei und seit mehr als vier Jahrzehnten prägend. Ihr Schwerpunkt liegt im Familien- und Erbrecht — Bereiche, in denen juristische Präzision und menschliches Fingerspitzengefühl gleichermaßen zählen.",
  },
  {
    initials: "MV",
    title: "Rechtsanwalt · Fachanwalt für Arbeitsrecht",
    name: "Marcus Voss",
    bio: "Verbindet die Tradition der Kanzlei mit klarer, heutiger Beratung. Sein Fokus liegt auf Arbeits-, Miet- und Verkehrsrecht — seine Mandanten schätzen die direkte Sprache und den geradlinigen Weg zur Lösung.",
  },
];

export default function Anwaelte() {
  return (
    <section id="anwaelte" className="py-20 md:py-32 border-t border-leinen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-brass mb-4">02 — Die Anwälte</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">Zwei Namen, ein Wort.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {lawyers.map((l) => (
            <article
              key={l.name}
              className="flex gap-5 items-start p-7 bg-paper-warm border border-leinen rounded-sm hover:border-brass hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 grid place-items-center bg-petrol text-brass-bright font-display font-semibold text-xl rounded-sm">
                {l.initials}
              </div>
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-brass mb-1">{l.title}</p>
                <h3 className="font-display text-2xl text-ink mb-2">{l.name}</h3>
                <p className="text-sm text-ink/80 leading-relaxed">{l.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 font-mono text-xs text-ink/45">
          Ausführliche Profile mit Werdegang und Fachanwaltschaften ergänzen wir gern auf Anfrage.
        </p>
      </div>
    </section>
  );
}
