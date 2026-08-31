import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      initials: "TM",
      name: "Tinashe Moyo",
      role: "UK-Based Investor & Developer",
      color: "bg-[#1E2A38] text-[#B6924A]",
      text: "Elysian acted as our trusted eyes and ears during the construction of our commercial facility in Harare. Their site audits and geotagged progress reports gave us total peace of mind from London."
    },
    {
      initials: "SC",
      name: "Sarah Choga",
      role: "Diaspora Client (Europe)",
      color: "bg-[#B6924A] text-[#1E2A38]",
      text: "Managing family care and health coordination remotely was stressful until we partnered with Elysian. Their UK healthcare governance standards and on-ground representation are exceptional."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">rate_review</span>
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38] uppercase tracking-tight">What Our Clients Say</h2>
          <div className="h-1 w-24 bg-[#B6924A] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 space-y-6 relative overflow-hidden"
            >
               <span className="material-symbols-outlined text-[100px] text-[#1E2A38]/5 absolute -top-4 -right-4">format_quote</span>
               <p className="text-gray-700 text-lg italic leading-relaxed relative z-10 font-light">
                 "{review.text}"
               </p>
               <div className="flex items-center gap-4 pt-6 border-t border-gray-100 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${review.color}`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-base uppercase font-bold text-[#1E2A38] tracking-tight">{review.name}</h4>
                    <span className="text-xs text-gray-500 font-light">{review.role}</span>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
