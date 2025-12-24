import { useNavigate } from 'react-router-dom'
import './AppCard.css'

// Simple Arrow Icon
const ArrowRightIcon = () => (
  <svg className="arrow-right-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

function AppCard({ app }) {
  const navigate = useNavigate()

  const handleCardClick = (e) => {
    // Prevent any default behavior and ensure the click is processed
    e.preventDefault()
    e.stopPropagation()
    
    // Immediately scroll to top when button is clicked
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    
    // Add a small delay to ensure touch events are properly handled on mobile
    setTimeout(() => {
      // Navigate to local routes using React Router only
      if (app.id === 'todo-master') {
        navigate('/ToDo-Master')
      } else if (app.id === 'secure-vault') {
        navigate('/SecureVault')
      } else {
        navigate(`/${app.name.replace(/\s+/g, '-')}`)
      }
    }, 100)
  }

  return (
    <div className="app-card card">
      <div className="app-header">
        <img 
          src={app.icon} 
          alt={`${app.name} icon`}
          className="app-icon"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="app-icon-placeholder" style={{ backgroundColor: app.color, display: 'none' }}>
          {app.name.charAt(0)}
        </div>
        <div className="app-info">
          <h3 className="app-name">{app.name}</h3>
          <p className="app-tagline">{app.tagline}</p>
          {app.status === 'live' && <span className="status-badge live">Live</span>}
          {app.status === 'coming-soon' && <span className="status-badge coming-soon">Coming Soon</span>}
        </div>
      </div>
      
      <p className="app-description">{app.description}</p>
      
      <div className="app-features">
        {app.features.map((feature, index) => (
          <div key={index} className="feature">
            {feature}
          </div>
        ))}
      </div>
      
      <div className="app-actions">
        <button 
          onClick={handleCardClick}
          onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
          onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
          className="btn-view"
          aria-label={`View ${app.name} details`}
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation'
          }}
        >
          <span className="btn-text">View</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  )
}

export default AppCard