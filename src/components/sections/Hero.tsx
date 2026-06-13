import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { Scale, Briefcase, Car, HeartHandshake } from "lucide-react";

const practiceAreas = [
  { icon: <Scale className="size-4" />, label: "Familienrecht & Erbrecht", cases: "142 Mandate", color: "text-amber-400" },
  { icon: <Briefcase className="size-4" />, label: "Arbeits- & Mietrecht", cases: "218 Mandate", color: "text-emerald-400" },
  { icon: <Car className="size-4" />, label: "Verkehrsrecht", cases: "87 Mandate", color: "text-sky-400" },
  { icon: <HeartHandshake className="size-4" />, label: "Mediation", cases: "54 Verfahren", color: "text-violet-400" },
];

export default function Hero() {
  return (
    <section className="bg-paper overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="pb-8">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-brass mb-5">
              Hartmann & Voss <span className="opacity-50 mx-2">·</span> Hamburg{" "}
              <span className="opacity-50 mx-2">·</span> seit 1982
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-ink tracking-tight leading-[1.05] mb-6">
              Klares Recht.<br />
              <em className="text-brass not-italic">Menschliche</em> Stärke.
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-xl mx-auto leading-relaxed mb-8">
              Seit über vier Jahrzehnten begleiten wir Mandantinnen und Mandanten in Hamburg durch die entscheidenden Momente des Lebens — persönlich, kompetent und an Ihrer Seite.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-6 py-3 bg-petrol text-paper-dark font-medium rounded-sm hover:bg-brass hover:text-petrol-deep transition-all duration-200 hover:-translate-y-0.5"
              >
                Termin vereinbaren
              </a>
              <a
                href="tel:+494045678901"
                className="inline-flex flex-col items-center px-6 py-2 border border-leinen text-petrol rounded-sm hover:border-brass hover:text-brass transition-all duration-200 hover:-translate-y-0.5 leading-tight"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-brass">Anrufen</span>
                <span className="font-semibold text-sm">040/456 789 01</span>
              </a>
            </div>
          </div>
        }
      >
        {/* Dunkle Karte: Mandats-Übersicht */}
        <div className="h-full w-full bg-zinc-900 text-zinc-100 p-5 md:p-8 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-zinc-700 pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Mandatsübersicht 2024</span>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">● aktiv</span>
          </div>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {practiceAreas.map((a) => (
              <div key={a.label} className="bg-zinc-800 rounded-xl p-4 flex flex-col gap-2 hover:bg-zinc-750 transition-colors">
                <div className={`${a.color} flex items-center gap-2 text-sm font-medium`}>
                  {a.icon}
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest">{a.cases}</span>
                </div>
                <p className="font-display text-base text-zinc-200 leading-snug">{a.label}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-zinc-700 pt-3 flex justify-between items-center">
            <span className="font-mono text-[0.65rem] text-zinc-500 uppercase tracking-widest">Kanzlei Hartmann & Voss · HH</span>
            <span className="font-mono text-[0.65rem] text-zinc-500">seit 1982</span>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
