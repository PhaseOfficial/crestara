import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F2E5C6]/90 via-[#FAF7F2] to-[#F2D9A0] text-[#3B010B] py-16 px-6 md:px-12 border-t-2 border-[#F2D9A0] font-sans relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F2D9A0]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
        
        {/* Company Identity & Bio */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex flex-col select-none">
            <span className="text-3xl font-extrabold tracking-tight text-[#3B010B] lowercase leading-none font-display">
              crestara
              <span className="text-[#75162D]">.</span>
            </span>
            <span className="text-[10px] text-[#75162D] uppercase tracking-[0.25em] font-bold mt-1 font-display">
              Advisory Group
            </span>
          </div>
          
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-light">
            Premier multidisciplinary corporate advisory group delivering integrated Data Protection & Outsourced DPO services (POTRAZ compliant), Cybersecurity & Digital Forensics, and Financial Modelling & Business Advisory.
          </p>

          {/* Professional Credentials Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["FMVA Certified", "BIDA Analytics", "CFA Standards", "DPO Certified", "CompTIA Sec+", "EC-Council CEH Practical"].map((badge, i) => (
              <span key={i} className="text-[10px] font-semibold bg-[#F2D9A0]/60 text-[#75162D] px-2.5 py-1 rounded-md border border-[#75162D]/20 shadow-sm">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
              title="Chat on WhatsApp (+263 775 040 725)"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <div className="text-xs text-[#3B010B]">
              <span className="text-[#75162D] font-bold block font-display">Executive Advisory Desk</span>
              <span className="text-gray-600">Available for Consultations</span>
            </div>
          </div>
        </div>

        {/* Quick Links - The 5 Pages */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-bold text-[#75162D] uppercase tracking-widest border-b border-[#F2D9A0] pb-2 font-display">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-xs text-gray-700 font-light">
            <li><Link to="/" className="hover:text-[#75162D] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#75162D] transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#75162D] transition-colors">Services</Link></li>
            <li><Link to="/careers" className="hover:text-[#75162D] transition-colors font-medium text-[#75162D]">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-[#75162D] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal & Governance */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-bold text-[#75162D] uppercase tracking-widest border-b border-[#F2D9A0] pb-2 font-display">
            Governance
          </h3>
          <ul className="space-y-2.5 text-xs text-gray-700 font-light">
            <li><Link to="/privacy-policy" className="hover:text-[#75162D] transition-colors">Privacy Notice</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-[#75162D] transition-colors">Terms of Use</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-[#75162D] transition-colors">Cookie Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-[#75162D] transition-colors">Services Disclaimer</Link></li>
          </ul>
        </div>

        {/* Official Email Directory & Contact */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-bold text-[#75162D] uppercase tracking-widest border-b border-[#F2D9A0] pb-2 font-display">
            Direct Email Directory
          </h3>
          <ul className="space-y-2 text-xs text-gray-800 font-light">
            <li className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#F2D9A0] hover:border-[#75162D] transition-colors shadow-sm">
              <span className="text-gray-500 text-[11px]">Executive Advisory:</span>
              <a href="mailto:director@crestaraadvisorygroup.com" className="text-[#75162D] hover:text-[#3B010B] font-semibold transition-colors lowercase font-mono">
                director@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#F2D9A0] hover:border-[#75162D] transition-colors shadow-sm">
              <span className="text-gray-500 text-[11px]">General Inquiries:</span>
              <a href="mailto:info@crestaraadvisorygroup.com" className="text-[#75162D] hover:text-[#3B010B] font-semibold transition-colors lowercase font-mono">
                info@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#F2D9A0] hover:border-[#75162D] transition-colors shadow-sm">
              <span className="text-gray-500 text-[11px]">Compliance & Privacy:</span>
              <a href="mailto:compliance@crestaraadvisorygroup.com" className="text-[#75162D] hover:text-[#3B010B] font-semibold transition-colors lowercase font-mono">
                compliance@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#F2D9A0] hover:border-[#75162D] transition-colors shadow-sm">
              <span className="text-gray-500 text-[11px]">Careers & Talent:</span>
              <a href="mailto:careers@crestaraadvisorygroup.com" className="text-[#75162D] hover:text-[#3B010B] font-semibold transition-colors lowercase font-mono">
                careers@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between pt-1">
              <span className="text-gray-600 text-[11px] font-medium">Phone / WhatsApp:</span>
              <a href="tel:+263775040725" className="text-[#75162D] font-bold hover:underline font-mono">
                +263 775 040 725
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Institutional Registration & Regulatory Alignment Bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#F2D9A0] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2.5">
            <img src="/images/potraz-logo-large.png" alt="POTRAZ" className="h-6 object-contain" />
            <span className="text-[11px] text-gray-700 font-medium">POTRAZ Regulated Data Protection Practice</span>
          </div>
          <div className="h-4 w-px bg-[#F2D9A0] hidden sm:block"></div>
          <a
            href="https://cipz.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            title="Verify CIPZ Professional Registration (Verification Number: [PENDING])"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <img src="/images/cipz-logo.png" alt="CIPZ" className="h-6 object-contain" />
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-gray-700 font-medium">CIPZ Registered Professional Body</span>
              <span className="material-symbols-outlined text-[12px] text-[#75162D]">open_in_new</span>
            </div>
          </a>
        </div>
        <div className="text-[11px] text-gray-500 font-light">
          Official Practice Registration • Southern Africa
        </div>
      </div>

      {/* Bottom Bar with Compliance Statement & Copyright */}
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-[#F2D9A0]/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <div className="text-center md:text-left">
          <p className="font-semibold text-[#3B010B]">© 2026 Crestara Advisory Group. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-xs text-[#75162D] font-medium">
          <Link to="/privacy-policy" className="hover:text-[#3B010B] transition-colors">Privacy Notice</Link>
          <Link to="/terms-of-service" className="hover:text-[#3B010B] transition-colors">Terms of Use</Link>
          <Link to="/cookie-policy" className="hover:text-[#3B010B] transition-colors">Cookie Policy</Link>
          <Link to="/disclaimer" className="hover:text-[#3B010B] transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


