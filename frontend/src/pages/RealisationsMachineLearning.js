import React from "react";
import { Link } from "react-router-dom";

const RealisationsMachineLearning = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    {/* Navbar à ajouter si nécessaire */}
    <header className="bg-white shadow-md py-6">
      <div className="container mx-auto px-6">
        <Link to="/" className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif">
          Slim<span className="text-blue-600">Data</span>
        </Link>
      </div>
    </header>

    <section className="container mx-auto py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Réalisations - Machine Learning</h1>
      <p className="text-xl text-gray-600">Bientôt disponible...</p>
    </section>

      <footer className="mt-auto bg-gray-900 text-white text-center p-6">
    &copy; 2024 SlimData. Tous droits réservés.
  </footer>
  </div>
);

export default RealisationsMachineLearning;
