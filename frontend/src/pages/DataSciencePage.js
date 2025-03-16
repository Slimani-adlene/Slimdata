import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DataSciencePage = () => {
	const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

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
      <main className="container mx-auto py-28 px-6">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Data Science & Intelligence Artificielle</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SlimData vous accompagne dans l'exploitation optimale de vos données grâce à des approches innovantes en Data Science, Machine Learning, Deep Learning et en analyse prédictive.
          </p>
        </section>
<section className="grid md:grid-cols-2 gap-12">

  {/* Machine Learning */}
  <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
    <div>
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">Machine Learning</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Classification, régression et clustering.</li>
        <li>Prévision des comportements utilisateurs.</li>
        <li>Détection d'anomalies et de fraudes.</li>
        <li>Optimisation de processus industriels.</li>
      </ul>
    </div>
    <div className="flex justify-center">
      <Link to="/realisations/machine-learning" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
        Réalisations
      </Link>
    </div>
  </div>

  {/* Deep Learning */}
  <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
    <div>
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">Deep Learning</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Vision par ordinateur et traitement d'images.</li>
        <li>Traitement automatique du langage naturel (NLP).</li>
        <li>Reconnaissance vocale avancée.</li>
        <li>Systèmes de recommandation complexes.</li>
      </ul>
    </div>
    <div className="flex justify-center">
      <Link to="/realisations/deep-learning" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
        Réalisations
      </Link>
    </div>
  </div>

  {/* Analyse Prédictive */}
  <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
    <div>
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">Analyse Prédictive</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Anticipation des tendances du marché.</li>
        <li>Optimisation des stratégies marketing.</li>
        <li>Prévisions financières et gestion des risques.</li>
        <li>Maintenance prédictive dans l'industrie.</li>
      </ul>
    </div>
    <div className="flex justify-center">
      <Link to="/realisations/analyse-predictive" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
        Réalisations
      </Link>
    </div>
  </div>

  {/* Modélisation IA */}
  <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
    <div>
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">Modélisation IA sur mesure</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Conception de modèles personnalisés.</li>
        <li>Automatisation intelligente des processus.</li>
        <li>Développement de chatbots et d'assistants virtuels.</li>
        <li>Déploiement et monitoring de modèles en production.</li>
      </ul>
    </div>
    <div className="flex justify-center">
      <Link to="/realisations/modelisation-ia" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md">
        Réalisations
      </Link>
    </div>
  </div>

</section>

        {/* Appel à l'action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Prêt à exploiter pleinement vos données ?</h2>
          <Link to="/contact" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold shadow-md">
            Contactez-nous
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6">
        <p>&copy; 2024 SlimData. Tous droits réservés.</p>
      </footer>

    </div>
  );
};

export default DataSciencePage;
