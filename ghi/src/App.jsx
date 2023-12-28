import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import ContactUs from "./components/contact/ContactUs"
import OurTeam from './components/ourteam/OurTeam';
import Hurricane from './components/types-of-claims/Hurricane';
import Fire from './components/types-of-claims/Fire';
import Water from './components/types-of-claims/Water';
import Sinkhole from './components/types-of-claims/Sinkhole';
import Mold from './components/types-of-claims/Mold';
import Collapse from './components/types-of-claims/Collapse';
import Vandalism from './components/types-of-claims/Vandalism';
import LossOfBusiness from './components/types-of-claims/LossOfBusiness';
import WindTornado from './components/types-of-claims/WindTornado';
import HailWindDrivenRain from './components/types-of-claims/HailWindDrivenRain';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="types-of-claims/hurricane" element={<Hurricane />} />
        <Route path="types-of-claims/fire" element={<Fire />} />
        <Route path="types-of-claims/water" element={<Water />} />
        <Route path="types-of-claims/sinkhole" element={<Sinkhole />} />
        <Route path="types-of-claims/mold" element={<Mold />} />
        <Route path="types-of-claims/collapse" element={<Collapse />} />
        <Route path="types-of-claims/vandalism" element={<Vandalism />} />
        <Route path="types-of-claims/loss-of-business" element={<LossOfBusiness />} />
        <Route path="types-of-claims/wind-tornado" element={<WindTornado />} />
        <Route path="types-of-claims/hail-wind-driven-rain" element={<HailWindDrivenRain />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
