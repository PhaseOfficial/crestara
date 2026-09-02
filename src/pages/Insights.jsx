import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";
import HomeCTA from "../components/home/HomeCTA";

const Insights = () => {
  const articles = [
    {
      id: "potraz-data-protection-compliance",
      category: "DATA PROTECTION & DPO",
      title: "POTRAZ Compliance Blueprint: Navigating the Data Protection Act [Chapter 12:07]",
      date: "August 2026",
      readTime: "6 min read",
      excerpt: "A practical guide for Zimbabwean data controllers on establishing mandatory processing registers, conducting DPIAs, and structuring outsourced DPO retainers.",
      icon: "policy"
    },
    {
      id: "offensive-cyber-pentesting-guide",
      category: "CYBERSECURITY & DEFENSE",
      title: "Offensive Security in Banking & Fintech: Why Vulnerability Scans Aren't Enough",
      date: "August 2026",
      readTime: "8 min read",
      excerpt: "How ethical hackers and CEH Practical specialists simulate adversary attack paths (OWASP Top 10) to identify critical logic flaws before malicious actors do.",
      icon: "security"
    },
    {
      id: "fmva-financial-modelling-standards",
      category: "FINANCIAL ADVISORY",
      title: "Institutional FMVA® Financial Modelling: Building Bankable Valuation & Forecast Models",
      date: "July 2026",
      readTime: "7 min read",
      excerpt: "The CFI standard for 3-statement integrated financial models, scenario testing, and DCF corporate valuations tailored for regional capital raising.",
      icon: "calculate"
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="Advisory Insights & Thought Leadership | Crestara Advisory Group"
        description="Executive articles and perspectives on POTRAZ data protection, offensive penetration testing, digital forensics, and FMVA® financial modelling across Southern Africa."
        keywords="Data protection Zimbabwe articles, POTRAZ compliance guide, penetration testing Harare, financial modelling whitepapers Zimbabwe"
        canonical="https://www.crestaraadvisorygroup.com/insights"
      />

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-[#3B010B] animate-hero-gradient text-white relative overflow-hidden text-center space-y-6 border-b border-[#F2D9A0]/20">
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">lightbulb</span>
            Thought Leadership & Executive Perspectives
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-display">
            Insights & <span className="gold-gradient-text">Governance</span>
          </h1>

          <p className="text-base md:text-xl text-[#F2E5C6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Technical whitepapers, statutory compliance guides, offensive cybersecurity analyses, and institutional financial frameworks from Crestara practice specialists.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm">menu_book</span>
            Publications & Briefings
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
            Latest Advisory Publications
          </h2>
          <p className="text-gray-600 text-sm font-light leading-relaxed">
            In-depth analysis to guide executive leadership, audit committees, and corporate boards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#F2E5C6] shadow-sm flex flex-col justify-between group hover:shadow-xl hover:border-[#75162D] transition-all"
            >
              <div>
                <div className="h-44 bg-[#3B010B] relative p-6 flex flex-col justify-between border-b border-[#F2D9A0]/20">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#F2D9A0] text-[#3B010B] font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full font-mono">
                      {article.category}
                    </span>
                    <span className="material-symbols-outlined text-white/30 text-3xl">{article.icon}</span>
                  </div>
                  <div className="text-xs text-[#F2E5C6]/70 font-light flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <h3 className="text-lg font-bold text-[#3B010B] group-hover:text-[#75162D] transition-colors leading-snug font-display">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-[#FAF7F2] mt-4">
                <Link to="/contact" className="text-xs font-bold text-[#75162D] hover:text-[#3B010B] flex items-center gap-1 uppercase tracking-wider">
                  <span>Request Full Whitepaper / Briefing</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <HomeCTA />
    </div>
  );
};

export default Insights;

