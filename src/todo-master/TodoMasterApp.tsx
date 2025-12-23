import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import AnimatedBackground from './components/AnimatedBackground';
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
