import { useState, useEffect, useRef } from 'react';
import { X, Mail, Lock, User, Key } from 'lucide-react';

const screenshots = [
  {
    title: 'Email Management',
    description: 'Securely store and manage your email accounts',
    details: [
      'Encrypted email credentials storage',
      'Service tags for organization',
      'Quick copy-to-clipboard access'
    ],
    image: '/assets/SecureVault assets/screenshot1.png',
    icon: Mail
  },
  {
    title: 'Password Storage',
    description: 'Store all your passwords with bank-level security',
    details: [
      'AES-256-GCM encryption',
      'Bulk import capabilities',
      'Service categorization'
    ],
    image: '/assets/SecureVault assets/screenshot2.png',
    icon: Lock
  },
  {
    title: 'Username Organization',
    description: 'Keep track of usernames across platforms',
    details: [
      'Platform-specific organization',
      'Quick search and filter',
      'Secure local storage'
    ],
    image: '/assets/SecureVault assets/screenshot3.png',
    icon: User
  },
  {
    title: 'Password Generator',
    description: 'Generate strong, random passwords',
    details: [
      'Customizable length and complexity',
      'Multiple character sets',
      'Instant strength analysis'
    ],
    image: '/assets/SecureVault assets/screenshot4.png',
    icon: Key
  }
];

export default function Screenshots() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <>
      <section id="screenshots" className="relative py-24 pb-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        {/* Gradient blend from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 via-white/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-800" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              See it in action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore the secure, intuitive interface designed for privacy
            </p>
          </div>

          <div className="space-y-32">
            {screenshots.map((screenshot, index) => {
              const Icon = screenshot.icon;
              const isEven = index % 2 === 0;
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={index}
                  ref={el => { observerRefs.current[index] = el; }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                >
                  {/* Screenshot */}
                  <div className="flex-shrink-0 cursor-pointer group relative" onClick={() => setSelectedIndex(index)}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title} 
                      className="relative w-[350px] h-auto rounded-3xl transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 max-w-md text-center lg:text-left">
                    <div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 dark:bg-orange-600 mb-6 transition-all duration-500 delay-100 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 
                      className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-500 delay-200 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      {screenshot.title}
                    </h3>
                    <p 
                      className={`text-lg text-gray-600 dark:text-gray-400 mb-6 transition-all duration-500 delay-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      {screenshot.description}
                    </p>
                    <ul className="space-y-3">
                      {screenshot.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className={`flex items-start gap-3 text-gray-700 dark:text-gray-300 transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                          }`}
                          style={{ transitionDelay: `${400 + detailIndex * 100}ms` }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-orange-900/30 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-orange-500" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gradient blend to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-gray-50/50 to-gray-50 dark:from-slate-800 dark:via-slate-900/50 dark:to-slate-900" />
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <img 
            src={screenshots[selectedIndex].image} 
            alt={screenshots[selectedIndex].title} 
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-3xl"
          />
        </div>
      )}
    </>
  );
}