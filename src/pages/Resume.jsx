import PageContainer from '../components/PageContainer/PageContainer'
import './Resume.css'

function Resume() {
  return (
    <PageContainer title="Olá!">
      <div className="resume-container">
        <div className="resume-intro">
          <h2>Eu sou Vinícius Kronemberger</h2>
          <p className="intro-text">
            Desenvolvedor Web com experiência em desenvolvimento de aplicações web modernas.
            Especializado em React, Node.js e tecnologias relacionadas.
          </p>
          <a href="https://www.linkedin.com/in/vinícius-kronemberger-335170209/" 
             className="portfolio-btn" 
             target="_blank" 
             rel="noopener noreferrer">
            Ver LinkedIn
          </a>
        </div>

        <div className="resume-content">
          <section className="resume-section">
            <h3>Experiência</h3>
            <div className="experience-item">
              <h4>Desenvolvedor Web</h4>
              <p className="company">Empresa Atual</p>
              <p className="period">2021 - Presente</p>
              <ul>
                <li>Desenvolvimento de aplicações web com React</li>
                <li>Implementação de APIs RESTful com Node.js</li>
                <li>Otimização de performance e SEO</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h3>Habilidades</h3>
            <div className="skills-grid">
              <div className="skill-item">React</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">HTML/CSS</div>
              <div className="skill-item">Git</div>
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  )
}

export default Resume 