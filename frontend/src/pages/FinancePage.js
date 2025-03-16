import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FinancePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      
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

      {/* ✅ Contenu */}
      <main className="container mx-auto py-24 px-6 flex-grow text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Finance</h1>
        <p className="text-gray-600 mb-12">
          L'IA et la Data Science pour l'optimisation des investissements, la gestion des risques et la détection de fraude.
        </p>

        {/* ✅ Bouton cohérent avec HomePage */}
        <div className="flex justify-center mt-8">
          <Link to="/realisations" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-md">
            Découvrir nos Réalisations
          </Link>
        </div>
      </main>

      {/* ✅ Footer IDENTIQUE */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-auto">
        <p>&copy; 2024 SlimData. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default FinancePage;

