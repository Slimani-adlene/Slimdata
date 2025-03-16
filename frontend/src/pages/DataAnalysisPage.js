import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DataAnalysisPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Barre de navigation (exactement comme HomePage.js actuelle) */}
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
            <motion.a href="#expertises" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold shadow-md">Expertises</motion.a>
            <motion.a href="#secteurs" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold shadow-md">Secteurs</motion.a>
            <motion.a href="/realisations" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold shadow-md">Réalisations</motion.a>
            <motion.a href="/free-ia-models" className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold shadow-md">FREE IA models</motion.a>
            <motion.a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full font-semibold shadow-md">Contact</motion.a>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto py-28 px-6 flex-grow">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Analyse de Données</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SlimData vous aide à transformer vos données brutes en informations pertinentes grâce à une analyse poussée et une visualisation efficace.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          
          {/* Exploration et Visualisation */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Exploration & Visualisation</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Identification des tendances et des motifs cachés.</li>
                <li>Tableaux de bord interactifs et intuitifs.</li>
                <li>Visualisation avancée (Power BI, Tableau).</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to="/realisations/exploration-visualisation" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
                Réalisations
              </Link>
            </div>
          </div>

          {/* Nettoyage & Préparation */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Nettoyage & Préparation</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Gestion des données manquantes et aberrantes.</li>
                <li>Structuration des données complexes.</li>
                <li>Normalisation et transformation de données.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to="/realisations/nettoyage-preparation" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
                Réalisations
              </Link>
            </div>
          </div>

          {/* Statistiques & Interprétation */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Statistiques & Interprétation</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Analyses statistiques approfondies.</li>
                <li>Interprétation claire et compréhensible des résultats.</li>
                <li>Prise de décision basée sur les données.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to="/realisations/statistiques-interpretation" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
                Réalisations
              </Link>
            </div>
          </div>

          {/* Reporting avancé */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Reporting avancé</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Automatisation des rapports périodiques.</li>
                <li>Rapports dynamiques et personnalisables.</li>
                <li>Export multi-formats (PDF, Excel, Web).</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to="/realisations/reporting-avance" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
                Réalisations
              </Link>
            </div>
          </div>

        </section>

        {/* Appel à l'action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Besoin d'une expertise en analyse de données ?</h2>
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

export default DataAnalysisPage;
