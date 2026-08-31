import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";

const Collection = () => {
  const [activePillar, setActivePillar] = useState("all");

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
        "Dedicated Director lead (Natasha Zama) + priority escalation"
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
      <section className="bg-[#3B010B] py-20 px-6 md:px-12 text-white animate-hero-gradient relative overflow-hidden border-b border-[#F2D9A0]/20">
        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">grid_view</span>
            Multidisciplinary Practice Catalog
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display">
            Services & <span className="gold-gradient-text">Advisory Packages</span>
          </h1>

          <p className="text-base md:text-xl text-[#F2E5C6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Institutional-grade advisory solutions tailored for Zimbabwean, regional, and international enterprises. Select specialized service packages across our three disciplines or engage unified multi-pillar retainers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5C6] transition-all shadow-xl font-semibold font-display"
            >
              Request Custom Proposal
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20service%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Advisory Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pillar Selection Tabs */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#F2E5C6] shadow-sm py-4 px-6 md:px-12">
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activePillar === tab.id
                  ? "bg-[#3B010B] text-[#F2D9A0] shadow-md"
                  : "bg-[#FAF7F2] text-gray-700 hover:bg-[#F2E5C6]/60 border border-[#F2E5C6]"
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F2E5C6] pb-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full mb-2">
                  <span className="material-symbols-outlined text-sm">security</span>
                  Offensive Security & Defense
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B010B] font-display">
                  Cybersecurity, Pentesting & Digital Forensics
                </h2>
                <p className="text-gray-600 text-sm font-light">
                  EC-Council CEH Practical and CompTIA Security+ certified offensive validation, vulnerability assessments, and digital forensic investigations.
                </p>
              </div>
              <Link to="/cybersecurity" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1">
                <span>View Dedicated Cyber Practice</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cyberServices.map((srv) => (
                <div
                  key={srv.id}
                  className={`rounded-3xl p-7 border transition-all flex flex-col justify-between group ${
                    srv.popular 
                      ? "bg-[#3B010B] text-white border-2 border-[#F2D9A0] shadow-xl relative" 
                      : "bg-white text-gray-800 border-[#F2E5C6] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                  }`}
                >
                  {srv.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F2D9A0] text-[#3B010B] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-sans">
                      Offensive Security Flagship
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        srv.popular ? "bg-white/10 text-[#F2D9A0]" : "bg-[#75162D]/10 text-[#75162D]"
                      }`}>
                        {srv.tag}
                      </span>
                      <span className={`text-[11px] font-medium ${srv.popular ? "text-white/70" : "text-gray-500"}`}>
                        {srv.type}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold font-display ${srv.popular ? "text-white" : "text-[#3B010B] group-hover:text-[#75162D]"} transition-colors`}>
                      {srv.title}
                    </h3>

                    <p className={`text-xs font-light leading-relaxed ${srv.popular ? "text-white/80" : "text-gray-600"}`}>
                      {srv.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${srv.popular ? "text-[#F2D9A0]" : "text-[#75162D]"}`}>
                        Key Value / Benefit:
                      </span>
                      <p className={`text-xs font-light ${srv.popular ? "text-white/90" : "text-gray-700"}`}>
                        {srv.benefits}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                      <span className={`text-[11px] font-bold uppercase tracking-wider block ${srv.popular ? "text-[#F2D9A0]" : "text-[#3B010B]"}`}>
                        Deliverables Include:
                      </span>
                      <ul className="space-y-1.5">
                        {srv.features.map((f, i) => (
                          <li key={i} className="text-xs font-light flex items-start gap-2">
                            <span className={`material-symbols-outlined text-sm flex-shrink-0 mt-0.5 ${
                              srv.popular ? "text-[#F2D9A0]" : "text-[#75162D]"
                            }`}>check_circle</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-black/10 dark:border-white/10">
                    <Link
                      to="/contact"
                      className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display ${
                        srv.popular 
                          ? "bg-[#F2D9A0] text-[#3B010B] hover:bg-[#F2E5C6] shadow-lg" 
                          : "bg-[#3B010B] text-[#F2D9A0] hover:bg-[#75162D] hover:text-white shadow-sm"
                      }`}
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F2E5C6] pb-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full mb-2">
                  <span className="material-symbols-outlined text-sm">policy</span>
                  Regulatory Governance
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B010B] font-display">
                  Data Protection & Outsourced DPO Packages
                </h2>
                <p className="text-gray-600 text-sm font-light">
                  Full statutory compliance with the Data Protection Act [Chapter 12:07] and POTRAZ regulatory directives.
                </p>
              </div>
              <Link to="/data-protection" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1">
                <span>View Dedicated DPO Practice</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProtectionServices.map((srv) => (
                <div
                  key={srv.id}
                  className={`rounded-3xl p-7 border transition-all flex flex-col justify-between group ${
                    srv.popular 
                      ? "bg-[#3B010B] text-white border-2 border-[#F2D9A0] shadow-xl relative" 
                      : "bg-white text-gray-800 border-[#F2E5C6] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                  }`}
                >
                  {srv.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F2D9A0] text-[#3B010B] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-sans">
                      Recommended Retainer
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        srv.popular ? "bg-white/10 text-[#F2D9A0]" : "bg-[#75162D]/10 text-[#75162D]"
                      }`}>
                        {srv.tag}
                      </span>
                      <span className={`text-[11px] font-medium ${srv.popular ? "text-white/70" : "text-gray-500"}`}>
                        {srv.type}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold font-display ${srv.popular ? "text-white" : "text-[#3B010B] group-hover:text-[#75162D]"} transition-colors`}>
                      {srv.title}
                    </h3>

                    <p className={`text-xs font-light leading-relaxed ${srv.popular ? "text-white/80" : "text-gray-600"}`}>
                      {srv.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${srv.popular ? "text-[#F2D9A0]" : "text-[#75162D]"}`}>
                        Key Value / Benefit:
                      </span>
                      <p className={`text-xs font-light ${srv.popular ? "text-white/90" : "text-gray-700"}`}>
                        {srv.benefits}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                      <span className={`text-[11px] font-bold uppercase tracking-wider block ${srv.popular ? "text-[#F2D9A0]" : "text-[#3B010B]"}`}>
                        Deliverables Include:
                      </span>
                      <ul className="space-y-1.5">
                        {srv.features.map((f, i) => (
                          <li key={i} className="text-xs font-light flex items-start gap-2">
                            <span className={`material-symbols-outlined text-sm flex-shrink-0 mt-0.5 ${
                              srv.popular ? "text-[#F2D9A0]" : "text-[#75162D]"
                            }`}>check_circle</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-black/10 dark:border-white/10">
                    <Link
                      to="/contact"
                      className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display ${
                        srv.popular 
                          ? "bg-[#F2D9A0] text-[#3B010B] hover:bg-[#F2E5C6] shadow-lg" 
                          : "bg-[#3B010B] text-[#F2D9A0] hover:bg-[#75162D] hover:text-white shadow-sm"
                      }`}
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F2E5C6] pb-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full mb-2">
                  <span className="material-symbols-outlined text-sm">calculate</span>
                  Financial Intelligence
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B010B] font-display">
                  Financial Analysis, FMVA® Modelling & Dashboards
                </h2>
                <p className="text-gray-600 text-sm font-light">
                  Institutional 3-statement financial models, dynamic DCF company valuations, automated BIDA® dashboards, and fractional CFO advisory.
                </p>
              </div>
              <Link to="/financial-advisory" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1">
                <span>View Dedicated Finance Practice</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {financialServices.map((srv) => (
                <div
                  key={srv.id}
                  className={`rounded-3xl p-7 border transition-all flex flex-col justify-between group ${
                    srv.popular 
                      ? "bg-[#3B010B] text-white border-2 border-[#F2D9A0] shadow-xl relative" 
                      : "bg-white text-gray-800 border-[#F2E5C6] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                  }`}
                >
                  {srv.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F2D9A0] text-[#3B010B] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-sans">
                      Institutional Benchmark
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        srv.popular ? "bg-white/10 text-[#F2D9A0]" : "bg-[#75162D]/10 text-[#75162D]"
                      }`}>
                        {srv.tag}
                      </span>
                      <span className={`text-[11px] font-medium ${srv.popular ? "text-white/70" : "text-gray-500"}`}>
                        {srv.type}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold font-display ${srv.popular ? "text-white" : "text-[#3B010B] group-hover:text-[#75162D]"} transition-colors`}>
                      {srv.title}
                    </h3>

                    <p className={`text-xs font-light leading-relaxed ${srv.popular ? "text-white/80" : "text-gray-600"}`}>
                      {srv.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${srv.popular ? "text-[#F2D9A0]" : "text-[#75162D]"}`}>
                        Key Value / Benefit:
                      </span>
                      <p className={`text-xs font-light ${srv.popular ? "text-white/90" : "text-gray-700"}`}>
                        {srv.benefits}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                      <span className={`text-[11px] font-bold uppercase tracking-wider block ${srv.popular ? "text-[#F2D9A0]" : "text-[#3B010B]"}`}>
                        Deliverables Include:
                      </span>
                      <ul className="space-y-1.5">
                        {srv.features.map((f, i) => (
                          <li key={i} className="text-xs font-light flex items-start gap-2">
                            <span className={`material-symbols-outlined text-sm flex-shrink-0 mt-0.5 ${
                              srv.popular ? "text-[#F2D9A0]" : "text-[#75162D]"
                            }`}>check_circle</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-black/10 dark:border-white/10">
                    <Link
                      to="/contact"
                      className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display ${
                        srv.popular 
                          ? "bg-[#F2D9A0] text-[#3B010B] hover:bg-[#F2E5C6] shadow-lg" 
                          : "bg-[#3B010B] text-[#F2D9A0] hover:bg-[#75162D] hover:text-white shadow-sm"
                      }`}
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F2E5C6] pb-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full mb-2">
                  <span className="material-symbols-outlined text-sm">hub</span>
                  Synergized Protection
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B010B] font-display">
                  Integrated Multi-Pillar Retainers
                </h2>
                <p className="text-gray-600 text-sm font-light">
                  Combine Data Protection, Cybersecurity, and Financial Intelligence under a unified advisory mandate.
                </p>
              </div>
              <Link to="/contact" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] uppercase tracking-wider flex items-center gap-1">
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
                      ? "bg-[#3B010B] text-white shadow-2xl border-2 border-[#F2D9A0] relative"
                      : "bg-white text-gray-800 border border-[#F2E5C6] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F2D9A0] text-[#3B010B] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-sans">
                      Most Popular Suite
                    </div>
                  )}

                  <div className="space-y-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block ${
                      pkg.popular ? "bg-white/10 text-[#F2D9A0] border border-[#F2D9A0]/30" : "bg-[#75162D]/10 text-[#75162D]"
                    }`}>
                      {pkg.tag}
                    </span>

                    <h3 className={`text-xl font-bold font-display ${pkg.popular ? "text-white" : "text-[#3B010B]"}`}>
                      {pkg.title}
                    </h3>

                    <p className={`text-xs font-light leading-relaxed ${pkg.popular ? "text-white/80" : "text-gray-600"}`}>
                      {pkg.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${pkg.popular ? "text-[#F2D9A0]" : "text-[#75162D]"}`}>
                        Key Value / Benefit:
                      </span>
                      <p className={`text-xs font-light ${pkg.popular ? "text-white/90" : "text-gray-700"}`}>
                        {pkg.benefits}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                      <p className={`text-[11px] font-bold uppercase tracking-wider ${pkg.popular ? "text-[#F2D9A0]" : "text-[#75162D]"}`}>
                        Included Disciplines:
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.features.map((f, i) => (
                          <li key={i} className="text-xs font-light flex items-start gap-2">
                            <span className={`material-symbols-outlined text-sm flex-shrink-0 mt-0.5 ${
                              pkg.popular ? "text-[#F2D9A0]" : "text-[#75162D]"
                            }`}>check_circle</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-black/10 dark:border-white/10">
                    <Link
                      to="/contact"
                      className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display ${
                        pkg.popular
                          ? "bg-[#F2D9A0] text-[#3B010B] hover:bg-[#F2E5C6] shadow-lg"
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
        )}

      </div>

      {/* Notice on Professional Boundaries */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="bg-white p-8 rounded-3xl border border-[#F2E5C6] space-y-3">
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
        <div className="bg-[#3B010B] p-10 md:p-14 rounded-3xl text-center text-white space-y-6 border border-[#F2D9A0]/30 shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-extrabold font-display">
            Need a Custom Advisory Proposal or Multi-Entity SLA?
          </h2>
          <p className="text-sm md:text-base text-[#F2E5C6]/90 max-w-2xl mx-auto font-light">
            Our directors will prepare a structured Request for Proposal (RFP) tailored to your operational volume, system infrastructure, and regulatory requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5C6] transition-all shadow-xl font-semibold font-display"
            >
              Request Custom Proposal
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20request%20a%20commercial%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Desk (+263 775 040 725)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;

