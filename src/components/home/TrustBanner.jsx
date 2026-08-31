import { FaWhatsapp } from "react-icons/fa";
import emergencyImg from "../../assets/stock/emergency-response.jpg";

const TrustBanner = () => {
  const trustItems = [
    { title: "UK Leadership & Standards", desc: "Anchored in UK NHS, healthcare, and corporate governance principles." },
    { title: "International Experience", desc: "Decades of cross-border experience connecting the UK, Europe, and Southern Africa." },
    { title: "Professional Expertise", desc: "Led by Jean Sigauke (Registered Nurse & Biomedical Scientist)." },
    { title: "Ethical Governance", desc: "100% independent representation, acting exclusively on behalf of our clients." },
    { title: "Transparent Reporting", desc: "Comprehensive audit logs, site photos, video proof, and financial verification." },
    { title: "Cross-Border Partnerships", desc: "Bridging institutions, healthcare providers, investors, and families." },
    { title: "Personalised Client Support", desc: "Tailored advisory and dedicated representation built around your specific goals." },
    { title: "Tailored Solutions", desc: "Every client is unique — bespoke strategies designed around your goals, region and specific situation." }
  ];

  return (
    <section className="py-24 bg-[#1E2A38] text-white px-6 md:px-12 relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Why Choose Elysian */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Why Choose Elysian Consulting
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            An International Professional Services <span className="text-[#B6924A] italic">Organisation</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustItems.map((item, i) => (
              <div key={i} className="flex gap-3.5 p-4.5 rounded-2xl bg-[#16222F] border border-white/10">
                <div className="w-7 h-7 rounded-lg bg-[#B6924A] flex-shrink-0 flex items-center justify-center text-[#1E2A38] mt-0.5">
                  <span className="material-symbols-outlined text-xs font-bold">check</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column: Emergency & Urgent Response Card (emergency.png) */}
        <div className="lg:col-span-5 bg-white text-[#1E2A38] rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative">
          <div className="h-48 relative overflow-hidden bg-[#1E2A38]">
            <img src={emergencyImg} alt="Rapid Advisory & On-Ground Emergency Liaison" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
          </div>

          <div className="p-8 text-center space-y-4 -mt-6 relative z-10">
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#1E2A38]">Urgent Support or On-Ground Inquiry?</h3>
            <p className="text-gray-600 text-xs font-light">
              Our direct advisory desk is available for rapid project escalation, emergency family welfare checks, or urgent site visits.
            </p>
            
            <div className="flex flex-col gap-3 pt-2">
              <a 
                href="https://wa.me/447984937336" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Advisory Desk</span>
              </a>
              <a 
                href="tel:+447984937336" 
                className="bg-[#1E2A38] text-white py-3.5 rounded-xl font-medium text-xs hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span>+44 7984 937336</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBanner;
