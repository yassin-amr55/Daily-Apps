import { apps } from '../data/apps'
import AppCard from './AppCard'
import './AppsShowcase.css'

function AppsShowcase() {
  return (
    <section id="apps" className="apps-showcase section">
      <div className="container">
        <h2 className="section-title">Our Apps</h2>
        <p className="section-subtitle">
          Simple, focused tools designed to make your daily life more productive and organized.
        </p>
        
        <div className="apps-grid">
          {apps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppsShowcase