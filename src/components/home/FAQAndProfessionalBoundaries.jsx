import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const FAQAndProfessionalBoundaries = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [openBoundary, setOpenBoundary] = useState(null);

  const faqItems = [
    {
      question: "What is an Outsourced DPO and how does it fulfill POTRAZ requirements?",
      answer: "An Outsourced Data Protection Officer (DPO) acts as your organisation's independent compliance officer under the Data Protection Act and POTRAZ regulations. We assist in maintaining data processing registers, reviewing policies, conducting Data Protection Impact Assessments (DPIAs), handling data subject requests, and liaising with the regulator."
    },
    {
      question: "Are statutory and POTRAZ regulatory fees included in your packages?",
      answer: "No. In accordance with standard commercial practice, all quoted fees reflect professional advisory and technical time. Any statutory filing fees, registration duties, or official POTRAZ regulatory levies are separate and payable directly by the client."
    },
    {
      question: "What authorization is required before Ethical Hacking or Penetration Testing?",
      answer: "We strictly conduct penetration testing and vulnerability assessments under formal, written legal authorization. Clients must execute our Rules of Engagement (RoE) confirming ownership or explicit administrative control over target IP addresses, domains, and cloud environments."
    },
    {
      question: "What does Financial Advisory cover and how does it differ from statutory audit?",
      answer: "Our financial advisory services encompass management reporting, FMVA® financial modelling, cash-flow forecasting, KPI dashboard development (BIDA®), and cost-effectiveness analysis. We do not provide reserved statutory audit opinions or regulated tax litigation, ensuring clear professional boundaries."
    },
    {
      question: "Can we combine services across Data Protection, Cybersecurity, and Financial Advisory?",
      answer: "Yes. Our Integrated Protection Packages (SME, Business, Professional, Corporate) combine services across all three disciplines under a single point of coordination, offering substantial cost savings compared to purchasing standalone retainers."
    }
  ];

  const boundaries = [
    {
      icon: "gavel",
      title: "Regulatory Independence & Compliance",
      desc: "Our DPO and advisory recommendations are strictly objective and adhere to Zimbabwean statutory law, POTRAZ directives, and international data protection benchmarks."
    },
    {
      icon: "lock",
      title: "Ethical Security Protocols & Strict Scope",
      desc: "All offensive cybersecurity assessments strictly respect defined technical scopes, confidentiality agreements, and data privacy safeguards to prevent system disruption."
    },
    {
      icon: "account_balance",
      title: "Advisory vs. Statutory Separation",
      desc: "Our financial analysis provides executive decision support and valuation modelling. Where statutory audits or formal court representations are required, we collaborate with appropriate accredited practitioners."
    },
    {
      icon: "security",
      title: "Confidentiality & Evidentiary Integrity",
      desc: "Digital forensic investigations adhere to strict chain-of-custody protocols, ensuring evidence remains admissible for board reviews and formal legal proceedings."
    }
  ];

  const AccordionRow = ({ item, isOpen, onToggle, icon }) => (
    <div className="border border-[#F2E5C6] rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center gap-3 p-4 bg-white hover:bg-[#FAF7F2] transition-colors text-left"
      >
        <span className="flex items-center gap-3 min-w-0">
          {icon && <span className="material-symbols-outlined text-[#75162D] flex-shrink-0 text-xl">{icon}</span>}
          <span className="font-bold text-[#3B010B] text-xs sm:text-sm pr-2">{item.question || item.title}</span>
        </span>
        <span className={`material-symbols-outlined text-[#75162D] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-[#FAF7F2] font-light">
              {item.answer || item.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  AccordionRow.propTypes = {
    item: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    icon: PropTypes.string
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#FAF7F2] py-20 font-sans border-b border-[#F2E5C6]/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1 rounded-full border border-[#75162D]/20">
            <span className="material-symbols-outlined text-sm">help_center</span>
            Clarity & Governance
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
            Frequently Asked Questions & Advisory Boundaries
          </h2>
          <p className="text-gray-600 text-sm font-light">
            Clear guidelines on our multidisciplinary engagements, commercial terms, and ethical standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#F2E5C6]">
              <h3 className="text-lg font-bold text-[#3B010B]">
                Engagement & Commercial FAQs
              </h3>
              <button
                onClick={() => setOpenFaq(openFaq === "all" ? null : "all")}
                className="text-xs font-bold uppercase tracking-wider text-[#75162D] hover:text-[#3B010B] transition-colors"
              >
                {openFaq === "all" ? "Collapse All" : "Expand All"}
              </button>
            </div>
            <div className="space-y-2.5">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === "all" || openFaq === index;
                return (
                  <AccordionRow
                    key={index}
                    item={item}
                    isOpen={isOpen}
                    onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                );
              })}
            </div>
          </div>

          {/* Professional Boundaries Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#F2E5C6]">
              <h3 className="text-lg font-bold text-[#3B010B]">
                Professional Boundaries & Ethics
              </h3>
              <button
                onClick={() => setOpenBoundary(openBoundary === "all" ? null : "all")}
                className="text-xs font-bold uppercase tracking-wider text-[#75162D] hover:text-[#3B010B] transition-colors"
              >
                {openBoundary === "all" ? "Collapse All" : "Expand All"}
              </button>
            </div>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Crestara Advisory Group adheres strictly to professional ethics, legal authorization requirements, and clear advisory boundaries across all jurisdictions.
            </p>
            <div className="space-y-2.5">
              {boundaries.map((item, index) => {
                const isOpen = openBoundary === "all" || openBoundary === index;
                return (
                  <AccordionRow
                    key={index}
                    item={item}
                    isOpen={isOpen}
                    onToggle={() => setOpenBoundary(openBoundary === index ? null : index)}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default FAQAndProfessionalBoundaries;

