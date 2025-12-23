import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/daily-apps.png" alt="Daily Apps" className="footer-logo-img" />
              <span className="footer-logo-text">Daily Apps</span>
            </div>
            <p className="footer-description">
              Building simple apps for your daily life
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Apps</h4>
              <a href="https://t-o-d-o-master.netlify.app" target="_blank" rel="noopener noreferrer">
                To-Do Master
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                SecureVault
              </a>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="https://twitter.com/daily_app_s" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://instagram.com/dailyapps" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="mailto:todomaster.todo@gmail.com">
                Email
              </a>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Daily Apps. All rights reserved.</p>
          <p>
            Made with ❤️ by a{' '}
            <a 
              href="https://yassinamr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              solo developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer