import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";
import ServiceAnimatedSVG from "../components/common/ServiceAnimatedSVG";

const FinancialAdvisory = () => {
  const [openDeliverables, setOpenDeliverables] = useState({});

  const toggleDeliverables = (title) => {
    setOpenDeliverables(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const isCardOpen = (title) => {
    // Defaults to closed (false), toggles open on user click
    return Boolean(openDeliverables[title]);
  };
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
      <section className="bg-gradient-to-b from-[#FAF7F2] via-[#F2E5C6] to-[#F2D9A0]/60 py-20 px-6 md:px-12 text-[#3B010B] animate-hero-gradient relative overflow-hidden border-b border-[#F2D9A0]">
        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-md shadow-sm font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">calculate</span>
            Pillar 03 • Quantitative Financial Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-[#3B010B]">
            Financial Analysis & <span className="burgundy-gradient-text">FMVA® Modelling</span>
          </h1>

          <p className="text-base md:text-xl text-[#560B18]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Institutional-grade 3-statement financial models, DCF company valuations, automated BIDA® management dashboards, and fractional CFO retainers designed for high-growth enterprises.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all shadow-xl font-semibold font-display border border-[#F2D9A0]/40"
            >
              Commission Financial Model
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20Financial%20Advisory%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl font-display"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Finance Desk</span>
            </a>
          </div>

          {/* Financial Accreditation Assurance Bar */}
          <div className="pt-6 max-w-3xl mx-auto">
            <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-[#F2D9A0] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-12 bg-white rounded-xl px-2 border border-[#F2D9A0]/60 flex items-center justify-center shadow-sm">
                    <img src="/images/fmva-logo.svg" alt="FMVA" className="h-7 object-contain" />
                  </div>
                  <div className="h-12 bg-white rounded-xl px-2 border border-[#F2D9A0]/60 flex items-center justify-center shadow-sm">
                    <img src="/images/bida-logo.svg" alt="BIDA" className="h-7 object-contain" />
                  </div>
                  <div className="h-12 bg-white rounded-xl px-2 border border-[#F2D9A0]/60 flex items-center justify-center shadow-sm">
                    <img src="/images/cfa-logo.svg" alt="CFA Institute" className="h-7 object-contain" />
                  </div>
                </div>
                <div className="space-y-0.5 text-[#3B010B]">
                  <h3 className="text-sm font-extrabold font-display leading-tight">
                    CFI Global FMVA®, BIDA® & CFA Standards
                  </h3>
                  <p className="text-[11px] text-gray-600 font-light">
                    Bankable 3-statement financial models, dynamic DCF valuations, and executive BI reporting dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-3 py-1 rounded-full font-display border border-[#75162D]/20">
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
              className="bg-white p-6 rounded-3xl border border-[#F2D9A0] shadow-sm hover:shadow-lg hover:border-[#75162D] transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-xl">{pillar.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-[#3B010B] font-display">{pillar.title}</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Financial Packages */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-[#F2D9A0]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-3 py-1 rounded-full font-display border border-[#75162D]/20">
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
                    ? "bg-gradient-to-b from-[#F2E5C6]/60 via-white to-[#F2D9A0]/70 text-[#3B010B] shadow-xl border-2 border-[#75162D] relative"
                    : "bg-[#FAF7F2] text-[#3B010B] border border-[#F2D9A0] shadow-sm hover:shadow-xl hover:border-[#75162D]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#75162D] text-[#F2E5C6] text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md font-sans border border-[#F2D9A0]">
                    Institutional Benchmark
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top Animated SVG Stage */}
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-[#FAF7F2] via-white to-[#F2E5C6]/50 border border-[#F2D9A0] p-3 flex flex-col items-center justify-center relative overflow-hidden shadow-inner group-hover:border-[#75162D]/60 transition-all">
                    <div className="absolute top-2.5 left-2.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                        pkg.popular ? "bg-[#75162D] text-[#F2E5C6]" : "bg-[#75162D]/10 text-[#75162D]"
                      }`}>
                        {pkg.type}
                      </span>
                    </div>
                    <ServiceAnimatedSVG type={pkg.title} className="w-20 h-20 sm:w-24 sm:h-24" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#3B010B]">
                    {pkg.title}
                  </h3>

                  <p className="text-xs font-light leading-relaxed text-gray-600">
                    {pkg.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-[#F2E5C6]/40 border border-[#F2D9A0]">
                    <span className="text-[10px] font-bold uppercase tracking-wider block text-[#75162D]">
                      Key Benefit:
                    </span>
                    <p className="text-xs font-light mt-0.5 text-gray-700">
                      {pkg.benefit}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/5">
                    <button
                      type="button"
                      onClick={() => toggleDeliverables(pkg.title)}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-white hover:bg-[#F2E5C6]/50 border border-[#F2D9A0]/60 transition-all text-left cursor-pointer group/drop"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider block text-[#3B010B] font-display">
                          Deliverables ({pkg.features.length})
                        </span>
                      </div>
                      <span className={`material-symbols-outlined text-[#75162D] text-base transition-transform duration-300 ${isCardOpen(pkg.title) ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isCardOpen(pkg.title) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden space-y-1.5 pt-3"
                        >
                          <ul className="space-y-1.5">
                            {pkg.features.map((f, i) => (
                              <li key={i} className="text-xs font-light flex items-start gap-2 text-gray-700 p-1 rounded-md hover:bg-white/60">
                                <span className="material-symbols-outlined text-sm flex-shrink-0 mt-0.5 text-[#75162D]">check_circle</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-black/5">
                  <Link
                    to="/contact"
                    className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all font-display bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] shadow-md border border-[#F2D9A0]/30"
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
        <div className="bg-white p-8 rounded-3xl border border-[#F2D9A0] space-y-2 shadow-sm">
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

