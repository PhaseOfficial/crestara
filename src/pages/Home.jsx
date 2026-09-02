import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import FeaturedPillar from "../components/home/FeaturedPillar";
import WhyElysian from "../components/home/WhyElysian";
import Services from "../components/home/Services";
import IndustriesWeSupport from "../components/home/IndustriesWeSupport";
import Certification from "../components/home/Certification";
import FAQAndProfessionalBoundaries from "../components/home/FAQAndProfessionalBoundaries";
import HomeCTA from "../components/home/HomeCTA";


const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2 } }
  };

  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateWrench = {
    animate: {
      rotate: [0, 15, -15, 0],
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden relative">
      <SEO
        title="Crestara Advisory Group | Data Protection, Cybersecurity & Financial Advisory"
        description="Premier multidisciplinary corporate advisory group delivering POTRAZ compliant Data Protection & Outsourced DPO services, EC-Council CEH certified Cybersecurity & Pentesting, and FMVA® Financial Intelligence."
        keywords="Crestara Advisory Group, Cybersecurity Zimbabwe, Penetration testing Harare, Data Protection Officer Zimbabwe, POTRAZ compliance, FMVA financial modelling, BIDA dashboards Harare, multidisciplinary advisory team"
        canonical="https://www.crestaraadvisorygroup.com/"
      />
      {/* Global Background Animations */}

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[
          { icon: "public", top: "15%", left: "8%", size: "40px" },
          { icon: "verified_user", top: "35%", left: "88%", size: "55px" },
          { icon: "analytics", top: "60%", left: "5%", size: "45px" },
          { icon: "medical_services", top: "80%", left: "82%", size: "50px" },
          { icon: "gavel", top: "45%", left: "12%", size: "35px" },
          { icon: "handshake", top: "25%", left: "75%", size: "40px" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.03, 0.08, 0.03],
              y: [0, -40, 0],
              x: [0, (i % 2 === 0 ? 30 : -30), 0]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              delay: i * 1.5 
            }}
            className="absolute text-[#B6924A]"
            style={{ 
              top: item.top, 
              left: item.left,
              fontSize: item.size
            }}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
          </motion.div>
        ))}

        <motion.div 
          {...floatAnimation} 
          className="absolute top-[25%] right-[5%] text-[#1E2A38] opacity-[0.03]"
        >
          <span className="material-symbols-outlined text-[240px]">shield</span>
        </motion.div>
        <motion.div 
          {...floatAnimation} 
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-[15%] left-[3%] text-[#B6924A] opacity-[0.03]"
        >
          <span className="material-symbols-outlined text-[220px]">public</span>
        </motion.div>
      </div>

      <Hero
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        floatAnimation={floatAnimation}
        rotateWrench={rotateWrench}
      />

      <TrustStrip />
      <FeaturedPillar />
      <WhyElysian />
      <Services />
      <IndustriesWeSupport />
      <Certification />
      <FAQAndProfessionalBoundaries />
      <HomeCTA />
    </div>
  );
};

export default Home;
