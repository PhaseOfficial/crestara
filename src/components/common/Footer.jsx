import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3B010B] text-white py-16 px-6 md:px-12 border-t border-[#F2D9A0]/20 font-sans relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#75162D]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
        
        {/* Company Identity & Bio */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex flex-col select-none">
            <span className="text-3xl font-extrabold tracking-tight text-white lowercase leading-none font-display">
              crestara
              <span className="text-[#F2D9A0]">.</span>
            </span>
            <span className="text-[10px] text-[#F2D9A0] uppercase tracking-[0.25em] font-bold mt-1">
              Advisory Group
            </span>
          </div>
          
          <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-light">
            Premier multidisciplinary corporate advisory group delivering integrated Data Protection & Outsourced DPO services (POTRAZ compliant), Cybersecurity & Digital Forensics, and Financial Modelling & Business Advisory.
          </p>

          {/* Professional Credentials Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["FMVA Certified", "BIDA Analytics", "CFA Standards", "DPO Certified", "CompTIA Sec+", "EC-Council CEH Practical"].map((badge, i) => (
              <span key={i} className="text-[10px] font-semibold bg-white/10 text-[#F2D9A0] px-2.5 py-1 rounded-md border border-[#F2D9A0]/20">
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
            <div className="text-xs text-white/80">
              <span className="text-[#F2D9A0] font-semibold block">Executive Advisory Desk</span>
              <span>Available for Consultations</span>
            </div>
          </div>
        </div>

        {/* Quick Links - The 5 Pages */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-bold text-[#F2D9A0] uppercase tracking-widest border-b border-white/10 pb-2 font-display">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-xs text-white/75 font-light">
            <li><Link to="/" className="hover:text-[#F2D9A0] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#F2D9A0] transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#F2D9A0] transition-colors">Services</Link></li>
            <li><Link to="/careers" className="hover:text-[#F2D9A0] transition-colors font-medium text-[#F2D9A0]">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-[#F2D9A0] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal & Governance */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-bold text-[#F2D9A0] uppercase tracking-widest border-b border-white/10 pb-2 font-display">
            Governance
          </h3>
          <ul className="space-y-2.5 text-xs text-white/75 font-light">
            <li><Link to="/privacy-policy" className="hover:text-[#F2D9A0] transition-colors">Privacy Notice</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-[#F2D9A0] transition-colors">Terms of Use</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-[#F2D9A0] transition-colors">Cookie Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-[#F2D9A0] transition-colors">Services Disclaimer</Link></li>
          </ul>
        </div>

        {/* Official Email Directory & Contact */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-bold text-[#F2D9A0] uppercase tracking-widest border-b border-white/10 pb-2 font-display">
            Direct Email Directory
          </h3>
          <ul className="space-y-2 text-xs text-white/80 font-light">
            <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#F2D9A0]/30 transition-colors">
              <span className="text-white/60 text-[11px]">Executive Director:</span>
              <a href="mailto:director@crestaraadvisorygroup.com" className="text-[#F2E5C6] hover:text-[#F2D9A0] font-medium transition-colors lowercase font-mono">
                director@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#F2D9A0]/30 transition-colors">
              <span className="text-white/60 text-[11px]">Natasha Zama:</span>
              <a href="mailto:natashazama@crestaraadvisorygroup.com" className="text-[#F2E5C6] hover:text-[#F2D9A0] font-medium transition-colors lowercase font-mono">
                natashazama@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#F2D9A0]/30 transition-colors">
              <span className="text-white/60 text-[11px]">General Inquiries:</span>
              <a href="mailto:info@crestaraadvisorygroup.com" className="text-[#F2E5C6] hover:text-[#F2D9A0] font-medium transition-colors lowercase font-mono">
                info@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#F2D9A0]/30 transition-colors">
              <span className="text-white/60 text-[11px]">Compliance & Privacy:</span>
              <a href="mailto:compliance@crestaraadvisorygroup.com" className="text-[#F2E5C6] hover:text-[#F2D9A0] font-medium transition-colors lowercase font-mono">
                compliance@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#F2D9A0]/30 transition-colors">
              <span className="text-white/60 text-[11px]">Careers & Talent:</span>
              <a href="mailto:careers@crestaraadvisorygroup.com" className="text-[#F2E5C6] hover:text-[#F2D9A0] font-medium transition-colors lowercase font-mono">
                careers@crestaraadvisorygroup.com
              </a>
            </li>
            <li className="flex items-center justify-between pt-1">
              <span className="text-white/60 text-[11px]">Phone / WhatsApp:</span>
              <a href="tel:+263775040725" className="text-[#F2D9A0] font-bold hover:underline">
                +263 775 040 725
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Compliance Statement & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/55">
        <div className="space-y-1 text-center md:text-left">
          <p>© 2026 Crestara Advisory Group (crestaraadvisorygroup.com). All rights reserved.</p>
          <p className="text-[11px] text-white/40">
            Multidisciplinary Corporate Advisory — Data Protection, Cybersecurity & Financial Advisory Services.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-xs text-[#F2E5C6]/75">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Notice</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


