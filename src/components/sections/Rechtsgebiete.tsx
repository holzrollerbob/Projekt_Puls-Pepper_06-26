import DisplayCards from "@/components/ui/DisplayCards";
import { Scale, Briefcase, Car } from "lucide-react";

const cards = [
  {
    icon: <Scale className="size-4 text-amber-300" />,
    title: "Familien- & Erbrecht",
    description: "Scheidung · Sorge · Unterhalt · Testament",
    date: "Fachanwältin Dr. Hartmann",
    iconClassName: "bg-amber-900",
    titleClassName: "text-amber-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Briefcase className="size-4 text-emerald-300" />,
    title: "Arbeits- & Mietrecht",
    description: "Kündigung · Abfindung · Mietstreit",
    date: "RA Marcus Voss",
    iconClassName: "bg-emerald-900",
    titleClassName: "text-emerald-400",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Car className="size-4 text-sky-300" />,
    title: "Verkehrsrecht",
    description: "Unfall · Schadensersatz · Bußgeld",
    date: "RA Marcus Voss",
    iconClassName: "bg-sky-900",
    titleClassName: "text-sky-400",
    className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

const areas = [
  {
    index: "A",
    name: "Familien- & Erbrecht",
    text: "Trennung, Scheidung, Sorge- und Umgangsrecht, Unterhalt, Ehevertrag — und alles, was an das Erbe rührt: Testament, Pflichtteil, Erbauseinandersetzung.",
    link: "verbindet sich mit Arbeit · Miete",
  },
  {
    index: "B",
    name: "Arbeits- & Mietrecht",
    text: "Kündigung, Abfindung, Arbeitsvertrag und Zeugnis. Mieterhöhung, Nebenkosten, Kündigung und Mängel — für Mieter wie für Vermieter.",
    link: "verbindet sich mit Familie · Verkehr",
  },
  {
    index: "C",
    name: "Verkehrsrecht",
    text: "Nach dem Unfall: Schadensregulierung, Schmerzensgeld, Bußgeld und Führerschein. Wir setzen Ihre Ansprüche gegenüber Versicherungen durch.",
    link: "verbindet sich mit Arbeit",
  },
  {
    index: "+",
    name: "Mediation",
    text: "Wo eine Einigung möglich ist, ist sie oft der bessere Weg. Wir begleiten Sie als Mediatoren zu fairen, tragfähigen Lösungen — ohne Sieger und Verlierer.",
    link: "trägt durch alle Bereiche",
    highlight: true,
  },
];

export default function Rechtsgebiete() {
  return (
    <section id="rechtsgebiete" className="py-20 md:py-32 bg-petrol text-paper-dark border-t border-petrol-deep">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-brass-bright mb-4">03 — Rechtsgebiete</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-5">
            Das Leben hält sich nicht an Paragrafengrenzen.
          </h2>
          <p className="text-lg text-muted-dark leading-relaxed">
            Eine Scheidung berührt das Erbe. Ein neuer Job verändert den Unterhalt. Genau an diesen Schnittstellen liegt unsere Stärke — wir denken Ihren Fall als Ganzes.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
          <ul className="grid sm:grid-cols-2 gap-px bg-paper-dark/15 border border-paper-dark/15 rounded-sm overflow-hidden">
            {areas.map((a) => (
              <li
                key={a.name}
                className={`p-6 flex flex-col gap-3 transition-colors hover:bg-petrol-deep ${
                  a.highlight ? "bg-petrol-deep" : "bg-petrol"
                }`}
              >
                <span className="inline-grid place-items-center w-8 h-8 border border-brass text-brass-bright font-mono text-xs rounded-sm">
                  {a.index}
                </span>
                <h3 className="font-display text-lg">{a.name}</h3>
                <p className="text-sm text-muted-dark leading-relaxed">{a.text}</p>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-brass-bright/70 border-t border-paper-dark/15 pt-3">
                  {a.link}
                </span>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center justify-center py-10 pr-10">
            <DisplayCards cards={cards} />
          </div>
        </div>
      </div>
    </section>
  );
}
