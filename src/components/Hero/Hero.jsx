import './Hero.css'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/assets/images/profile-image.jpeg" alt="Vinicius Kronemberger" />
          </div>
          <div className="profile-info">
            <h1>Vinicius Kronemberger</h1>
            <h2><FormattedMessage id="hero.about" /></h2>
            <p className="bio">
              <FormattedMessage id="hero.bio" />
            </p>
            <div className="profile-nav">
              <Link to="/sobre" className="nav-item active">
                <FormattedMessage id="hero.readMore" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 