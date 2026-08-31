import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#3B010B] text-white relative overflow-hidden font-sans border-b border-[#F2D9A0]/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#75162D]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Visual Leadership Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border-2 border-[#F2D9A0]/30 shadow-2xl bg-gradient-to-b from-[#560B18] to-[#3B010B] p-8 space-y-6">
            <div className="w-20 h-20 rounded-2xl bg-[#75162D] text-[#F2D9A0] border border-[#F2D9A0]/30 flex items-center justify-center font-bold">
              <span className="text-4xl font-display">C</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-white block font-display">Natasha Zama</span>
              <span className="text-xs font-bold text-[#F2D9A0] uppercase tracking-widest block mt-0.5">Executive Director</span>
            </div>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              &ldquo;Modern businesses in Africa and globally cannot treat compliance as an afterthought, cybersecurity as an IT ticket, or financial planning as a spreadsheet exercise. They must be governed as an integrated whole.&rdquo;
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-[#F2E5C6] font-semibold">Crestara Advisory Group</span>
              <span className="text-white/60">Southern Africa & Global</span>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30">
            <span className="material-symbols-outlined text-sm text-[#F2D9A0]">record_voice_over</span>
            Director&apos;s Strategic Overview
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            A New Standard for <span className="gold-gradient-text">Corporate Resilience & Intelligence</span>
          </h2>

          <div className="space-y-4 text-white/85 font-light leading-relaxed text-sm sm:text-base">
            <p>
              In an era of intensifying regulatory scrutiny under the Data Protection Act and POTRAZ, sophisticated cyber threats, and demanding financial markets, organizations require advisors who bring deep cross-disciplinary mastery.
            </p>
            <p>
              Crestara Advisory Group was formed by bringing together accredited Data Protection Officers (DPOs), Certified Ethical Hackers (CEH), CompTIA Security+ analysts, and FMVA® financial engineers. We bridge the gap between regulatory mandate, technical cyber defense, and executive financial decision-making.
            </p>
            <p>
              Every engagement is governed by confidentiality, empirical analysis, and dedicated senior director leadership.
            </p>
          </div>

          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h3 className="text-base font-bold text-[#F2D9A0]">Direct Practice Access</h3>
              <p className="text-xs text-white/60">Speak directly with our Executive Director</p>
            </div>
            <Link 
              to="/contact" 
              className="px-6 py-3.5 bg-[#F2D9A0] text-[#3B010B] rounded-xl font-bold text-xs hover:bg-[#F2E5C6] transition-all uppercase tracking-wider whitespace-nowrap shadow-lg font-semibold"
            >
              Contact Executive Desk
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandStory;

