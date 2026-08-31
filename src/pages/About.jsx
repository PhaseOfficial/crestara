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
        description="Learn about Crestara Advisory Group, led by Natasha Zama. Multidisciplinary corporate advisory delivering Data Protection & Outsourced DPO (POTRAZ compliant), Cybersecurity & Forensics, and FMVA® Financial Intelligence across Southern Africa and globally."
        keywords="About Crestara Advisory Group, Natasha Zama, Data Protection Officer Zimbabwe, POTRAZ compliance, FMVA financial modelling, CEH cybersecurity Zimbabwe, BIDA analytics"
        canonical="https://www.crestaraadvisorygroup.com/about"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-[#3B010B] py-20 px-6 md:px-12 animate-hero-gradient border-b border-[#F2D9A0]/20">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">verified_user</span>
            Multidisciplinary Corporate Practice
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight font-display"
          >
            About <span className="gold-gradient-text">Crestara Advisory Group</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-[#F2E5C6]/90 max-w-3xl mx-auto font-light leading-relaxed"
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
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#F2E5C6] transition-all shadow-xl uppercase tracking-wider flex items-center gap-2 font-semibold"
            >
              <span>Consult Our Leadership</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Advisory Desk</span>
            </a>
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

