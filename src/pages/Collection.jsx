import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";
import ServiceAnimatedSVG from "../components/common/ServiceAnimatedSVG";

const Collection = () => {
  const [activePillar, setActivePillar] = useState("all");
  const [openDeliverables, setOpenDeliverables] = useState({});

  const toggleDeliverables = (id) => {
    setOpenDeliverables(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isCardOpen = (id) => {
    // Defaults to closed (false), toggles open on user click
    return Boolean(openDeliverables[id]);
  };

  const cyberServices = [
    {
      id: "cy-pentest",
      title: "Offensive Penetration Testing & Ethical Hacking",
      type: "Web, API, Cloud & Network Simulation",
      tag: "CEH PRACTICAL CERTIFIED",
      popular: true,
      desc: "Authorized offensive security simulations emulating real-world threat actors to rigorously discover, exploit, and remediate technical security vulnerabilities before breach.",
      features: [
        "OWASP Top 10 web & API exploitation validation",
        "Authentication & business logic bypass verification",
        "Formal Rules of Engagement (RoE) & signed legal authorization",
        "Detailed Proof-of-Concept findings & code remediation guidance",
        "Complimentary re-test within 30 days of remediation"
      ],
      benefits: "Defends customer trust, secures transactional gateways, and provides board-level security validation.",
      idealFor: "Fintechs, e-commerce platforms, mobile apps, banks & SaaS providers",
      link: "/cybersecurity"
    },
    {
      id: "cy-health",
      title: "Cyber Security Health Check",
      type: "Baseline Security Diagnostic",
      tag: "HYGIENE AUDIT",
      desc: "Essential vulnerability evaluation identifying critical security weaknesses in your external and internal attack surface.",
      features: [
        "External perimeter vulnerability scanning",
        "Email security audit (SPF, DKIM, DMARC configuration)",
        "Password & access control policy review",
        "Executive Risk Summary & prioritized remediation roadmap"
      ],
      benefits: "Fast, comprehensive overview of immediate security risks and rapid hygiene fixes.",
      idealFor: "SMEs wanting immediate cyber posture visibility & baseline assurance",
      link: "/cybersecurity"
    },
    {
      id: "cy-sme-assess",
      title: "SME Vulnerability Assessment",
      type: "Comprehensive Network Audit",
      tag: "VULNERABILITY AUDIT",
      desc: "In-depth automated and manual vulnerability assessment across networks, endpoints, and internet-facing assets.",
      features: [
        "Network & infrastructure port scanning",
        "Patch level & software exposure audit",
        "WiFi & local network configuration review",
        "Prioritized technical vulnerability remediation report"
      ],
      benefits: "Identifies unpatched systems, open ports, and configuration flaws across internal IT environments.",
      idealFor: "Growing businesses with on-premise servers, remote workers, or cloud instances",
      link: "/cybersecurity"
    },
    {
      id: "cy-forensics",
      title: "Digital Forensics & Incident Response (DFIR)",
      type: "Emergency Response & Investigation",
      tag: "INCIDENT INVESTIGATION",
      desc: "Forensic root-cause investigation following a suspected breach, malware event, internal fraud, or data leak.",
      features: [
        "Strict digital chain-of-custody preservation",
        "Memory, disk, and server log forensic analysis",
        "Threat actor containment & evidence extraction",
        "Admissible Board & Litigation Forensic Report"
      ],
      benefits: "Contains threat actors, limits business disruption, and produces legally valid evidence.",
      idealFor: "Organizations facing active cyber threats, data leaks, or employee misconduct",
      link: "/cybersecurity"
    },
    {
      id: "cy-retainer",
      title: "Proactive Cyber Defense Retainer SLA",
      type: "Continuous Defense Retainer",
      tag: "ACTIVE RESILIENCE",
      desc: "Ongoing proactive security oversight, recurring vulnerability scans, patch guidance, and priority incident response readiness.",
      features: [
        "Scheduled external vulnerability scans & attack surface monitoring",
        "Direct CISO/Security Lead advisory consultation",
        "Priority emergency incident containment support",
        "Staff security awareness and phishing simulations"
      ],
      benefits: "Continuous security assurance without the overhead of an in-house SOC.",
      idealFor: "Organizations maintaining ongoing cyber resilience and vendor compliance",
      link: "/cybersecurity"
    }
  ];

  const dataProtectionServices = [
    {
      id: "dp-starter",
      title: "Compliance Starter Pack",
      type: "Once-Off Implementation",
      tag: "COMPLIANCE LAUNCH",
      desc: "Comprehensive initial setup to establish baseline legal readiness under the Data Protection Act [Chapter 12:07].",
      features: [
        "Data Protection Policy creation & customization",
        "Staff Privacy Notice & employee handbook addendum",
        "Website Privacy Policy & Cookie compliance setup",
        "Initial Data Inventory & Processing Register",
        "POTRAZ compliance readiness checklist"
      ],
      benefits: "Establishes baseline compliance and protects against regulatory non-compliance fines.",
      idealFor: "SMEs & Startups needing baseline POTRAZ compliance",
      link: "/data-protection"
    },
    {
      id: "dp-retainer",
      title: "Outsourced DPO Retainers (Essential / Business / Pro)",
      type: "Continuous Privacy Retainer",
      tag: "MOST POPULAR",
      popular: true,
      desc: "Appointed outsourced Data Protection Officer representation, continuous processing register maintenance, DPIA execution, and direct POTRAZ liaison.",
      features: [
        "Named Outsourced DPO representation & regulatory liaison",
        "Data Protection Impact Assessments (DPIAs) for new platforms",
        "Data Subject Access Request (DSAR) handling protocols",
        "Quarterly compliance reviews & executive board reporting",
        "Staff data privacy workshops and training"
      ],
      benefits: "Full regulatory compliance under certified DPO governance without hiring full-time legal counsel.",
      idealFor: "Mid-sized companies, financial services, healthcare & retail merchants",
      link: "/data-protection"
    },
    {
      id: "dp-enterprise",
      title: "Enterprise DPO & Cross-Border Governance",
      type: "Custom Enterprise Scope",
      tag: "BESPOKE GOVERNANCE",
      desc: "Tailored data protection governance for conglomerates, multinationals, and critical infrastructure entities handling high-velocity consumer data.",
      features: [
        "Custom dedicated advisory hours allocation",
        "Multi-entity & cross-border GDPR / POPIA / POTRAZ harmonization",
        "On-site compliance audits & executive briefings",
        "24/7 priority emergency escalation line for breach notification"
      ],
      benefits: "Harmonizes regional and international data protection laws across diverse corporate subsidiaries.",
      idealFor: "Banks, telecom aggregators, insurance firms & conglomerates",
      link: "/data-protection"
    }
  ];

  const financialServices = [
    {
      id: "fin-model",
      title: "FMVA® Financial Modelling & DCF Valuations",
      type: "Institutional Financial Model",
      tag: "FMVA® CERTIFIED",
      popular: true,
      desc: "Dynamic, formulaic 3-statement financial models, DCF valuations, and capital project investment appraisals built to institutional CFI standards.",
      features: [
        "Integrated 3-Statement Forecast (P&L, Balance Sheet, Cash Flow)",
        "Scenario & sensitivity analysis (Bull, Base, Bear)",
        "DCF, IRR, NPV & payback period calculations",
        "Bankable investor & board-ready financial model (.xlsx)"
      ],
      benefits: "Provides mathematical rigor for fundraising, debt financing, and strategic investment appraisals.",
      idealFor: "Fundraising, bank loan proposals & capital expenditure planning",
      link: "/financial-advisory"
    },
    {
      id: "fin-dash",
      title: "BIDA® Executive Dashboards & KPI Analytics",
      type: "BI & Analytics Architecture",
      tag: "DATA ANALYTICS",
      desc: "Interactive PowerBI / Excel executive dashboards tracking real-time KPIs, margin velocity, and operational metrics.",
      features: [
        "Automated financial KPI dashboard setup",
        "Sales, gross margin & cash runway visualizations",
        "Data pipeline cleaning & multi-source consolidation",
        "Executive leadership training session included"
      ],
      benefits: "Real-time visibility into liquidity, sales trends, and cost efficiency for executive decision-makers.",
      idealFor: "Leadership teams wanting data-driven operational visibility",
      link: "/financial-advisory"
    },
    {
      id: "fin-retainer",
      title: "Fractional CFO & Advisory Retainers",
      type: "Monthly Retainer",
      tag: "FRACTIONAL CFO",
      desc: "Ongoing financial management advisory, monthly variance reporting, working capital optimization, and strategic capital counsel.",
      features: [
        "Monthly management account review & variance analysis",
        "Rolling cash-flow forecasts & working capital management",
        "Strategic board meeting attendance & executive briefing",
        "Pricing & unit economics optimization"
      ],
      benefits: "Senior CFO-level guidance and board-ready reporting without the cost of a full-time executive.",
      idealFor: "Growing enterprises seeking rigorous fiscal governance",
      link: "/financial-advisory"
    }
  ];

  const integratedPackages = [
    {
      id: "int-sme",
      title: "Crestara SME Package",
      type: "All-in-One Multi-Pillar Retainer",
      tag: "ALL-IN-ONE SME",
      desc: "Essential compliance, cybersecurity, and financial intelligence bundled into a single high-value retainer.",
      features: [
        "Data Protection: Essential DPO Retainer (POTRAZ compliant)",
        "Cybersecurity: Monthly vulnerability scan & cyber health check",
        "Financial Advisory: Monthly financial health check & cash-flow advisory",
        "Single dedicated account coordinator & 48hr SLA"
      ],
      benefits: "Complete baseline protection across regulatory, cyber, and financial fronts for small enterprises.",
      idealFor: "SMEs needing complete cross-pillar protection"
    },
    {
      id: "int-biz",
      title: "Crestara Business Package",
      type: "Growth Multi-Pillar Retainer",
      popular: true,
      tag: "MOST POPULAR SUITE",
      desc: "Our most comprehensive package for scaling enterprises requiring robust privacy, offensive defense, and financial models.",
      features: [
        "Data Protection: Business DPO Retainer (named DPO + DPIA support)",
        "Cybersecurity: SME Vulnerability Assessment + quarterly security reviews",
        "Financial Advisory: Business Financial Analysis + quarterly model update",
        "Priority 24hr SLA & executive consultation hours"
      ],
      benefits: "Active governance and proactive defense across all commercial risk vectors.",
      idealFor: "Mid-sized corporations, medical centres, and commercial leaders"
    },
    {
      id: "int-corp",
      title: "Crestara Corporate & Enterprise Package",
      type: "Enterprise Multi-Pillar Retainer",
      tag: "ENTERPRISE GOVERNANCE",
      desc: "Comprehensive enterprise-grade advisory covering full outsourced DPO, continuous offensive cyber defense, and fractional CFO operations.",
      features: [
        "Data Protection: Enterprise DPO Retainer & multi-entity POTRAZ compliance",
        "Cybersecurity: Comprehensive offensive pentesting + continuous security operations",
        "Financial Advisory: Fractional CFO & board advisory + monthly KPI dashboards",
        "Dedicated Practice Lead + priority escalation"
      ],
      benefits: "Complete executive governance and strategic oversight for mission-critical organizations.",
      idealFor: "Financial institutions, conglomerates, and multinational entities"
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="Services & Advisory Packages | Crestara Advisory Group"
        description="Explore Crestara Advisory Group's comprehensive service packages across Cybersecurity & Pentesting, Data Protection & Outsourced DPO (POTRAZ compliant), and FMVA® Financial Modelling."
        keywords="Crestara services, cybersecurity services Zimbabwe, penetration testing Harare, outsourced DPO Zimbabwe, POTRAZ compliance packages, FMVA financial modelling"
        canonical="https://www.crestaraadvisorygroup.com/services"
      />

      {/* Hero Header */}
      <section className="py-20 px-6 md:px-12 text-[#3B010B] relative overflow-hidden border-b border-[#F2D9A0]">
        {/* Background Cyber Operations Photo Layer & Moving Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <img
            src="/images/hero-services.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-100"
          />
          {/* Animated Moving Champagne/Gold Gradient Overlay */}
          <div className="absolute inset-0 animate-moving-gradient opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/75 via-transparent to-[#F2E5C6]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF7F2]/30 to-[#FAF7F2]" />
        </div>

        {/* Background Texture Overlays */}
        <div className="absolute inset-0 bg-texture-grain opacity-80 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-texture-grid opacity-50 pointer-events-none z-[1]" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-md shadow-xs font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">grid_view</span>
            Multidisciplinary Practice Catalog
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-[#3B010B]">
            Services & <span className="burgundy-gradient-text">Advisory Packages</span>
          </h1>

          <p className="text-base md:text-xl text-[#560B18]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Institutional-grade advisory solutions tailored for Zimbabwean, regional, and international enterprises. Select specialized service packages across our three disciplines or engage unified multi-pillar retainers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#3B010B] hover:text-[#F2D9A0] hover:-translate-y-0.5 transition-all shadow-xl font-semibold font-display border border-[#F2D9A0]/40"
            >
              Request Custom Proposal
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20service%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3B010B] border-2 border-[#25D366]/50 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white hover:border-[#25D366] hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-md font-display"
            >
              <FaWhatsapp className="text-[#25D366] text-lg flex-shrink-0" />
              <span>WhatsApp Advisory Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pillar Selection Tabs */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#F2D9A0] shadow-sm py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 md:gap-3 overflow-x-auto no-scrollbar py-1">
          {[
            { id: "all", label: "All Packages", icon: "dashboard" },
            { id: "cy", label: "Cybersecurity & Pentesting", icon: "security" },
            { id: "dp", label: "Data Protection & DPO", icon: "policy" },
            { id: "fin", label: "Financial Analysis & FMVA®", icon: "calculate" },
            { id: "int", label: "Integrated Retainers", icon: "hub" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePillar(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap font-display ${
                activePillar === tab.id
                  ? "bg-[#75162D] text-[#F2E5C6] shadow-md border border-[#F2D9A0]/40 scale-105"
                  : "bg-white text-gray-800 hover:bg-[#F2E5C6]/60 hover:border-[#75162D] border border-[#F2D9A0]"
              }`}
            >
              <span className="material-symbols-outlined text-base">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Catalog Display */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-20">

        {/* 1. Cybersecurity & Forensics */}
        {(activePillar === "all" || activePillar === "cy") && (
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-md h-40 sm:h-48">
              <img
                src="/images/cyber-operations.jpg"
                alt="Cybersecurity & Offensive Security Operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B010B]/90 via-[#75162D]/70 to-transparent flex items-center p-6 sm:p-10">
                <div className="space-y-2 text-white max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-[#F2D9A0]/30 font-display">
                    <span className="material-symbols-outlined text-sm">security</span>
                    Pillar 01 • Offensive Validation
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                    Cybersecurity, Pentesting & Digital Forensics
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F2E5C6]/90 font-light hidden sm:block">
                    EC-Council CEH Practical and CompTIA Security+ certified offensive simulations and forensic diagnostics.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F2D9A0] pb-3">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm font-light">
                  Select an authorized testing scope or continuous defense retainer below.
                </p>
              </div>
              <Link to="/contact" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1 font-display">
                <span>Request Cyber Consultation</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cyberServices.map((srv) => (
                <div
                  key={srv.id}
                  className={`rounded-3xl p-7 border transition-all flex flex-col justify-between group ${
                    srv.popular 
                      ? "bg-gradient-to-b from-[#F2E5C6]/60 via-white to-[#F2D9A0]/70 text-[#3B010B] border-2 border-[#75162D] shadow-xl relative" 
                      : "bg-white text-gray-800 border-[#F2D9A0] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                  }`}
                >
                  {srv.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#75162D] text-[#F2E5C6] text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md font-sans border border-[#F2D9A0]">
                      Offensive Security Flagship
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* TOP TEXT: Badge, Type & Title */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                          srv.popular ? "bg-[#75162D] text-[#F2E5C6]" : "bg-[#75162D]/10 text-[#75162D]"
                        }`}>
                          {srv.tag}
                        </span>
                        <span className="text-[10px] font-medium text-gray-500">
                          {srv.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-[#3B010B] group-hover:text-[#75162D] transition-colors leading-snug">
                        {srv.title}
                      </h3>
                    </div>

                    {/* CENTER IMAGE: Unobstructed Animated SVG Stage */}
                    <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-[#FAF7F2] via-white to-[#F2E5C6]/40 border border-[#F2D9A0] p-4 flex items-center justify-center shadow-inner group-hover:border-[#75162D]/60 transition-all">
                      <ServiceAnimatedSVG type={srv.id + " " + srv.title} className="w-24 h-24 sm:w-28 sm:h-28" />
                    </div>

                    {/* BOTTOM TEXT: Description */}
                    <p className="text-xs font-light leading-relaxed text-gray-600">
                      {srv.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#F2E5C6]/40 border border-[#F2D9A0] space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-[#75162D]">
                        Key Value / Benefit:
                      </span>
                      <p className="text-xs font-light text-gray-800">
                        {srv.benefits}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-black/5">
                      <button
                        type="button"
                        onClick={() => toggleDeliverables(srv.id)}
                        className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F2E5C6]/50 border border-[#F2D9A0]/60 transition-all text-left cursor-pointer group/drop"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider block text-[#3B010B] font-display">
                            Deliverables Include:
                          </span>
                          <span className="text-[10px] font-bold text-[#75162D] bg-[#75162D]/10 px-2 py-0.5 rounded-full">
                            {srv.features.length}
                          </span>
                        </div>
                        <span className={`material-symbols-outlined text-[#75162D] text-base transition-transform duration-300 ${isCardOpen(srv.id) ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isCardOpen(srv.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden space-y-1.5 pt-3"
                          >
                            <ul className="space-y-1.5">
                              {srv.features.map((f, i) => (
                                <li key={i} className="text-xs font-light flex items-start gap-2 text-gray-700 p-1 rounded-md hover:bg-[#FAF7F2]">
                                  <span className="material-symbols-outlined text-sm flex-shrink-0 mt-0.5 text-[#75162D]">check_circle</span>
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-black/5">
                    <Link
                      to="/contact"
                      className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] shadow-md border border-[#F2D9A0]/30"
                    >
                      <span>Request Security Scope</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Data Protection & Outsourced DPO */}
        {(activePillar === "all" || activePillar === "dp") && (
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-md h-44 sm:h-52">
              <img
                src="/images/data-protection.jpg"
                alt="Digital Data Protection, Encryption & Regulatory Compliance"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B010B]/90 via-[#75162D]/60 to-black/25 flex items-center p-6 sm:p-10">
                <div className="space-y-2 text-white max-w-2xl">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-[#F2D9A0]/30 font-display">
                      <span className="material-symbols-outlined text-sm">policy</span>
                      Pillar 02 • POTRAZ Statutory Compliance
                    </div>
                    <div className="h-6 px-2 bg-white/95 rounded-md flex items-center shadow-sm">
                      <img src="/images/potraz-logo-large.png" alt="POTRAZ" className="h-4 object-contain" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                    Data Protection & Outsourced DPO Packages
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F2E5C6]/90 font-light hidden sm:block">
                    Full statutory alignment with the Data Protection Act [Chapter 12:07] and POTRAZ regulatory directives.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F2D9A0] pb-3">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm font-light">
                  Appoint an independent accredited DPO or launch your organization-wide compliance roadmap.
                </p>
              </div>
              <Link to="/contact" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1 font-display">
                <span>Appoint DPO / Request Roadmap</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProtectionServices.map((srv) => (
                <div
                  key={srv.id}
                  className={`rounded-3xl p-7 border transition-all flex flex-col justify-between group ${
                    srv.popular 
                      ? "bg-gradient-to-b from-[#F2E5C6]/60 via-white to-[#F2D9A0]/70 text-[#3B010B] border-2 border-[#75162D] shadow-xl relative" 
                      : "bg-white text-gray-800 border-[#F2D9A0] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                  }`}
                >
                  {srv.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#75162D] text-[#F2E5C6] text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md font-sans border border-[#F2D9A0]">
                      Recommended Retainer
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* TOP TEXT: Badge, Type & Title */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                          srv.popular ? "bg-[#75162D] text-[#F2E5C6]" : "bg-[#75162D]/10 text-[#75162D]"
                        }`}>
                          {srv.tag}
                        </span>
                        <span className="text-[10px] font-medium text-gray-500">
                          {srv.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-[#3B010B] group-hover:text-[#75162D] transition-colors leading-snug">
                        {srv.title}
                      </h3>
                    </div>

                    {/* CENTER IMAGE: Unobstructed Animated SVG Stage */}
                    <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-[#FAF7F2] via-white to-[#F2E5C6]/40 border border-[#F2D9A0] p-4 flex items-center justify-center shadow-inner group-hover:border-[#75162D]/60 transition-all">
                      <ServiceAnimatedSVG type={srv.id + " " + srv.title} className="w-24 h-24 sm:w-28 sm:h-28" />
                    </div>

                    {/* BOTTOM TEXT: Description */}
                    <p className="text-xs font-light leading-relaxed text-gray-600">
                      {srv.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#F2E5C6]/40 border border-[#F2D9A0] space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-[#75162D]">
                        Key Value / Benefit:
                      </span>
                      <p className="text-xs font-light text-gray-800">
                        {srv.benefits}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-black/5">
                      <button
                        type="button"
                        onClick={() => toggleDeliverables(srv.id)}
                        className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F2E5C6]/50 border border-[#F2D9A0]/60 transition-all text-left cursor-pointer group/drop"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider block text-[#3B010B] font-display">
                            Deliverables Include:
                          </span>
                          <span className="text-[10px] font-bold text-[#75162D] bg-[#75162D]/10 px-2 py-0.5 rounded-full">
                            {srv.features.length}
                          </span>
                        </div>
                        <span className={`material-symbols-outlined text-[#75162D] text-base transition-transform duration-300 ${isCardOpen(srv.id) ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isCardOpen(srv.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden space-y-1.5 pt-3"
                          >
                            <ul className="space-y-1.5">
                              {srv.features.map((f, i) => (
                                <li key={i} className="text-xs font-light flex items-start gap-2 text-gray-700 p-1 rounded-md hover:bg-[#FAF7F2]">
                                  <span className="material-symbols-outlined text-sm flex-shrink-0 mt-0.5 text-[#75162D]">check_circle</span>
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-black/5">
                    <Link
                      to="/contact"
                      className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] shadow-md border border-[#F2D9A0]/30"
                    >
                      <span>Appoint DPO / Request Scope</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Financial Analysis & Valuation Models */}
        {(activePillar === "all" || activePillar === "fin") && (
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-md h-40 sm:h-48">
              <img
                src="/images/financial-analytics.jpg"
                alt="Financial Analysis & FMVA Financial Modelling"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B010B]/90 via-[#75162D]/70 to-transparent flex items-center p-6 sm:p-10">
                <div className="space-y-2 text-white max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-[#F2D9A0]/30 font-display">
                    <span className="material-symbols-outlined text-sm">calculate</span>
                    Pillar 03 • Quantitative Capital Intelligence
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                    Financial Analysis, FMVA® Modelling & Dashboards
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F2E5C6]/90 font-light hidden sm:block">
                    Institutional 3-statement models, dynamic DCF valuations, and executive BIDA® analytics dashboards.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F2D9A0] pb-3">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm font-light">
                  Commission bankable models or fractional CFO management reporting.
                </p>
              </div>
              <Link to="/contact" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1 font-display">
                <span>Commission Financial Advisory</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {financialServices.map((srv) => (
                <div
                  key={srv.id}
                  className={`rounded-3xl p-7 border transition-all flex flex-col justify-between group ${
                    srv.popular 
                      ? "bg-gradient-to-b from-[#F2E5C6]/60 via-white to-[#F2D9A0]/70 text-[#3B010B] border-2 border-[#75162D] shadow-xl relative" 
                      : "bg-white text-gray-800 border-[#F2D9A0] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                  }`}
                >
                  {srv.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#75162D] text-[#F2E5C6] text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md font-sans border border-[#F2D9A0]">
                      Institutional Benchmark
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* TOP TEXT: Badge, Type & Title */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                          srv.popular ? "bg-[#75162D] text-[#F2E5C6]" : "bg-[#75162D]/10 text-[#75162D]"
                        }`}>
                          {srv.tag}
                        </span>
                        <span className="text-[10px] font-medium text-gray-500">
                          {srv.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-[#3B010B] group-hover:text-[#75162D] transition-colors leading-snug">
                        {srv.title}
                      </h3>
                    </div>

                    {/* CENTER IMAGE: Unobstructed Animated SVG Stage */}
                    <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-[#FAF7F2] via-white to-[#F2E5C6]/40 border border-[#F2D9A0] p-4 flex items-center justify-center shadow-inner group-hover:border-[#75162D]/60 transition-all">
                      <ServiceAnimatedSVG type={srv.id + " " + srv.title} className="w-24 h-24 sm:w-28 sm:h-28" />
                    </div>

                    {/* BOTTOM TEXT: Description */}
                    <p className="text-xs font-light leading-relaxed text-gray-600">
                      {srv.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#F2E5C6]/40 border border-[#F2D9A0] space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-[#75162D]">
                        Key Value / Benefit:
                      </span>
                      <p className="text-xs font-light text-gray-800">
                        {srv.benefits}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-black/5">
                      <button
                        type="button"
                        onClick={() => toggleDeliverables(srv.id)}
                        className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F2E5C6]/50 border border-[#F2D9A0]/60 transition-all text-left cursor-pointer group/drop"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider block text-[#3B010B] font-display">
                            Deliverables Include:
                          </span>
                          <span className="text-[10px] font-bold text-[#75162D] bg-[#75162D]/10 px-2 py-0.5 rounded-full">
                            {srv.features.length}
                          </span>
                        </div>
                        <span className={`material-symbols-outlined text-[#75162D] text-base transition-transform duration-300 ${isCardOpen(srv.id) ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isCardOpen(srv.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden space-y-1.5 pt-3"
                          >
                            <ul className="space-y-1.5">
                              {srv.features.map((f, i) => (
                                <li key={i} className="text-xs font-light flex items-start gap-2 text-gray-700 p-1 rounded-md hover:bg-[#FAF7F2]">
                                  <span className="material-symbols-outlined text-sm flex-shrink-0 mt-0.5 text-[#75162D]">check_circle</span>
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-black/5">
                    <Link
                      to="/contact"
                      className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] shadow-md border border-[#F2D9A0]/30"
                    >
                      <span>Commission Financial Model</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Integrated Retainer Packages */}
        {(activePillar === "all" || activePillar === "int") && (
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-md h-40 sm:h-48">
              <img
                src="/images/advisory-team.jpg"
                alt="Integrated Corporate Governance Retainers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B010B]/90 via-[#75162D]/70 to-transparent flex items-center p-6 sm:p-10">
                <div className="space-y-2 text-white max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-[#F2D9A0]/30 font-display">
                    <span className="material-symbols-outlined text-sm">hub</span>
                    Synergized Enterprise Architecture
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                    Integrated Multi-Pillar Retainers
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F2E5C6]/90 font-light hidden sm:block">
                    Unified coordination spanning Data Protection Officer mandates, Offensive Security, and Financial Intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F2D9A0] pb-3">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm font-light">
                  Single-point advisory coordination with substantial commercial efficiencies.
                </p>
              </div>
              <Link to="/contact" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1 font-display">
                <span>Request Custom Retainer Scope</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integratedPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                    pkg.popular
                      ? "bg-gradient-to-b from-[#F2E5C6]/60 via-white to-[#F2D9A0]/70 text-[#3B010B] shadow-xl border-2 border-[#75162D] relative"
                      : "bg-white text-gray-800 border border-[#F2D9A0] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#75162D] text-[#F2E5C6] text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md font-sans border border-[#F2D9A0]">
                      Most Popular Suite
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* TOP TEXT: Badge & Title */}
                    <div className="space-y-1.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                        pkg.popular ? "bg-[#75162D] text-[#F2E5C6]" : "bg-[#75162D]/10 text-[#75162D]"
                      }`}>
                        {pkg.tag}
                      </span>
                      <h3 className="text-xl font-bold font-display text-[#3B010B] leading-snug">
                        {pkg.title}
                      </h3>
                    </div>

                    {/* CENTER IMAGE: Unobstructed Animated SVG Stage */}
                    <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-[#FAF7F2] via-white to-[#F2E5C6]/40 border border-[#F2D9A0] p-4 flex items-center justify-center shadow-inner group-hover:border-[#75162D]/60 transition-all">
                      <ServiceAnimatedSVG type={pkg.id + " " + pkg.title} className="w-24 h-24 sm:w-28 sm:h-28" />
                    </div>

                    {/* BOTTOM TEXT: Description */}
                    <p className="text-xs font-light leading-relaxed text-gray-600">
                      {pkg.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#F2E5C6]/40 border border-[#F2D9A0] space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-[#75162D]">
                        Key Value / Benefit:
                      </span>
                      <p className="text-xs font-light text-gray-800">
                        {pkg.benefits}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-black/5">
                      <button
                        type="button"
                        onClick={() => toggleDeliverables(pkg.id)}
                        className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F2E5C6]/50 border border-[#F2D9A0]/60 transition-all text-left cursor-pointer group/drop"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider block text-[#3B010B] font-display">
                            Included Disciplines:
                          </span>
                          <span className="text-[10px] font-bold text-[#75162D] bg-[#75162D]/10 px-2 py-0.5 rounded-full">
                            {pkg.features.length}
                          </span>
                        </div>
                        <span className={`material-symbols-outlined text-[#75162D] text-base transition-transform duration-300 ${isCardOpen(pkg.id) ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isCardOpen(pkg.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden space-y-1.5 pt-3"
                          >
                            <ul className="space-y-1.5">
                              {pkg.features.map((f, i) => (
                                <li key={i} className="text-xs font-light flex items-start gap-2 text-gray-700 p-1 rounded-md hover:bg-[#FAF7F2]">
                                  <span className="material-symbols-outlined text-sm flex-shrink-0 mt-0.5 text-[#75162D]">check_circle</span>
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-black/5">
                    <Link
                      to="/contact"
                      className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] shadow-md border border-[#F2D9A0]/30"
                    >
                      <span>Request Retainer SLA</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Notice on Professional Boundaries */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="bg-white p-8 rounded-3xl border border-[#F2D9A0] space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#75162D] font-bold text-xs uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>Professional Boundaries & Regulatory Authorization</span>
          </div>
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            All services are delivered under formal, structured client engagement agreements. POTRAZ and other official regulatory registration levies are separate statutory disbursements. Ethical hacking and penetration testing engagements strictly require formal written authorization and signed Rules of Engagement (RoE) prior to test execution. Financial advisory services encompass decision modelling, valuations, and management support.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="bg-gradient-to-br from-[#F2E5C6] via-white to-[#F2D9A0]/70 p-10 md:p-14 rounded-3xl text-center text-[#3B010B] space-y-6 border-2 border-[#F2D9A0] shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-extrabold font-display text-[#3B010B]">
            Need a Custom Advisory Proposal or Multi-Entity SLA?
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto font-light">
            Our advisory team will prepare a structured Request for Proposal (RFP) tailored to your operational volume, system infrastructure, and regulatory requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all shadow-xl font-semibold font-display border border-[#F2D9A0]/30"
            >
              Request Custom Proposal
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20request%20a%20commercial%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3B010B] border-2 border-[#25D366]/50 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white hover:border-[#25D366] hover:shadow-xl transition-all flex items-center gap-2 shadow-md font-display"
            >
              <FaWhatsapp className="text-[#25D366] text-lg flex-shrink-0" />
              <span>WhatsApp Desk (+263 775 040 725)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;

