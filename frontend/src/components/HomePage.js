import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const images = [
  { 
    src: "/images/hero1.jpg", 
    title: "SlimData", 
    slogan: "L'innovation au service de la data.", 
    showButton: false
  },
  { 
    src: "/images/hero2.jpg", 
    title: "Expertise en Data Science", 
    slogan: "Des solutions adaptées à vos besoins.", 
    showButton: true, 
    link: "#expertises"
  }
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
      
      {/* Header avec menu burger et navigation */}
      <header className="bg-white shadow-md py-7 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          
          {/* Menu Burger - Aligné tout à gauche */}
          
          <div className="absolute left-6 flex items-center">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
              Slim<span className="text-blue-600">Data</span>
            </h1>
          </div>
         

          {/* Navigation Alignée à Droite */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
		    <motion.a href="/presentation" 
              className="bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white py-2 px-5 rounded-full font-semibold transition shadow-md"
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}>
              Présentation
            </motion.a>
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

      {/* Menu Déroulant Latéral */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ x: -250, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: -250, opacity: 0 }} 
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 z-50"
          >
            {/* Bouton pour fermer le menu */}
            <button 
              className="text-gray-700 text-3xl mb-6 focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600">À Propos</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#career" className="text-gray-700 hover:text-blue-600">Carrières</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slider (Carrousel) Centré */}
      <section className="flex justify-center items-center h-[70vh] mt-20">
        <div className="relative w-11/12 max-w-6xl h-[500px] overflow-hidden border-4 border-gray-300 rounded-lg shadow-lg">
          <AnimatePresence>
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${images[currentIndex].src})` }}
            >
              {/* Fond assombri pour améliorer la visibilité du texte */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              {/* Texte bien visible au-dessus de l'image */}
              <div className="relative z-10 text-white text-center flex flex-col items-center justify-center">
    <h1 className="text-5xl font-extrabold mb-4">{images[currentIndex].title}</h1>
    <h2 className="text-2xl font-light">{images[currentIndex].slogan}</h2>
    
    {images[currentIndex].showButton && (
      <a 
        href={images[currentIndex].link} 
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md"
        style={{ marginTop: '3rem' }}
    >
        En savoir plus
    </a>
    )}
</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Nos Expertises */}
      <section id="expertises" className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Nos Expertises</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<Link to="/data-science" className="block">
<div className="bg-white p-6 shadow-md rounded-lg hover:bg-blue-100 transition">
<h3 className="text-xl font-semibold">Data Science & IA</h3>
<p className="text-gray-600">Développement d'algorithmes avancés.</p>
</div></Link>
<Link to="/analyse-donnees" className="block">
<div className="bg-white p-6 shadow-md rounded-lg hover:bg-blue-100 transition">
<h3 className="text-xl font-semibold">Analyse de données</h3>
<p className="text-gray-600">Développement de dashboards et suivis des KPI.</p>
</div></Link>
<Link to="/automatisation-processus" className="block">
<div className="bg-white p-6 shadow-md rounded-lg hover:bg-blue-100 transition">
<h3 className="text-xl font-semibold">Automatisation de process</h3>
<p className="text-gray-600">Gagnez du temps, et de la qualité sur des process fastudieux</p>
</div></Link>
          
        </div>
      </section>
      {/* Secteurs */}
      <section id="secteurs" className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Secteurs d'Activité</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Finance & Assurance</h3>
            <p className="text-gray-600">Optimisation des risques, scoring et prévisions financières.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Santé & Pharmaceutique</h3>
            <p className="text-gray-600">Analyse de données médicales, diagnostics et IA en santé.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Retail & E-commerce</h3>
            <p className="text-gray-600">Personnalisation de l'expérience client et optimisation des ventes.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Prenez rendez-vous avec nos experts pour discuter de vos projets en data et intelligence artificielle.
        </p>
        <motion.a href="mailto:contact@slimdata.com" 
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-md"
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }}>
          Envoyer un email
        </motion.a>
      </section>
	  

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2024 Slimdata. Tous droits réservés.</p>
      </footer>

    </div>
  );
};

export default HomePage;

