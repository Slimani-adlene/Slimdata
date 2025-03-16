import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CloudBigDataPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Cloud & Big Data</h1>
      <p className="text-lg text-gray-600 mb-6">
        Bienvenue sur la page dédiée à Cloud & Big Data. Vous trouverez ici des informations détaillées.
      </p>
      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-md">
        Retour à l'accueil
      </a>
    </div>
  );
};

export default CloudBigDataPage;
