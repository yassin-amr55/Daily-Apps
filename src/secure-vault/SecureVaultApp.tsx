import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Screenshots from './components/Screenshots.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import AnimatedBackground from './components/AnimatedBackground.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
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
    // Force scroll to top when SecureVault app is opened
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Also try with a small delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    // Show loading screen for SecureVault
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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