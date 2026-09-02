import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CookieConsent from "./components/Cookies";
import WhatsAppFloatingButton from "./components/common/WhatsAppFloatingButton";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#FAF7F2] min-h-screen selection:bg-[#75162D] selection:text-[#F2E5C6] relative overflow-x-hidden">
      {/* Global Atmospheric Background Textures & Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Fine Noise Paper Grain Overlay */}
        <div className="absolute inset-0 bg-texture-grain opacity-90" />
        {/* Subtle Architectural Grid Mesh */}
        <div className="absolute inset-0 bg-texture-grid opacity-70" />
        {/* Ambient Top Champagne Gold Glow */}
        <div className="absolute -top-24 -right-24 w-[650px] h-[650px] bg-gradient-to-br from-[#F2D9A0]/35 via-[#F2E5C6]/20 to-transparent rounded-full blur-3xl" />
        {/* Ambient Left Burgundy Depth Warmth */}
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#75162D]/10 via-[#560B18]/05 to-transparent rounded-full blur-3xl" />
        {/* Ambient Lower Sand Gold Orb */}
        <div className="absolute bottom-20 right-5 w-[600px] h-[600px] bg-[#F2D9A0]/25 rounded-full blur-3xl" />
      </div>

      <Header />
      
      <main className="min-h-screen relative z-10">
        <Routes location={location} key={location.pathname}>
          {/* Main 5 Pages Only */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Collection />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Legal & Governance Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Seamless Redirects for Previous Sub-pages to /services */}
          <Route path="/cybersecurity" element={<Navigate to="/services" replace />} />
          <Route path="/data-protection" element={<Navigate to="/services" replace />} />
          <Route path="/financial-advisory" element={<Navigate to="/services" replace />} />
          <Route path="/business" element={<Navigate to="/services" replace />} />
          <Route path="/who-we-support" element={<Navigate to="/about" replace />} />
          <Route path="/insights" element={<Navigate to="/services" replace />} />
          <Route path="/healthcare-expertise" element={<Navigate to="/services" replace />} />
          <Route path="/homecare" element={<Navigate to="/services" replace />} />
          
          <Route
            path="*"
            element={
              <div className="text-center mt-40 py-20 text-2xl font-bold font-display text-[#3B010B] uppercase tracking-widest">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
      <CookieConsent />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;


