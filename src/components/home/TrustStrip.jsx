import { motion } from "framer-motion";

const TrustStrip = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#3B010B] text-white px-6 py-4 border-b border-[#F2D9A0]/20"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-medium tracking-wider uppercase">
        <div className="flex items-center space-x-2 text-[#F2D9A0]">
          <span className="material-symbols-outlined text-base">privacy_tip</span>
          <span className="text-white/95">POTRAZ & Data Protection Act Compliance</span>
        </div>
        <div className="flex items-center space-x-2 text-[#F2E5C6]">
          <span className="material-symbols-outlined text-base text-[#F2D9A0]">security</span>
          <span>CEH Practical & CompTIA Sec+ Cybersecurity</span>
        </div>
        <div className="flex items-center space-x-2 text-[#F2D9A0]">
          <span className="material-symbols-outlined text-base">analytics</span>
          <span className="text-white/95">FMVA® Financial Modelling & BIDA® Analytics</span>
        </div>
        <div className="flex items-center space-x-2 text-[#F2E5C6]">
          <span className="material-symbols-outlined text-base text-[#F2D9A0]">verified</span>
          <span>Zimbabwe & SADC Corporate Governance</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustStrip;