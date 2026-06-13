import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-petrol-deep text-paper-dark py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-[1fr_auto] items-start">
        <div>
          <span className="inline-grid place-items-center w-10 h-10 font-display font-semibold text-sm text-brass-bright border border-brass rounded-sm mb-4">
            H&V
          </span>
          <p className="font-display text-xl mb-1">Rechtsanwälte Hartmann & Voss</p>
          <p className="font-mono text-xs tracking-wide text-muted-dark">
            Eppendorfer Baum 42 · 20249 Hamburg
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper-dark/80 content-start">
          <a href="/#kanzlei" className="hover:text-brass-bright transition-colors">Kanzlei</a>
          <a href="/#anwaelte" className="hover:text-brass-bright transition-colors">Anwälte</a>
          <a href="/#rechtsgebiete" className="hover:text-brass-bright transition-colors">Rechtsgebiete</a>
          <a href="/#kontakt" className="hover:text-brass-bright transition-colors">Kontakt</a>
          <Link to="/impressum" className="hover:text-brass-bright transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-brass-bright transition-colors">Datenschutz</Link>
        </nav>

        <p className="font-mono text-[0.7rem] tracking-wide text-muted-dark border-t border-paper-dark/10 pt-6 md:col-span-2">
          © {new Date().getFullYear()} Rechtsanwälte Hartmann & Voss · Hamburg
        </p>
      </div>
    </footer>
  );
}
