import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/common/SEO";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock data for an advisory service detail view
  const service = {
    title: "Project & Investment Oversight",
    price: "Custom Advisory Retainer",
    desc: "Independent representation, site auditing, and financial verification for diaspora investors, commercial developers, and international organizations. We act as your eyes and ears on the ground.",
    features: [
      "Geotagged & Timestamped Site Inspection Reports",
      "Contractor Milestone & Budget Auditing",
      "Regulatory & Local Compliance Verification",
      "Independent Mediation & Dispute Resolution",
      "Executive Summary & Live Video Updates"
    ],
    guarantee: "100% Independent & Objective Audit Standard"
  };

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-32 pb-32 font-sans px-6 md:px-12">
      <SEO
        title={`${service.title} | Elysian Consulting Ltd`}
        description={service.desc}
        canonical={`https://www.elysianglobalservices.com/product/${id || "advisory"}`}
      />
      <div className="max-w-7xl mx-auto">

        <Link to="/services" className="inline-flex items-center gap-2 text-[#1E2A38] hover:text-[#B6924A] transition-colors mb-12 font-semibold uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Services & Oversight
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="aspect-square bg-[#1E2A38] rounded-3xl overflow-hidden relative border border-white/20 flex items-center justify-center">
               <span className="material-symbols-outlined text-[200px] text-[#B6924A]/20">shield</span>
               <div className="absolute inset-0 bg-gradient-to-tr from-[#16222F]/80 to-transparent"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
               {["verified_user", "analytics", "public"].map((icon, i) => (
                 <div key={i} className="aspect-square bg-white rounded-2xl border border-gray-200 flex items-center justify-center text-[#B6924A] shadow-sm">
                    <span className="material-symbols-outlined text-4xl">{icon}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="bg-[#B6924A]/10 text-[#B6924A] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#B6924A]/20">Core Advisory Pillar</span>
              <h1 className="text-3xl md:text-5xl text-[#1E2A38] font-bold uppercase tracking-tight">{service.title}</h1>
              <p className="text-2xl text-[#B6924A] font-bold">{service.price}</p>
            </div>

            <p className="text-base text-gray-700 leading-relaxed font-light">
              {service.desc}
            </p>

            <div className="space-y-6">
               <h3 className="text-lg font-bold text-[#1E2A38] uppercase border-b border-gray-200 pb-3">Key Deliverables</h3>
               <ul className="grid grid-cols-1 gap-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                       <span className="material-symbols-outlined text-[#B6924A] text-base">verified</span>
                       {f}
                    </li>
                  ))}
               </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 flex items-center gap-5 shadow-sm">
               <div className="w-12 h-12 rounded-xl bg-[#1E2A38] flex items-center justify-center text-[#B6924A]">
                  <span className="material-symbols-outlined text-xl">security</span>
               </div>
               <div>
                  <h4 className="text-sm uppercase text-[#1E2A38] font-bold">Elysian Governance Guarantee</h4>
                  <p className="text-xs text-gray-500 font-light">{service.guarantee}</p>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Link to="/contact" className="flex-1 bg-[#1E2A38] text-white py-4 rounded-xl font-bold text-sm text-center hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all shadow-lg">
                  BOOK CONSULTATION
               </Link>
               <a href="https://wa.me/447984937336" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm text-center hover:bg-[#20ba5a] transition-all shadow-lg flex items-center justify-center gap-2">
                  <span>WHATSAPP ADVISORY</span>
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
