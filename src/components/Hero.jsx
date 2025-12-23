import AnimatedBackground from './AnimatedBackground'
import './Hero.css'

// SVG Icons
const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const FreeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

function Hero() {
  const scrollToApps = () => {
    document.getElementById('apps').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Animated background only for hero */}
      <AnimatedBackground />
      
      {/* Gradient blend to next section */}
      <div className="gradient-blend" />
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Building simple apps for your{' '}
              <span className="highlight">daily life</span>
            </h1>
            
            <p className="hero-subtitle">
              Discover productivity tools that actually work. No bloat. No overwhelm. 
              Just what you need to get things done.
            </p>
            
            <div className="hero-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <CheckCircleIcon />
                </div>
                <span>Simple & focused design</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FreeIcon />
                </div>
                <span>No ads, completely free</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button onClick={scrollToApps} className="btn btn-primary">
                Browse Apps
                <ArrowRightIcon />
              </button>
              <a href="#about" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">Apps Available</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free</div>
            </div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">Ads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero