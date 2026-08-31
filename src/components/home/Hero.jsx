import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";

const Hero = ({ fadeInUp, staggerContainer, floatAnimation }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-24 px-6 md:px-12 overflow-hidden animate-hero-gradient text-white border-b border-[#F2D9A0]/20">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#75162D]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#F2D9A0]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Hero Copy & Value Proposition */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">verified_user</span>
            Multidisciplinary Corporate Advisory
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] font-display">
            Data Protection. <br />
            Cybersecurity. <br />
            <span className="gold-gradient-text">Financial Advisory.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-[#F2E5C6]/90 max-w-3xl leading-relaxed mx-auto lg:mx-0 font-light">
            Crestara Advisory Group is an elite multidisciplinary firm providing outsourced DPO governance (POTRAZ compliant), offensive and defensive cybersecurity & digital forensics, and quantitative financial modelling & business intelligence.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
            <Link 
              to="/contact" 
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-sm shadow-xl hover:bg-[#F2E5C6] hover:scale-105 transition-all flex items-center gap-3 uppercase tracking-wider font-semibold"
            >
              REQUEST A QUOTATION
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </Link>
            <a 
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#F2D9A0]/50 bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-white/15 transition-all flex items-center gap-3 backdrop-blur-md"
            >
              <FaWhatsapp className="text-[#25D366] text-lg" />
              <span>WHATSAPP DESK</span>
            </a>
          </motion.div>

          {/* Credential Metrics */}
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/15 text-left">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl text-[#F2D9A0] font-extrabold block">DPO</span>
              <span className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">Outsourced & POTRAZ</span>
            </div>
            <div className="space-y-1 border-l border-white/15 pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl text-white font-extrabold block">CEH / Sec+</span>
              <span className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">Offensive Security</span>
            </div>
            <div className="space-y-1 border-l border-white/15 pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl text-[#F2D9A0] font-extrabold block">FMVA / CFA</span>
              <span className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">Financial Analytics</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual Card with Integrated Practice Pillars */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-[#F2D9A0]/30 shadow-2xl bg-gradient-to-b from-[#560B18] to-[#3B010B] p-7 sm:p-9 space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F2D9A0] text-[#3B010B] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white font-display">Integrated Protection</h2>
                  <p className="text-[11px] text-[#F2D9A0]">Unified Advisory Governance</p>
                </div>
              </div>
              <span className="text-xs bg-[#75162D] text-[#F2E5C6] px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-[#F2D9A0]/20 font-display">
                Advisory Pillars
              </span>
            </div>

            {/* 3 Core Interactive Pillar Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-black/25 border border-white/10 hover:border-[#F2D9A0]/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">privacy_tip</span>
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-white font-display">Data Protection & DPO</h3>
                    <span className="text-[11px] font-bold text-[#F2D9A0] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">POTRAZ Compliant</span>
                  </div>
                  <p className="text-xs text-white/70 font-light">Gap audits, DPIAs, processing registers & regulatory compliance.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/25 border border-white/10 hover:border-[#F2D9A0]/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#560B18] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">security</span>
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-white font-display">Cybersecurity & Forensics</h3>
                    <span className="text-[11px] font-bold text-[#F2D9A0] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">CEH Practical</span>
                  </div>
                  <p className="text-xs text-white/70 font-light">Ethical hacking, pentesting, breach investigation & vulnerability audits.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/25 border border-white/10 hover:border-[#F2D9A0]/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">analytics</span>
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-white font-display">Financial Advisory</h3>
                    <span className="text-[11px] font-bold text-[#F2D9A0] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">FMVA® / BIDA®</span>
                  </div>
                  <p className="text-xs text-white/70 font-light">FMVA financial models, BIDA dashboards, budgeting & valuation.</p>
                </div>
              </div>
            </div>

            {/* Bottom floating summary */}
            <motion.div 
              {...floatAnimation}
              className="p-4 bg-gradient-to-r from-[#75162D] to-[#560B18] rounded-2xl border border-[#F2D9A0]/30 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-[#F2D9A0]">hub</span>
                <div>
                  <span className="text-xs font-bold text-[#F2D9A0] uppercase block font-display">Integrated Protection</span>
                  <span className="text-[11px] text-white/80">Synchronized DPO + Cyber + Finance Retainers</span>
                </div>
              </div>
              <Link to="/services" className="text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors font-display">
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

