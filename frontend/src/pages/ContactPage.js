import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Général",
    description: "",  // ✅ Correction ici
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("https://slimdata-backend.onrender.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("🚀 Merci ! Votre message a été envoyé avec succès 🎉\nNous vous répondrons dans les plus brefs délais !");
            setFormData({ name: "", email: "", phone: "", category: "Général", description: "" });
        } else {
            alert("⚠️ Oups ! Une erreur est survenue. Veuillez réessayer.");
        }
    } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire :", error);
        alert("❌ Impossible d'envoyer le message. Vérifiez votre connexion internet et réessayez.");
    }
};

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ✅ Barre de navigation */}
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          
          <button 
            className="text-3xl text-gray-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <Link to="/" className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
            Slim<span className="text-blue-600">Data</span>
          </Link>

          <nav className="hidden md:flex space-x-4">
            <motion.a href="#expertises" className="btn-nav">Expertises</motion.a>
            <motion.a href="#secteurs" className="btn-nav">Secteurs</motion.a>
            <Link to="/realisations" className="btn-nav">Réalisations</Link>
            <Link to="/free-ia-models" className="btn-nav">Free IA Models</Link>
            <Link to="/contact" className="btn-nav">Contact</Link>
          </nav>
        </div>

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

      {/* ✅ Formulaire de contact */}
      <main className="container mx-auto py-24 px-6 flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Contactez-nous</h1>
        <p className="text-gray-600 text-center mb-12">
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </p>

        <form className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Nom</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Catégorie</label>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>Général</option>
              <option>Support</option>
              <option>Collaboration</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-md">
              Envoyer
            </button>
          </div>
        </form>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-auto">
        <p>&copy; 2024 SlimData. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
