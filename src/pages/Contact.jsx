import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import SEO from "../components/common/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    pillar: "Data Protection & Outsourced DPO",
    packageInterest: "Essential DPO Retainer",
    message: "",
    marketingConsent: false // Must remain UNTICKED by default as required by Part 5 Compliance
  });

  const [submitted, setSubmitted] = useState(false);

  const emailDirectory = [
    {
      role: "Executive Advisory Desk",
      email: "director@crestaraadvisorygroup.com",
      desc: "Executive consultations, multidisciplinary advisory & strategic contracts",
      icon: "military_tech"
    },
    {
      role: "General Inquiries & Client Desk",
      email: "info@crestaraadvisorygroup.com",
      desc: "New client onboarding, service scoping & commercial billing",
      icon: "mail"
    },
    {
      role: "DPO & Compliance Desk",
      email: "compliance@crestaraadvisorygroup.com",
      desc: "POTRAZ filings, DPIA submissions & regulatory liaison",
      icon: "policy"
    },
    {
      role: "Careers & Talent Acquisition",
      email: "careers@crestaraadvisorygroup.com",
      desc: "Security analysts, financial modellers & compliance associates",
      icon: "work"
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "263775040725";
    const text = `*New Advisory Quotation Request - Crestara Advisory Group*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Organization:* ${formData.organization || "N/A"}%0A` +
                 `*Pillar of Interest:* ${formData.pillar}%0A` +
                 `*Package / Scope:* ${formData.packageInterest}%0A` +
                 `*Marketing Consent:* ${formData.marketingConsent ? "Opted-In" : "Opted-Out"}%0A%0A` +
                 `*Inquiry Details:*%0A${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-32 font-sans">
      <SEO
        title="Contact Us & Request a Quote | Crestara Advisory Group"
        description="Connect with Crestara Advisory Group. Contact our multidisciplinary advisory team for Data Protection, Outsourced DPO (POTRAZ compliant), Cybersecurity & Pentesting, and FMVA® Financial Modelling."
        keywords="Contact Crestara, DPO Zimbabwe contact, POTRAZ compliance quote, penetration test enquiry Zimbabwe, financial modelling advisory Harare, advisory team"
        canonical="https://www.crestaraadvisorygroup.com/contact"
      />

      {/* Hero Header */}
      <section className="py-20 px-6 md:px-12 text-[#3B010B] relative overflow-hidden text-center space-y-6 border-b border-[#F2D9A0]">
        {/* Background Client Desk Photo Layer & Moving Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <img
            src="/images/hero-contact.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-100"
          />
          {/* Animated Moving Champagne/Gold Gradient Overlay */}
          <div className="absolute inset-0 animate-moving-gradient opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/75 via-transparent to-[#F2E5C6]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF7F2]/30 to-[#FAF7F2]" />
        </div>

        {/* Background Texture Overlays */}
        <div className="absolute inset-0 bg-texture-grain opacity-80 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-texture-grid opacity-50 pointer-events-none z-[1]" />

        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-md shadow-xs font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">contact_support</span>
            Direct Executive & Practice Desk
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#3B010B] font-display"
          >
            Initiate Your <span className="burgundy-gradient-text">Advisory Engagement</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base md:text-xl text-[#560B18]/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Connect directly with our multidisciplinary team of certified specialists across Data Protection, Cybersecurity, and Financial Advisory.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Directory & Quick Desk Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Corporate Desk Banner */}
            <div className="relative h-36 rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-md">
              <img
                src="/images/hero-contact.jpg"
                alt="Crestara Advisory Group Client Engagement Desk"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B010B]/85 via-[#75162D]/60 to-transparent flex items-center p-5">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F2D9A0] bg-white/10 px-2.5 py-0.5 rounded-full border border-[#F2D9A0]/30 font-display">
                    Harare & Southern Africa
                  </span>
                  <h3 className="text-base font-bold font-display text-white">
                    Direct Partner Engagement
                  </h3>
                  <p className="text-[11px] text-[#F2E5C6]/90 font-light">
                    Confidential scoping & RFP turn-around in 24 hrs
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Hotline Card */}
            <div className="bg-gradient-to-br from-[#F2E5C6] via-white to-[#F2D9A0]/70 rounded-3xl p-6 text-[#3B010B] border-2 border-[#F2D9A0] shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#75162D] font-display">Direct Practice Hotline</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div>
                <a href="tel:+263775040725" className="text-2xl font-extrabold text-[#3B010B] hover:text-[#75162D] transition-colors block font-display">
                  +263 775 040 725
                </a>
                <p className="text-xs text-gray-600 font-light mt-1">
                  Harare, Zimbabwe • Southern Africa • International Client Support
                </p>
              </div>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a 
                  href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20request%20an%20advisory%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#3B010B] border-2 border-[#25D366]/50 py-3 px-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:border-[#25D366] hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow-sm font-display"
                >
                  <FaWhatsapp className="text-lg text-[#25D366] flex-shrink-0" />
                  <span>WhatsApp Desk</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/crestara-advisory-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#3B010B] border-2 border-[#0A66C2]/40 py-3 px-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow-sm font-display"
                >
                  <FaLinkedinIn className="text-lg text-[#0A66C2] flex-shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Comprehensive 5-Email Directory */}
            <div className="bg-white rounded-3xl p-6 border border-[#F2D9A0] shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#FAF7F2]">
                <div className="w-10 h-10 rounded-xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-xl">alternate_email</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#3B010B] font-display">Corporate Email Directory</h3>
                  <p className="text-xs text-gray-500 font-light">Direct routing to designated practice desks</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {emailDirectory.map((item, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${item.email}`}
                    className="block p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F2E5C6]/60 hover:border-[#75162D] transition-all text-[#3B010B] group border border-[#F2D9A0]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5 min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#75162D] flex items-center gap-1.5 font-display">
                          <span className="material-symbols-outlined text-xs">{item.icon}</span>
                          <span>{item.role}</span>
                        </div>
                        <div className="text-xs font-semibold text-[#3B010B] group-hover:text-[#75162D] truncate font-mono">
                          {item.email}
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">
                          {item.desc}
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-sm text-[#75162D] group-hover:translate-x-0.5 transition-transform flex-shrink-0 mt-1">arrow_outward</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Regulatory Safeguards Notice */}
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#F2D9A0] text-xs text-gray-600 font-light leading-relaxed space-y-1">
              <div className="font-bold text-[#75162D] uppercase tracking-wider flex items-center gap-1 text-[11px] font-display">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span>Confidentiality & Non-Disclosure</span>
              </div>
              <p>
                All communications and attachments submitted through this portal are protected by strict professional confidentiality standards and data protection safeguards.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & RFP Request Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl border-2 border-[#F2D9A0] shadow-xl space-y-6"
            >
              <div className="space-y-1 border-b border-[#FAF7F2] pb-4">
                <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-3 py-1 rounded-full font-display border border-[#75162D]/20">
                  <span className="material-symbols-outlined text-sm">edit_note</span>
                  Quotation & RFP Portal
                </div>
                <h2 className="text-2xl md:text-3xl text-[#3B010B] font-extrabold tracking-tight font-display">
                  Request an Advisory Quotation
                </h2>
                <p className="text-xs text-gray-500 font-light">
                  Submit your organization requirements for a formal scope review and proposal within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#F2D9A0] text-center space-y-4">
                  <span className="material-symbols-outlined text-5xl text-emerald-600">check_circle</span>
                  <h3 className="text-xl font-bold text-[#3B010B] font-display">Inquiry Transmitted Successfully</h3>
                  <p className="text-xs text-gray-600 font-light max-w-md mx-auto leading-relaxed">
                    Thank you. Your request has been directed to the relevant practice team. We will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#75162D] text-[#F2E5C6] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#3B010B] font-display"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:ring-2 focus:ring-[#75162D]/15 focus:bg-white outline-none transition-all shadow-xs" 
                        placeholder="e.g. Tendai Moyo" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:ring-2 focus:ring-[#75162D]/15 focus:bg-white outline-none transition-all shadow-xs" 
                        placeholder="t.moyo@enterprise.co.zw" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:ring-2 focus:ring-[#75162D]/15 focus:bg-white outline-none transition-all shadow-xs" 
                        placeholder="+263 77... or international" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                        Organization / Company Name
                      </label>
                      <input 
                        type="text" 
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:ring-2 focus:ring-[#75162D]/15 focus:bg-white outline-none transition-all shadow-xs" 
                        placeholder="e.g. Apex Financial Services" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                        Primary Advisory Pillar
                      </label>
                      <select 
                        name="pillar"
                        value={formData.pillar}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:ring-2 focus:ring-[#75162D]/15 focus:bg-white outline-none cursor-pointer transition-all shadow-xs" 
                      >
                        <option>Data Protection & Outsourced DPO</option>
                        <option>Cybersecurity & Penetration Testing</option>
                        <option>Financial Modelling & FMVA® Analysis</option>
                        <option>Integrated Multi-Pillar Retainer</option>
                        <option>Digital Forensics & Incident Response</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                        Package / Scope Interest
                      </label>
                      <select 
                        name="packageInterest"
                        value={formData.packageInterest}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:ring-2 focus:ring-[#75162D]/15 focus:bg-white outline-none cursor-pointer transition-all shadow-xs" 
                      >
                        <option>Compliance Starter Pack</option>
                        <option>Essential DPO Retainer</option>
                        <option>Business DPO Retainer</option>
                        <option>Professional DPO Retainer</option>
                        <option>Cyber Security Health Check</option>
                        <option>SME Vulnerability Assessment</option>
                        <option>Offensive Web & API Penetration Testing</option>
                        <option>Digital Forensics & Incident Response</option>
                        <option>FMVA® 3-Statement Financial Modelling</option>
                        <option>BIDA® Management Dashboard Setup</option>
                        <option>Fractional CFO & Advisory Retainer</option>
                        <option>Crestara SME Protection Retainer</option>
                        <option>Crestara Business Protection Retainer</option>
                        <option>Crestara Corporate Enterprise Retainer</option>
                        <option>Custom Enterprise / Conglomerate Scope</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                      Engagement Details & Scope Notes <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message"
                      rows="4" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:ring-2 focus:ring-[#75162D]/15 focus:bg-white outline-none transition-all shadow-xs" 
                      placeholder="Please outline your entity size, current compliance status, technical environment, or required deliverables..."
                    ></textarea>
                  </div>

                  {/* Part 5 Compliance: Unticked Optional Marketing Checkbox */}
                  <div className="pt-2 border-t border-[#FAF7F2] space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input 
                        type="checkbox"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#75162D] focus:ring-[#75162D] cursor-pointer"
                      />
                      <span className="text-xs text-gray-600 font-light leading-relaxed">
                        I would like to receive occasional regulatory updates, whitepapers, and advisory insights from Crestara Advisory Group. (Optional — leave unticked if you do not wish to subscribe).
                      </span>
                    </label>

                    {/* Part 5 Mandatory Privacy Notice Link */}
                    <p className="text-[11px] text-gray-500 font-light">
                      By submitting this form, you acknowledge that your contact details will be processed in accordance with our{" "}
                      <Link to="/privacy-policy" className="text-[#75162D] underline hover:text-[#3B010B] font-semibold">
                        Privacy Notice
                      </Link>{" "}
                      solely to respond to your advisory inquiry.
                    </p>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 font-display border border-[#F2D9A0]/30"
                  >
                    <FaWhatsapp className="text-lg text-[#25D366]" />
                    <span>Transmit Advisory Inquiry via WhatsApp Desk</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;

