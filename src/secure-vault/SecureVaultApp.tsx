import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Screenshots from './components/Screenshots.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import AnimatedBackground from './components/AnimatedBackground.tsx';
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
      '/assets/SecureVault assets/screenshot1 tilted.png',
      '/assets/SecureVault assets/screenshot1.png',
      '/assets/SecureVault assets/screenshot2.png',
      '/assets/SecureVault assets/screenshot3.png',
      '/assets/SecureVault assets/screenshot4.png',
      '/assets/SecureVault assets/icon.png'
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