import { motion } from "framer-motion";
import SEO from "../components/common/SEO";

const Profile = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-32 pb-32 font-sans px-6 md:px-12">
      <SEO
        title="Client Advisory Portal | Elysian Consulting Ltd"
        description="Access verified audit logs, inspection reports, and live milestone updates on the Elysian client portal."
        canonical="https://www.elysianglobalservices.com/profile"
      />
      <div className="max-w-4xl mx-auto space-y-12">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <span className="material-symbols-outlined text-[200px]">verified_user</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-24 h-24 rounded-2xl bg-[#1E2A38] flex items-center justify-center text-[#B6924A] text-3xl font-bold border-2 border-white shadow-xl">
               EC
            </div>
            <div className="text-center md:text-left space-y-2">
              <h1 className="text-3xl md:text-4xl text-[#1E2A38] font-bold uppercase tracking-tight">Elysian Client Portal</h1>
              <p className="text-gray-600 text-sm font-light">Access geotagged audit logs, inspection reports, and live project updates.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                 <span className="px-3 py-1 bg-[#1E2A38]/10 text-[#1E2A38] rounded-full text-xs font-semibold uppercase tracking-wider border border-[#1E2A38]/20">Verified Advisory Account</span>
                 <span className="px-3 py-1 bg-[#B6924A]/10 text-[#B6924A] rounded-full text-xs font-semibold uppercase tracking-wider border border-[#B6924A]/20">UK Governance Standards</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { label: "Active Engagements", value: "2", icon: "pending_actions" },
             { label: "Site Audits Delivered", value: "18", icon: "task_alt" },
             { label: "Verified Milestones", value: "100%", icon: "stars" }
           ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center space-y-3"
             >
                <div className="w-12 h-12 rounded-xl bg-[#1E2A38]/5 mx-auto flex items-center justify-center text-[#B6924A]">
                   <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <div className="space-y-1">
                   <p className="text-3xl text-[#1E2A38] font-bold">{stat.value}</p>
                   <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
             </motion.div>
           ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg space-y-6"
        >
           <h2 className="text-xl text-[#1E2A38] font-bold uppercase border-b border-gray-200 pb-4">Recent Audit & Progress Reports</h2>
           <div className="space-y-4">
              {[
                { date: "Oct 12, 2026", service: "Harare Property Development Audit", status: "Verified & Filed", cost: "Report #HD-892" },
                { date: "Aug 05, 2026", service: "Commercial Site Inspection", status: "Verified & Filed", cost: "Report #CS-411" },
                { date: "May 22, 2026", service: "Healthcare Quality Assurance Audit", status: "Verified & Filed", cost: "Report #HQ-109" }
              ].map((job, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-[#F7F4EE] rounded-xl border border-gray-200 hover:border-[#B6924A] transition-colors group cursor-pointer">
                   <div className="space-y-1">
                      <p className="font-bold text-[#1E2A38]">{job.service}</p>
                      <p className="text-xs text-gray-500">{job.date}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-sm font-bold text-[#B6924A]">{job.cost}</p>
                      <p className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">{job.status}</p>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
