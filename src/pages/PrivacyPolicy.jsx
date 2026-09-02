import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaUserCheck, FaGlobeAfrica, FaEnvelope, FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import SEO from "../components/common/SEO";

const PrivacyPolicy = () => {
  const lastUpdated = "1 September 2026";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction & Scope",
      icon: <FaShieldAlt className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            Crestara Advisory Group (&ldquo;Crestara&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a multidisciplinary corporate advisory practice operating across Southern Africa and internationally via <strong>crestaraadvisorygroup.com</strong>.
          </p>
          <p className="leading-relaxed text-gray-700 mt-3">
            We specialize in Data Protection & Outsourced DPO services (POTRAZ compliant), Offensive Cybersecurity & Digital Forensics, and Financial Modelling & Valuation Analysis. We are deeply committed to upholding the highest standards of confidentiality, data integrity, and compliance under the <strong>Data Protection Act [Chapter 12:07]</strong> of Zimbabwe, statutory directives issued by the <strong>Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ)</strong>, and international data protection benchmarks (GDPR / POPIA).
          </p>
        </>
      )
    },
    {
      id: "data-controller",
      title: "2. Data Controller Information",
      icon: <FaLock className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            Crestara Advisory Group is the Data Controller responsible for your personal data collected through our website (<a href="https://www.crestaraadvisorygroup.com" className="text-[#75162D] hover:underline font-medium">www.crestaraadvisorygroup.com</a>), digital quote calculators, client consultation portals, and formal advisory service agreements.
          </p>
          <div className="mt-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#F2E5C6] space-y-2 text-sm text-[#3B010B]">
            <p><strong>Practice Name:</strong> Crestara Advisory Group</p>
            <p><strong>Headquarters / Jurisdiction:</strong> Harare, Zimbabwe (Operating Regionally & Globally)</p>
            <p><strong>Official Website:</strong> crestaraadvisorygroup.com</p>
            <p><strong>Executive Advisory Desk:</strong> <a href="mailto:director@crestaraadvisorygroup.com" className="text-[#75162D] underline">director@crestaraadvisorygroup.com</a></p>
            <p><strong>Data Protection Officer (DPO) Desk:</strong> <a href="mailto:compliance@crestaraadvisorygroup.com" className="text-[#75162D] underline">compliance@crestaraadvisorygroup.com</a></p>
            <p><strong>General Client Desk:</strong> <a href="mailto:info@crestaraadvisorygroup.com" className="text-[#75162D] underline">info@crestaraadvisorygroup.com</a></p>
          </div>
        </>
      )
    },
    {
      id: "data-collected",
      title: "3. Categories of Personal Data We Collect",
      icon: <FaUserCheck className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            In conducting our multidisciplinary engagements, we collect and process the following categories of personal information:
          </p>
          <ul className="list-disc list-inside space-y-2.5 mt-3 text-gray-700">
            <li><strong>Identification & Contact Data:</strong> Full name, professional title, corporate email address, telephone/WhatsApp number, company name, and industry sector.</li>
            <li><strong>Commercial & Scope Data:</strong> Advisory pillar interests, system architecture outlines, data processing volumes, and requested quotation parameters.</li>
            <li><strong>Technical & Penetration Testing Data:</strong> IP addresses, authorized domain targets, cloud environment specifications, and vulnerability logs provided under signed Rules of Engagement (RoE).</li>
            <li><strong>Financial & Valuation Data:</strong> Balance sheets, historical P&L statements, cash-flow projections, and management accounts provided voluntarily for FMVA® financial modelling.</li>
            <li><strong>Digital Forensics Data:</strong> Server logs, memory captures, and forensic artifacts collected strictly under formal evidentiary chain of custody.</li>
            <li><strong>Website Usage & Cookie Data:</strong> Browser type, operating system, anonymous usage metrics, and cookie preference selections.</li>
          </ul>
        </>
      )
    },
    {
      id: "how-we-use-data",
      title: "4. Lawful Bases for Processing",
      icon: <FaGlobeAfrica className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            We process your data strictly under recognized legal bases defined under the Data Protection Act and international privacy frameworks:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
            <div className="p-4 rounded-xl bg-white border border-[#F2E5C6] shadow-sm space-y-2">
              <h4 className="font-bold text-[#75162D] uppercase tracking-wide text-xs">Performance of a Contract</h4>
              <p className="text-gray-600">To execute outsourced DPO retainers, penetration testing simulations, financial models, and corporate SLAs.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#F2E5C6] shadow-sm space-y-2">
              <h4 className="font-bold text-[#75162D] uppercase tracking-wide text-xs">Legitimate Business Interests</h4>
              <p className="text-gray-600">To secure our systems, respond to commercial RFPs, prevent fraud, and maintain professional governance.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#F2E5C6] shadow-sm space-y-2">
              <h4 className="font-bold text-[#75162D] uppercase tracking-wide text-xs">Explicit Consent</h4>
              <p className="text-gray-600">Where you voluntarily submit inquiries or opt into occasional regulatory update communications.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#F2E5C6] shadow-sm space-y-2">
              <h4 className="font-bold text-[#75162D] uppercase tracking-wide text-xs">Legal & Regulatory Mandates</h4>
              <p className="text-gray-600">To fulfill statutory filing requirements, POTRAZ regulatory obligations, and tax reporting requirements.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "cross-border-transfers",
      title: "5. Cross-Border Transfers & Security Safeguards",
      icon: <FaGlobeAfrica className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            Where cross-border data transfers occur between Zimbabwe, regional African hubs, or international cloud infrastructure, Crestara Advisory Group implements robust technical safeguards:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700">
            <li>End-to-end cryptographic encryption (AES-256 in transit and at rest).</li>
            <li>Standard contractual clauses and statutory data transfer agreements.</li>
            <li>Strict role-based access control (RBAC) and non-disclosure agreements with all certified consultants.</li>
          </ul>
        </>
      )
    },
    {
      id: "data-retention",
      title: "6. Data Retention Protocols",
      icon: <FaLock className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            Personal data is retained only for the duration necessary to satisfy the commercial or statutory purposes for which it was obtained:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700">
            <li><strong>Client Engagement & DPO Records:</strong> Retained for 7 years post-contract termination in accordance with commercial statutory regulations.</li>
            <li><strong>General Inquiries & Quotation Requests:</strong> Retained for 24 months before routine secure deletion.</li>
            <li><strong>Penetration Testing & Forensic Artifacts:</strong> Archived in isolated encrypted storage or permanently purged following formal sign-off as specified in the client agreement.</li>
          </ul>
        </>
      )
    },
    {
      id: "your-rights",
      title: "7. Data Subject Rights",
      icon: <FaUserCheck className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            Under the Data Protection Act [Chapter 12:07] and international data protection laws, you have the right to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm text-gray-700">
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#F2E5C6]"><strong>Right to Access:</strong> Request copies of the personal data we hold about you.</div>
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#F2E5C6]"><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete records.</div>
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#F2E5C6]"><strong>Right to Erasure:</strong> Request deletion of data where no statutory override applies.</div>
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#F2E5C6]"><strong>Right to Object:</strong> Object to processing for direct marketing or specific legitimate interests.</div>
          </div>
          <p className="leading-relaxed text-gray-700 mt-4">
            To submit a Data Subject Access Request (DSAR), please email our compliance desk at <a href="mailto:compliance@crestaraadvisorygroup.com" className="text-[#75162D] font-bold hover:underline">compliance@crestaraadvisorygroup.com</a>.
          </p>
        </>
      )
    },
    {
      id: "contact-privacy",
      title: "8. Contact Our DPO & Supervisory Authorities",
      icon: <FaEnvelope className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            If you have questions, feedback, or formal privacy inquiries, please contact our Data Protection Officer:
          </p>
          <div className="mt-4 p-6 rounded-2xl bg-[#3B010B] text-white space-y-4">
            <h4 className="text-sm font-bold text-[#F2D9A0] uppercase tracking-widest font-display">Crestara Advisory Group — DPO & Compliance Desk</h4>
            <p className="text-xs text-[#F2E5C6]/90">Email: <a href="mailto:compliance@crestaraadvisorygroup.com" className="text-[#F2D9A0] hover:underline font-semibold">compliance@crestaraadvisorygroup.com</a></p>
            <p className="text-xs text-[#F2E5C6]/90">Executive Advisory Desk: <a href="mailto:director@crestaraadvisorygroup.com" className="text-[#F2D9A0] hover:underline font-semibold">director@crestaraadvisorygroup.com</a></p>
            <p className="text-xs text-[#F2E5C6]/90">Direct Phone: <a href="tel:+263775040725" className="text-white hover:text-[#F2D9A0]">+263 775 040 725</a></p>
            <div className="flex items-center gap-3 pt-3 border-t border-white/15">
              <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0">
                <img src="/images/potraz-logo-large.png" alt="POTRAZ" className="w-full h-full object-contain" />
              </div>
              <p className="text-xs text-white/80">
                Supervisory Authority: <strong>Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ)</strong> — Data Protection Affairs Division.
              </p>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-32 font-sans">
      <SEO
        title="Privacy Notice | Crestara Advisory Group | Data Protection Act [Chapter 12:07]"
        description="Official Privacy Notice for Crestara Advisory Group (crestaraadvisorygroup.com). Learn how we protect personal information, offensive cyber logs, and financial data under the Data Protection Act."
        keywords="Crestara Privacy Policy, Data Protection Act Zimbabwe, POTRAZ privacy notice, DPO compliance Harare, GDPR POPIA Zimbabwe"
        canonical="https://www.crestaraadvisorygroup.com/privacy-policy"
      />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#FAF7F2] via-[#F2E5C6] to-[#F2D9A0]/60 text-[#3B010B] py-16 px-6 md:px-12 border-b border-[#F2D9A0] relative overflow-hidden animate-hero-gradient">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#75162D] uppercase tracking-widest hover:text-[#3B010B] transition-colors font-display"
          >
            <FaArrowLeft size={12} /> Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-3.5 py-1 rounded-full border border-[#75162D]/30 font-display">
              Legal & Compliance • Part 1
            </span>
            <span className="text-xs text-gray-600">Last Updated: {lastUpdated}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#3B010B] font-display">
            Privacy <span className="burgundy-gradient-text">Notice</span>
          </h1>
          <p className="text-gray-700 max-w-2xl text-sm md:text-base leading-relaxed font-light">
            How Crestara Advisory Group safeguards your personal data, client confidentiality, and advisory records under the Data Protection Act [Chapter 12:07] and POTRAZ directives.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Table of Contents Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-28 bg-white p-6 rounded-2xl border border-[#F2E5C6] shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-[#3B010B] uppercase tracking-wider border-b border-[#FAF7F2] pb-3 font-display">
              Index
            </h3>
            <nav className="space-y-2">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block text-xs text-gray-600 hover:text-[#75162D] hover:font-bold transition-colors py-1 truncate"
                >
                  {sec.title}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-[#FAF7F2] space-y-2">
              <Link
                to="/cookie-policy"
                className="text-xs text-[#75162D] font-bold hover:underline block"
              >
                Cookie Policy &rarr;
              </Link>
              <Link
                to="/terms-of-service"
                className="text-xs text-[#75162D] font-bold hover:underline block"
              >
                Terms of Service &rarr;
              </Link>
              <Link
                to="/disclaimer"
                className="text-xs text-[#75162D] font-bold hover:underline block"
              >
                Services Disclaimer &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="lg:col-span-3 space-y-8">
          {sections.map((section, idx) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-[#F2E5C6] shadow-sm scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-[#FAF7F2] pb-4">
                <div className="w-9 h-9 rounded-xl bg-[#75162D]/10 flex items-center justify-center text-lg">
                  {section.icon}
                </div>
                <h2 className="text-lg md:text-xl font-extrabold text-[#3B010B] uppercase tracking-tight font-display">
                  {section.title}
                </h2>
              </div>
              <div className="text-sm">{section.content}</div>
            </motion.section>
          ))}

          {/* Quick Help Box */}
          <div className="bg-[#3B010B] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#F2D9A0]/30">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white font-display">Have a privacy question?</h3>
              <p className="text-xs text-[#F2E5C6]/80 mt-1 font-light">Our Data Protection Officer is available to assist with DSARs or compliance inquiries.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:compliance@crestaraadvisorygroup.com"
                className="px-5 py-3 rounded-xl bg-[#F2D9A0] text-[#3B010B] font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5C6] transition-all shadow-md font-semibold"
              >
                Email DPO Desk
              </a>
              <a
                href="https://wa.me/263775040725"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
                title="WhatsApp Us"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

