import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";

const Hero = ({ fadeInUp, staggerContainer, floatAnimation }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-24 px-6 md:px-12 overflow-hidden text-[#3B010B] border-b border-[#F2D9A0]">
      {/* Background Architectural Photo Layer & Moving Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="/images/hero-architecture.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Animated Moving Champagne/Gold Gradient Overlay */}
        <div className="absolute inset-0 animate-moving-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/75 via-transparent to-[#F2E5C6]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF7F2]/30 to-[#FAF7F2]" />
      </div>

      {/* Texture Grain & Grid Atmospheric Overlays */}
      <div className="absolute inset-0 bg-texture-grain opacity-80 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-texture-grid opacity-50 pointer-events-none z-[1]" />

      {/* Subtle Warm Amber & Champagne Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F2D9A0]/30 rounded-full blur-3xl pointer-events-none z-[1]"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#F2E5C6]/50 rounded-full blur-3xl pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Hero Copy & Value Proposition */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          {/* Badge - Sand Gold & Burgundy */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/60 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-md shadow-sm">
            <span className="material-symbols-outlined text-sm text-[#75162D] font-bold">verified_user</span>
            Multidisciplinary Corporate Advisory
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#3B010B] leading-[1.12] font-display">
            Data Protection. <br />
            Cybersecurity. <br />
            <span className="burgundy-gradient-text">Financial Advisory.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-[#560B18]/90 max-w-3xl leading-relaxed mx-auto lg:mx-0 font-light">
            Crestara Advisory Group is an elite multidisciplinary firm providing outsourced DPO governance (POTRAZ compliant), offensive and defensive cybersecurity & digital forensics, and quantitative financial modelling & business intelligence.
          </motion.p>

          {/* Action CTAs - Burgundy Primary & Sand Gold Secondary */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
            <Link 
              to="/contact" 
              className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-sm shadow-xl hover:bg-[#3B010B] hover:text-[#F2D9A0] hover:-translate-y-0.5 transition-all flex items-center gap-3 uppercase tracking-wider border border-[#F2D9A0]/50 font-display"
            >
              <span>REQUEST A QUOTATION</span>
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </Link>
            <a 
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#F2D9A0] bg-white/95 text-[#3B010B] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#F2E5C6] hover:border-[#75162D] hover:-translate-y-0.5 transition-all flex items-center gap-3 shadow-md font-display"
            >
              <FaWhatsapp className="text-[#25D366] text-lg" />
              <span>WHATSAPP DESK</span>
            </a>
          </motion.div>

          {/* Credential Metrics */}
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-[#F2D9A0] text-left">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl text-[#75162D] font-extrabold block font-display">DPO</span>
              <span className="text-[11px] sm:text-xs text-[#560B18]/80 uppercase tracking-wider font-medium">Outsourced & POTRAZ</span>
            </div>
            <div className="space-y-1 border-l border-[#F2D9A0] pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl text-[#3B010B] font-extrabold block font-display">CEH / Sec+</span>
              <span className="text-[11px] sm:text-xs text-[#560B18]/80 uppercase tracking-wider font-medium">Offensive Security</span>
            </div>
            <div className="space-y-1 border-l border-[#F2D9A0] pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl text-[#75162D] font-extrabold block font-display">FMVA / CFA</span>
              <span className="text-[11px] sm:text-xs text-[#560B18]/80 uppercase tracking-wider font-medium">Financial Analytics</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual Card with Sand Gold / Champagne Theme & Burgundy Accents */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-2xl bg-gradient-to-b from-white/95 via-[#FAF7F2]/95 to-[#F2E5C6]/70 backdrop-blur-md p-6 sm:p-8 space-y-5">
            
            {/* Top Corporate Visual Header */}
            <div className="relative h-28 sm:h-32 rounded-2xl overflow-hidden border border-[#F2D9A0] shadow-sm">
              <img
                src="/images/corporate-resilience.jpg"
                alt="Crestara Advisory Group Corporate Resilience Architecture"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B010B]/85 via-[#75162D]/65 to-transparent flex items-center p-4 sm:p-5">
                <div className="space-y-1 text-white">
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#F2D9A0] bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-[#F2D9A0]/30 font-display">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Multidisciplinary Advisory
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold font-display leading-tight text-white">
                    Corporate Resilience Architecture
                  </h3>
                  <p className="text-[11px] text-[#F2E5C6]/85 font-light">
                    Harare • Southern Africa • Global Standards
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-[#F2D9A0] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#75162D] text-[#F2D9A0] flex items-center justify-center font-bold shadow-md">
                  <span className="material-symbols-outlined text-lg">verified_user</span>
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#3B010B] font-display">Integrated Retainers</h2>
                  <p className="text-[10px] text-[#75162D] font-semibold">Unified Advisory Governance</p>
                </div>
              </div>
              <span className="text-[10px] bg-[#F2D9A0] text-[#75162D] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-widest border border-[#75162D]/30 font-display">
                3 Pillars
              </span>
            </div>

            {/* 3 Core Interactive Pillar Cards - Sand Gold & Champagne Surface with Burgundy Accents */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/95 border border-[#F2D9A0] hover:border-[#75162D] hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="material-symbols-outlined text-xl">privacy_tip</span>
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-[#3B010B] font-display">Data Protection & DPO</h3>
                    <span className="text-[10px] font-bold text-[#75162D] uppercase tracking-wider bg-[#F2E5C6] px-2 py-0.5 rounded border border-[#F2D9A0]">POTRAZ Compliant</span>
                  </div>
                  <p className="text-xs text-gray-600 font-light">Gap audits, DPIAs, processing registers & regulatory compliance.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/95 border border-[#F2D9A0] hover:border-[#75162D] hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#3B010B] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="material-symbols-outlined text-xl">security</span>
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-[#3B010B] font-display">Cybersecurity & Forensics</h3>
                    <span className="text-[10px] font-bold text-[#75162D] uppercase tracking-wider bg-[#F2E5C6] px-2 py-0.5 rounded border border-[#F2D9A0]">CEH Practical</span>
                  </div>
                  <p className="text-xs text-gray-600 font-light">Ethical hacking, pentesting, breach investigation & vulnerability audits.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/95 border border-[#F2D9A0] hover:border-[#75162D] hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="material-symbols-outlined text-xl">analytics</span>
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-[#3B010B] font-display">Financial Advisory</h3>
                    <span className="text-[10px] font-bold text-[#75162D] uppercase tracking-wider bg-[#F2E5C6] px-2 py-0.5 rounded border border-[#F2D9A0]">FMVA® / BIDA®</span>
                  </div>
                  <p className="text-xs text-gray-600 font-light">FMVA financial models, BIDA dashboards, budgeting & valuation.</p>
                </div>
              </div>
            </div>

            {/* Bottom floating summary */}
            <motion.div 
              {...floatAnimation}
              className="p-4 bg-gradient-to-r from-[#F2E5C6] to-[#F2D9A0] rounded-2xl border border-[#75162D]/30 flex items-center justify-between shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-[#75162D]">hub</span>
                <div>
                  <span className="text-xs font-bold text-[#3B010B] uppercase block font-display">Integrated Protection</span>
                  <span className="text-[11px] text-[#560B18]">Synchronized DPO + Cyber + Finance Retainers</span>
                </div>
              </div>
              <Link to="/services" className="text-xs font-bold text-[#F2E5C6] bg-[#75162D] hover:bg-[#3B010B] px-3.5 py-1.5 rounded-lg transition-colors font-display shadow-sm">
                View Packages &rarr;
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  fadeInUp: PropTypes.object,
  staggerContainer: PropTypes.object,
  floatAnimation: PropTypes.object
};

export default Hero;


