import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";

import projectAuditImg from "../assets/stock/business-project-audit.jpg";
import businessVerificationImg from "../assets/stock/business-verification.jpg";

const Business = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const businessPillars = [
    {
      title: "Business Development",
      tag: "COMMERCIAL EXPANSION",
      icon: "trending_up",
      desc: "Structuring cross-border commercial opportunities, identifying key growth drivers, and developing high-impact market engagement strategies.",
      features: ["Commercial Opportunity Scoping", "Partner Matchmaking", "Revenue Growth Planning"],
      img: projectAuditImg
    },
    {
      title: "Market Entry Advisory",
      tag: "SOUTHERN AFRICA & EUROPE",
      icon: "public",
      desc: "Guiding European and international businesses seeking to enter Southern African markets, providing regulatory mapping, local insight, and stakeholder liaisons.",
      features: ["Regulatory & Sector Mapping", "Feasibility Studies", "In-Country Launch Guidance"],
      img: businessVerificationImg
    },
    {
      title: "Operational Systems",
      tag: "EFFICIENCY & ACCOUNTABILITY",
      icon: "settings_suggest",
      desc: "Designing and implementing robust operational systems, compliance frameworks, and performance monitoring tools tailored to multi-regional operations.",
      features: ["SOP Development", "Compliance & Risk Audits", "Performance Management Systems"],
      img: projectAuditImg
    },
    {
      title: "Strategic Planning",
      tag: "LONG-TERM GOVERNANCE",
      icon: "lightbulb",
      desc: "Providing high-level strategic advisory for corporate leadership teams, entrepreneurs, and institutional clients seeking sustainable long-term value creation.",
      features: ["Strategic Vision & Governance", "Risk Mitigation Frameworks", "Executive Advisory Desk"],
      img: businessVerificationImg
    },
    {
      title: "Growth Consultancy",
      tag: "SCALE & TRANSFORMATION",
      icon: "hub",
      desc: "Assisting emerging and established commercial enterprises with organizational scaling, leadership coaching, and operational transformation.",
      features: ["Scale & Capacity Building", "Operational Transformation", "Cross-Border Management"],
      img: projectAuditImg
    }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      <SEO
        title="Business Development & Market Entry Advisory | Elysian Global"
        description="Comprehensive business advisory, cross-border market entry guidance, organizational scaling, and operational systems for enterprises operating across Southern Africa and Europe."
        keywords="Zimbabwe business consultancy, Southern Africa market entry, business development Harare, cross-border business advisory, operational systems Africa"
        canonical="https://www.elysianglobalservices.com/business"
      />
      {/* Hero Section */}

      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "corporate_fare", top: "18%", left: "12%", size: "45px" },
            { icon: "analytics", top: "25%", left: "82%", size: "50px" },
            { icon: "domain", top: "70%", left: "10%", size: "40px" },
            { icon: "handshake", top: "65%", left: "85%", size: "48px" },
            { icon: "public", top: "15%", left: "70%", size: "42px" }
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
            <span className="material-symbols-outlined text-[320px]">domain</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">corporate_fare</span>
            International Business Growth & Advisory
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Business <span className="text-[#B6924A] italic">Consultancy</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Empowering entrepreneurs, corporate entities, and international investors to build, scale, and optimize operations with confidence across Southern Africa and Europe.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-xl uppercase tracking-wider flex items-center gap-2">
              <span>Book a Consultation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a 
              href="https://wa.me/447984937336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-xl flex items-center gap-2 uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Advisory</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Business Pillars */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Core Business Advisory Pillars</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
              Structured consultancy services designed to bridge international standards with local operational execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessPillars.map((b, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A] bg-[#B6924A]/10 px-3 py-1 rounded-full border border-[#B6924A]/20">
                      {b.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-2xl">{b.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E2A38]">{b.title}</h3>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">{b.desc}</p>

                  <div className="h-40 rounded-2xl overflow-hidden bg-[#1E2A38] relative">
                    <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/70 via-transparent to-transparent"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {b.features.map((f, j) => (
                      <span key={j} className="bg-[#F7F4EE] px-3 py-1 rounded-lg text-[11px] font-medium text-[#1E2A38] border border-black/5">
                        âœ“ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link to="/contact" className="text-xs font-bold text-[#1E2A38] hover:text-[#B6924A] flex items-center gap-1 uppercase tracking-wider">
                    <span>Enquire About Business Consultancy</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#1E2A38] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Your Trusted Partner Across Borders</h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto text-base">
            From market entry to operational systems, Elysian provides independent guidance to ensure your business thrives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all uppercase tracking-wider">
              Speak to Our Team
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

export default Business;
