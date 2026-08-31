import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";

const Cybersecurity = () => {
  const securityPillars = [
    {
      icon: "lock_open",
      title: "Offensive Penetration Testing",
      desc: "Simulating real-world cyber adversary attacks against web applications, APIs, cloud instances, and corporate networks (OWASP Top 10)."
    },
    {
      icon: "policy",
      title: "Vulnerability Assessments",
      desc: "Methodical identification, classification, and remediation prioritization of security weaknesses across internal and perimeter assets."
    },
    {
      icon: "fingerprint",
      title: "Digital Forensics & Breach Investigation",
      desc: "Root-cause analysis, forensic evidence preservation under strict chain of custody, and board-admissible investigative reporting."
    },
    {
      icon: "security",
      title: "Cyber Retainers & Incident Response",
      desc: "Continuous proactive security management, automated scanning, periodic re-testing, and rapid incident response readiness."
    }
  ];

  const packages = [
    {
      title: "Cyber Health Check",
      type: "Baseline Security Diagnostic",
      desc: "Essential vulnerability evaluation identifying critical security weaknesses in your external attack surface.",
      benefit: "Fast, comprehensive overview of immediate security risks with quick-win hygiene recommendations.",
      features: [
        "External perimeter vulnerability scan",
        "Email security audit (SPF, DKIM, DMARC)",
        "Password & access control policy review",
        "Executive Risk Summary & remediation roadmap"
      ]
    },
    {
      title: "SME Vulnerability Assessment",
      type: "Comprehensive Network Audit",
      desc: "In-depth automated and manual vulnerability assessment across networks, endpoints, and server infrastructure.",
      benefit: "Deep scan identifying unpatched software, exposed ports, and configuration flaws.",
      features: [
        "Network port & service scanning",
        "Patch level & software exposure audit",
        "WiFi & local network configuration review",
        "Prioritized technical vulnerability remediation report"
      ]
    },
    {
      title: "Web & API Penetration Testing",
      type: "Offensive Security Simulation",
      popular: true,
      desc: "Authorized offensive penetration testing simulated by CEH Practical certified security professionals.",
      benefit: "Proves real-world exploitability of vulnerabilities with reproducible proof-of-concept evidence.",
      features: [
        "OWASP Top 10 web & API exploitation",
        "Authentication & business logic bypass testing",
        "Formal Rules of Engagement (RoE)",
        "Proof-of-Concept findings & code remediation guidance",
        "Complimentary re-test within 30 days"
      ]
    },
    {
      title: "Digital Forensics & Incident Response",
      type: "Emergency Investigation",
      desc: "Forensic root-cause investigation following a suspected breach, internal fraud, or data compromise.",
      benefit: "Immediate threat containment with board-admissible, legally valid chain-of-custody evidence.",
      features: [
        "Strict digital chain-of-custody preservation",
        "Memory, disk, and server log forensic analysis",
        "Threat actor containment & evidence extraction",
        "Admissible Board & Litigation Forensic Report"
      ]
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="Cybersecurity & Digital Forensics | CEH & Security+ Certified | Crestara Advisory Group"
        description="Offensive penetration testing, vulnerability assessments, and digital forensics by EC-Council CEH and CompTIA Security+ certified professionals across Zimbabwe and Southern Africa."
        keywords="Penetration testing Zimbabwe, Cybersecurity Harare, CEH Practical Zimbabwe, Vulnerability assessment, Digital forensics Harare, Incident response Zimbabwe"
        canonical="https://www.crestaraadvisorygroup.com/cybersecurity"
      />

      {/* Hero Section */}
      <section className="bg-[#3B010B] py-20 px-6 md:px-12 text-white animate-hero-gradient relative overflow-hidden border-b border-[#F2D9A0]/20">
        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">security</span>
            Pillar 02 • Offensive Defense & Forensics
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display">
            Cybersecurity & <span className="gold-gradient-text">Offensive Security</span>
          </h1>

          <p className="text-base md:text-xl text-[#F2E5C6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Ethical hacking, authorized web application penetration testing, vulnerability diagnostics, and digital forensic investigations led by EC-Council CEH Practical and CompTIA Security+ certified specialists.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5C6] transition-all shadow-xl font-semibold font-display"
            >
              Request Penetration Test Scope
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20Cybersecurity%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Cyber Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm">terminal</span>
            Offensive Security Operations
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
            Rigorous Defense Through Offensive Validation
          </h2>
          <p className="text-gray-600 text-sm font-light leading-relaxed">
            We identify vulnerabilities before malicious threat actors exploit them, delivering actionable remediation roadmaps tailored to your IT team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityPillars.map((pillar, idx) => (
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

      {/* Cybersecurity Packages */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-[#F2E5C6]/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm">shield</span>
              Cybersecurity Packages
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
              Technical Assessment & Testing Packages
            </h2>
            <p className="text-gray-600 text-sm font-light">
              Structured assessment scopes with defined deliverables, executive reports, and complimentary re-testing included.
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
                    Most Requested
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

                  <ul className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
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

                <div className="pt-6 mt-4 border-t border-black/10 dark:border-white/10">
                  <Link
                    to="/contact"
                    className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display ${
                      pkg.popular
                        ? "bg-[#F2D9A0] text-[#3B010B] hover:bg-[#F2E5C6]"
                        : "bg-[#3B010B] text-[#F2D9A0] hover:bg-[#75162D] hover:text-white"
                    }`}
                  >
                    <span>Request Scope / RoE</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules of Engagement & Ethical Hacking Notice */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-white p-8 rounded-3xl border border-[#F2E5C6] space-y-2">
          <div className="flex items-center gap-2 text-[#75162D] font-bold text-xs uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>Ethical Hacking Authorization & Legal Boundaries</span>
          </div>
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            All penetration testing, vulnerability assessments, and offensive cyber simulations are conducted exclusively under formal, written legal authorization. Clients must execute our formal Rules of Engagement (RoE) verifying legal ownership or explicit administrative control over target domains, IP blocks, and infrastructure before any testing begins.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;

