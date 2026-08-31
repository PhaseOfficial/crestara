import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const HomeCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF7F2] font-sans">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#560B18] via-[#3B010B] to-[#560B18] rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-[#F2D9A0]/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <span className="material-symbols-outlined text-[400px] text-[#F2D9A0]">verified_user</span>
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">handshake</span>
            Strategic Multidisciplinary Partnership
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-white font-display">
            Ready to Secure <span className="gold-gradient-text">Elite Privacy Governance, Cyber Defense & Financial Intelligence?</span>
          </h2>

          <p className="text-base md:text-lg text-[#F2E5C6]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with our certified advisory team today. From POTRAZ-compliant DPO retainers and authorized penetration testing to FMVA® financial modelling, Crestara Advisory Group safeguards your enterprise.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WHATSAPP DESK (+263 775 040 725)</span>
            </a>
            <Link to="/contact" className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#F2E5C6] transition-all shadow-xl flex items-center justify-center uppercase tracking-wider font-semibold">
              REQUEST A QUOTE
            </Link>
            <Link to="/services" className="border border-[#F2D9A0]/40 text-[#F2E5C6] px-8 py-4 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center uppercase tracking-wider backdrop-blur-sm">
              VIEW PACKAGES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;

