import React from "react";
import { Link } from "react-router-dom";

const RealisationsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Barre de navigation */}
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          
          {/* Logo cliquable */}
          <div className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
            <Link to="/" className="text-gray-800 hover:text-blue-600">
              Slim<span className="text-blue-600">Data</span>
            </Link>
          </div>

          {/* Navigation centrée */}
          <nav className="flex flex-1 justify-center space-x-6">
            <Link to="/expertises" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">
              Expertises
            </Link>
            <Link to="/secteurs" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">
              Secteurs
            </Link>
            <Link to="/presentation" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">
              Présentation
            </Link>
            <Link to="/realisations" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">
              Réalisations
            </Link>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full font-semibold transition shadow-md">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* ✅ Contenu principal */}
      <main className="container mx-auto py-24 px-6 flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Nos Réalisations</h1>
        <p className="text-gray-600 text-center mb-12">
          Découvrez nos projets en data science, machine learning et IA. 🚀
        </p>

        {/* Section réalisations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Projet 1</h3>
            <p className="text-gray-600">Description de la réalisation...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Projet 2</h3>
            <p className="text-gray-600">Description de la réalisation...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Projet 3</h3>
            <p className="text-gray-600">Description de la réalisation...</p>
          </div>
        </div>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-auto">
        <p>&copy; 2024 SlimData. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default RealisationsPage;

