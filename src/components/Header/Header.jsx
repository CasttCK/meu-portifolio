import { Link } from 'react-router-dom'
import { FaSearch, FaBars, FaGlobe } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { useLanguage } from '../../contexts/LanguageContext'
import './Header.css'

function Header() {
  const { locale, toggleLanguage } = useLanguage()

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">Vinicius Kronemberger</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/artigos"><FormattedMessage id="nav.articles" /></Link></li>
          <li><Link to="/curriculo"><FormattedMessage id="nav.resume" /></Link></li>
          <li><Link to="/projetos"><FormattedMessage id="nav.projects" /></Link></li>
          <li><Link to="/sobre"><FormattedMessage id="nav.about" /></Link></li>
          <li><Link to="/contato"><FormattedMessage id="nav.contact" /></Link></li>
          <li className="language-switch" onClick={toggleLanguage}>
            <FaGlobe />
            <span>{locale === 'pt-BR' ? 'EN' : 'PT'}</span>
          </li>
          {/* <li className="search-icon"><FaSearch /></li>
          <li className="menu-icon"><FaBars /></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header 