import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FreeIaModelsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Barre de navigation (repris exactement de HomePage.js) */}
      <header className="bg-white shadow-md py-6 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6 relative">
          {/* Logo SlimData cliquable vers HomePage */}
          <div className="absolute left-6">
            <Link to="/">
              <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
                Slim<span className="text-blue-600">Data</span>
              </h1>
            </Link>
          </div>

          {/* Navigation complète alignée au centre */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
            <motion.a href="#expertises" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">Expertises</motion.a>
            <motion.a href="#secteurs" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">Secteurs</motion.a>
            <motion.a href="/realisations" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">Réalisations</motion.a>
            <motion.a href="/free-ia-models" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">FREE IA models</motion.a>
            <motion.a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full font-semibold transition shadow-md">Contact</motion.a>
          </nav>
        </div>
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
