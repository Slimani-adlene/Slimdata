import React from "react";
import { Link } from "react-router-dom";

const SantePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ✅ Barre de navigation IDENTIQUE */}
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
            <Link to="/" className="text-gray-800 hover:text-blue-600">
              Slim<span className="text-blue-600">Data</span>
            </Link>
          </div>
          <nav className="flex flex-1 justify-center space-x-4">
            <Link to="/expertises" className="nav-btn">Expertises</Link>
            <Link to="/secteurs" className="nav-btn">Secteurs</Link>
            <Link to="/presentation" className="nav-btn">Présentation</Link>
            <Link to="/realisations" className="nav-btn">Réalisations</Link>
            <Link to="/contact" className="nav-btn bg-blue-600 text-white">Contact</Link>
          </nav>
        </div>
      </header>

      {/* ✅ Contenu */}
      <main className="container mx-auto py-24 px-6 flex-grow text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Santé</h1>
        <p className="text-gray-600 mb-12">
          L’IA et la Data Science au service de la médecine : amélioration des diagnostics, personnalisation des traitements et gestion des hôpitaux.
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

export default SantePage;
