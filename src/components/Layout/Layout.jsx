import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 