import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FreeIaModelsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Barre de navigation */}
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          
          {/* Menu Burger pour mobile */}
          <button 
            className="text-3xl text-gray-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* ✅ SlimData cliquable vers Home */}
          <Link to="/" className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
            Slim<span className="text-blue-600">Data</span>
          </Link>

          {/* ✅ Navigation Desktop (Correction: "Expertises" en motion.a) */}
          <nav className="hidden md:flex space-x-4">
            <motion.a href="#expertises" className="btn-nav">Expertises</motion.a>
            <motion.a href="#secteurs" className="btn-nav">Secteurs</motion.a>
            <Link to="/realisations" className="btn-nav">Réalisations</Link>
            <Link to="/free-ia-models" className="btn-nav">Free IA Models</Link>
            <Link to="/contact" className="btn-nav">Contact</Link>
          </nav>
        </div>

        {/* ✅ Menu mobile déroulant */}
        {menuOpen && (
          <div className="md:hidden absolute bg-white shadow-md w-full flex flex-col items-center py-4">
            <motion.a href="#expertises" className="py-2 btn-nav">Expertises</motion.a>
            <motion.a href="#secteurs" className="py-2 btn-nav">Secteurs</motion.a>
            <Link to="/realisations" className="py-2 btn-nav">Réalisations</Link>
            <Link to="/free-ia-models" className="py-2 btn-nav">Free IA Models</Link>
            <Link to="/contact" className="py-2 btn-nav">Contact</Link>
          </div>
        )}
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto py-28 px-6 flex-grow">
        <section className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">FREE IA Models</h1>
          <p className="text-xl text-gray-600">
            Cette section sera bientôt disponible. Vous pourrez télécharger gratuitement des modèles d'intelligence artificielle prêts à l'emploi pour vos projets.
          </p>
        </section>
      </main>

      {/* Footer fixé en bas */}
      <footer className="mt-auto bg-gray-900 text-white text-center p-6">
        <p>&copy; 2024 SlimData. Tous droits réservés.</p>
      </footer>

    </div>
  );
};

export default FreeIaModelsPage;
