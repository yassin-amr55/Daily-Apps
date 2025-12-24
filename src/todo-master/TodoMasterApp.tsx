import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import './todo-master.css';
import './tailwind.css'; // Import Tailwind separately

interface TodoMasterAppProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

function HomePage({ theme, toggleTheme }: TodoMasterAppProps) {
  useEffect(() => {
    // Ensure scroll to top when HomePage component mounts
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div style={{ paddingTop: '64px' }}>
        <Hero />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
}

function TodoMasterApp({ theme, toggleTheme }: TodoMasterAppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Force scroll to top when TodoMaster app is opened
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Also try with a small delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    // Real loading progress for TodoMaster
    const loadingSteps = [
      { name: 'Initializing...', duration: 200 },
      { name: 'Loading components...', duration: 300 },
      { name: 'Setting up theme...', duration: 200 },
      { name: 'Ready!', duration: 100 }
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
    <div className="todo-master-app">
      <Routes>
        <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default TodoMasterApp;
