import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import ShieldIcon from "./ShieldIcon";

const CrestaraTextLogo = ({ isDark = false }) => (
  <div className="flex items-center gap-2 sm:gap-2.5 select-none group">
    <ShieldIcon
      className={`h-7 sm:h-8.5 w-auto transition-all duration-300 group-hover:scale-105 flex-shrink-0 ${
        isDark
          ? "text-[#F2D9A0] group-hover:text-white"
          : "text-[#3B010B] group-hover:text-[#75162D]"
      }`}
    />
    <div className="flex flex-col">
      <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight lowercase leading-none font-display ${
        isDark ? "text-white" : "text-[#3B010B]"
      }`}>
        crestara
        <span className="text-[#75162D] group-hover:text-[#F2D9A0] transition-colors">.</span>
      </span>
      <span className={`text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mt-0.5 ${
        isDark ? "text-[#F2D9A0]" : "text-[#75162D]"
      }`}>
        Advisory Group
      </span>
    </div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) => 
    `font-semibold text-xs xl:text-sm px-3.5 py-2 rounded-xl transition-all duration-300 relative ${
      isActive 
        ? "text-[#75162D] bg-[#F2D9A0]/40 font-bold shadow-xs border border-[#75162D]/20" 
        : "text-[#3B010B] hover:text-[#75162D] hover:bg-[#F2E5C6]/40"
    }`;

  const mobileLinkClasses = ({ isActive }) => 
    `text-sm font-semibold py-3.5 px-4 rounded-xl border border-transparent w-full text-left flex justify-between items-center transition-all ${
      isActive 
        ? "text-[#75162D] bg-[#F2D9A0]/50 border-[#75162D]/30 font-bold shadow-xs" 
        : "text-[#3B010B] hover:text-[#75162D] hover:bg-[#F2E5C6]/40"
    }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm transition-all duration-300">
      {/* Top Global Trust & Contact Banner - Sand Gold & Champagne Beige with Burgundy Accents */}
      <div className="bg-gradient-to-r from-[#F2E5C6] via-[#F2D9A0] to-[#F2E5C6] text-[#3B010B] py-1.5 md:py-2 px-4 sm:px-6 md:px-12 flex justify-between items-center text-[11px] sm:text-xs tracking-wider border-b border-[#F2D9A0]">
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <span className="flex items-center gap-1.5 font-semibold truncate text-[#3B010B]">
            <span className="material-symbols-outlined text-xs text-[#75162D] flex-shrink-0 font-bold">shield</span>
            <span className="hidden sm:inline">Data Protection • Cybersecurity • Financial Advisory</span>
            <span className="sm:hidden">Data • Cyber • Finance</span>
          </span>
          <span className="hidden lg:inline text-[#75162D]/30">|</span>
          <span className="hidden lg:flex items-center gap-1 text-[#560B18] text-[11px] font-medium">
            <span className="material-symbols-outlined text-xs text-[#75162D]">verified</span>
            <span>POTRAZ Compliant & Certified Practice</span>
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
          <a
            href="mailto:info@crestaraadvisorygroup.com"
            className="hidden md:flex items-center gap-1 text-[#3B010B] hover:text-[#75162D] transition-colors lowercase font-mono font-medium"
          >
            <span className="material-symbols-outlined text-xs text-[#75162D]">mail</span>
            <span>info@crestaraadvisorygroup.com</span>
          </a>
          <span className="hidden md:inline text-[#75162D]/30">|</span>
          <a
            href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 text-[#0F5132] hover:text-[#75162D] transition-colors font-bold whitespace-nowrap"
          >
            <FaWhatsapp className="text-xs sm:text-sm text-[#25D366]" />
            <span className="hidden xs:inline">WhatsApp Desk (+263 775 040 725)</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
          <span className="text-[#75162D]/30">|</span>
          <a
            href="https://www.linkedin.com/company/crestara-advisory-group/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 text-[#0A66C2] hover:text-[#75162D] transition-colors font-bold whitespace-nowrap"
            title="Crestara Advisory Group on LinkedIn"
          >
            <FaLinkedinIn className="text-xs sm:text-sm text-[#0A66C2]" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Main Navbar - Clean Text Logo 'crestara' & Primary Navigation */}
      <div className="bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#F2D9A0] flex justify-between items-center px-4 sm:px-6 md:px-12 py-2.5 sm:py-3.5">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-[#3B010B] p-2 hover:bg-[#F2E5C6]/50 rounded-xl transition-colors flex-shrink-0"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link to="/" className="min-w-0" onClick={() => setIsMenuOpen(false)}>
            <CrestaraTextLogo />
          </Link>
        </div>
        
        {/* Desktop Navigation - 5 Only Pages */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About Us
          </NavLink>
          <NavLink to="/services" className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/careers" className={linkClasses}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact Us
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link 
            to="/contact" 
            className="bg-[#75162D] text-[#F2E5C6] font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all flex items-center gap-1.5 shadow-md border border-[#F2D9A0]/50 font-display"
          >
            <span>Request Proposal</span>
            <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Menu - Sand Gold & Champagne Theme */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-[#3B010B]/50 backdrop-blur-sm z-[-1] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#FAF7F2] bg-texture-grain text-[#3B010B] shadow-2xl z-[100] lg:hidden flex flex-col p-6 overflow-y-auto border-r border-[#F2D9A0]"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#F2D9A0]">
                <CrestaraTextLogo isDark={false} />
                <button onClick={toggleMenu} className="text-[#75162D] hover:text-[#3B010B] p-1">
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>

              <nav className="flex flex-col flex-1 gap-1">
                <NavLink to="/" className={mobileLinkClasses} onClick={toggleMenu} end>
                  <span>Home</span>
                  <span className="material-symbols-outlined text-sm text-[#75162D]">chevron_right</span>
                </NavLink>
                <NavLink to="/about" className={mobileLinkClasses} onClick={toggleMenu}>
                  <span>About Us</span>
                  <span className="material-symbols-outlined text-sm text-[#75162D]">chevron_right</span>
                </NavLink>
                <NavLink to="/services" className={mobileLinkClasses} onClick={toggleMenu}>
                  <span>Services & Cybersecurity</span>
                  <span className="material-symbols-outlined text-sm text-[#75162D]">chevron_right</span>
                </NavLink>
                <NavLink to="/careers" className={mobileLinkClasses} onClick={toggleMenu}>
                  <span>Careers</span>
                  <span className="material-symbols-outlined text-sm text-[#75162D]">chevron_right</span>
                </NavLink>
                <NavLink to="/contact" className={mobileLinkClasses} onClick={toggleMenu}>
                  <span>Contact Us</span>
                  <span className="material-symbols-outlined text-sm text-[#75162D]">chevron_right</span>
                </NavLink>
              </nav>

              <div className="mt-auto space-y-3 pt-6 border-t border-[#F2D9A0]">
                <a 
                  href="mailto:info@crestaraadvisorygroup.com"
                  className="flex items-center justify-center gap-2 bg-[#F2E5C6] text-[#3B010B] p-3 rounded-xl font-medium text-xs hover:bg-[#F2D9A0] transition-all lowercase font-mono border border-[#F2D9A0]"
                >
                  <span className="material-symbols-outlined text-sm text-[#75162D]">mail</span>
                  <span>info@crestaraadvisorygroup.com</span>
                </a>
                <a 
                  href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2 bg-white text-[#3B010B] border-2 border-[#25D366]/40 p-3.5 rounded-xl font-bold uppercase text-center text-xs shadow-sm hover:border-[#25D366] transition-all font-display"
                >
                  <FaWhatsapp className="text-lg text-[#25D366]" />
                  WHATSAPP ADVISORY DESK
                </a>
                <a 
                  href="https://www.linkedin.com/company/crestara-advisory-group/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2 bg-white text-[#3B010B] border-2 border-[#0A66C2]/40 p-3.5 rounded-xl font-bold uppercase text-center text-xs shadow-sm hover:border-[#0A66C2] transition-all font-display"
                >
                  <FaLinkedinIn className="text-lg text-[#0A66C2]" />
                  LINKEDIN COMPANY PAGE
                </a>
                <Link 
                  to="/contact" 
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2 bg-[#75162D] text-[#F2E5C6] p-3.5 rounded-xl font-bold uppercase text-center text-xs shadow-lg hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all font-display"
                >
                  <span className="material-symbols-outlined text-sm">request_quote</span>
                  REQUEST PROPOSAL
                </Link>
                <p className="text-center text-[10px] text-[#75162D]/70 font-medium">Southern Africa & Global Advisory Hubs</p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

