import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";
import welfareAuditImg from "../assets/stock/carer-elderly-african.jpg";

import clinicalLiaisonImg from "../assets/stock/carer-elderly-woman.jpg";
import careQualityImg from "../assets/stock/carer-elderly-couple.jpg";
import emergencyWelfareImg from "../assets/stock/emergency-response.jpg";

const HomecareSupport = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const homecarePillars = [
    {
      title: "Elderly & Vulnerable Welfare Audits",
      tag: "INDEPENDENT FAMILY CARE OVERSIGHT",
      icon: "volunteer_activism",
      desc: "Independent, compassionate welfare monitoring for elderly family members. We conduct regular physical visits, evaluate care delivery, and ensure living conditions meet high standards.",
      features: ["Physical Home Welfare Visits", "Caregiver Accountability Checks", "Comprehensive Family Status Logs"],
      img: welfareAuditImg
    },
    {
      title: "Medical & Clinical Liaison",
      tag: "APPOINTMENT & CARE COORDINATION",
      icon: "medical_services",
      desc: "Coordinating medical appointments, doctor consultations, medication schedules, and clinical follow-ups with qualified local healthcare practitioners.",
      features: ["Doctor & Hospital Liaison", "Medication Adherence Checks", "Clinical Summary Reports"],
      img: clinicalLiaisonImg
    },
    {
      title: "Care Quality Assurance",
      tag: "UK NHS BENCHMARKED STANDARDS",
      icon: "verified",
      desc: "Bringing UK healthcare leadership and registered nursing experience to audit homecare staff, care homes, and private caregivers for quality and safety.",
      features: ["Caregiver Quality Audits", "Patient Safety Assessments", "Professional Care Standards"],
      img: careQualityImg
    },
    {
      title: "Emergency Welfare Escalation",
      tag: "RAPID ADVISORY RESPONSE",
      icon: "emergency",
      desc: "Dedicated rapid response and escalation desk for diaspora clients requiring urgent health checks, immediate site visits, or emergency care coordination.",
      features: ["24/7 Rapid Communication", "Immediate On-Ground Verification", "Emergency Care Coordination"],
      img: emergencyWelfareImg
    }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      <SEO
        title="Homecare & Diaspora Family Support Services | Elysian Global"
        description="Compassionate, professional homecare oversight, elderly welfare audits, doctor liaison, and medication coordination for diaspora families caring for loved ones in Southern Africa."
        keywords="diaspora family care Zimbabwe, elderly welfare audits Harare, homecare support Zimbabwe, medical liaison diaspora, family care oversight Zimbabwe"
        canonical="https://www.elysianglobalservices.com/homecare"
      />
      {/* Hero Section */}

      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "volunteer_activism", top: "18%", left: "12%", size: "45px" },
            { icon: "family_restroom", top: "25%", left: "82%", size: "50px" },
            { icon: "favorite", top: "70%", left: "10%", size: "40px" },
            { icon: "health_and_safety", top: "65%", left: "85%", size: "48px" },
            { icon: "verified", top: "15%", left: "70%", size: "42px" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.20, 0.45, 0.20],
                y: [0, -30, 0],
                x: [0, (i % 2 === 0 ? 20 : -20), 0]
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity, 
                delay: i * 1.2 
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
            animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B6924A]"
          >
            <span className="material-symbols-outlined text-[320px]">family_restroom</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">family_restroom</span>
            Professional Care Oversight & Family Support
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Homecare Support <span className="text-[#B6924A] italic">Services</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Distant caregiving requires reliable, compassionate, and audited support. We manage and monitor care arrangements, medical appointments, and family welfare to give families complete peace of mind.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-xl uppercase tracking-wider flex items-center gap-2">
              <span>Speak to Our Team</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a 
              href="https://wa.me/447984937336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-xl flex items-center gap-2 uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Advisory Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Pillars */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Professional Homecare & Family Support</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
              Benchmarked against international care standards and overseen by Jean Sigauke (Registered Nurse & Healthcare Specialist).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homecarePillars.map((h, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A] bg-[#B6924A]/10 px-3 py-1 rounded-full border border-[#B6924A]/20">
                      {h.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-2xl">{h.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E2A38]">{h.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{h.desc}</p>

                  <div className="h-48 rounded-2xl overflow-hidden bg-[#1E2A38] relative">
                    <img src={h.img} alt={h.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/70 via-transparent to-transparent"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {h.features.map((f, j) => (
                      <span key={j} className="bg-[#F7F4EE] px-3 py-1 rounded-lg text-xs font-medium text-[#1E2A38] border border-black/5">
                        âœ“ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link to="/contact" className="text-xs font-bold text-[#1E2A38] hover:text-[#B6924A] flex items-center gap-1 uppercase tracking-wider">
                    <span>Enquire About Homecare Support</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to Healthcare Expertise standalone page */}
      <section className="py-14 px-6 md:px-12 bg-[#F7F4EE] border-t border-[#B6924A]/20">
        <div className="max-w-5xl mx-auto bg-[#1E2A38] rounded-3xl p-8 md:p-10 border border-[#B6924A]/30 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-2xl">health_and_safety</span>
          </div>
          <div className="flex-1 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B6924A]">Related Service</span>
            <h3 className="text-xl md:text-2xl font-bold text-white">Looking for Healthcare Specialist Expertise?</h3>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Explore our dedicated <strong className="text-white">Healthcare â€” Our Specialist Expertise</strong> page for an in-depth view of homecare, family support, welfare visits and care coordination services.
            </p>
          </div>
          <Link
            to="/healthcare-expertise"
            className="bg-[#B6924A] text-[#1E2A38] px-6 py-3.5 rounded-xl font-bold text-xs hover:bg-white transition-all uppercase tracking-wider flex items-center gap-2 whitespace-nowrap"
          >
            <span>View Specialist Expertise</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#1E2A38] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Your Trusted Partner Across Borders</h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto text-base">
            Providing your family with compassionate, professional, and audited care oversight so you can have complete peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all uppercase tracking-wider">
              Book a Consultation
            </Link>
            <a
              href="https://wa.me/447984937336"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp (+44 7984 937336)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomecareSupport;
