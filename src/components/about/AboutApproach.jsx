import { motion } from "framer-motion";

const AboutApproach = () => {
  const steps = [
    {
      number: 1,
      title: "Discover & Scope",
      desc: "Comprehensive review of statutory status, digital infrastructure, or financial models.",
      details: "Every engagement begins with an empirical discovery audit examining data processing activities, network perimeters, or fiscal structures.",
      icon: "search"
    },
    {
      number: 2,
      title: "Assess & Benchmark",
      desc: "Evaluating regulatory gaps, vulnerabilities, and valuation sensitivities.",
      details: "We assess risks against POTRAZ guidelines, ISO/IEC cybersecurity standards, and FMVA® financial principles.",
      icon: "assessment"
    },
    {
      number: 3,
      title: "Strategic Roadmap",
      desc: "Designing tailored policy, security, and financial interventions.",
      details: "We formulate an actionable engagement plan, defining technical deliverables, timelines, and reporting schedules.",
      icon: "edit_note"
    },
    {
      number: 4,
      title: "Deploy & Implement",
      desc: "Direct execution of DPO governance, security controls, and KPI dashboards.",
      details: "We draft compliance registers, execute authorized penetration testing, and configure management BI dashboards.",
      icon: "engineering"
    },
    {
      number: 5,
      title: "Verify & Remediate",
      desc: "Objective validation and re-testing of controls.",
      details: "We conduct post-remediation verification scans, DPIA reviews, and financial sensitivity stress tests.",
      icon: "verified"
    },
    {
      number: 6,
      title: "Retainer & Board Reporting",
      desc: "Proactive, continuous oversight and executive governance updates.",
      details: "We provide monthly advisory check-ins, breach/incident support, and board-level risk and financial reports.",
      icon: "monitoring"
    }
  ];

  const commitments = [
    "Uphold statutory compliance under the Data Protection Act and POTRAZ guidelines.",
    "Operate offensive cybersecurity testing strictly within authorized written scopes.",
    "Deliver quantitative, empirical FMVA® and BIDA® financial decision models.",
    "Maintain strict confidentiality and chain-of-custody for all digital forensic evidence.",
    "Provide structured, predictable commercial retainers and customized SLAs.",
    "Guarantee direct executive access to Natasha Zama and practice directors."
  ];

  const journey = [
    { label: "Consultation & NDA" },
    { label: "Baseline Audit" },
    { label: "Custom Scope / RFP" },
    { label: "Technical Execution" },
    { label: "Verification & Report" },
    { label: "Monthly Retainer" }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* 6-step approach */}
      <section className="py-16 px-6 md:px-12 bg-[#FAF7F2] font-sans border-b border-[#F2E5C6]/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
              <span className="material-symbols-outlined text-sm">timeline</span>
              Methodology & Rigor
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#3B010B] leading-tight font-display">
              A Structured Six-Stage Advisory Lifecycle
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
              From regulatory discovery to ongoing technical retainers, our standardized lifecycle delivers accountability, empirical data, and measurable security for your enterprise.
            </p>
          </motion.div>

          {/* Six steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <motion.div
                key={s.number}
                {...fadeIn}
                className="bg-white rounded-3xl p-6 border border-[#F2E5C6] shadow-sm hover:shadow-xl hover:border-[#75162D] transition-all space-y-3 relative overflow-hidden group"
              >
                <div className="absolute top-3 right-3 text-5xl font-black text-[#75162D]/10 leading-none font-display">
                  {s.number}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#3B010B] text-[#F2D9A0] flex items-center justify-center shadow-md group-hover:bg-[#75162D] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#75162D]">Step 0{s.number}</span>
                  <h3 className="text-base font-bold text-[#3B010B] mt-0.5">{s.title}</h3>
                </div>
                <p className="text-[#3B010B] font-semibold text-xs leading-snug">{s.desc}</p>
                <p className="text-gray-600 text-xs font-light leading-relaxed">{s.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Crestara Commitment */}
      <section className="py-16 px-6 md:px-12 bg-[#3B010B] text-white relative overflow-hidden font-sans border-b border-[#F2D9A0]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#75162D]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div {...fadeIn} className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              Our Executive Pledge
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-white font-display">
              The Crestara Standard of Professional Integrity
            </h2>
            <p className="text-white/75 font-light text-xs sm:text-sm leading-relaxed">
              Every client mandate is governed by explicit professional commitments designed to safeguard your data, systems, and capital.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-7">
            <ul className="space-y-3">
              {commitments.map((c, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#560B18]/70 border border-[#F2E5C6]/20 hover:border-[#F2D9A0]/50 transition-colors"
                >
                  <span className="material-symbols-outlined text-[#F2D9A0] mt-0.5 flex-shrink-0 text-base">check_circle</span>
                  <span className="text-white/90 font-light text-xs sm:text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* The Advisory Journey */}
      <section className="py-16 px-6 md:px-12 bg-white font-sans border-b border-[#F2E5C6]/60">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
              <span className="material-symbols-outlined text-sm">route</span>
              Client Roadmap
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3B010B] font-display">From Initial Assessment to Retainer Governance</h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto font-light">
              A transparent, predictable process ensuring total clarity at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {journey.map((j, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#F2E5C6] text-center space-y-2 hover:border-[#75162D] transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#3B010B] text-[#F2D9A0] flex items-center justify-center font-bold text-base shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xs font-bold text-[#3B010B] leading-tight">
                  {j.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutApproach;

