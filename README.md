# Website Kanzlei Puls & Pepper

Relaunch der Website für die Rechtsanwälte Puls & Pepper (Hamburg, seit 1979).
Statische Website — kein Build-Schritt, kein Server-Backend nötig.

## Aufbau

```
index.html          One-Pager (Hero, Kanzlei, Anwälte, Rechtsgebiete, Leistungen, Kosten, Kontakt)
impressum.html      Pflichtseite (Vorlage — anwaltlich prüfen)
datenschutz.html    Pflichtseite (Vorlage — anwaltlich prüfen)
assets/
  css/styles.css    Design-System (Tokens in :root) + alle Sektionen, mobile-first
  js/main.js        Mobiles Menü, Scroll-Reveals, Footer-Jahr
  img/favicon.svg   Wortmarke / Favicon
```

## Lokal ansehen

Einfach `index.html` im Browser öffnen — oder mit lokalem Server (empfohlen, damit die Karte sauber lädt):

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Design

- **Leitidee:** „Hanseatische Anwaltschaft" — ruhige Autorität mit menschlicher Wärme
- **Farben:** Petrol `#13332F`, Messing `#9A7322`, warmes Papier `#F4F0E8`, Leinen `#D8CFBE`
- **Schriften:** Fraunces (Display), IBM Plex Sans (Text), IBM Plex Mono (Labels) — via Google Fonts
- **Signature:** Rechtsgebiete als ineinandergreifende Karten (zeigt die Kanzlei-Philosophie, dass Lebenssituationen Rechtsgrenzen überschreiten)

## Inhalte pflegen

Alle Texte stehen direkt im HTML. Häufig anzupassen:

- **Kontaktdaten:** Telefon-Links (`tel:`) und E-Mail (`mailto:`) in `index.html` (Sektion „Kontakt") sowie im Footer aller Seiten.
- **Anwälte:** Profile in der Sektion `#anwaelte` — echte Fotos können das `<div class="lawyer-portrait">` ersetzen; Bios sind als Vorschlag formuliert.
- **Karte:** Der OpenStreetMap-Ausschnitt in `#kontakt` ist auf die ungefähre Adresse zentriert. Für exakte Koordinaten den `marker`-Parameter der iframe-`src` anpassen.

## Vor dem Live-Gang prüfen

- [ ] **Impressum** anwaltlich vervollständigen (USt-IdNr., Berufshaftpflicht, zuständige Kammer)
- [ ] **Datenschutzerklärung** an den tatsächlichen Hoster anpassen; ggf. Google Fonts lokal einbinden
- [ ] Anwalts-Bios und ggf. Fachanwaltschaften final freigeben
- [ ] Öffnungs-/Sprechzeiten ergänzen (aktuell „nach Vereinbarung")
- [ ] Echte Porträtfotos einsetzen (optional)
