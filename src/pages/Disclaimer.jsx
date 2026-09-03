import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

const Disclaimer = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="Professional Services Disclaimer | Crestara Advisory Group"
        description="Professional Services Disclaimer and regulatory boundaries for Crestara Advisory Group (crestaraadvisorygroup.com)."
        keywords="Disclaimer, Crestara Advisory Group disclaimer, legal boundaries, POTRAZ compliance disclaimer"
        canonical="https://www.crestaraadvisorygroup.com/disclaimer"
      />

      {/* Header */}
      <section className="py-16 px-6 md:px-12 text-[#3B010B] relative overflow-hidden border-b border-[#F2D9A0] text-center">
        {/* Background Legal Integrity Photo Layer & Moving Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <img
            src="/images/hero-legal.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-35 filter brightness-105 contrast-110 mix-blend-multiply"
          />
          {/* Animated Moving Champagne/Gold Gradient Overlay */}
          <div className="absolute inset-0 animate-moving-gradient opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/80 via-transparent to-[#F2E5C6]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF7F2]/30 to-[#FAF7F2]" />
        </div>

        {/* Background Texture Overlays */}
        <div className="absolute inset-0 bg-texture-grain opacity-80 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-texture-grid opacity-50 pointer-events-none z-[1]" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1 rounded-full border border-[#75162D]/30 font-display">
            <span className="material-symbols-outlined text-sm">gavel</span>
            Legal & Compliance • Part 4
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display text-[#3B010B]">
            Professional Services <span className="burgundy-gradient-text">Disclaimer</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-600 font-light">
            Effective Date: 1 September 2026 • Domain: crestaraadvisorygroup.com
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-[#F2E5C6] shadow-sm space-y-8 text-gray-800 text-sm leading-relaxed font-light"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">1. General Information Only</h2>
            <p>
              The materials, articles, insights, and information contained on <strong>crestaraadvisorygroup.com</strong> are provided for general informational and educational purposes only. They do not constitute formal legal advice, statutory audit opinions, or binding financial recommendations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">2. Data Protection & Regulatory Scope</h2>
            <p>
              While our Data Protection Officer (DPO) and compliance advisory services are designed to assist clients in complying with the Data Protection Act [Chapter 12:07] and POTRAZ directives, regulatory compliance remains the legal responsibility of the data controller or processor. Our advisory opinions do not substitute for formal court rulings or statutory orders issued by regulatory authorities.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">3. Cybersecurity & Penetration Testing Authorization</h2>
            <p>
              All offensive security testing, ethical hacking, and vulnerability assessments performed by Crestara Advisory Group require an executed Rules of Engagement (RoE) agreement and formal written legal authorization from the verified asset owner. We strictly refuse unauthorized testing requests.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">4. Financial Advisory & Modelling Boundaries</h2>
            <p>
              Financial models (FMVA®), business valuations, and KPI dashboards (BIDA®) prepared by Crestara provide executive decision support and management analysis based on data and assumptions supplied by the client. These models do not guarantee specific investment returns, bank loan approvals, or statutory tax audit representations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Crestara Advisory Group and its partners, officers, employees, and associates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from reliance on website content prior to executing a formal engagement contract.
            </p>
          </div>

          <div className="pt-6 border-t border-[#FAF7F2] flex items-center justify-between text-xs">
            <Link to="/privacy-policy" className="text-[#75162D] font-bold hover:underline">
              ← Privacy Notice
            </Link>
            <Link to="/terms-of-service" className="text-[#75162D] font-bold hover:underline">
              Terms of Service →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Disclaimer;
