import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

// Assets
import qualityAuditImg from "../../assets/stock/service-quality-audit.jpg";
import governanceImg from "../../assets/stock/service-governance.jpg";
import workforceImg from "../../assets/stock/service-workforce.jpg";
import operationsImg from "../../assets/stock/service-operations.jpg";
import specialtyImg from "../../assets/stock/service-specialty.jpg";
import healthcareLiaisonImg from "../../assets/stock/service-healthcare-liaison.jpg";
import internationalHealthImg from "../../assets/stock/service-international-health.jpg";

const HealthServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Health Services" },
    { id: "governance", label: "Clinical Governance & Audits" },
    { id: "workforce", label: "Workforce, Leadership & Partnerships" },
    { id: "specialty", label: "Care Infrastructure & QA" },
    { id: "homecare", label: "Homecare & Family Liaison" }
  ];

  const healthServices = [
    {
      id: "quality-improvement",
      category: "governance",
      tag: "CLINICAL AUDITS & ASSURANCE",
      title: "Quality Improvement & Clinical Audits",
      desc: "Systematic evaluation of healthcare operations, care delivery standards, and patient safety protocols benchmarked against UK NHS regulatory frameworks.",
      features: ["Clinical Care Quality Audits", "Patient Safety Protocols", "Continuous Service Evaluation"],
      icon: "verified",
      img: qualityAuditImg
    },
    {
      id: "clinical-governance",
      category: "governance",
      tag: "UK NHS STANDARDS",
      title: "Clinical Governance Support",
      desc: "Embedding robust clinical governance structures, policy frameworks, and risk management systems across health and social care institutions.",
      features: ["Clinical Governance Frameworks", "Policy & Procedure Design", "Risk Management Systems"],
      icon: "gavel",
      img: governanceImg
    },
    {
      id: "workforce-capacity",
      category: "workforce",
      tag: "TRAINING & LEADERSHIP",
      title: "Workforce Solutions & Coaching",
      desc: "Developing healthcare workforce capacity through structured clinical training, leadership coaching, and international best practice implementation.",
      features: ["Clinical Staff Capacity Building", "Healthcare Leadership Coaching", "Standardized Operating Procedures"],
      icon: "groups_3",
      img: workforceImg
    },
    {
      id: "international-health-partnerships",
      category: "workforce",
      tag: "PARTNERSHIPS & COMMUNITY HEALTH",
      title: "International Health Partnerships & Community Health",
      desc: "Facilitating collaboration between healthcare providers, investors, NGOs, governments and communities to strengthen healthcare systems, improve access to care and deliver sustainable health initiatives.",
      features: ["Multi-Stakeholder Collaboration", "Healthcare System Strengthening", "Sustainable Health Initiatives"],
      icon: "public",
      img: internationalHealthImg
    },
    {
      id: "operational-consultancy",
      category: "specialty",
      tag: "WORKFLOW & FACILITY PLANNING",
      title: "Operational Consultancy & Facility Setup",
      desc: "Optimizing operational workflows for hospitals, care homes, and clinical providers to enhance service efficiency and regulatory compliance.",
      features: ["Workflow Optimization", "Facility Operational Planning", "Compliance Systems"],
      icon: "settings_suggest",
      img: operationsImg
    },
    {
      id: "specialty-care-qa",
      category: "specialty",
      tag: "SPECIALTY INFRASTRUCTURE",
      title: "Reablement & Specialty Care QA",
      desc: "Short-term care support design focusing on client independence, supported living QA audits, and mental health care pathways.",
      features: ["Reablement Services Design", "Supported Living QA", "Mental Health Pathways"],
      icon: "psychology",
      img: specialtyImg
    },
    {
      id: "homecare-welfare",
      category: "homecare",
      tag: "FAMILY CARE OVERSIGHT",
      title: "Homecare & Medical Liaison",
      desc: "Independent welfare monitoring for elderly family members, caregiver accountability checks, doctor & hospital liaison, and emergency care coordination.",
      features: ["Physical Welfare Visits", "Doctor & Hospital Liaison", "Caregiver Quality Audits"],
      icon: "volunteer_activism",
      img: healthcareLiaisonImg
    }
  ];

  const filteredServices = activeCategory === "all" 
    ? healthServices 
    : healthServices.filter(s => s.category === activeCategory);

  return (
    <section className="py-24 px-6 md:px-12 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B6924A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">medical_services</span>
            UK NHS Clinical Governance & Health Services
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38] tracking-tight">
            Comprehensive <span className="text-[#B6924A] italic">Health & Care</span> Services
          </h2>

          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Overseen by Jean Sigauke (Registered Nurse & Healthcare Specialist), we deliver UK NHS clinical leadership, healthcare quality audits, workforce capacity development, and compassionate homecare support across Southern Africa and Europe.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#1E2A38] text-white shadow-md border border-[#1E2A38]"
                  : "bg-[#F7F4EE] text-[#1E2A38]/80 hover:bg-[#B6924A]/15 border border-black/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-[#F7F4EE] rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header */}
                  <div className="h-52 relative overflow-hidden bg-[#1E2A38]">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute top-4 left-4 bg-[#1E2A38]/90 text-[#B6924A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#B6924A]/30">
                      {service.tag}
                    </div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-xl">{service.icon}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#1E2A38] group-hover:text-[#B6924A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#1E2A38] font-medium">
                          <span className="material-symbols-outlined text-[#B6924A] text-sm flex-shrink-0">check_circle</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 pt-0 mt-4 border-t border-black/5 flex items-center justify-between">
                  <Link 
                    to="/contact" 
                    className="text-xs font-bold text-[#1E2A38] hover:text-[#B6924A] flex items-center gap-1 uppercase tracking-wider transition-colors"
                  >
                    <span>Enquire Healthcare Services</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Banner inside Health Section */}
        <div className="bg-[#1E2A38] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A]">Clinical Governance Advisory Desk</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Need Expert Healthcare Governance or Homecare Support?</h3>
            <p className="text-white/70 text-xs md:text-sm font-light max-w-xl">
              Connect directly with our UK leadership team for custom facility audits, workforce training, or family care oversight.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0 relative z-10">
            <Link 
              to="/contact" 
              className="bg-[#B6924A] text-[#1E2A38] px-6 py-3.5 rounded-xl font-bold text-xs md:text-sm hover:bg-white transition-all uppercase tracking-wider shadow-lg flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a 
              href="https://wa.me/447984937336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold text-xs md:text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider shadow-lg"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthServicesSection;
