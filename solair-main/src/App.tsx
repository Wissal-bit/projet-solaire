import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock, MapPin, ChevronRight, Star, ArrowRight, Shield, PenTool, Zap, ThermometerSun, Users, Award, Building, CheckCircle, ArrowUpRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('residential');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Rénovation',
      description: 'Restauration complète de toitures existantes avec des matériaux de qualité supérieure',
      icon: <PenTool className="w-12 h-12 text-primary-600" />
    },
    {
      title: 'Installation',
      description: 'Pose de nouvelles toitures avec garantie décennale',
      icon: <Shield className="w-12 h-12 text-primary-600" />
    },
    {
      title: 'Urgences',
      description: 'Intervention rapide pour réparations urgentes 24/7',
      icon: <Zap className="w-12 h-12 text-primary-600" />
    },
    {
      title: 'Isolation',
      description: "Solutions d'isolation thermique performantes",
      icon: <ThermometerSun className="w-12 h-12 text-primary-600" />
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      text: 'Un travail remarquable et professionnel. Je recommande vivement !',
      rating: 5,
      role: 'Propriétaire',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      name: 'Pierre Martin',
      text: 'Équipe réactive et compétente. Devis respecté à la lettre.',
      rating: 5,
      role: 'Gérant d\'immeuble',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    {
      name: 'Sophie Laurent',
      text: 'Excellent rapport qualité-prix. Travail soigné et propre.',
      rating: 5,
      role: 'Architecte',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
    }
  ];

  const stats = [
    { number: '20+', label: 'Années d\'expérience', icon: <Award className="w-8 h-8" /> },
    { number: '1500+', label: 'Projets réalisés', icon: <Building className="w-8 h-8" /> },
    { number: '98%', label: 'Clients satisfaits', icon: <Users className="w-8 h-8" /> },
    { number: '10', label: 'Ans de garantie', icon: <Shield className="w-8 h-8" /> }
  ];

  const projects = {
    residential: [
      {
        title: 'Villa Moderne',
        description: 'Rénovation complète avec isolation thermique',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80'
      },
      {
        title: 'Maison Traditionnelle',
        description: 'Installation de tuiles en terre cuite',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80'
      }
    ],
    commercial: [
      {
        title: 'Centre Commercial',
        description: 'Toiture métallique de grande surface',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
      },
      {
        title: 'Immeuble de Bureaux',
        description: 'Solution d\'étanchéité moderne',
        image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className={`flex-shrink-0 font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-primary-900' : 'text-white'
            }`}>
              ToitPro
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Accueil', 'Services', 'Réalisations', 'À Propos', 'Témoignages', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-secondary-500' : 'text-white hover:text-secondary-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-secondary-500' : 'text-white hover:text-secondary-300'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Accueil', 'Services', 'Réalisations', 'À Propos', 'Témoignages', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:text-secondary-500 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1632759145351-4e9a66c3e15d?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
                Votre toiture mérite <br />
                <span className="text-secondary-400">le meilleur</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Experts en toiture depuis plus de 20 ans, nous garantissons qualité et durabilité pour votre habitat
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center group hover:shadow-lg">
                  Demander un devis gratuit
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center group hover:shadow-lg">
                  Nos réalisations
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4 text-primary-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="à-propos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Une expertise reconnue <br />
                <span className="text-secondary-500">depuis plus de 20 ans</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Chez ToitPro, nous sommes passionnés par l'excellence dans le domaine de la toiture. Notre équipe d'experts qualifiés s'engage à fournir des solutions durables et innovantes pour protéger votre habitat.
              </p>
              <ul className="space-y-4">
                {[
                  'Équipe certifiée et expérimentée',
                  'Matériaux de haute qualité',
                  'Garantie décennale',
                  'Service client premium'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1635424040420-af3237226de6?auto=format&fit=crop&q=80"
                  alt="Équipe au travail"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80"
                  alt="Réalisation"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1632759145354-b33b6fc2f612?auto=format&fit=crop&q=80"
                  alt="Détail toiture"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&q=80"
                  alt="Maison moderne"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Nos Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins en toiture, de la rénovation à l'installation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <a href="#contact" className="inline-flex items-center mt-6 text-secondary-500 hover:text-secondary-600 transition-colors duration-300">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="réalisations" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'residential'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Résidentiel
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'commercial'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects[activeTab].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover-scale"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="témoignages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre meilleure récompense
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-primary-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-secondary-500 text-secondary-500"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contactez-nous
                <br />
                <span className="text-secondary-400">pour un devis gratuit</span>
              </h2>
              <p className="text-gray-300 mb-12">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet
              </p>
              <div className="space-y-8">
                <div className="flex items-center p-4 bg-primary-800/50 rounded-lg hover:bg-primary-800 transition-colors duration-300">
                  <Phone className="mr-6 text-secondary-400" size={28} />
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <span>01 23 45 67 89</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-primary-800/50 rounded-lg hover:bg-primary-800 transition-colors duration-300">
                  <Mail className="mr-6 text-secondary-400" size={28} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <span>contact@toitpro.fr</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-primary-800/50 rounded-lg hover:bg-primary-800 transition-colors duration-300">
                  <Clock className="mr-6 text-secondary-400" size={28} />
                  <div>
                    <div className="font-semibold">Horaires</div>
                    <span>Lun-Ven: 8h-18h</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-primary-800/50 rounded-lg hover:bg-primary-800 transition-colors duration-300">
                  <MapPin className="mr-6 text-secondary-400" size={28} />
                  <div>
                    <div className="font-semibold">Adresse</div>
                    <span>123 rue de la Toiture, 75000 Paris</span>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-6 bg-primary-800/50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-lg bg-primary-700/50 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom</label>
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 rounded-lg bg-primary-700/50 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-primary-700/50 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  placeholder="Votre numéro"
                  className="w-full px-4 py-3 rounded-lg bg-primary-700/50 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type de projet</label>
                <select className="w-full px-4 py-3 rounded-lg bg-primary-700/50 text-white focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all duration-300">
                  <option value="">Sélectionnez un type</option>
                  <option value="renovation">Rénovation</option>
                  <option value="installation">Installation</option>
                  <option value="reparation">Réparation</option>
                  <option value="isolation">Isolation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="Décrivez votre projet..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-primary-700/50 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all duration-300"
                ></textarea>
              </div>
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full flex items-center justify-center group hover:shadow-lg">
                Envoyer
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-4">ToitPro</h3>
              <p className="text-gray-400">
                Votre expert en toiture depuis plus de 20 ans. Qualité, durabilité et satisfaction garanties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {['Accueil', 'Services', 'Réalisations', 'À Propos', 'Témoignages', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-secondary-500 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href="#services" className="text-gray-400 hover:text-secondary-500 transition-colors duration-200">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horaires</h3>
              <p className="text-gray-400">
                Lundi - Vendredi: 8h-18h<br />
                Samedi: Sur rendez-vous<br />
                Dimanche: Fermé<br />
                Urgences: 24/7
              </p>
              <div className="mt-6">
                <p className="text-gray-400">
                  <strong>Urgences 24/7:</strong><br />
                  01 23 45 67 89
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 ToitPro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;