import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProcessAutomationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Navigation identique à la HomePage */}
      <header className="bg-white shadow-md py-6 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6 relative">
          <div className="absolute left-6">
            <Link to="/">
              <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
                Slim<span className="text-blue-600">Data</span>
              </h1>
            </Link>
          </div>

          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
            <motion.a href="#expertises" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">Expertises</motion.a>
            <motion.a href="#secteurs" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md">Secteurs</motion.a>
            <motion.a href="/realisations" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold shadow-md">Réalisations</motion.a>
            <motion.a href="/free-ia-models" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold shadow-md">FREE IA models</motion.a>
            <motion.a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full font-semibold shadow-md">Contact</motion.a>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto py-28 px-6 flex-grow">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Automatisation des Processus</h1>
          <p className="text-xl text-gray-600">
            Découvrez comment SlimData vous accompagne dans l’automatisation intelligente de vos processus grâce à l'intégration de modèles IA performants.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">

          {/* Automatisation via IA */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Automatisation via IA</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Automatisation des tâches répétitives.</li>
                <li>Optimisation des flux opérationnels.</li>
                <li>Augmentation de la productivité.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to="/realisations/automatisation-ia" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
                Réalisations
              </Link>
            </div>
          </div>

          {/* Robotisation */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Robotisation des Processus (RPA)</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Mise en place de robots logiciels (RPA).</li>
                <li>Réduction des coûts opérationnels.</li>
                <li>Intégration avec vos systèmes existants.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to="/realisations/rpa" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
                Réalisations
              </Link>
            </div>
          </div>

        </section>

        {/* Bouton Contact */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Intéressé par l'automatisation ?</h2>
          <Link to="/contact" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold shadow-md">
            Contactez-nous
          </Link>
        </section>
      </main>

      {/* Footer fixé en bas */}
      <footer className="mt-auto bg-gray-900 text-white text-center p-6">
        <p>&copy; 2024 SlimData. Tous droits réservés.</p>
      </footer>

    </div>
  );
};

export default ProcessAutomationPage;