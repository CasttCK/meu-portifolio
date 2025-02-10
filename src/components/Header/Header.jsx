import { Link } from 'react-router-dom'
import { FaSearch, FaBars } from 'react-icons/fa'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">Vinicius Kronemberger</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/artigos">Artigos</Link></li>
          <li><Link to="/curriculo">Currículo</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/sobre">Sobre Mim</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          {/* <li className="search-icon"><FaSearch /></li>
          <li className="menu-icon"><FaBars /></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header 