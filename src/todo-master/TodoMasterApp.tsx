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

  useEffect(() => {
    // Force scroll to top when TodoMaster app is opened
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Also try with a small delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    // Show loading screen for TodoMaster
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
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
