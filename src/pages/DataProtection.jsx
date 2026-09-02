import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";

const DataProtection = () => {
  const [openDeliverables, setOpenDeliverables] = useState({});

  const toggleDeliverables = (title) => {
    setOpenDeliverables(prev => ({
      ...prev,
      [title]: prev[title] === undefined ? false : !prev[title]
    }));
  };

  const isCardOpen = (title) => {
    return openDeliverables[title] === undefined ? true : openDeliverables[title];
  };
  const packages = [
    {
      title: "Compliance Starter Pack",
      type: "Baseline Statutory Onboarding",
      desc: "Baseline statutory readiness for SMEs launching data privacy governance under the Data Protection Act.",
      benefit: "Fast-tracks POTRAZ registration readiness and delivers custom policy frameworks within 10 business days.",
      features: [
        "Data Protection Policy creation & customization",
        "Staff Privacy Notice & employee handbook addendum",
        "Website Privacy & Cookie Policy",
        "Initial Processing Register / Data Inventory setup",
        "POTRAZ compliance readiness checklist"
      ]
    },
    {
      title: "Essential DPO Retainer",
      type: "Continuous Privacy Retainer",
      desc: "Ongoing outsourced privacy support for small firms with low-to-medium data volumes.",
      benefit: "Designated outsourced DPO point of contact for compliance oversight and DSAR guidance.",
      features: [
        "Dedicated advisory hours allocation",
        "POTRAZ compliance oversight & registry updates",
        "Quarterly compliance reviews",
        "Data Subject Access Request (DSAR) guidance",
        "Staff awareness advisory"
      ]
    },
    {
      title: "Business DPO Retainer",
      type: "Comprehensive DPO Retainer",
      popular: true,
      desc: "Full-spectrum outsourced DPO coverage for growing enterprises handling substantial consumer or employee data.",
      benefit: "Active processing monitoring, quarterly DPIAs, vendor risk reviews, and emergency POTRAZ breach escalation.",
      features: [
        "Dedicated senior DPO advisory hours",
        "Named Outsourced DPO representation",
        "1 DPIA (Data Protection Impact Assessment) per quarter",
        "Bi-annual compliance reviews & audit prep",
        "Vendor & 3rd-party contract privacy reviews",
        "Incident response & POTRAZ breach escalation support"
      ]
    },
    {
      title: "Professional DPO Retainer",
      type: "Enterprise Privacy Governance",
      desc: "Comprehensive privacy governance for fintechs, telecom aggregators, and data-heavy enterprises.",
      benefit: "Full-scale governance, board reporting, staff training workshops, and direct regulatory representation.",
      features: [
        "Comprehensive DPO advisory allocation",
        "DPO representation & direct regulatory liaison",
        "Regular DPIAs for all new digital systems & products",
        "Quarterly formal board compliance reports",
        "Comprehensive staff data privacy workshops",
        "Emergency data breach management line"
      ]
    }
  ];

  const corePillars = [
    {
      icon: "gavel",
      title: "POTRAZ Regulatory Compliance",
      desc: "Ensuring full statutory adherence with the Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ) and the Data Protection Act [Chapter 12:07]."
    },
    {
      icon: "assignment",
      title: "Data Protection Impact Assessments (DPIAs)",
      desc: "Rigorous technical and operational risk assessments prior to launching new software, customer platforms, biometric systems, or AI tools."
    },
    {
      icon: "hub",
      title: "Cross-Border & GDPR Harmonization",
      desc: "Harmonizing local compliance frameworks with international benchmarks including GDPR and POPIA for multinational operations."
    },
    {
      icon: "security_update_warning",
      title: "Breach Notification & Incident Response",
      desc: "Rapid escalation protocols, regulatory breach reporting to POTRAZ within mandatory statutory windows, and data subject communication."
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="Data Protection & Outsourced DPO Services | POTRAZ Compliant | Crestara Advisory Group"
        description="Certified Outsourced Data Protection Officer (DPO) retainers and POTRAZ compliance advisory. Policy frameworks, DPIAs, processing registers, and privacy audits across Zimbabwe and Southern Africa."
        keywords="Data Protection Officer Zimbabwe, Outsourced DPO, POTRAZ compliance, DPIA assessment Harare, Data Protection Act Chapter 12:07, GDPR POPIA compliance Zimbabwe"
        canonical="https://www.crestaraadvisorygroup.com/data-protection"
      />

      {/* Hero Section */}
      <section className="bg-[#3B010B] py-20 px-6 md:px-12 text-white animate-hero-gradient relative overflow-hidden border-b border-[#F2D9A0]/20">
        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">policy</span>
            Pillar 01 • Regulatory Governance
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display">
            Data Protection & <span className="gold-gradient-text">Outsourced DPO</span>
          </h1>

          <p className="text-base md:text-xl text-[#F2E5C6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Statutory compliance with the Data Protection Act and POTRAZ directives. Appoint certified Data Protection Officers to govern your processing registers, DPIAs, and cross-border data flows.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5C6] transition-all shadow-xl font-semibold font-display"
            >
              Appoint Outsourced DPO
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20DPO%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp DPO Desk</span>
            </a>
          </div>

          {/* Statutory Regulatory Alignment Seal */}
          <div className="pt-6 max-w-2xl mx-auto">
            <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-[#F2D9A0] shadow-xl flex items-center gap-4 text-left">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-xl p-2 border border-[#F2D9A0]/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                <img
                  src="/images/potraz-logo-large.png"
                  alt="POTRAZ - Postal and Telecommunications Regulatory Authority of Zimbabwe"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1 text-[#3B010B]">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#75162D] bg-[#75162D]/10 px-2.5 py-0.5 rounded-full font-display">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Statutory Regulatory Jurisdiction
                </div>
                <h3 className="text-sm sm:text-base font-extrabold font-display leading-tight">
                  Data Protection Act [Chapter 12:07]
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-600 font-light">
                  Our Outsourced DPO mandates are structured in strict alignment with POTRAZ regulatory directives, registration guidelines, and statutory processing audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Comprehensive Privacy Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
            Strategic Data Privacy Architecture
          </h2>
          <p className="text-gray-600 text-sm font-light leading-relaxed">
            Protecting sensitive personal data, consumer trust, and corporate reputations through methodical regulatory adherence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-6 rounded-3xl border border-[#F2E5C6] shadow-sm hover:shadow-lg hover:border-[#75162D] transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#3B010B] text-[#F2D9A0] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">{pillar.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-[#3B010B] font-display">{pillar.title}</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DPO Retainers */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-[#F2E5C6]/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm">privacy_tip</span>
              DPO Service Packages
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
              Outsourced DPO Retainer Packages
            </h2>
            <p className="text-gray-600 text-sm font-light">
              Tailored governance scopes for continuous regulatory compliance and risk mitigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? "bg-[#3B010B] text-white shadow-2xl border-2 border-[#F2D9A0] relative"
                    : "bg-[#FAF7F2] text-[#3B010B] border border-[#F2E5C6] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F2D9A0] text-[#3B010B] text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md font-sans">
                    Recommended Retainer
                  </div>
                )}

                <div className="space-y-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                    pkg.popular ? "bg-white/10 text-[#F2D9A0]" : "bg-[#75162D]/10 text-[#75162D]"
                  }`}>
                    {pkg.type}
                  </span>

                  <h3 className={`text-xl font-bold font-display ${pkg.popular ? "text-white" : "text-[#3B010B]"}`}>
                    {pkg.title}
                  </h3>

                  <p className={`text-xs font-light leading-relaxed ${pkg.popular ? "text-white/80" : "text-gray-600"}`}>
                    {pkg.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    <span className={`text-[10px] font-bold uppercase tracking-wider block ${pkg.popular ? "text-[#F2D9A0]" : "text-[#75162D]"}`}>
                      Key Benefit:
                    </span>
                    <p className={`text-xs font-light mt-0.5 ${pkg.popular ? "text-white/90" : "text-gray-700"}`}>
                      {pkg.benefit}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/10 dark:border-white/10">
                    <button
                      type="button"
                      onClick={() => toggleDeliverables(pkg.title)}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-xl border transition-all text-left cursor-pointer group/drop ${
                        pkg.popular
                          ? "bg-white/10 hover:bg-white/20 border-white/20 text-white"
                          : "bg-white hover:bg-[#F2E5C6]/50 border-[#F2D9A0]/60 text-[#3B010B]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider block font-display">
                          Deliverables ({pkg.features.length})
                        </span>
                      </div>
                      <span className={`material-symbols-outlined text-base transition-transform duration-300 ${
                        pkg.popular ? "text-[#F2D9A0]" : "text-[#75162D]"
                      } ${isCardOpen(pkg.title) ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isCardOpen(pkg.title) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden space-y-1.5 pt-3"
                        >
                          <ul className="space-y-1.5">
                            {pkg.features.map((f, i) => (
                              <li key={i} className="text-xs font-light flex items-start gap-2 p-1 rounded-md">
                                <span className={`material-symbols-outlined text-sm flex-shrink-0 mt-0.5 ${
                                  pkg.popular ? "text-[#F2D9A0]" : "text-[#75162D]"
                                }`}>check_circle</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-black/10 dark:border-white/10">
                  <Link
                    to="/contact"
                    className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display ${
                      pkg.popular
                        ? "bg-[#F2D9A0] text-[#3B010B] hover:bg-[#F2E5C6]"
                        : "bg-[#3B010B] text-[#F2D9A0] hover:bg-[#75162D] hover:text-white"
                    }`}
                  >
                    <span>Request Retainer SLA</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Fees Clarification */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-white p-8 rounded-3xl border border-[#F2E5C6] space-y-2">
          <div className="flex items-center gap-2 text-[#75162D] font-bold text-xs uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-base">info</span>
            <span>POTRAZ Statutory Fees Notice</span>
          </div>
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            Our retainer packages reflect professional advisory time and outsourced DPO governance services. Any official statutory registration fees or annual levies mandated by POTRAZ under the Data Protection Act are separate statutory disbursements payable directly by the client organization.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DataProtection;

