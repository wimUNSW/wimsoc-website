import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Events from './components/Events';
import Team from './components/Team';
import Footer from './components/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // jump immediately to top
  }, [pathname]);

  return null;
}

function App() {
  return (
    <main>
      <Router>
        <ScrollToTop />
      <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
