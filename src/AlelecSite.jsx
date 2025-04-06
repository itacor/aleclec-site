import React from "react";

export default function AlelecSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">ALELEC</h1>
        <p className="italic text-sm">L'innovation au bout des doigts</p>
      </header>

      {/* Hero Section */}
      <section className="p-8 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Boutons poussoirs design et exclusifs</h2>
        <p className="text-lg max-w-xl mx-auto">
          Découvrez notre gamme de boutons élégants et robustes, conçus et brevetés par ALELEC pour sublimer vos intérieurs et vos installations domotiques.
        </p>
        <div className="mt-6">
          <img 
            src="/buttons-photo.jpg" 
            alt="Gamme de boutons ALELEC"
            className="mx-auto rounded-xl shadow-md w-full max-w-3xl"
          />
        </div>
      </section>

      {/* Produits */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Nos modèles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-4 shadow-sm">
            <h4 className="font-bold mb-2">Modèle Cuivre</h4>
            <p>Finition brute et chaleureuse pour un style industriel chic.</p>
          </div>
          <div className="border rounded-xl p-4 shadow-sm">
            <h4 className="font-bold mb-2">Modèle Bois</h4>
            <p>Naturel et élégant, il s’intègre parfaitement dans les intérieurs modernes ou rustiques.</p>
          </div>
          <div className="border rounded-xl p-4 shadow-sm">
            <h4 className="font-bold mb-2">Modèle Mat Noir</h4>
            <p>Minimaliste, sobre et contemporain, parfait pour la domotique haut de gamme.</p>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="bg-gray-50 p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">À propos d’ALELEC</h3>
        <p className="max-w-2xl mx-auto text-center">
          ALELEC est une société belge spécialisée dans l’électricité et la domotique. Notre gamme de boutons poussoirs brevetés est le fruit de notre passion pour l’innovation, la qualité et le design.
        </p>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} ALELEC — Tous droits réservés.
      </footer>
    </div>
  );
}
