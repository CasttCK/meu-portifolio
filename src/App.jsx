import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Articles from './pages/Articles'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
            </>
          } />
          <Route element={<Layout />}>
            <Route path="/artigos" element={<Articles />} />
            <Route path="/curriculo" element={<Resume />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App
