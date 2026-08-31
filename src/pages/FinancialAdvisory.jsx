import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";

const FinancialAdvisory = () => {
  const financePillars = [
    {
      icon: "calculate",
      title: "FMVA® Financial Modelling",
      desc: "Formulaic, dynamic 3-statement financial models, DCF valuations, and capital project investment appraisals (CFI Standards)."
    },
    {
      icon: "analytics",
      title: "BIDA® Executive Dashboards",
      desc: "Interactive PowerBI and executive management dashboards consolidating KPIs, gross margin metrics, and cash runway."
    },
    {
      icon: "query_stats",
      title: "Working Capital & Diagnostic Audits",
      desc: "Empirical diagnostic review of financial health, working capital cycle, liquidity ratios, and unit economics."
    },
    {
      icon: "account_balance",
      title: "Fractional CFO Retainers",
      desc: "Ongoing financial leadership, monthly variance reporting, board presentations, and strategic capital counsel."
    }
  ];

  const packages = [
    {
      title: "Financial Health Check",
      type: "Baseline Diagnostic Audit",
      desc: "Rapid diagnostic review of financial records, key ratios, liquidity trends, and cost structures.",
      benefit: "Pinpoints margin leakage, working capital drag, and liquidity bottlenecks with executive recommendations.",
      features: [
        "Liquidity, solvency & operational ratio analysis",
        "Working capital diagnostic & cash burn review",
        "Cost-efficiency & margin leak identification",
        "1-Page Executive Action Summary"
      ]
    },
    {
      title: "Business Financial Analysis",
      type: "Comprehensive Fiscal Assessment",
      desc: "Comprehensive historical performance analysis, unit economics evaluation, and working capital optimization.",
      benefit: "In-depth segment analysis revealing your most profitable product lines, customers, and cost drivers.",
      features: [
        "Multi-year trend & variance analysis",
        "Segment & product-line profitability breakdown",
        "Working capital cycle & debtor aging review",
        "Detailed management recommendations report"
      ]
    },
    {
      title: "FMVA® Financial Modelling & Valuations",
      type: "Institutional Financial Model",
      popular: true,
      desc: "Dynamic, formulaic 3-statement financial models, DCF valuations, and capital project investment appraisals.",
      benefit: "Bankable, investor-ready financial forecast engineered for debt raising, equity rounds, and M&A.",
      features: [
        "Integrated 3-Statement Forecast (P&L, Balance Sheet, Cash Flow)",
        "Scenario & sensitivity analysis (Bull, Base, Bear)",
        "DCF, IRR, NPV & payback period calculations",
        "Bankable investor & board-ready financial model (.xlsx)"
      ]
    },
    {
      title: "BIDA® Executive Dashboards",
      type: "BI & Analytics Architecture",
      desc: "Interactive PowerBI / Excel executive dashboards tracking real-time KPIs and operational metrics.",
      benefit: "Automates reporting workflows, giving C-suite leadership instant visual clarity on cash velocity and KPIs.",
      features: [
        "Automated financial KPI dashboard setup",
        "Sales, gross margin & cash runway visualizations",
        "Data pipeline cleaning & consolidation",
        "Executive training session included"
      ]
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="Financial Analysis & FMVA® Financial Modelling | Crestara Advisory Group"
        description="Institutional-grade FMVA® financial modelling, BIDA® business intelligence dashboards, and fractional CFO advisory retainers across Zimbabwe and Southern Africa."
        keywords="Financial modelling Zimbabwe, FMVA certified Harare, Business valuation Zimbabwe, Fractional CFO Harare, Financial analysis SME Zimbabwe, BIDA analytics"
        canonical="https://www.crestaraadvisorygroup.com/financial-advisory"
      />

      {/* Hero Section */}
      <section className="bg-[#3B010B] py-20 px-6 md:px-12 text-white animate-hero-gradient relative overflow-hidden border-b border-[#F2D9A0]/20">
        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">calculate</span>
            Pillar 03 • Quantitative Financial Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display">
            Financial Analysis & <span className="gold-gradient-text">FMVA® Modelling</span>
          </h1>

          <p className="text-base md:text-xl text-[#F2E5C6]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Institutional-grade 3-statement financial models, DCF company valuations, automated BIDA® management dashboards, and fractional CFO retainers designed for high-growth enterprises.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#F2E5C6] transition-all shadow-xl font-semibold font-display"
            >
              Commission Financial Model
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20Financial%20Advisory%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Finance Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            Empirical Capital Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
            Strategic Decision Models & Dashboards
          </h2>
          <p className="text-gray-600 text-sm font-light leading-relaxed">
            Eliminating guesswork with mathematical rigour, multi-scenario forecasting, and real-time operational KPI tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financePillars.map((pillar, idx) => (
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

      {/* Financial Packages */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-[#F2E5C6]/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm">analytics</span>
              Financial Advisory Packages
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
              Analysis, Modelling & Dashboard Packages
            </h2>
            <p className="text-gray-600 text-sm font-light">
              Bankable models, custom dashboards, and management reporting tailored to your fiscal cycle.
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
                    Institutional Benchmark
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
                    <span>Commission Project</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Scope Disclaimer */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-white p-8 rounded-3xl border border-[#F2E5C6] space-y-2">
          <div className="flex items-center gap-2 text-[#75162D] font-bold text-xs uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-base">account_balance</span>
            <span>Advisory Scope vs. Statutory Audit Disclaimer</span>
          </div>
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            Our financial analysis, FMVA® financial modelling, and valuation services provide executive decision support and management intelligence. We do not provide reserved statutory audit opinions, tax court litigation, or regulated public accounting services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FinancialAdvisory;

