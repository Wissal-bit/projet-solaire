import React, { useState } from 'react';
import { Send, CheckCircle, Sun, Users, Star, Sparkles } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100">
      {/* Header avec effet de verre */}
      <header className="bg-gradient-to-r from-blue-600/80 to-blue-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-white text-3xl md:text-4xl font-bold tracking-wider flex items-center gap-3">
              <Sun className="h-8 w-8 text-yellow-300 animate-spin-slow" />
              SOLAR DEAL
            </div>
            <p className="text-yellow-300 text-lg mt-2 font-light tracking-wider">Connect to the sun</p>
          </div>
        </div>
      </header>

      {/* Hero Section avec motif de fond */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 pointer-events-none"></div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl font-bold text-blue-700 mb-6 drop-shadow-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Bienvenue chez Solar Deal
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Nous sommes dédiés à la promotion des jeunes artistes talentueux. 
            Notre mission est de créer des opportunités uniques pour la nouvelle génération d'artistes.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700">Communauté</h3>
              <p className="text-gray-700 mt-2">Rejoignez une communauté dynamique d'artistes</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-yellow-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Star className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700">Opportunités</h3>
              <p className="text-gray-700 mt-2">Accédez à des opportunités exclusives</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700">Innovation</h3>
              <p className="text-gray-700 mt-2">Développez votre créativité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur shadow-xl rounded-2xl p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Inscription Artiste
            </h2>
            
            {submitted ? (
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-800">Merci pour votre inscription!</h3>
                <p className="text-green-600 mt-2">Nous vous contacterons bientôt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white/80"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white/80"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white/80"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white/80"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message (Optionnel)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white/80"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/90">© 2024 Solar Deal. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;