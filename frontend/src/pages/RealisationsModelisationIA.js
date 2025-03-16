import React from "react";
import { Link } from "react-router-dom";

const RealisationsModelisationIA = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <header className="bg-white shadow-md py-6 fixed top-0 w-full z-50">
      <div className="container mx-auto px-6">
        <Link to="/" className="text-3xl font-extrabold text-gray-800 font-serif">
          Slim<span className="text-blue-600">Data</span>
        </Link>
      </div>
    </header>

    <section className="container mx-auto py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Réalisations Modélisation IA</h1>
      <p className="text-lg text-gray-600">Cette page est en construction. Découvrez prochainement nos réalisations en modélisation IA.</p>
    </section>

      <footer className="mt-auto bg-gray-900 text-white text-center p-6">
    &copy; 2024 SlimData. Tous droits réservés.
  </footer>
  </div>
);

export default RealisationsModelisationIA;
