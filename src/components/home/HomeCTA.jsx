import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const HomeCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF7F2] font-sans border-b border-[#F2D9A0]">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#F2E5C6] via-white to-[#F2D9A0]/70 rounded-3xl p-10 md:p-20 text-center text-[#3B010B] relative overflow-hidden shadow-2xl border-2 border-[#F2D9A0]">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <span className="material-symbols-outlined text-[400px] text-[#75162D]">verified_user</span>
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/60 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-md shadow-sm font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">handshake</span>
            Strategic Multidisciplinary Partnership
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-[#3B010B] font-display">
            Ready to Secure <span className="burgundy-gradient-text">Elite Privacy Governance, Cyber Defense & Financial Intelligence?</span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with our certified advisory team today. From POTRAZ-compliant DPO retainers and authorized penetration testing to FMVA® financial modelling, Crestara Advisory Group safeguards your enterprise.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-[#3B010B] border-2 border-[#25D366]/50 px-8 py-4 rounded-xl font-bold text-sm hover:bg-white hover:border-[#25D366] hover:shadow-xl transition-all shadow-md flex items-center justify-center gap-2.5 uppercase tracking-wider font-display"
            >
              <FaWhatsapp className="text-[#25D366] text-2xl flex-shrink-0" />
              <span>WHATSAPP DESK (+263 775 040 725)</span>
            </a>
            <Link to="/contact" className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all shadow-xl flex items-center justify-center uppercase tracking-wider font-semibold font-display border border-[#F2D9A0]/30">
              REQUEST A QUOTE
            </Link>
            <Link to="/services" className="border-2 border-[#F2D9A0] bg-white text-[#3B010B] px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#F2E5C6] hover:border-[#75162D] transition-all flex items-center justify-center uppercase tracking-wider backdrop-blur-sm font-display shadow-sm">
              VIEW PACKAGES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;

