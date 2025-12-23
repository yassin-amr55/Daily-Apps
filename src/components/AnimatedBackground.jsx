import { useState, useEffect } from 'react'

function AnimatedBackground() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'))

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        background: isDark 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #7c2d12 100%)'
          : 'linear-gradient(135deg, #dbeafe 0%, #cffafe 50%, #f3e8ff 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientMove 10s ease infinite',
        transition: 'background 0.3s ease'
      }}
    >
      {/* Blob 1 */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          backgroundColor: isDark ? 'rgba(249, 115, 22, 0.3)' : 'rgba(59, 130, 246, 0.4)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'blobFloat 8s ease-in-out infinite',
          mixBlendMode: isDark ? 'screen' : 'multiply',
          transition: 'background-color 0.3s ease'
        }}
      />
      
      {/* Blob 2 */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '250px',
          height: '250px',
          backgroundColor: isDark ? 'rgba(220, 38, 38, 0.3)' : 'rgba(6, 182, 212, 0.4)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'blobFloat 6s ease-in-out infinite reverse',
          mixBlendMode: isDark ? 'screen' : 'multiply',
          transition: 'background-color 0.3s ease'
        }}
      />
      
      {/* Blob 3 */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '200px',
          height: '200px',
          backgroundColor: isDark ? 'rgba(249, 115, 22, 0.3)' : 'rgba(147, 51, 234, 0.4)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'blobFloat 7s ease-in-out infinite 2s',
          mixBlendMode: isDark ? 'screen' : 'multiply',
          transition: 'background-color 0.3s ease'
        }}
      />
    </div>
  )
}

export default AnimatedBackground