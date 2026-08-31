import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IndustriesWeSupport = () => {
  const industries = [
    {
      title: "Banking, Fintech & Financial Services",
      desc: "Robust POTRAZ compliance, DPIAs for payment gateways, offensive ethical hacking, vulnerability assessments, and advanced FMVA® financial modelling.",
      icon: "account_balance",
      tag: "FINANCIAL SECTOR"
    },
    {
      title: "Healthcare Providers & Life Sciences",
      desc: "Sensitive patient data protection, health information security, medical device compliance, and clinical operational analytics.",
      icon: "medical_services",
      tag: "HEALTH & LIFE SCIENCES"
    },
    {
      title: "Retail, E-Commerce & FMCG",
      desc: "Securing customer checkout data, merchant processing privacy, POS network testing, inventory modelling, and working capital advisory.",
      icon: "shopping_cart",
      tag: "RETAIL & COMMERCE"
    },
    {
      title: "Telecommunications & Technology",
      desc: "POTRAZ registration, lawful data processing registers, high-volume cloud security audits, and penetration testing.",
      icon: "cell_tower",
      tag: "TECH & TELECOMS"
    },
    {
      title: "NGOs, Donors & Development Agencies",
      desc: "Beneficiary data protection frameworks, donor-mandated cyber hygiene, forensic reviews, and grant budget variance models.",
      icon: "volunteer_activism",
      tag: "DEVELOPMENT & NGOS"
    },
    {
      title: "Corporations & Growing SMEs",
      desc: "Integrated monthly retainers combining outsourced DPO governance, ongoing cybersecurity check-ins, and fractional CFO dashboards.",
      icon: "domain",
      tag: "CORPORATE & SMES"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white border-b border-[#F2E5C6]/60 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
            <span className="material-symbols-outlined text-sm text-[#75162D]">domain</span>
            Sector Expertise
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#3B010B] tracking-tight font-display">
            Industries We Empower & Protect
          </h2>

          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Delivering multidisciplinary excellence tailored to the unique regulatory, operational, and financial landscapes of modern industry sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#F2E5C6]/80 hover:border-[#75162D] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#75162D] bg-[#75162D]/10 px-3 py-1 rounded-full border border-[#75162D]/20">
                    {ind.tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#3B010B] text-[#F2D9A0] flex items-center justify-center group-hover:bg-[#75162D] group-hover:text-white transition-colors shadow-md">
                    <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#3B010B] group-hover:text-[#75162D] transition-colors">
                  {ind.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F2E5C6]/80 flex items-center justify-between">
                <Link 
                  to="/who-we-support" 
                  className="text-xs font-bold text-[#3B010B] group-hover:text-[#75162D] flex items-center gap-1 uppercase tracking-wider transition-colors"
                >
                  <span>Explore Solutions</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeSupport;

