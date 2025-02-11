import './Hero.css'
import { Link } from 'react-router-dom'

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
            <h2>Um pouco sobre mim</h2>
            <p className="bio">
              Sou um cientista da computação, focado em Backend e desenvolvimento de IA, como aplicações de visão computacional,
              e deep learning.
              Especializado em Java e Python.
            </p>
            <div className="profile-nav">
              <Link to="/sobre" className="nav-item active">Leia mais sobre mim</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 