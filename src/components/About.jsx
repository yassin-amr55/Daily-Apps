import './About.css'

// Enhanced SVG Icons
const TargetIcon = () => (
  <svg className="principle-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const RocketIcon = () => (
  <svg className="principle-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="principle-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const HeartIcon = () => (
  <svg className="principle-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const SparkleIcon = () => (
  <svg className="sparkle-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0l1.09 3.09L16 2l-1.09 3.09L18 6l-3.09 1.09L16 10l-3.09-1.09L12 12l-1.09-3.09L8 10l1.09-3.09L6 6l3.09-1.09L8 2l3.09 1.09L12 0z"/>
  </svg>
)

function About() {
  return (
    <section id="about" className="about section">
      <div className="about-background">
        <div className="floating-elements">
          <SparkleIcon />
          <SparkleIcon />
          <SparkleIcon />
          <SparkleIcon />
          <SparkleIcon />
        </div>
      </div>
      
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <div className="badge">About Daily Apps</div>
            <h2 className="about-title">
              Simple Apps for 
              <span className="gradient-text"> Complex Lives</span>
            </h2>
            <p className="about-lead">
              We believe productivity apps should help, not overwhelm. Each app is designed 
              with simplicity and effectiveness in mind, focusing on what actually matters 
              to get things done.
            </p>
          </div>

          <div className="about-story">
            <div className="story-card">
              <div className="story-content">
                <h3>Built by a Solo Developer</h3>
                <p>
                  Who understands what users actually need. No bloat, no unnecessary features, 
                  no subscriptions. Just simple, effective tools that work the way you think.
                </p>
                <div className="story-stats">
                  <div className="stat">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Apps Built</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">1</span>
                    <span className="stat-label">Month Each</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">0</span>
                    <span className="stat-label">Ads Ever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="principles-section">
            <h3 className="principles-title">Our Core Principles</h3>
            <div className="about-principles">
              <div className="principle focused">
                <div className="principle-icon">
                  <TargetIcon />
                </div>
                <div className="principle-content">
                  <h4>Focused</h4>
                  <p>Each app does one thing really well</p>
                </div>
              </div>
              
              <div className="principle simple">
                <div className="principle-icon">
                  <RocketIcon />
                </div>
                <div className="principle-content">
                  <h4>Simple</h4>
                  <p>No learning curve, just start using</p>
                </div>
              </div>
              
              <div className="principle private">
                <div className="principle-icon">
                  <ShieldIcon />
                </div>
                <div className="principle-content">
                  <h4>Private</h4>
                  <p>Your data stays on your device</p>
                </div>
              </div>
              
              <div className="principle free">
                <div className="principle-icon">
                  <HeartIcon />
                </div>
                <div className="principle-content">
                  <h4>Free</h4>
                  <p>No ads, no subscriptions, no catch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About