import { motion } from "framer-motion";
import SEO from "../components/common/SEO";

const Voice = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-32 pb-32 font-sans px-6 md:px-12">
      <SEO
        title="Voice Advisory & Confidential Notes | Elysian Global"
        description="Record and send a confidential voice advisory request directly to the Elysian executive and healthcare leadership desk."
        canonical="https://www.elysianglobalservices.com/voice"
      />
      <div className="max-w-4xl mx-auto space-y-12">

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
           <span className="text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">Elysian Advisory Support</span>
           <h1 className="text-3xl md:text-5xl text-[#1E2A38] font-bold uppercase tracking-tight">Voice Advisory <br /> <span className="italic text-[#B6924A]">Direct & Confidential</span></h1>
           <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm font-light">
             Need to convey nuanced project details, complex family care requirements, or urgent instructions? Record a confidential voice message for our executive team.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 flex flex-col items-center justify-center space-y-8 text-center"
           >
              <div className="w-28 h-28 rounded-full bg-[#1E2A38]/5 flex items-center justify-center text-[#B6924A] relative">
                 <div className="absolute inset-0 rounded-full border-2 border-[#B6924A] animate-ping opacity-20"></div>
                 <span className="material-symbols-outlined text-5xl">mic</span>
              </div>
              <div className="space-y-2">
                 <h2 className="text-xl text-[#1E2A38] uppercase font-bold tracking-tight">Record Executive Note</h2>
                 <p className="text-xs text-gray-500 font-light">Tap to record your confidential audio advisory request.</p>
              </div>
              <button className="w-full bg-[#1E2A38] text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all shadow-lg">
                 START RECORDING
              </button>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl flex flex-col justify-center space-y-6"
           >
              <h3 className="text-lg text-[#1E2A38] uppercase font-bold border-b border-gray-200 pb-4">Advisory Channel Features</h3>
              <div className="space-y-5">
                 {[
                   { icon: "record_voice_over", title: "Direct Executive Audio Briefing", desc: "Detail complex requirements without length limits or keyboard constraints." },
                   { icon: "lock", title: "End-to-End Encryption", desc: "Your audio note is transmitted securely directly to your dedicated advisor." },
                   { icon: "schedule_send", title: "Rapid Advisory Call-Back", desc: "Our team reviews your briefing and calls back within guaranteed response windows." }
                 ].map((feature, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="text-[#B6924A]">
                         <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                      </div>
                      <div className="space-y-0.5">
                         <h4 className="text-xs uppercase text-[#1E2A38] font-bold">{feature.title}</h4>
                         <p className="text-xs text-gray-500 font-light leading-relaxed">{feature.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1E2A38] text-white p-10 rounded-3xl text-center space-y-4 relative overflow-hidden shadow-2xl border border-white/20"
        >
           <h3 className="text-xl uppercase tracking-widest text-[#B6924A] font-bold">Direct International Advisory Desk</h3>
           <a href="https://wa.me/447984937336" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl font-bold text-white block hover:text-[#25D366] transition-all">+44 7984 937336</a>
           <p className="text-xs text-white/60 uppercase tracking-widest font-light">Available for Cross-Border Advisory & Urgent Inquiries</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Voice;
