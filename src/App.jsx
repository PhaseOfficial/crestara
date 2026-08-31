import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import DataProtection from "./pages/DataProtection";
import Cybersecurity from "./pages/Cybersecurity";
import FinancialAdvisory from "./pages/FinancialAdvisory";
import WhoWeSupport from "./pages/WhoWeSupport";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Insights from "./pages/Insights";
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
    <div className="bg-[#FAF7F2] min-h-screen selection:bg-[#75162D] selection:text-[#F2E5C6] relative">
      <Header />
      
      <main className="min-h-screen relative z-10">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Collection />} />
          
          {/* Dedicated Practice Pillar Pages */}
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/financial-advisory" element={<FinancialAdvisory />} />
          <Route path="/business" element={<FinancialAdvisory />} />
          <Route path="/healthcare-expertise" element={<DataProtection />} />
          <Route path="/homecare" element={<DataProtection />} />

          {/* Sector, Careers & Insights */}
          <Route path="/who-we-support" element={<WhoWeSupport />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Legal & Compliance Pack */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
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


