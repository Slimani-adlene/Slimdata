import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/hero1.jpg", title: "SlimData", slogan: "L'innovation par la Data Science" },
  { src: "/images/hero2.jpg", title: "Expertise en IA", slogan: "Des modèles prédictifs performants" },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header avec menu responsive */}
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          
          {/* Menu Burger pour mobile */}
          <button 
            className="text-3xl text-gray-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* Logo SlimData cliquable */}
          <Link to="/" className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
            Slim<span className="text-blue-600">Data</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/expertises" className="btn-nav">Expertises</Link>
            <Link to="/secteurs" className="btn-nav">Secteurs</Link>
            <Link to="/realisation" className="btn-nav">Réalisations</Link>
            <Link to="/free-ia-models" className="btn-nav">Free IA Models</Link>
            <Link to="/contact" className="btn-nav-primary">Contact</Link>
          </nav>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden absolute bg-white shadow-md w-full flex flex-col items-center py-4">
            <Link to="/expertises" className="py-2">Expertises</Link>
            <Link to="/secteurs" className="py-2">Secteurs</Link>
            <Link to="/realisation" className="py-2">Réalisations</Link>
            <Link to="/free-ia-models" className="py-2">Free IA Models</Link>
            <Link to="/contact" className="py-2 text-blue-600">Contact</Link>
          </div>
        )}
      </header>

      {/* Carrousel ajusté pour mobile */}
      <section className="flex justify-center items-center h-[60vh] mt-20">
        <div className="relative w-11/12 max-w-5xl h-[400px] overflow-hidden border-2 border-gray-300 rounded-lg shadow-lg">
          <AnimatePresence>
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${images[currentIndex].src})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h1 className="text-4xl font-bold">{images[currentIndex].title}</h1>
                <p className="text-lg mt-2">{images[currentIndex].slogan}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Nos Expertises */}
      <section id="expertises" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Nos Expertises</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="expertise-card">
            <h3 className="text-xl font-semibold">Data Science & IA</h3>
            <p className="text-gray-600">Développement d'algorithmes avancés.</p>
            <Link to="/expertise-data" className="btn-realisation">Réalisations</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="expertise-card">
            <h3 className="text-xl font-semibold">Analyse Prédictive</h3>
            <p className="text-gray-600">Anticipez les tendances avec l’IA.</p>
            <Link to="/expertise-predictive" className="btn-realisation">Réalisations</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="expertise-card">
            <h3 className="text-xl font-semibold">Cloud & Big Data</h3>
            <p className="text-gray-600">Infrastructure et solutions cloud.</p>
            <Link to="/expertise-bigdata" className="btn-realisation">Réalisations</Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-8">
        <p>&copy; 2024 Slimdata. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HomePage;


