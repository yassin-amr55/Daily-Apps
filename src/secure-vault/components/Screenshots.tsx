import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Screenshots() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const screenshots = [
    {
      image: '/assets/SecureVault assets/screenshot1.png',
      title: 'Email Management',
      description: 'Securely store and manage your email accounts with encrypted credentials.'
    },
    {
      image: '/assets/SecureVault assets/screenshot2.png',
      title: 'Password Storage',
      description: 'Store all your passwords with service tags and secure encryption.'
    },
    {
      image: '/assets/SecureVault assets/screenshot3.png',
      title: 'Username Organization',
      description: 'Keep track of usernames across different platforms and services.'
    },
    {
      image: '/assets/SecureVault assets/screenshot4.png',
      title: 'Password Generator',
      description: 'Generate strong, random passwords with customizable settings.'
    }
  ];

  const nextSlide = () => {
    setSelectedIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setSelectedIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="screenshots" className="py-24 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See SecureVault in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the intuitive interface designed for secure and efficient credential management.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 p-8">
            <div className="flex justify-center">
              <img 
                src={screenshots[selectedIndex].image} 
                alt={screenshots[selectedIndex].title}
                className="w-64 h-auto rounded-2xl shadow-2xl cursor-pointer"
                onClick={() => openModal(selectedIndex)}
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {screenshots[selectedIndex].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {screenshots[selectedIndex].description}
              </p>
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex 
                    ? 'bg-blue-600 dark:bg-orange-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => openModal(index)}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="relative w-full h-auto rounded-xl shadow-lg"
                />
                <div className="relative mt-4 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-[90vh] p-4">
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img 
                src={screenshots[selectedIndex].image} 
                alt={screenshots[selectedIndex].title}
                className="w-full h-auto rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center mt-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {screenshots[selectedIndex].title}
                </h3>
                <p className="text-gray-300">
                  {screenshots[selectedIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}