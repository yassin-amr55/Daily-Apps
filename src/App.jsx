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
    // Force immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Also try with a small delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
    // Additional fallback
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 100)
  }, [pathname])

  return null
}

// Loading wrapper component that only shows loading on homepage
function AppWithLoading({ theme, toggleTheme }) {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Only show loading screen on homepage
    if (location.pathname === '/') {
      setIsLoading(true)
      setLoadingProgress(0)
      
      // Preload images and track progress
      const imageUrls = [
        '/daily-apps.png',
        '/todo-master-icon.png',
        '/secure-vault-icon.png'
      ]

      let loadedCount = 0
      const totalImages = imageUrls.length

      const imagePromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = () => {
            loadedCount++
            setLoadingProgress(Math.round((loadedCount / totalImages) * 100))
            resolve(url)
          }
          img.onerror = () => {
            loadedCount++
            setLoadingProgress(Math.round((loadedCount / totalImages) * 100))
            reject()
          }
          img.src = url
        })
      })

      Promise.allSettled(imagePromises)
        .then(() => {
          setLoadingProgress(100)
          // Small delay to show 100% completion
          setTimeout(() => setIsLoading(false), 200)
        })
    }
  }, [location.pathname])

  if (isLoading && location.pathname === '/') {
    return <LoadingScreen progress={loadingProgress} />
  }

  return (
    <div className={`app ${theme}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/ToDo-Master/*" element={<TodoMasterApp theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/SecureVault/*" element={<SecureVaultApp theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </div>
  )
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

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <Router>
      <AppWithLoading theme={theme} toggleTheme={toggleTheme} />
    </Router>
  )
}

export default App