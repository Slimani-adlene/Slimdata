import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Support",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log("📤 Envoi des données :", formData);
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // 📌 Vérifie si la réponse est bien JSON
      console.log("📩 Réponse du serveur :", data);

      if (response.ok) {
        setMessage("✅ Votre demande a été envoyée avec succès !");
        setFormData({ name: "", email: "", phone: "", category: "Support", description: "" });
      } else {
        setMessage("❌ Erreur lors de l'envoi : " + data.message);
      }
    } catch (error) {
      console.error("⚠️ Erreur de connexion au serveur :", error);
      setMessage("❌ Erreur de connexion au serveur");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        
        {/* Section Informations personnelles */}
        <label>Nom</label>
        <input name="name" value={formData.name} onChange={handleChange} required className="border rounded w-full py-2 px-3" />
        
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} required className="border rounded w-full py-2 px-3" />
        
        <label>Téléphone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} required className="border rounded w-full py-2 px-3" />

        {/* Section Catégorie */}
        <label>Catégorie</label>
        <select name="category" value={formData.category} onChange={handleChange} className="border rounded w-full py-2 px-3">
          <option value="Support">Support</option>
          <option value="Partenariat">Partenariat</option>
          <option value="Autre">Autre</option>
        </select>

        {/* Section Description */}
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required className="border rounded w-full py-2 px-3"></textarea>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-4">
          Envoyer
        </button>
      </form>

      {message && <p className="text-green-600">{message}</p>}
      <a href="/" className="text-blue-600 hover:text-blue-800">Retour à l'accueil</a>
    </div>
  );
};

export default ContactPage;

