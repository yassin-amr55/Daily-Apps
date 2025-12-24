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

    // Real loading progress for SecureVault
    const loadingSteps = [
      { name: 'Initializing security...', duration: 250 },
      { name: 'Loading encryption...', duration: 300 },
      { name: 'Setting up vault...', duration: 200 },
      { name: 'Secure!', duration: 100 }
    ];

    let currentProgress = 0;
    let stepIndex = 0;

    const progressInterval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        const step = loadingSteps[stepIndex];
        const stepProgress = (stepIndex + 1) * (100 / loadingSteps.length);
        
        if (currentProgress < stepProgress) {
          currentProgress += 5;
          setLoadingProgress(Math.min(currentProgress, stepProgress));
        } else {
          stepIndex++;
        }
      } else {
        clearInterval(progressInterval);
        setTimeout(() => setIsLoading(false), 100);
      }
    }, 50);

    return () => clearInterval(progressInterval);
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