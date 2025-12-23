import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AppsShowcase from './components/AppsShowcase'
import About from './components/About'
import Footer from './components/Footer'
import TodoMasterApp from './todo-master/TodoMasterApp' // Import TypeScript component
import './App.css'

// Home page component
function HomePage({ theme, toggleTheme }) {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <AppsShowcase />
      <About />
      <Footer />
    </>
  )
}

function SecureVaultPage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>SecureVault</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Keep your passwords safe with local encryption and easy access.
      </p>
      <button 
        onClick={() => window.location.href = '/'}
        style={{
          padding: '1rem 2rem',
          background: 'white',
          border: 'none',
          borderRadius: '50px',
          color: '#11998e',
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        ← Back to Daily Apps
      </button>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Routes>
          <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/ToDo-Master/*" element={<TodoMasterApp theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/SecureVault" element={<SecureVaultPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App