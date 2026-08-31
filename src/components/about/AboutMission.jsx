import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const AboutMission = () => {
  const values = [
    {
      title: "Statutory Rigor",
      desc: "Upholding absolute compliance with the Data Protection Act, POTRAZ mandates, and global privacy benchmarks.",
      icon: "gavel"
    },
    {
      title: "Technical Excellence",
      desc: "Deploying certified offensive ethical hacking and digital forensic methodologies.",
      icon: "security"
    },
    {
      title: "Quantitative Precision",
      desc: "Delivering institutional-grade FMVA® financial models and empirical KPI dashboards.",
      icon: "calculate"
    },
    {
      title: "Confidentiality & Integrity",
      desc: "Strict adherence to non-disclosure, ethical boundaries, and evidentiary chain of custody.",
      icon: "verified_user"
    },
    {
      title: "Multidisciplinary Synergy",
      desc: "Eliminating silos between privacy officers, security analysts, and financial executives.",
      icon: "hub"
    },
    {
      title: "Commercial Transparency",
      desc: "Structured, predictable retainer agreements designed for sustainable growth.",
      icon: "payments"
    }
  ];

  const differentiators = [
    {
      title: "Unified 3-Pillar Advisory",
      desc: "Data Protection, Cybersecurity, and Financial Modelling under one senior team.",
      icon: "hub"
    },
    {
      title: "POTRAZ Compliance Specialists",
      desc: "Deep in-country regulatory mastery and lawful processing register maintenance.",
      icon: "policy"
    },
    {
      title: "CEH Practical & CompTIA Sec+",
      desc: "Battle-tested offensive security penetration testing and incident response.",
      icon: "lock_open"
    },
    {
      title: "FMVA® & BIDA® Analytics",
      desc: "Bespoke corporate valuation, cash-flow models, and interactive management dashboards.",
      icon: "analytics"
    },
    {
      title: "Predictable Retainer Model",
      desc: "Structured retainer packages with dedicated DPO and cybersecurity advisors.",
      icon: "verified"
    },
    {
      title: "Executive Partner Access",
      desc: "Direct strategic consultations with Natasha Zama and certified directors.",
      icon: "military_tech"
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Purpose & Multidisciplinary Convergence */}
      <section className="py-16 px-6 md:px-12 bg-white font-sans border-b border-[#F2E5C6]/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div {...fadeIn} className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
              <span className="material-symbols-outlined text-sm">hub</span>
              Corporate Purpose & Synergy
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#3B010B] leading-tight font-display">
              Where Data Protection, Cybersecurity & Capital Strategy Converge.
            </h2>
            <p className="text-gray-700 text-sm font-light leading-relaxed">
              Crestara Advisory Group was established to address a critical vulnerability in the modern enterprise: the dangerous fragmentation between legal compliance, cybersecurity defense, and financial strategy.
            </p>
            <p className="text-gray-700 text-sm font-light leading-relaxed">
              We deliver a unified multidisciplinary advisory practice that empowers executives, boards, and growing SMEs to navigate regulatory scrutiny under POTRAZ, neutralize cyber threats through offensive penetration testing, and optimize capital allocation through institutional-grade financial modelling.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-6">
            <div className="bg-gradient-to-br from-[#F2E5C6] via-white to-[#F2D9A0]/80 rounded-3xl p-8 text-[#3B010B] shadow-xl border-2 border-[#F2D9A0] space-y-6">
              <div className="flex items-center gap-3 border-b border-[#F2D9A0] pb-4">
                <span className="material-symbols-outlined text-[#75162D] text-3xl">verified_user</span>
                <div>
                  <h3 className="font-bold text-base text-[#3B010B] font-display">The Crestara Governance Standard</h3>
                  <p className="text-xs text-[#75162D] font-semibold">Zimbabwe • Southern Africa • International</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-[#F2D9A0] shadow-sm space-y-1">
                  <span className="text-[#75162D] font-bold block">POTRAZ Regulated</span>
                  <span className="text-gray-600 font-light">Data Protection Act Compliance</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#F2D9A0] shadow-sm space-y-1">
                  <span className="text-[#75162D] font-bold block">CEH / Security+</span>
                  <span className="text-gray-600 font-light">Offensive Security Operations</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#F2D9A0] shadow-sm space-y-1">
                  <span className="text-[#75162D] font-bold block">FMVA® Modelling</span>
                  <span className="text-gray-600 font-light">3-Statement Financial Models</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#F2D9A0] shadow-sm space-y-1">
                  <span className="text-[#75162D] font-bold block">BIDA® Analytics</span>
                  <span className="text-gray-600 font-light">Executive BI KPI Dashboards</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Spotlight - Natasha Zama */}
      <section className="py-16 px-6 md:px-12 bg-[#FAF7F2] border-b border-[#F2D9A0] font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-[#F2D9A0] bg-gradient-to-b from-white via-[#FAF7F2] to-[#F2E5C6]/60 relative p-6 sm:p-8 text-[#3B010B] flex flex-col justify-between h-full min-h-[420px]">
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-[#F2D9A0] shadow-sm mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Natasha Zama - Executive Director"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B010B]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-[#75162D] px-2.5 py-0.5 rounded-full border border-[#F2D9A0]/50 font-display">
                      Executive Leadership
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#3B010B] font-display">Natasha Zama</h3>
                  <p className="text-xs text-[#75162D] uppercase tracking-widest font-bold mt-0.5 font-display">Executive Director & Practice Head</p>
                </div>
                <p className="text-xs text-gray-700 font-light leading-relaxed">
                  Steering Crestara Advisory Group&apos;s multidisciplinary vision across corporate compliance, cybersecurity risk mitigation, and quantitative financial strategy.
                </p>
              </div>

              <div className="pt-6 border-t border-[#F2D9A0] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="material-symbols-outlined text-[#75162D] text-sm">mail</span>
                  <a href="mailto:director@crestaraadvisorygroup.com" className="text-[#75162D] hover:underline font-mono font-semibold">
                    director@crestaraadvisorygroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="material-symbols-outlined text-[#75162D] text-sm">phone_iphone</span>
                  <a href="tel:+263775040725" className="text-[#75162D] hover:underline font-mono font-semibold">
                    +263 775 040 725
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 shadow-sm font-display">
              <span className="material-symbols-outlined text-sm text-[#75162D]">military_tech</span>
              Executive Leadership & Credentials
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B010B] leading-tight font-display">
              Multi-Certified Advisory Team with Rigorous Governance Standards
            </h2>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Certified Data Protection Officer (DPO)",
                "Financial Modelling & Valuation Analyst (FMVA®)",
                "Business Intelligence & Data Analyst (BIDA®)",
                "EC-Council Certified Ethical Hacker (CEH)",
                "CompTIA Security+ Certified",
                "Banking & Investment Management (CFA Standards)"
              ].map((badge, idx) => (
                <span key={idx} className="bg-[#F2E5C6] text-[#75162D] px-3 py-1 rounded-lg text-[11px] font-bold tracking-wide border border-[#F2D9A0] shadow-sm">
                  ✓ {badge}
                </span>
              ))}
            </div>

            <p className="text-gray-700 text-sm font-light leading-relaxed">
              Under Natasha Zama&apos;s executive leadership, Crestara Advisory Group brings together accredited subject matter experts who understand both statutory nuances and technical realities. We do not deliver generic, template-driven consulting; every engagement is structured with empirical data, legal precision, and boardroom-level clarity.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link to="/contact" className="bg-[#75162D] text-[#F2E5C6] px-6 py-3 rounded-xl font-bold text-xs hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all uppercase tracking-wider flex items-center gap-2 shadow-md font-display border border-[#F2D9A0]/30">
                <span>Contact Executive Desk</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/263775040725?text=Hello%20Natasha%20Zama%2C%20I%20would%20like%20to%20enquire%20about%20Crestara%20Advisory%20Group."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-[#20ba5a] transition-all uppercase tracking-wider flex items-center gap-2 shadow-md font-display"
              >
                <FaWhatsapp className="text-base" />
                <span>Direct WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-6 md:px-12 bg-white font-sans border-b border-[#F2E5C6]/60">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
              <span className="material-symbols-outlined text-sm">diamond</span>
              Our Operating Values
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B010B] font-display">The Principles That Govern Every Advisory Mandate</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#F2E5C6] shadow-sm hover:shadow-md hover:border-[#75162D] transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-[#3B010B] text-[#F2D9A0] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">{v.icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#3B010B]">{v.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Crestara */}
      <section className="py-16 px-6 md:px-12 bg-[#FAF7F2] font-sans">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              The Crestara Advantage
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B010B] font-display">Why Enterprises Partner with Crestara</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#F2E5C6] hover:border-[#75162D] transition-all space-y-3 group shadow-sm hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center group-hover:bg-[#3B010B] transition-colors">
                  <span className="material-symbols-outlined text-xl">{d.icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#3B010B] leading-tight">{d.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMission;

