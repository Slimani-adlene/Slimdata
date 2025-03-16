import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PresentationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

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
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Qui sommes-nous ?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SlimData est une entreprise spécialisée en conseil et expertise dans le domaine de la data science, l'intelligence artificielle et l'automatisation avancée des processus.
          </p>
        </section>

        {/* À propos de SlimData */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Notre Vision</h2>
            <p className="text-gray-700">
              Nous croyons en un monde où les données deviennent un levier puissant pour la prise de décisions intelligentes et éclairées. Nous accompagnons nos clients vers une transformation numérique efficace et pérenne.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Notre Mission</h2>
            <p className="text-gray-700">
              Accompagner nos partenaires à exploiter tout le potentiel de leurs données en mettant à leur disposition notre expertise en Data Science, Machine Learning, IA prédictive et automatisation intelligente.
            </p>
          </div>
        </section>

        {/* Profil personnel (inspiré des échanges) */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">À propos d'Adlene</h2>
          <p className="text-gray-700">
            Adlene, fondateur de SlimData, est passionné par l’intelligence artificielle et le Big Data. Avec une solide expérience en développement de modèles prédictifs, automatisation des processus métiers et analyse avancée des données, il accompagne ses clients dans des projets de transformation numérique complexes et stratégiques.
          </p>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Pourquoi choisir SlimData ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Expertise pointue</h3>
              <p className="text-gray-700">Des experts reconnus dans leur domaine, maîtrisant les technologies les plus avancées.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Accompagnement sur mesure</h3>
              <p className="text-gray-700">Une approche personnalisée pour répondre précisément aux besoins spécifiques de chaque client.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Résultats concrets</h3>
              <p className="text-gray-700">Des solutions opérationnelles qui génèrent rapidement une valeur ajoutée pour votre activité.</p>
            </div>
          </div>
        </section>

        {/* Bouton de contact */}
        <section className="text-center">
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold shadow-md">
            Contactez-nous pour en savoir plus
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

export default PresentationPage;
