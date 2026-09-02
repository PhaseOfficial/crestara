import { motion } from "framer-motion";

const WhyElysian = () => {
  const reasons = [
    {
      number: "01",
      title: "Multidisciplinary Synergy",
      subtitle: "Privacy, Security & Capital Strategy in One Partner",
      desc: "Eliminate operational fragmentation. Our integrated approach ensures data governance, cybersecurity infrastructure, and financial decisions mutually reinforce each other.",
      icon: "hub"
    },
    {
      number: "02",
      title: "POTRAZ & Regulatory Mastery",
      subtitle: "Zimbabwean & SADC Data Protection Compliance",
      desc: "In-depth expertise in navigating POTRAZ compliance, statutory registrations, DPIAs, and international cross-border data transfer mechanisms.",
      icon: "gavel"
    },
    {
      number: "03",
      title: "Certified Technical Defense",
      subtitle: "CEH Practical & CompTIA Security+ Accredited",
      desc: "Real-world offensive penetration testing and digital forensic breach investigation backed by industry-standard ethical hacking credentials.",
      icon: "security"
    },
    {
      number: "04",
      title: "Quantitative Financial Models",
      subtitle: "FMVA® & BIDA® Analytics & Valuations",
      desc: "Institutional-grade financial modelling, scenario analysis, break-even sensitivity, and automated management dashboards that drive boardroom decisions.",
      icon: "analytics"
    },
    {
      number: "05",
      title: "Transparent Retainer Scopes",
      subtitle: "Predictable Commercial Agreements",
      desc: "Clear, itemized scopes and service agreements with zero hidden overheads, empowering SMEs and corporations to plan with complete certainty.",
      icon: "verified"
    },
    {
      number: "06",
      title: "Dedicated Team Accountability",
      subtitle: "Direct Senior Practice Leads on Every Mandate",
      desc: "Work directly with seasoned multidisciplinary specialists who take personal responsibility for your organisation's compliance, defense, and fiscal health.",
      icon: "military_tech"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF7F2] text-[#3B010B] relative overflow-hidden font-sans border-b border-[#F2D9A0]">
      {/* Background Subtle Sand Gold Orbs */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#F2D9A0]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F2E5C6]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-sm shadow-sm font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">stars</span>
            The Crestara Advantage
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-[#3B010B]">
            Why Choose <span className="burgundy-gradient-text">Crestara Advisory?</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg font-light">
            Why leading enterprises, financial institutions, and SMEs trust Crestara Advisory Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-[#F2D9A0] shadow-sm flex flex-col justify-between hover:border-[#75162D] hover:shadow-xl hover:bg-[#F2E5C6]/20 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#75162D] font-display">{item.number}</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#75162D] text-[#F2D9A0] border border-[#F2D9A0]/30 flex items-center justify-center group-hover:bg-[#3B010B] group-hover:text-white transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#3B010B] group-hover:text-[#75162D] transition-colors font-display">
                  {item.title}
                </h3>

                <p className="text-xs font-bold text-[#75162D] uppercase tracking-wider">
                  {item.subtitle}
                </p>

                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyElysian;


