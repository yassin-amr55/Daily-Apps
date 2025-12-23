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
import './todo-master.css';
import './tailwind.css'; // Import Tailwind separately

interface TodoMasterAppProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

function HomePage({ theme, toggleTheme }: TodoMasterAppProps) {
  return (
    <div className="min-h-screen relative todo-master-app" style={{ minHeight: '100vh', position: 'relative' }}>
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
    // Preload images
    const imageUrls = [
      '/assets/screenshots/screenshot1 tilted.png',
      '/assets/screenshots/screenshot1.png',
      '/assets/screenshots/screenshot2.png',
      '/assets/screenshots/screenshot5.png',
      '/assets/screenshots/screenshot4.png'
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
    <div className="todo-master-app">
      <Routes>
        <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default TodoMasterApp;
