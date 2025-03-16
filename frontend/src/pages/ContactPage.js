import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Général",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ✅ Barre de navigation mise à jour */}
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
            <Link to="/" className="text-gray-800 hover:text-blue-600">
              Slim<span className="text-blue-600">Data</span>
            </Link>
          </div>
          <nav className="flex flex-1 justify-center space-x-4">
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
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full font-semibold shadow-md">
              Contact
            </Link>
          </nav>
        </div>
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
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-md">
              Envoyer
            </button>
          </div>
        </form>
      </main>

      {/* ✅ Footer IDENTIQUE */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-auto">
        <p>&copy; 2024 SlimData. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default ContactPage;

