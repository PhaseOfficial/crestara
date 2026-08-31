import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("crestara-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("crestara-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("crestara-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return (
    <button 
      onClick={() => setIsVisible(true)}
      className="fixed bottom-24 left-6 bg-[#3B010B] text-[#F2D9A0] p-3.5 rounded-2xl cursor-pointer hover:bg-[#560B18] hover:-translate-y-1 z-50 transition-all active:scale-95 shadow-xl border border-[#F2D9A0]/30 flex items-center gap-2 group"
      title="Cookie Settings"
      aria-label="Cookie Settings"
    >
      <span className="material-symbols-outlined text-xl">cookie</span>
      <span className="text-xs font-semibold uppercase tracking-wider hidden group-hover:inline pr-1">Cookie Settings</span>
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center md:justify-start md:items-end p-4 sm:p-6 pointer-events-none">
      <div className="bg-[#3B010B] text-white p-7 sm:p-8 rounded-3xl border border-[#F2D9A0]/30 shadow-2xl w-full max-w-lg pointer-events-auto animate-fadeIn backdrop-blur-xl space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#F2D9A0] text-2xl">verified_user</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2D9A0]">
              Privacy & Consent Framework
            </span>
          </div>
          <span className="text-[10px] uppercase font-semibold text-[#F2E5C6]/60 bg-white/10 px-2.5 py-0.5 rounded-full">
            POTRAZ / GDPR
          </span>
        </div>

        <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
          Crestara Advisory Group uses strictly necessary and performance cookies to provide secure browsing, authenticate requests, and improve our multidisciplinary services. For full details on our data protection practices, please view our{" "}
          <Link to="/privacy-policy" onClick={() => setIsVisible(false)} className="text-[#F2D9A0] font-semibold underline hover:text-[#F2E5C6] transition-colors">
            Privacy Notice
          </Link>{" "}
          and{" "}
          <Link to="/cookie-policy" onClick={() => setIsVisible(false)} className="text-[#F2D9A0] font-semibold underline hover:text-[#F2E5C6] transition-colors">
            Cookie Policy
          </Link>.
        </p>

        <div className="flex gap-3 pt-2">
          <button
            onClick={handleDecline}
            className="flex-1 bg-white/10 border border-white/20 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-white hover:bg-white/20 transition-all"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 bg-[#F2D9A0] text-[#3B010B] px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#F2E5C6] transition-all shadow-lg font-semibold"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

