import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedPillar = () => {
  const practiceExamples = [
    { text: "Outsourced DPO Appointments", icon: "privacy_tip" },
    { text: "POTRAZ Registration & Audits", icon: "gavel" },
    { text: "Ethical Hacking & Pentesting", icon: "lock_open" },
    { text: "Vulnerability Assessments", icon: "security" },
    { text: "Digital Forensics & Breaches", icon: "policy" },
    { text: "FMVA® Financial Modelling", icon: "calculate" },
    { text: "BIDA® Executive Dashboards", icon: "analytics" },
    { text: "Integrated Retainer Support", icon: "hub" }
  ];

  const steps = [
    {
      step: "01",
      title: "Discovery & Gap Assessment",
      desc: "Every engagement commences with a rigorous baseline assessment of your data processing activities, cybersecurity perimeter, or financial architecture against statutory and commercial benchmarks.",
      icon: "search"
    },
    {
      step: "02",
      title: "Deep-Dive Audit & Roadmap",
      desc: "Our multi-certified specialists perform DPIAs, vulnerability scans, authorised penetration tests, and financial scenario models, formulating an actionable remediation and strategic roadmap.",
      icon: "fact_check"
    },
    {
      step: "03",
      title: "Implementation & Policy Controls",
      desc: "We deploy enterprise data protection policies, security controls, staff awareness simulations, and KPI dashboards tailored specifically to your operational footprint.",
      icon: "engineering"
    },
    {
      step: "04",
      title: "Continuous Retainer & Oversight",
      desc: "Enjoy complete peace of mind through dedicated monthly retainers featuring periodic reviews, breach/incident advisory, board-level reporting, and proactive optimization.",
      icon: "verified_user"
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 px-6 md:px-12 border-b border-[#F2E5C6]/60 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Heading Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
            <span className="material-symbols-outlined text-sm">hub</span>
            Unified Corporate Advisory
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#3B010B] tracking-tight font-display">
            A Multidisciplinary Powerhouse for Modern Enterprise
          </h2>

          <h3 className="text-lg md:text-xl text-[#75162D] font-bold tracking-wide">
            Where Regulatory Compliance, Cyber Defense & Financial Intelligence Converge.
          </h3>

          <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed pt-2">
            In today&apos;s digital economy, data privacy cannot exist without cybersecurity, and technological investments cannot thrive without rigorous financial modelling. Crestara Advisory Group delivers a synchronized, single-provider advisory framework that eliminates operational silos, minimizes risk, and maximizes commercial value.
          </p>
        </div>

        {/* Showcase Grid: Practice Areas */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#F2E5C6]/60 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#75162D]">Specialist Advisory Capabilities</span>
            <h4 className="text-2xl font-bold text-[#3B010B]">How We Safeguard and Empower Your Organization:</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {practiceExamples.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#F2E5C6]/60 hover:border-[#75162D] hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3B010B] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#75162D] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                </div>
                <div className="flex items-center gap-2 text-[#3B010B] font-bold text-sm">
                  <span className="text-[#75162D] font-extrabold text-base">✓</span>
                  <span>{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4-Step Methodology Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#75162D]">Structured Delivery Framework</span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#3B010B]">Our 4-Stage Advisory Lifecycle</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((node, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-6 shadow-md border border-[#F2E5C6]/60 hover:shadow-xl hover:border-[#75162D]/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#75162D] font-display">STEP {node.step}</span>
                    <div className="w-11 h-11 rounded-xl bg-[#3B010B] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#75162D] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">{node.icon}</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-[#3B010B] text-base group-hover:text-[#75162D] transition-colors">{node.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">{node.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedPillar;