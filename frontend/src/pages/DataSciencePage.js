import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DataSciencePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Barre de navigation */}
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
            <motion.a href="#expertises" 
              className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md"
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}>
              Expertises
            </motion.a>
            <motion.a href="#secteurs" 
              className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md"
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}>
              Secteurs
            </motion.a>
            
			<motion.a href="/realisations" 
			  className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md"
			  whileHover={{ scale: 1.05 }} 
			  transition={{ duration: 0.3 }}>
			  Réalisations
			</motion.a>
			<motion.a href="/free-ia-models" 
			  className="bg-green-500 hover:bg-green-700 text-white py-2 px-5 rounded-full font-semibold transition shadow-md"
			  whileHover={{ scale: 1.05 }} 
			  transition={{ duration: 0.3 }}>
			  FREE IA Models
			</motion.a>
			<motion.a href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full font-semibold transition shadow-md"
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}>
              Contact
            </motion.a>
          </nav>
        
        </div>
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

