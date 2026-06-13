import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/#kanzlei", label: "Kanzlei" },
  { href: "/#anwaelte", label: "Anwälte" },
  { href: "/#rechtsgebiete", label: "Rechtsgebiete" },
  { href: "/#kosten", label: "Kosten" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (!isHome && href.startsWith("/#")) {
      return;
    }
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-leinen"
          : "bg-paper/80 backdrop-blur-sm border-leinen/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between min-h-[72px] gap-4">
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <span className="inline-grid place-items-center w-10 h-10 font-display font-semibold text-[0.9rem] text-brass border-[1.5px] border-brass rounded-sm tracking-tight flex-shrink-0 group-hover:bg-brass group-hover:text-petrol-deep transition-colors">
            H&V
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.1rem] font-semibold text-ink">Hartmann & Voss</span>
            <span className="font-mono text-[0.65rem] tracking-widest uppercase text-ink/50">Rechtsanwälte · Hamburg</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
              className="text-sm text-ink/75 hover:text-brass transition-colors relative group py-1"
            >
              {l.label}
              <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="tel:+494045678901"
            className="font-mono text-xs tracking-wide text-ink border border-leinen px-3 py-2 rounded-sm hover:bg-petrol hover:text-paper-dark hover:border-petrol transition-all"
          >
            040/456 789 01
          </a>
        </nav>

        <button
          className="md:hidden w-11 h-11 flex items-center justify-center border border-leinen rounded-sm"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          <span className="flex flex-col gap-[5px] w-5">
            <span className={`h-[1.5px] bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`h-[1.5px] bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-[1.5px] bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-leinen bg-paper px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
              className="py-3 text-base text-ink/80 border-b border-leinen/50 last:border-0 hover:text-brass transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+494045678901"
            className="mt-3 font-mono text-sm text-center border border-leinen px-3 py-3 rounded-sm hover:bg-petrol hover:text-paper-dark transition-all"
          >
            040/456 789 01
          </a>
        </div>
      )}
    </header>
  );
}
