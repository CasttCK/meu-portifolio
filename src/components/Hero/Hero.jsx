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
            <h2>A Bit About Me</h2>
            <p className="bio">
              Desenvolvedor Web com experiência em desenvolvimento de aplicações web modernas.
              Especializado em React, Node.js e tecnologias relacionadas.
            </p>
            <div className="profile-nav">
              <Link to="/curriculo" className="nav-item active">Resume</Link>
              <Link to="/projetos" className="nav-item">Projects</Link>
              <Link to="/artigos" className="nav-item">Articles</Link>
              <Link to="/sobre" className="nav-item">Personal</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 