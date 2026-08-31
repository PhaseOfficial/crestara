import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Certification = () => {
  const certifications = [
    { title: "Financial Modelling & Valuation Analyst", code: "FMVA®", org: "CFI Global", icon: "calculate" },
    { title: "Business Intelligence & Data Analyst", code: "BIDA®", org: "CFI Global", icon: "query_stats" },
    { title: "Certified Data Protection Officer", code: "DPO", org: "POTRAZ & GDPR Standards", icon: "privacy_tip" },
    { title: "Certified Ethical Hacker", code: "CEH Practical", org: "EC-Council", icon: "lock_open" },
    { title: "CompTIA Security+", code: "Security+", org: "CompTIA", icon: "security" },
    { title: "Investment Management", code: "CFA Standards", org: "Banking & Investment", icon: "trending_up" },
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
            <span>Learn About Leadership</span>
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
              <div className="w-10 h-10 mx-auto rounded-xl bg-[#FAF7F2] text-[#75162D] flex items-center justify-center group-hover:bg-[#75162D] group-hover:text-[#F2D9A0] transition-colors">
                <span className="material-symbols-outlined text-xl">{cert.icon}</span>
              </div>
              <div>
                <span className="text-base font-extrabold text-[#3B010B] block font-display">{cert.code}</span>
                <span className="text-[11px] font-semibold text-gray-700 block leading-snug mt-1">{cert.title}</span>
                <span className="text-[10px] text-gray-500 block mt-1">{cert.org}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certification;


