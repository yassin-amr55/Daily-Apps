import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AppsShowcase from './components/AppsShowcase'
import About from './components/About'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import TodoMasterApp from './todo-master/TodoMasterApp' // Import TypeScript component
import SecureVaultApp from './secure-vault/SecureVaultApp' // Import SecureVault component
import './App.css'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

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

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    // Preload images and simulate loading
    const imageUrls = [
      '/daily-apps.png',
      '/todo-master-icon.png',
      '/secure-vault-icon.png'
    ]

    const imagePromises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(url)
        img.onerror = reject
        img.src = url
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        // Add a minimum loading time for smooth experience
        setTimeout(() => setIsLoading(false), 1500)
      })
      .catch(() => {
        // Even if images fail, hide loading screen after timeout
        setTimeout(() => setIsLoading(false), 2000)
      })
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className={`app ${theme}`}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/ToDo-Master/*" element={<TodoMasterApp theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/SecureVault/*" element={<SecureVaultApp theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App