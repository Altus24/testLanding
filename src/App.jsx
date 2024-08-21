
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import ContactSection from './components/ContactSection/ContactSection'
import CatalogSection from './components/CatalogoSection/CatalogSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path='/' element={<WelcomeSection />} />
      <Route path='/contact' element={<ContactSection />} />
      <Route path='/catalog' element={<CatalogSection />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
