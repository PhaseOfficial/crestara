import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

const CookiePolicy = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-24 font-sans">
      <SEO
        title="Cookie Policy | Crestara Advisory Group"
        description="Learn about the cookies and tracking technologies used by Crestara Advisory Group on crestaraadvisorygroup.com in compliance with the Data Protection Act."
        keywords="Cookie Policy, Crestara Advisory Group cookies, tracking technologies, POTRAZ cookie compliance"
        canonical="https://www.crestaraadvisorygroup.com/cookie-policy"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#FAF7F2] via-[#F2E5C6] to-[#F2D9A0]/60 py-16 px-6 md:px-12 text-[#3B010B] animate-hero-gradient relative overflow-hidden border-b border-[#F2D9A0] text-center">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1 rounded-full border border-[#75162D]/30 font-display">
            <span className="material-symbols-outlined text-sm">cookie</span>
            Legal & Compliance • Part 2
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display text-[#3B010B]">
            Cookie <span className="burgundy-gradient-text">Policy</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-600 font-light">
            Effective Date: 1 September 2026 • Domain: crestaraadvisorygroup.com
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-[#F2E5C6] shadow-sm space-y-8 text-gray-800 text-sm leading-relaxed font-light"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work efficiently, enhance user experience, and provide analytical reporting to website operators.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">2. How Crestara Advisory Group Uses Cookies</h2>
            <p>
              Crestara Advisory Group (&ldquo;Crestara&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies on <strong>crestaraadvisorygroup.com</strong> to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Ensure essential technical functionality and secure browsing.</li>
              <li>Remember your preferences (e.g., cookie consent preferences).</li>
              <li>Understand aggregated visitor traffic to improve our advisory services.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">3. Categories of Cookies We Deploy</h2>
            
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#F2E5C6] space-y-1">
                <h3 className="font-bold text-[#75162D] text-sm">A. Strictly Necessary Cookies (Always Active)</h3>
                <p className="text-xs text-gray-600">
                  These cookies are essential for you to navigate our site and use its secure features. Without these cookies, services like cookie consent management cannot function.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#F2E5C6] space-y-1">
                <h3 className="font-bold text-[#75162D] text-sm">B. Performance & Analytics Cookies (Optional)</h3>
                <p className="text-xs text-gray-600">
                  These cookies collect anonymous information about how visitors navigate our website (e.g. which pages are visited most frequently). This data is aggregated and does not directly identify individuals.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#F2E5C6] space-y-1">
                <h3 className="font-bold text-[#75162D] text-sm">C. Functionality Cookies (Optional)</h3>
                <p className="text-xs text-gray-600">
                  These cookies allow our website to remember choices you make (such as preferred consultation service category) to provide enhanced, personalized features.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">4. Managing & Disabling Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject optional cookies. You can exercise your cookie preferences through our on-site cookie banner or adjust your internet browser settings (e.g., Chrome, Safari, Edge, Firefox) to block or delete cookies. Note that disabling strictly necessary cookies may impact site navigation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#3B010B] font-display">5. Contact Our DPO</h2>
            <p>
              If you have questions regarding our use of cookies or tracking technologies, please contact our Data Protection Officer at:
            </p>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#F2E5C6] text-xs font-mono space-y-1 text-[#3B010B]">
              <p><strong>Crestara Advisory Group — DPO Desk</strong></p>
              <p>Email: <a href="mailto:compliance@crestaraadvisorygroup.com" className="text-[#75162D] underline">compliance@crestaraadvisorygroup.com</a></p>
              <p>Executive Desk: <a href="mailto:director@crestaraadvisorygroup.com" className="text-[#75162D] underline">director@crestaraadvisorygroup.com</a></p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#FAF7F2] flex items-center justify-between text-xs">
            <Link to="/privacy-policy" className="text-[#75162D] font-bold hover:underline">
              ← View Privacy Notice
            </Link>
            <Link to="/terms-of-service" className="text-[#75162D] font-bold hover:underline">
              View Terms of Service →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CookiePolicy;
