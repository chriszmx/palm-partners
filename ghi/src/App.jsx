import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import ContactUs from "./components/contact/ContactUs"
import OurTeam from './components/ourteam/OurTeam';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="our-team" element={<OurTeam />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
