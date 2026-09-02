import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF7F2] text-[#3B010B] relative overflow-hidden font-sans border-b border-[#F2D9A0]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F2D9A0]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Visual Team Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-xl bg-gradient-to-b from-white via-[#FAF7F2] to-[#F2E5C6]/60 p-6 sm:p-8 space-y-5 text-[#3B010B]">
            <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-[#F2D9A0] shadow-sm">
              <img
                src="/images/team-collaboration.jpg"
                alt="Crestara Advisory Group Multidisciplinary Team"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B010B]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#75162D] px-2.5 py-0.5 rounded-full border border-[#F2D9A0]/50 font-display">
                  Advisory Team
                </span>
              </div>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#3B010B] block font-display">The Crestara Team</span>
              <span className="text-xs font-bold text-[#75162D] uppercase tracking-widest block mt-0.5 font-display">Multidisciplinary Practice Leads</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
              &ldquo;Modern businesses in Africa and globally cannot treat compliance as an afterthought, cybersecurity as an IT ticket, or financial planning as a spreadsheet exercise. Our multidisciplinary specialists govern them as an integrated whole.&rdquo;
            </p>
            <div className="pt-4 border-t border-[#F2D9A0] flex items-center justify-between text-xs">
              <span className="text-[#75162D] font-bold font-display">Crestara Advisory Group</span>
              <span className="text-gray-500">Southern Africa & Global</span>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 shadow-sm font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">groups</span>
            Practice Strategic Overview
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#3B010B] tracking-tight leading-tight font-display">
            A New Standard for <span className="burgundy-gradient-text">Corporate Resilience & Intelligence</span>
          </h2>

          <div className="space-y-4 text-gray-700 font-light leading-relaxed text-sm sm:text-base">
            <p>
              In an era of intensifying regulatory scrutiny under the Data Protection Act and POTRAZ, sophisticated cyber threats, and demanding financial markets, organizations require advisors who bring deep cross-disciplinary mastery.
            </p>
            <p>
              Crestara Advisory Group was formed by bringing together accredited Data Protection Officers (DPOs), Certified Ethical Hackers (CEH), CompTIA Security+ analysts, and FMVA® financial engineers. We bridge the gap between regulatory mandate, technical cyber defense, and executive financial decision-making.
            </p>
            <p>
              Every engagement is governed by confidentiality, empirical analysis, and dedicated senior practice leadership.
            </p>
          </div>

          <div className="pt-4 border-t border-[#F2D9A0] flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h3 className="text-base font-bold text-[#3B010B] font-display">Direct Practice Access</h3>
              <p className="text-xs text-gray-500">Speak directly with our Advisory Team</p>
            </div>
            <Link 
              to="/contact" 
              className="px-6 py-3.5 bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] rounded-xl font-bold text-xs transition-all uppercase tracking-wider whitespace-nowrap shadow-md font-semibold font-display border border-[#F2D9A0]/30"
            >
              Contact Advisory Team
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandStory;


