import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceAnimatedSVG from "../common/ServiceAnimatedSVG";

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Advisory Pillars", icon: "dashboard" },
    { id: "cyber", label: "Cybersecurity & Pentesting", icon: "security" },
    { id: "dpo", label: "Data Protection & DPO", icon: "privacy_tip" },
    { id: "finance", label: "Financial Advisory & Modelling", icon: "analytics" },
    { id: "integrated", label: "Integrated Protection Retainers", icon: "hub" },
  ];

  const servicesData = [
    // --- PILLAR: CYBERSECURITY & FORENSICS ---
    {
      category: "cyber",
      title: "Ethical Hacking & Offensive Pentesting",
      type: "Offensive Security Simulation",
      badge: "CEH Practical Certified",
      icon: "lock_open",
      desc: "Simulated real-world adversary attacks targeting web applications, APIs, cloud environments, and internal networks to identify and validate exploitable vulnerabilities before malicious threat actors strike.",
      benefits: [
        "OWASP Top 10 web & API exploitation validation",
        "Proof-of-concept evidence for critical logic bugs",
        "Formal Rules of Engagement (RoE) adherence",
        "Technical remediation blueprint & executive risk report",
        "Complimentary 30-day remediation re-test"
      ],
      link: "/services"
    },
    {
      category: "cyber",
      title: "Cyber Security Health Check & Vulnerability Audit",
      type: "Baseline Security Diagnostic",
      badge: "Security Baseline",
      icon: "health_and_safety",
      desc: "Methodical diagnostic review of external attack surface, user permissions, password policies, endpoints, email DNS authentication (SPF, DKIM, DMARC), and backup readiness.",
      benefits: [
        "External perimeter vulnerability scans",
        "Endpoint & cloud backup verification",
        "Access control & privilege escalation audit",
        "Prioritized technical vulnerability remediation roadmap"
      ],
      link: "/services"
    },
    {
      category: "cyber",
      title: "Digital Forensics & Incident Response",
      type: "Forensic Investigation & Containment",
      badge: "Forensics & Response",
      icon: "fingerprint",
      desc: "Rapid containment of active security incidents, digital evidence preservation under strict chain of custody, compromise assessment, and board-admissible forensic reporting.",
      benefits: [
        "Root cause analysis of security breaches",
        "Forensic timeline reconstruction & disk/memory analysis",
        "Threat actor isolation & system containment",
        "Admissible Board & Litigation Forensic Report"
      ],
      link: "/services"
    },
    {
      category: "cyber",
      title: "Cyber Defense Retainer SLA",
      type: "Continuous Defense Retainer",
      badge: "Active Defense",
      icon: "security",
      desc: "Ongoing proactive security management, recurring vulnerability assessments, patch advisory, security policy updates, and priority incident response desk.",
      benefits: [
        "Scheduled external vulnerability scans & patch audits",
        "Direct CISO/Security Lead advisory consultation",
        "Priority emergency incident containment support",
        "Quarterly threat intelligence & risk posture briefing"
      ],
      link: "/services"
    },

    // --- PILLAR: DATA PROTECTION & DPO ---
    {
      category: "dpo",
      title: "Statutory Compliance Starter Pack",
      type: "Baseline Readiness Package",
      badge: "POTRAZ Fast-Track",
      icon: "task_alt",
      desc: "Complete statutory onboarding package establishing foundational compliance under the Data Protection Act [Chapter 12:07] and POTRAZ regulatory directives.",
      benefits: [
        "Processing inventory & data mapping registers",
        "Customized corporate privacy policies & staff notices",
        "POTRAZ compliance readiness & registration support",
        "Executive data protection gap report"
      ],
      link: "/services"
    },
    {
      category: "dpo",
      title: "Outsourced DPO Governance Retainers",
      type: "Designated DPO Retainer (Essential / Business / Pro)",
      badge: "Most Popular",
      icon: "verified_user",
      desc: "Appointment of certified Data Protection Officers to govern your privacy lifecycle, conduct Data Protection Impact Assessments (DPIAs), and liaise with POTRAZ.",
      benefits: [
        "Named Outsourced DPO representation & regulatory liaison",
        "Data Protection Impact Assessments (DPIAs) for new platforms",
        "Data Subject Access Request (DSAR) handling protocols",
        "Quarterly compliance reviews & board reporting"
      ],
      link: "/services"
    },

    // --- PILLAR: FINANCIAL ADVISORY & MODELLING ---
    {
      category: "finance",
      title: "FMVA® 3-Statement Financial Modelling",
      type: "Institutional Financial Model",
      badge: "FMVA Certified",
      icon: "calculate",
      desc: "Formulaic, dynamic 3-statement financial models, DCF company valuations, and capital project investment appraisals built to institutional CFI standards.",
      benefits: [
        "Integrated dynamic forecast (P&L, Balance Sheet, Cash Flow)",
        "Scenario & sensitivity analysis (Bull, Base, Bear)",
        "DCF, IRR, NPV & payback period analytics",
        "Bankable investor & board-ready presentation spreadsheets"
      ],
      link: "/services"
    },
    {
      category: "finance",
      title: "BIDA® Executive Management Dashboards",
      type: "BI & Analytics Architecture",
      badge: "Business Intelligence",
      icon: "query_stats",
      desc: "Automated PowerBI and Excel management dashboards consolidating real-time financial KPIs, gross margin velocity, working capital, and cash runway.",
      benefits: [
        "Interactive executive KPI dashboards (PowerBI/Excel)",
        "Automated financial and operational metric tracking",
        "Cost-effectiveness & unit economics variance analysis",
        "Executive decision-support framework for leadership"
      ],
      link: "/services"
    },
    {
      category: "finance",
      title: "Fractional CFO & Advisory Retainer",
      type: "Executive Financial Leadership",
      badge: "Fractional CFO",
      icon: "trending_up",
      desc: "Ongoing senior financial advisory, budget-vs-actual variance tracking, working capital optimization, and direct executive board counsel.",
      benefits: [
        "Monthly performance & margin profitability reviews",
        "Budget-vs-actual variance analysis & forecasts",
        "Working capital cycle & cash management advice",
        "Monthly strategic consultation with senior practice leads"
      ],
      link: "/services"
    },

    // --- PILLAR: INTEGRATED PROTECTION RETAINERS ---
    {
      category: "integrated",
      title: "Crestara SME Protection Retainer",
      type: "Multi-Disciplinary SME Suite",
      badge: "All-in-One SME",
      icon: "shield",
      desc: "Unified DPO compliance oversight, baseline cybersecurity monitoring, and monthly financial performance reviews under a single advisory agreement.",
      benefits: [
        "Outsourced DPO governance & register updates",
        "Quarterly vulnerability checks & cyber incident advice",
        "Monthly financial health & working capital review",
        "Single multidisciplinary point of accountability"
      ],
      link: "/services"
    },
    {
      category: "integrated",
      title: "Crestara Business & Corporate Retainers",
      type: "Comprehensive Enterprise Suite",
      badge: "Enterprise Suite",
      icon: "military_tech",
      desc: "Comprehensive outsourced DPO representation, offensive penetration testing simulations, advanced financial models, and dedicated executive governance.",
      benefits: [
        "Full-scale enterprise DPO & POTRAZ regulatory liaison",
        "Offensive penetration testing & priority incident desk",
        "Advanced financial modelling, valuation & forecasting",
        "Unified board-ready risk & governance reporting"
      ],
      link: "/services"
    }
  ];

  const [openDeliverables, setOpenDeliverables] = useState({});

  const toggleDeliverables = (title) => {
    setOpenDeliverables(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const isCardOpen = (title) => {
    // Defaults to closed (false), toggles open on user click
    return Boolean(openDeliverables[title]);
  };

  const filteredServices = activeTab === "all" 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF7F2] font-sans border-b border-[#F2E5C6]/60">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
            <span className="material-symbols-outlined text-sm">grid_view</span>
            Core Capabilities & Advisory Packages
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#3B010B] tracking-tight font-display">
            Multidisciplinary Advisory Packages
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Tailored advisory solutions across Cybersecurity, Data Protection, and Financial Advisory. Choose individual specialized packages or synchronize your operations with integrated retainers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all ${
                activeTab === cat.id
                  ? "bg-[#3B010B] text-[#F2D9A0] shadow-lg scale-105 border border-[#F2D9A0]/30"
                  : "bg-white text-[#3B010B] border border-[#F2E5C6]/80 hover:bg-[#F2E5C6]/20 hover:border-[#75162D]"
              }`}
            >
              <span className="material-symbols-outlined text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-[#F2E5C6]/60 shadow-lg hover:shadow-2xl hover:border-[#75162D]/50 transition-all flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  {/* TOP TEXT: Badges & Headings */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-3">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#75162D] bg-[#75162D]/10 px-3 py-1 rounded-full border border-[#75162D]/20">
                        {service.badge}
                      </span>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider font-mono bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#F2D9A0]/50">
                        {service.category}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-[#75162D] font-bold uppercase tracking-wider block">{service.type}</span>
                      <h3 className="text-xl font-bold text-[#3B010B] group-hover:text-[#75162D] transition-colors leading-snug font-display mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* CENTER IMAGE: Unobstructed Animated SVG Illustration Stage */}
                  <div className="w-full h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-[#FAF7F2] via-white to-[#F2E5C6]/40 border border-[#F2D9A0] p-4 flex items-center justify-center shadow-inner group-hover:border-[#75162D]/60 transition-all">
                    <ServiceAnimatedSVG
                      type={service.title + " " + service.badge + " " + service.category}
                      className="w-24 h-24 sm:w-28 sm:h-28"
                    />
                  </div>

                  {/* BOTTOM TEXT: Description */}
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="pt-2 border-t border-[#FAF7F2]">
                    <button
                      type="button"
                      onClick={() => toggleDeliverables(service.title)}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F2E5C6]/50 border border-[#F2D9A0]/60 transition-all text-left cursor-pointer group/drop"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#3B010B] block font-display">
                          Key Deliverables & Benefits:
                        </span>
                        <span className="text-[10px] font-bold text-[#75162D] bg-[#75162D]/10 px-2 py-0.5 rounded-full">
                          {service.benefits.length}
                        </span>
                      </div>
                      <span className={`material-symbols-outlined text-[#75162D] text-lg transition-transform duration-300 ${isCardOpen(service.title) ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isCardOpen(service.title) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden space-y-2 pt-3"
                        >
                          {service.benefits.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700 p-1.5 rounded-lg hover:bg-[#FAF7F2] transition-colors">
                              <span className="material-symbols-outlined text-[#75162D] text-sm mt-0.5 flex-shrink-0">check_circle</span>
                              <span className="font-light leading-snug">{feat}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F2E5C6]/60 flex gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-[#3B010B] text-[#F2D9A0] py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center hover:bg-[#75162D] hover:text-white transition-all shadow-md font-display"
                  >
                    Request Scope / Proposal
                  </Link>
                  <Link
                    to={service.link}
                    className="px-4 py-3 rounded-xl border border-[#F2E5C6]/80 text-[#3B010B] hover:bg-[#FAF7F2] text-xs font-bold transition-all flex items-center justify-center"
                    title="View Practice Details"
                  >
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Scope Card */}
        <div className="bg-[#3B010B] text-white p-6 sm:p-8 rounded-3xl border border-[#F2D9A0]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 flex-1">
            <span className="text-xs font-bold text-[#F2D9A0] uppercase tracking-widest font-display">Enterprise & Conglomerate Scoping</span>
            <p className="text-xs text-white/80 font-light leading-relaxed">
              Require a tailored combination of offensive penetration testing, outsourced DPO coverage, and complex financial valuations? Our advisory team will structure a customized proposal tailored to your operational scale.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#F2D9A0] text-[#3B010B] px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#F2E5C6] transition-all whitespace-nowrap shadow-lg font-display"
          >
            Request Custom Scope
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;


