import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";
import AboutMission from "../components/about/AboutMission";
import AboutApproach from "../components/about/AboutApproach";
import AboutPromise from "../components/about/AboutPromise";
import BrandStory from "../components/home/BrandStory";
import Certification from "../components/home/Certification";

const About = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="About Us | Multidisciplinary Governance & Leadership | Crestara Advisory Group"
        description="Learn about Crestara Advisory Group. Multidisciplinary corporate advisory delivering Data Protection & Outsourced DPO (POTRAZ compliant), Cybersecurity & Forensics, and FMVA® Financial Intelligence across Southern Africa and globally."
        keywords="About Crestara Advisory Group, Data Protection Officer Zimbabwe, POTRAZ compliance, FMVA financial modelling, CEH cybersecurity Zimbabwe, BIDA analytics, advisory team"
        canonical="https://www.crestaraadvisorygroup.com/about"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-[#3B010B] py-20 px-6 md:px-12 border-b border-[#F2D9A0]">
        {/* Background Team Photo Layer & Moving Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <img
            src="/images/hero-about.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-100"
          />
          {/* Animated Moving Champagne/Gold Gradient Overlay */}
          <div className="absolute inset-0 animate-moving-gradient opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/75 via-transparent to-[#F2E5C6]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF7F2]/30 to-[#FAF7F2]" />
        </div>

        {/* Background Texture Overlays */}
        <div className="absolute inset-0 bg-texture-grain opacity-80 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-texture-grid opacity-50 pointer-events-none z-[1]" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-md shadow-xs font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">verified_user</span>
            Multidisciplinary Corporate Practice
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-[#3B010B]"
          >
            About <span className="burgundy-gradient-text">Crestara Advisory Group</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-[#560B18]/90 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Empowering modern enterprises with synchronized Data Protection & Outsourced DPO governance (POTRAZ compliant), Certified Offensive Cybersecurity & Digital Forensics, and Quantitative Financial Modelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <Link
              to="/contact"
              className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#3B010B] hover:text-[#F2D9A0] hover:-translate-y-0.5 transition-all shadow-xl uppercase tracking-wider flex items-center gap-2 font-semibold font-display border border-[#F2D9A0]/40"
            >
              <span>Consult Our Advisory Team</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3B010B] border-2 border-[#25D366]/50 px-8 py-4 rounded-xl font-bold text-sm hover:bg-white hover:border-[#25D366] hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2.5 uppercase tracking-wider shadow-md font-display"
            >
              <FaWhatsapp className="text-[#25D366] text-2xl flex-shrink-0" />
              <span>WhatsApp Advisory Desk</span>
            </a>
          </motion.div>

          {/* Visual Boardroom Stock Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-2xl h-56 sm:h-72 mt-8"
          >
            <img
              src="/images/team-advisory.jpg"
              alt="Crestara Advisory Group Multidisciplinary Advisory Council"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B010B]/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white text-left space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#75162D] text-[#F2E5C6] px-3 py-1 rounded-full border border-[#F2D9A0]/40 font-display">
                  Multidisciplinary Team Advisory
                </span>
                <p className="text-sm sm:text-base font-bold text-white font-display">
                  Cross-Disciplinary Mastery Across Governance, Cyber Defense & Financial Modelling
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutMission />
      <BrandStory />
      <Certification />
      <AboutApproach />
      <AboutPromise />
    </div>
  );
};

export default About;

