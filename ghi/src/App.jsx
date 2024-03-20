import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import ContactUs from "./components/contact/ContactUs";
import OurTeam from "./components/ourteam/OurTeam";
import Hurricane from "./components/types-of-claims/Hurricane";
import Fire from "./components/types-of-claims/Fire";
import Water from "./components/types-of-claims/Water";
import Sinkhole from "./components/types-of-claims/Sinkhole";
import Mold from "./components/types-of-claims/Mold";
import Collapse from "./components/types-of-claims/Collapse";
import Vandalism from "./components/types-of-claims/Vandalism";
import LossOfBusiness from "./components/types-of-claims/LossOfBusiness";
import WindTornado from "./components/types-of-claims/WindTornado";
import HailWindDrivenRain from "./components/types-of-claims/HailWindDrivenRain";
import ComprehensiveClaimsManagement from "./components/services/ComprehensiveClaimsManagement";
import Matterport from "./components/services/Matterport";
import SketchAndHomeDimensions from "./components/services/SketchAndHomeDimensions";
import PhotographicDocumentation from "./components/services/PhotographicDocumentation";
import ThermalImaging from "./components/services/ThermalImaging";
import MoistureReading from "./components/services/MoistureReading";
import DetailedRoofInspections from "./components/services/DetailedRoofInspections";
import DroneInspection from "./components/services/DroneInspection";
import InDepthPolicyReview from "./components/services/InDepthPolicyReview";
import CallService from "./components/services/CallService";
import PersonalClaimsSpecialist from "./components/services/PersonalClaimsSpecialist";
import OnlinePortalAccess from "./components/services/OnlinePortalAccess";
import Appraisals from "./components/services/Appraisals";
import Mediation from "./components/services/Mediation";
import Privacy from "./components/legal/Privacy";
import Terms from "./components/legal/Terms";
import Claim from "./components/legal/Claim";
import ChatBot from "./components/chatbot/ChatBot";

function App() {
    return (
        <Router>
            <Navbar />
            <div
                className="z-1000"
                style={{
                    position: "fixed",
                    zIndex: 1000,
                    bottom: "20px",
                    right: "20px",
                }}
            >
                <ChatBot />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/our-team" element={<OurTeam />} />

                <Route
                    path="types-of-claims/hurricane"
                    element={<Hurricane />}
                />
                <Route path="types-of-claims/fire" element={<Fire />} />
                <Route path="types-of-claims/water" element={<Water />} />
                <Route path="types-of-claims/sinkhole" element={<Sinkhole />} />
                <Route path="types-of-claims/mold" element={<Mold />} />
                <Route path="types-of-claims/collapse" element={<Collapse />} />
                <Route
                    path="types-of-claims/vandalism"
                    element={<Vandalism />}
                />
                <Route
                    path="types-of-claims/loss-of-business"
                    element={<LossOfBusiness />}
                />
                <Route
                    path="types-of-claims/wind-tornado"
                    element={<WindTornado />}
                />
                <Route
                    path="types-of-claims/hail-wind-driven-rain"
                    element={<HailWindDrivenRain />}
                />

                <Route
                    path="services/comprehensive-claims-management"
                    element={<ComprehensiveClaimsManagement />}
                />
                <Route path="services/matterport" element={<Matterport />} />
                <Route
                    path="services/sketch-and-home-dimensions"
                    element={<SketchAndHomeDimensions />}
                />
                <Route
                    path="services/photographic-documentation"
                    element={<PhotographicDocumentation />}
                />
                <Route
                    path="services/thermal-imaging"
                    element={<ThermalImaging />}
                />
                <Route
                    path="services/moisture-reading"
                    element={<MoistureReading />}
                />
                <Route
                    path="services/detailed-roof-inspections"
                    element={<DetailedRoofInspections />}
                />
                <Route
                    path="services/drone-inspection"
                    element={<DroneInspection />}
                />
                <Route
                    path="services/in-depth-policy-review"
                    element={<InDepthPolicyReview />}
                />
                <Route path="services/call-service" element={<CallService />} />
                <Route
                    path="services/personal-claims-specialist"
                    element={<PersonalClaimsSpecialist />}
                />
                <Route
                    path="services/online-portal-access"
                    element={<OnlinePortalAccess />}
                />
                <Route path="services/appraisals" element={<Appraisals />} />
                <Route path="services/mediation" element={<Mediation />} />

                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="claim" element={<Claim />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
