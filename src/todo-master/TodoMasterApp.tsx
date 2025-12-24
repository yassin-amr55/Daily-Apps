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

    // Fast loading for TodoMaster - simulate component initialization
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
    <div className="todo-master-app">
      <Routes>
        <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default TodoMasterApp;
