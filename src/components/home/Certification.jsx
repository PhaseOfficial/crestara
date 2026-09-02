import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Certification = () => {
  const certifications = [
    {
      title: "Financial Modelling & Valuation Analyst",
      code: "FMVA®",
      org: "CFI Global Standards",
      icon: "calculate",
      logo: "/images/fmva-logo.svg"
    },
    {
      title: "Business Intelligence & Data Analyst",
      code: "BIDA®",
      org: "CFI Global Standards",
      icon: "query_stats",
      logo: "/images/bida-logo.svg"
    },
    {
      title: "Certified Data Protection Officer",
      code: "DPO",
      org: "POTRAZ & GDPR Standards",
      icon: "privacy_tip",
      logo: "/images/potraz-logo-large.png"
    },
    {
      title: "Certified Ethical Hacker",
      code: "CEH Practical",
      org: "EC-Council Standards",
      icon: "lock_open",
      logo: "/images/eccouncil-logo.svg"
    },
    {
      title: "CompTIA Security+",
      code: "Security+",
      org: "CompTIA Global",
      icon: "security",
      logo: "/images/comptia-logo.svg"
    },
    {
      title: "Investment Management Standards",
      code: "CFA Standards",
      org: "Banking & Investment Ethics",
      icon: "trending_up",
      logo: "/images/cfa-logo.svg"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#FAF7F2] text-[#3B010B] relative overflow-hidden border-b border-[#F2D9A0] font-sans">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center lg:items-start space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1 rounded-full border border-[#75162D]/30 shadow-sm font-display">
              <span className="material-symbols-outlined text-sm text-[#75162D]">verified</span>
              Recognised Professional Accreditations
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-[#3B010B]">
              Certified Multidisciplinary Governance
            </h3>
            <p className="text-gray-600 text-sm max-w-2xl font-light">
              Our consultants hold globally recognized certifications spanning financial engineering, cybersecurity operations, digital forensics, and data protection officer mandates.
            </p>
          </div>

          <Link
            to="/about"
            className="flex-shrink-0 bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 font-display border border-[#F2D9A0]/30"
          >
            <span>Learn About Practice</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white p-5 rounded-2xl border border-[#F2D9A0] shadow-sm hover:shadow-lg hover:border-[#75162D] transition-all flex flex-col justify-between space-y-3 group text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#FAF7F2] p-2 flex items-center justify-center group-hover:bg-[#F2E5C6]/40 transition-colors border border-[#F2D9A0]/60 overflow-hidden shadow-inner">
                {cert.logo ? (
                  <img src={cert.logo} alt={cert.title} className="w-full h-full object-contain" />
                ) : (
                  <span className="material-symbols-outlined text-2xl text-[#75162D]">{cert.icon}</span>
                )}
              </div>
              <div>
                <span className="text-base font-extrabold text-[#3B010B] block font-display">{cert.code}</span>
                <span className="text-[11px] font-semibold text-gray-700 block leading-snug mt-1">{cert.title}</span>
                <span className="text-[10px] text-gray-500 block mt-1">{cert.org}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statutory & Professional Registration Dual Assurance Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* POTRAZ Regulatory Assurance */}
          <div className="bg-gradient-to-r from-white via-[#F2E5C6]/40 to-white rounded-2xl p-4 sm:p-5 border border-[#F2D9A0] flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-xl p-1.5 border border-[#F2D9A0] shadow-sm flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/potraz-logo-large.png"
                  alt="POTRAZ Regulatory Compliance"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#75162D] bg-[#75162D]/10 px-2 py-0.5 rounded-full font-display">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Statutory Regulator
                </div>
                <h4 className="text-sm font-bold text-[#3B010B] font-display mt-0.5">
                  POTRAZ Regulated Practice
                </h4>
                <p className="text-xs text-gray-600 font-light">
                  Data Protection Act [Chapter 12:07] compliance & DPO governance.
                </p>
              </div>
            </div>
            <Link
              to="/data-protection"
              className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1 font-display whitespace-nowrap"
            >
              <span>View</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* CIPZ Professional Registration */}
          <div className="bg-gradient-to-r from-white via-[#F2E5C6]/40 to-white rounded-2xl p-4 sm:p-5 border border-[#F2D9A0] flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-xl p-1.5 border border-[#F2D9A0] shadow-sm flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/cipz-logo.png"
                  alt="CIPZ Professional Registration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#75162D] bg-[#75162D]/10 px-2 py-0.5 rounded-full font-display">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Professional Registration
                </div>
                <h4 className="text-sm font-bold text-[#3B010B] font-display mt-0.5">
                  CIPZ Registered Body
                </h4>
                <p className="text-xs text-gray-600 font-light">
                  Corporate Compliance & Governance Professional Institute.
                </p>
              </div>
            </div>
            <a
              href="https://cipz.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify CIPZ Professional Registration (Verification Number: [PENDING])"
              className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1 font-display whitespace-nowrap bg-white px-3 py-1.5 rounded-lg border border-[#F2D9A0] shadow-xs hover:border-[#75162D] transition-colors"
            >
              <span>Verify</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certification;


