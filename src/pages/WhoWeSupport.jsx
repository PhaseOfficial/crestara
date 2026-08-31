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
      <section className="py-20 px-6 md:px-12 bg-[#3B010B] animate-hero-gradient text-white relative overflow-hidden text-center space-y-6 border-b border-[#F2D9A0]/20">
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">domain</span>
            Sector Coverage & Client Base
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-display">
            Sectors We <span className="gold-gradient-text">Empower</span>
          </h1>

          <p className="text-base md:text-xl text-[#F2E5C6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Delivering synchronized Data Protection, Cybersecurity, and Financial Advisory across heavily regulated and fast-scaling industries in Southern Africa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link 
              to="/contact"
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5C6] transition-all shadow-xl font-semibold"
            >
              Request Sector Consultation
            </Link>
            <a 
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20discuss%20advisory%20support%20for%20our%20sector."
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xs hover:bg-[#20ba5a] transition-all uppercase tracking-wider flex items-center gap-2 shadow-xl"
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

