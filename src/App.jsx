import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Events from './components/Events';
import About from './components/About';

function App() {
  return (
    <main>
      <Router>
      <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
