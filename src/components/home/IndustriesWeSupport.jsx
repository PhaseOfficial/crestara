import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IndustriesWeSupport = () => {
  const industries = [
    {
      title: "Banking, Fintech & Financial Services",
      desc: "Robust POTRAZ compliance, DPIAs for payment gateways, offensive ethical hacking, vulnerability assessments, and advanced FMVA® financial modelling.",
      icon: "account_balance",
      tag: "FINANCIAL SECTOR",
      image: "/images/industry-finance.jpg"
    },
    {
      title: "Healthcare Providers & Life Sciences",
      desc: "Sensitive patient data protection, health information security, medical device compliance, and clinical operational analytics.",
      icon: "medical_services",
      tag: "HEALTH & LIFE SCIENCES",
      image: "/images/industry-healthcare.jpg"
    },
    {
      title: "Retail, E-Commerce & FMCG",
      desc: "Securing customer checkout data, merchant processing privacy, POS network testing, inventory modelling, and working capital advisory.",
      icon: "shopping_cart",
      tag: "RETAIL & COMMERCE",
      image: "/images/industry-retail.jpg"
    },
    {
      title: "Telecommunications & Technology",
      desc: "POTRAZ registration, lawful data processing registers, high-volume cloud security audits, and penetration testing.",
      icon: "cell_tower",
      tag: "TECH & TELECOMS",
      image: "/images/industry-tech.jpg"
    },
    {
      title: "NGOs, Donors & Development Agencies",
      desc: "Beneficiary data protection frameworks, donor-mandated cyber hygiene, forensic reviews, and grant budget variance models.",
      icon: "volunteer_activism",
      tag: "DEVELOPMENT & NGOS",
      image: "/images/industry-ngo.jpg"
    },
    {
      title: "Corporations & Growing SMEs",
      desc: "Integrated monthly retainers combining outsourced DPO governance, ongoing cybersecurity check-ins, and fractional CFO dashboards.",
      icon: "domain",
      tag: "CORPORATE & SMES",
      image: "/images/industry-corporate.jpg"
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
              className="bg-[#FAF7F2] rounded-3xl p-5 sm:p-6 border border-[#F2E5C6]/80 hover:border-[#75162D] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                {/* Sector Image Header */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-[#3B010B]/5 border border-[#F2E5C6]/60 shadow-inner">
                  <img 
                    src={ind.image} 
                    alt={ind.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0006]/75 via-[#1C0006]/15 to-transparent pointer-events-none" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#3B010B]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                      {ind.tag}
                    </span>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-[#3B010B] flex items-center justify-center group-hover:bg-[#75162D] group-hover:text-[#F2D9A0] transition-all shadow-lg border border-white/40">
                      <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#3B010B] group-hover:text-[#75162D] transition-colors leading-snug">
                  {ind.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed flex-1">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#F2E5C6]/80 flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="text-xs font-bold text-[#3B010B] group-hover:text-[#75162D] flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                >
                  <span>Explore Sector Advisory</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
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

