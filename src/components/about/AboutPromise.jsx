import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const AboutPromise = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Vision */}
      <section className="py-16 px-6 md:px-12 bg-white border-b border-[#F2E5C6]/60 font-sans relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
          <motion.div {...fadeIn} className="space-y-3">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#75162D]/10 px-4 py-1.5 rounded-full border border-[#75162D]/20">
              <span className="material-symbols-outlined text-sm text-[#75162D]">visibility</span>
              Our Long-Term Vision
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#3B010B] leading-tight font-display">
              Pioneering Integrated Digital Governance Across Africa & Beyond
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed max-w-3xl mx-auto">
              To be the premier multidisciplinary corporate advisory partner in Southern Africa, recognized for setting the benchmark in data privacy compliance, cybersecurity resilience, and quantitative financial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Crestara Promise + Closing CTA */}
      <section className="py-16 px-6 md:px-12 bg-[#3B010B] text-white relative overflow-hidden font-sans border-b border-[#F2D9A0]/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#75162D]/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <motion.div {...fadeIn} className="space-y-3">
            <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-[#F2D9A0]/30">
              <span className="material-symbols-outlined text-sm">verified</span>
              The Crestara Guarantee
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight font-display">
              <span className="gold-gradient-text">Complete Confidentiality, Technical Precision & Regulatory Peace of Mind.</span>
            </h2>
            <p className="text-[#F2E5C6]/90 text-sm md:text-base font-light leading-relaxed max-w-3xl mx-auto">
              Whether appointed as your Outsourced Data Protection Officer, conducting authorized ethical hacking simulations, or building strategic financial models, we protect your organization with relentless integrity.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="bg-[#F2D9A0] text-[#3B010B] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#F2E5C6] transition-all shadow-xl uppercase tracking-wider flex items-center gap-2 font-semibold"
            >
              <span>Request Advisory Quotation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a
              href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20discuss%20an%20advisory%20mandate."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Desk (+263 775 040 725)</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPromise;

