const steps = [
  { title: "Zuhören & einordnen", text: "Im ersten Gespräch klären wir, worum es wirklich geht — und welche Rechtsgebiete hineinspielen." },
  { title: "Außergerichtlich einigen", text: "Eine faire Einigung spart Zeit, Geld und Nerven. Wir verhandeln, bevor wir streiten." },
  { title: "Konsequent vertreten", text: "Wenn es vor Gericht muss, stehen wir vor den Hamburger Gerichten und bundesweit für Sie ein." },
  { title: "Im Netzwerk denken", text: "Bei Bedarf arbeiten wir mit Steuerberatern, Notaren und Wirtschaftsprüfern zusammen." },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-20 md:py-32 border-t border-leinen">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-[0.85fr_1.15fr] items-start">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-brass mb-4">04 — Wie wir arbeiten</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
            Erst die Einigung. Dann, wenn nötig, der Prozess.
          </h2>
        </div>
        <ol className="space-y-0 counter-reset-step">
          {steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[auto_1fr] gap-4 py-5 border-t border-leinen last:border-b">
              <span className="font-mono text-xs text-brass pt-0.5 tracking-wide">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink mb-1">{s.title}</h3>
                <p className="text-sm text-ink/75 leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
