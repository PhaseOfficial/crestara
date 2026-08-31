import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";
import IndustriesWeSupport from "../components/home/IndustriesWeSupport";
import Certification from "../components/home/Certification";
import HomeCTA from "../components/home/HomeCTA";

const WhoWeSupport = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="Who We Support | Industries & Client Sectors | Crestara Advisory Group"
        description="Crestara Advisory Group provides multidisciplinary advisory for Banking, Fintech, Telecoms, Healthcare, Retail, and NGOs across Zimbabwe and Southern Africa."
        keywords="Crestara clients, banking compliance Zimbabwe, fintech DPO Harare, healthcare data privacy, NGO compliance Zimbabwe"
        canonical="https://www.crestaraadvisorygroup.com/who-we-support"
      />

      {/* Hero Header */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#FAF7F2] via-[#F2E5C6] to-[#F2D9A0]/60 animate-hero-gradient text-[#3B010B] relative overflow-hidden text-center space-y-6 border-b border-[#F2D9A0]">
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-md shadow-sm font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">domain</span>
            Sector Coverage & Client Base
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#3B010B] font-display">
            Sectors We <span className="burgundy-gradient-text">Empower</span>
          </h1>

          <p className="text-base md:text-xl text-[#560B18]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Delivering synchronized Data Protection, Cybersecurity, and Financial Advisory across heavily regulated and fast-scaling industries in Southern Africa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link 
              to="/contact" 
              className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all shadow-xl font-semibold font-display border border-[#F2D9A0]/40"
            >
              Request Sector Consultation
            </Link>
            <a 
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20discuss%20advisory%20support%20for%20our%20sector."
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xs hover:bg-[#20ba5a] transition-all uppercase tracking-wider flex items-center gap-2 shadow-xl font-display"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Advisory (+263 775 040 725)</span>
            </a>
          </div>
        </div>
      </section>

      <IndustriesWeSupport />
      <Certification />
      <HomeCTA />
    </div>
  );
};

export default WhoWeSupport;

