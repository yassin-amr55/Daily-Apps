import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import './secure-vault.css';
import './tailwind.css'; // Import Tailwind separately

interface SecureVaultAppProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

function HomePage({ theme, toggleTheme }: SecureVaultAppProps) {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Footer />
    </div>
  );
}

function SecureVaultApp({ theme, toggleTheme }: SecureVaultAppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images
    const imageUrls = [
      '/secure-vault-icon.png'
    ];

    const imagePromises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setTimeout(() => setIsLoading(false), 1200);
      })
      .catch(() => {
        setTimeout(() => setIsLoading(false), 1500);
      });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="secure-vault-app">
      <Routes>
        <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default SecureVaultApp;