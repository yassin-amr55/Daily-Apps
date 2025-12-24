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
import LoadingScreen from './components/LoadingScreen';
import './secure-vault.css';
import './tailwind.css'; // Import Tailwind separately

interface SecureVaultAppProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

function HomePage({ theme, toggleTheme }: SecureVaultAppProps) {
  useEffect(() => {
    // Ensure scroll to top when HomePage component mounts
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Force scroll to top when SecureVault app is opened
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Also try with a small delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    // Fast loading for SecureVault - simulate security initialization
    let progress = 0;
    const fastInterval = setInterval(() => {
      progress += 25; // Jump by 25% each time
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(fastInterval);
        // Very short delay to show 100% completion
        setTimeout(() => setIsLoading(false), 100);
      }
    }, 50); // Very fast updates

    return () => clearInterval(fastInterval);
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
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