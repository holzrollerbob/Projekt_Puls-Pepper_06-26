import { Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Kanzlei from "@/components/sections/Kanzlei";
import Anwaelte from "@/components/sections/Anwaelte";
import Rechtsgebiete from "@/components/sections/Rechtsgebiete";
import Leistungen from "@/components/sections/Leistungen";
import Kosten from "@/components/sections/Kosten";
import Kontakt from "@/components/sections/Kontakt";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";

function Home() {
  return (
    <>
      <Hero />
      <Kanzlei />
      <Anwaelte />
      <Rechtsgebiete />
      <Leistungen />
      <Kosten />
      <Kontakt />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
