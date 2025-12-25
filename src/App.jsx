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
      
      const startTime = Date.now()
      const minLoadingTime = 300
      
      // Preload images and track progress
      const imageUrls = [
        '/daily-apps.png',
        '/todo-master-icon.png',
        '/secure-vault-icon.png'
      ]

      let loadedCount = 0
      const totalImages = imageUrls.length
      let imagesLoaded = false
      let minTimeElapsed = false

      // Check if we can finish loading
      const checkFinishLoading = () => {
        if (imagesLoaded && minTimeElapsed) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 100)
        }
      }

      // Animate progress bar over minimum time
      const progressInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime
        const timeProgress = Math.min((elapsedTime / minLoadingTime) * 100, 100)
        
        // Check if minimum time has elapsed
        if (elapsedTime >= minLoadingTime) {
          minTimeElapsed = true
        }
        
        if (imagesLoaded) {
          // If images are loaded, use time-based progress
          setLoadingProgress(Math.round(timeProgress))
          
          if (timeProgress >= 100) {
            minTimeElapsed = true
            checkFinishLoading()
          }
        } else {
          // If images still loading, use actual loading progress but slower
          const actualProgress = (loadedCount / totalImages) * 100
          const smoothProgress = Math.min(timeProgress, actualProgress)
          setLoadingProgress(Math.round(smoothProgress))
        }
      }, 20)

      const imagePromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = () => {
            loadedCount++
            if (loadedCount === totalImages) {
              imagesLoaded = true
              setLoadingProgress(100)
              checkFinishLoading()
            }
            resolve(url)
          }
          img.onerror = () => {
            loadedCount++
            if (loadedCount === totalImages) {
              imagesLoaded = true
              setLoadingProgress(100)
              checkFinishLoading()
            }
            reject()
          }
          img.src = url
        })
      })

      return () => clearInterval(progressInterval)
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