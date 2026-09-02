import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFileContract, FaBalanceScale, FaHandshake, FaShieldAlt, FaExclamationTriangle, FaEnvelope, FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import SEO from "../components/common/SEO";

const TermsOfService = () => {
  const lastUpdated = "1 September 2026";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <FaHandshake className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) and <strong>Crestara Advisory Group</strong> (&ldquo;Crestara&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating via <strong>crestaraadvisorygroup.com</strong>.
          </p>
          <p className="leading-relaxed text-gray-700 mt-3">
            By accessing or using our website, submitting requests for advisory proposals, engaging our outsourced DPO retainers, commissioning penetration testing assessments, or requesting financial models, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </>
      )
    },
    {
      id: "scope-of-services",
      title: "2. Multidisciplinary Scope of Services",
      icon: <FaFileContract className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            Crestara Advisory Group delivers specialized corporate advisory across three synchronized disciplines:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700">
            <li><strong>Data Protection & Outsourced DPO:</strong> Regulatory compliance under the Data Protection Act [Chapter 12:07], POTRAZ liaison, DPIA execution, processing registers, and privacy policy drafting.</li>
            <li><strong>Offensive Cybersecurity & Digital Forensics:</strong> Authorized web/API penetration testing, vulnerability assessments, forensic evidence collection, and security retainers.</li>
            <li><strong>Financial Modelling & Valuation Analysis:</strong> FMVA® dynamic 3-statement financial models, BIDA® KPI dashboards, DCF valuations, and fractional CFO advisory.</li>
          </ul>
        </>
      )
    },
    {
      id: "engagement-structure",
      title: "3. Engagement Structure & Service Level Agreements",
      icon: <FaBalanceScale className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            <strong>Website Inquiries:</strong> Submitting an inquiry through our quotation calculator or WhatsApp desk constitutes an exploratory scoping request and does not bind either party until a formal contract is executed.
          </p>
          <p className="leading-relaxed text-gray-700 mt-3">
            <strong>Formal Engagement:</strong> Formal advisory retainers or fixed-scope projects commence only upon the mutual execution of an official <em>Letter of Engagement</em>, <em>Scope of Work (SOW)</em>, or <em>Rules of Engagement (RoE)</em> detailing deliverables, timelines, and commercial consideration.
          </p>
        </>
      )
    },
    {
      id: "client-obligations",
      title: "4. Client Obligations & Authorization",
      icon: <FaShieldAlt className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            To enable Crestara Advisory Group to execute engagements with rigorous precision, the Client agrees to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700">
            <li>Provide accurate, complete organizational data, processing registers, and financial records necessary for the engagement scope.</li>
            <li>Execute formal written authorization and Rules of Engagement (RoE) confirming legal ownership or control of all target assets prior to cybersecurity testing.</li>
            <li>Designate a primary executive contact authorized to approve deliverables, remediation roadmaps, and regulatory filings.</li>
          </ul>
        </>
      )
    },
    {
      id: "confidentiality",
      title: "5. Strict Professional Confidentiality",
      icon: <FaShieldAlt className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            We treat all client vulnerability findings, source code architectures, financial statements, and board communications with absolute confidentiality.
          </p>
          <p className="leading-relaxed text-gray-700 mt-3">
            Neither party shall disclose confidential information belonging to the other without prior written consent, except where disclosure is mandated by law, court order, or regulatory authority (e.g. POTRAZ statutory breach notification rules).
          </p>
        </>
      )
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property & Deliverable Licensing",
      icon: <FaBalanceScale className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            All proprietary methodology frameworks, automated penetration testing scripts, and advisory templates remain the intellectual property of Crestara Advisory Group.
          </p>
          <p className="leading-relaxed text-gray-700 mt-3">
            Upon full settlement of agreed professional fees, the Client is granted a perpetual, non-exclusive, irrevocable license to use, modify, and implement all custom reports, DPIA audits, policy manuals, and FMVA® financial models delivered specifically for their organization.
          </p>
        </>
      )
    },
    {
      id: "limitation-liability",
      title: "7. Professional Boundaries & Limitation of Liability",
      icon: <FaExclamationTriangle className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            <strong>Advisory Nature:</strong> Crestara Advisory Group provides independent technical, regulatory, and financial management analysis. Our DPO services assist with compliance but do not guarantee immunity from statutory penalties. Our financial models provide decision support and do not guarantee future profitability.
          </p>
          <p className="leading-relaxed text-gray-700 mt-3">
            <strong>Liability Cap:</strong> To the maximum extent permitted by applicable law, our total aggregate liability arising out of any engagement shall be limited to the total professional fees paid by the Client to Crestara Advisory Group under the applicable Scope of Work in the twelve (12) months preceding the claim.
          </p>
        </>
      )
    },
    {
      id: "fees-payment",
      title: "8. Commercial Fees, Billing & Disbursements",
      icon: <FaFileContract className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            Professional fees are quoted in United States Dollars (USD) as standard, or agreed major currency equivalent.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700">
            <li>Fixed-scope assessments (e.g. Cyber Health Check, Financial Valuation) are billed upon commencement or defined milestones.</li>
            <li>Outsourced DPO and Fractional CFO Retainers are billed monthly or quarterly in advance.</li>
            <li>Official statutory fees, filing levies, and registration charges payable to POTRAZ are separate disbursements payable directly by the client.</li>
          </ul>
        </>
      )
    },
    {
      id: "governing-law",
      title: "9. Governing Law & Dispute Resolution",
      icon: <FaBalanceScale className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            These Terms, and any dispute or claim arising out of them, shall be governed by and construed in accordance with the <strong>laws of Zimbabwe</strong>.
          </p>
          <p className="leading-relaxed text-gray-700 mt-3">
            Both parties agree to first seek amicable settlement through executive negotiation and commercial mediation before initiating formal legal proceedings in the competent courts of Harare, Zimbabwe.
          </p>
        </>
      )
    },
    {
      id: "contact-terms",
      title: "10. Contact & Engagement Governance",
      icon: <FaEnvelope className="text-[#75162D]" />,
      content: (
        <>
          <p className="leading-relaxed text-gray-700">
            For questions regarding these Terms of Service or to execute an enterprise advisory contract, contact our executive desk:
          </p>
          <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-[#F2E5C6] via-white to-[#F2D9A0]/80 border border-[#F2D9A0] text-[#3B010B] space-y-3">
            <h4 className="text-sm font-bold text-[#75162D] uppercase tracking-widest font-display">Crestara Advisory Group — Executive Desk</h4>
            <p className="text-xs text-gray-700">Email: <a href="mailto:director@crestaraadvisorygroup.com" className="text-[#75162D] hover:underline font-semibold font-mono">director@crestaraadvisorygroup.com</a></p>
            <p className="text-xs text-gray-700">Compliance Desk: <a href="mailto:compliance@crestaraadvisorygroup.com" className="text-[#75162D] hover:underline font-semibold font-mono">compliance@crestaraadvisorygroup.com</a></p>
            <p className="text-xs text-gray-700">Direct Phone: <a href="tel:+263775040725" className="text-[#75162D] hover:underline font-mono font-semibold">+263 775 040 725</a></p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-32 font-sans">
      <SEO
        title="Terms of Service | Crestara Advisory Group"
        description="Official Terms of Service for Crestara Advisory Group (crestaraadvisorygroup.com). Review our multidisciplinary engagement terms, SLA standards, confidentiality, and governance principles."
        keywords="Crestara Terms of Service, DPO advisory contract Zimbabwe, penetration testing engagement agreement, financial modelling terms Harare"
        canonical="https://www.crestaraadvisorygroup.com/terms-of-service"
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
              Legal & Compliance • Part 3
            </span>
            <span className="text-xs text-gray-600">Last Updated: {lastUpdated}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#3B010B] font-display">
            Terms of <span className="burgundy-gradient-text">Service</span>
          </h1>
          <p className="text-gray-700 max-w-2xl text-sm md:text-base leading-relaxed font-light">
            Clear, transparent terms governing our multidisciplinary advisory retainers, offensive cybersecurity assessments, and financial modelling services.
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
                to="/privacy-policy"
                className="text-xs text-[#75162D] font-bold hover:underline block"
              >
                Privacy Notice &rarr;
              </Link>
              <Link
                to="/cookie-policy"
                className="text-xs text-[#75162D] font-bold hover:underline block"
              >
                Cookie Policy &rarr;
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

        {/* Terms Sections */}
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
              <h3 className="text-lg font-bold uppercase tracking-tight text-white font-display">Questions about engagement terms?</h3>
              <p className="text-xs text-[#F2E5C6]/80 mt-1 font-light">Speak directly with our advisory team regarding client agreements and custom SLAs.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:director@crestaraadvisorygroup.com"
                className="px-5 py-3 rounded-xl bg-[#F2D9A0] text-[#3B010B] font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5C6] transition-all shadow-md font-semibold"
              >
                Email Advisory Desk
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

export default TermsOfService;

