import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Cybersecurity & Offensive Penetration Testing",
    experience: "1-3 years (Associate)",
    linkedin: "",
    coverNote: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const cultureValues = [
    {
      icon: "psychology",
      title: "Intellectual Rigour & Mastery",
      desc: "We hold ourselves to global benchmarks — from CFI financial modelling (FMVA®) to EC-Council offensive cyber standards and POTRAZ regulatory jurisprudence."
    },
    {
      icon: "security",
      title: "Uncompromising Ethical Integrity",
      desc: "Our clients entrust us with mission-critical systems, corporate finances, and sensitive personal data. Discretion, honesty, and non-disclosure are sacred."
    },
    {
      icon: "hub",
      title: "Multidisciplinary Synergy",
      desc: "We break silos. Our cyber specialists learn financial risk, our modellers understand data privacy, and our DPOs master technical architecture."
    },
    {
      icon: "school",
      title: "Continuous Professional Sponsorship",
      desc: "We fund certifications and executive continuous education for our team members across FMVA®, BIDA®, CEH Practical, and Privacy Law."
    }
  ];

  const benefits = [
    {
      icon: "card_membership",
      title: "Certification Sponsorship",
      desc: "Full coverage for prestigious accreditations including CFI FMVA®, BIDA®, CompTIA Security+, and CEH Practical."
    },
    {
      icon: "payments",
      title: "Competitive Compensation",
      desc: "Institutional compensation packages with merit-based performance bonuses and clear promotion milestones."
    },
    {
      icon: "laptop_mac",
      title: "Hybrid & Modern Work",
      desc: "Flexible hybrid work arrangements, enterprise workstations, and state-of-the-art security and financial software."
    },
    {
      icon: "supervisor_account",
      title: "Executive Mentorship",
      desc: "Direct pair-programming and client-facing advisory experience alongside senior certified practice leads."
    }
  ];

  const practiceDisciplines = [
    {
      id: "cyber",
      icon: "security",
      title: "Cybersecurity & Offensive Penetration Testing",
      certifications: "CEH Practical • CompTIA Security+ • OSCP",
      desc: "Ethical hackers, web/API penetration testers, and digital forensics specialists conducting authorized vulnerability diagnostics and incident containment."
    },
    {
      id: "dpo",
      icon: "policy",
      title: "Data Protection & DPO Statutory Governance",
      certifications: "Certified DPO • Legal (LLB) • GDPR / POTRAZ Standards",
      desc: "Privacy consultants, outsourced DPOs, and legal practitioners managing statutory data protection registers, DPIAs, and regulatory compliance."
    },
    {
      id: "finance",
      icon: "calculate",
      title: "Financial Modelling & Quantitative Advisory",
      certifications: "FMVA® • BIDA® • CFA Standards • Accounting",
      desc: "Financial analysts and modellers constructing 3-statement forecasting models, DCF valuations, and automated PowerBI management dashboards."
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleApply = (disciplineTitle) => {
    setFormData(prev => ({ ...prev, position: disciplineTitle }));
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "263775040725";
    const text = `*New Career Application - Crestara Advisory Group*%0A%0A` +
                 `*Applicant Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Position Applied:* ${formData.position}%0A` +
                 `*Experience Level:* ${formData.experience}%0A` +
                 `*LinkedIn / Portfolio:* ${formData.linkedin || "N/A"}%0A%0A` +
                 `*Cover Note:*%0A${formData.coverNote}%0A%0A` +
                 `_Note: CV documents will be emailed to careers@crestaraadvisorygroup.com_`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-24 pb-32 font-sans">
      <SEO
        title="Careers at Crestara Advisory Group | Build Your Advisory Career"
        description="Join Crestara Advisory Group. Explore exciting career opportunities in Cybersecurity, Penetration Testing, Data Protection (POTRAZ compliant), and FMVA® Financial Modelling."
        keywords="Careers Crestara, Cybersecurity jobs Harare, Penetration testing jobs Zimbabwe, DPO jobs Zimbabwe, Financial analyst jobs Harare, advisory careers"
        canonical="https://www.crestaraadvisorygroup.com/careers"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAF7F2] via-[#F2E5C6] to-[#F2D9A0]/60 py-20 px-6 md:px-12 text-[#3B010B] animate-hero-gradient relative overflow-hidden border-b border-[#F2D9A0] text-center">
        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-4 py-1.5 rounded-full border border-[#75162D]/30 backdrop-blur-md shadow-sm font-display">
            <span className="material-symbols-outlined text-sm text-[#75162D]">work</span>
            Join Our Multidisciplinary Advisory Team
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-[#3B010B]">
            Build Your Career at <span className="burgundy-gradient-text">Crestara</span>
          </h1>

          <p className="text-base md:text-xl text-[#560B18]/90 max-w-3xl mx-auto font-light leading-relaxed">
            We are assembling Africa’s finest practitioners across Cybersecurity, Data Protection, and Quantitative Financial Intelligence. Work on mission-critical engagements, earn sponsored certifications, and shape corporate resilience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#talent-inquiry"
              className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all shadow-xl font-display border border-[#F2D9A0]/40"
            >
              Submit Expression of Interest
            </a>
            <a
              href="mailto:careers@crestaraadvisorygroup.com"
              className="bg-white/80 text-[#3B010B] hover:bg-[#F2E5C6] border-2 border-[#F2D9A0] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 font-mono"
            >
              <span className="material-symbols-outlined text-sm text-[#75162D]">mail</span>
              <span>careers@crestaraadvisorygroup.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Company Culture & Core Values */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2D9A0] shadow-md h-48 sm:h-56">
          <img
            src="/images/careers-workspace.jpg"
            alt="Crestara Advisory Group Modern Workplace Culture"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B010B]/90 via-[#75162D]/70 to-transparent flex items-center p-6 sm:p-10">
            <div className="space-y-2 text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#F2D9A0] text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-[#F2D9A0]/30 font-display">
                <span className="material-symbols-outlined text-sm">groups</span>
                Culture & Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                What Drives Life at Crestara
              </h2>
              <p className="text-xs sm:text-sm text-[#F2E5C6]/90 font-light hidden sm:block">
                We foster an environment of relentless curiosity, mathematical precision, ethical confidentiality, and peer collaboration.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-7 rounded-3xl border border-[#F2D9A0] shadow-sm hover:shadow-xl hover:border-[#75162D] transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-xl">{val.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-[#3B010B] font-display">{val.title}</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Perks & Benefits */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-[#F2D9A0]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-3 py-1 rounded-full font-display border border-[#75162D]/20">
              <span className="material-symbols-outlined text-sm">redeem</span>
              Why Join Us
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
              Growth, Support & Benefits
            </h2>
            <p className="text-gray-600 text-sm font-light">
              We invest deeply in our people so they can deliver extraordinary outcomes for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-7 rounded-3xl border border-[#F2D9A0] shadow-sm hover:border-[#75162D] transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-xl">{b.icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#3B010B] font-display">{b.title}</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent & Specialist Network / Expressions of Interest */}
      <section id="talent-inquiry" className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-3 py-1 rounded-full font-display border border-[#75162D]/20">
            <span className="material-symbols-outlined text-sm">handshake</span>
            Talent & Specialist Network
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
            Expressions of Interest & Specialist Roster
          </h2>
          <p className="text-gray-600 text-sm font-light leading-relaxed">
            While permanent and mandate-based advisory positions are appointed on an ongoing basis, we actively welcome profiles, consultant registrations, and speculative applications from certified specialists across our practice pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceDisciplines.map((discipline) => (
            <div
              key={discipline.id}
              className="bg-white rounded-3xl p-8 border border-[#F2D9A0] shadow-sm hover:shadow-xl hover:border-[#75162D] transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#75162D] text-[#F2D9A0] flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-2xl">{discipline.icon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#75162D] font-bold block pb-1 uppercase tracking-wider">
                    {discipline.certifications}
                  </span>
                  <h3 className="text-xl font-bold text-[#3B010B] font-display group-hover:text-[#75162D] transition-colors leading-snug">
                    {discipline.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {discipline.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF7F2]">
                <button
                  type="button"
                  onClick={() => handleApply(discipline.title)}
                  className="w-full bg-[#FAF7F2] hover:bg-[#75162D] text-[#3B010B] hover:text-[#F2E5C6] py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border border-[#F2D9A0] hover:border-transparent flex items-center justify-center gap-2 font-display"
                >
                  <span>Express Interest in {discipline.id.toUpperCase()}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#F2D9A0] shadow-2xl space-y-6">
          <div className="space-y-2 border-b border-[#FAF7F2] pb-4">
            <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-3 py-1 rounded-full font-display border border-[#75162D]/20">
              <span className="material-symbols-outlined text-sm">send</span>
              Application Submission
            </div>
            <h2 className="text-2xl md:text-3xl text-[#3B010B] font-extrabold tracking-tight font-display">
              Submit Your Candidacy
            </h2>
            <p className="text-xs text-gray-500 font-light">
              Send your profile directly to our Talent Acquisition desk at <strong className="text-[#75162D] font-mono">careers@crestaraadvisorygroup.com</strong>.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#F2D9A0] text-center space-y-4">
              <span className="material-symbols-outlined text-5xl text-emerald-600">check_circle</span>
              <h3 className="text-xl font-bold text-[#3B010B] font-display">Application Initiated</h3>
              <p className="text-xs text-gray-600 font-light max-w-md mx-auto leading-relaxed">
                Thank you for applying. Please email your full CV/Resume and relevant certification certificates to <strong className="font-mono text-[#75162D]">careers@crestaraadvisorygroup.com</strong> referencing your name.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#75162D] text-[#F2E5C6] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#3B010B] font-display"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
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
                    className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:bg-white outline-none"
                    placeholder="e.g. Farai Ndlovu"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:bg-white outline-none"
                    placeholder="f.ndlovu@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                    className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:bg-white outline-none"
                    placeholder="+263 77..."
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                    Discipline / Practice Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:bg-white outline-none cursor-pointer"
                  >
                    {practiceDisciplines.map(d => (
                      <option key={d.id} value={d.title}>{d.title}</option>
                    ))}
                    <option value="General Corporate Advisory / Multidisciplinary">General Corporate Advisory / Multidisciplinary</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                    Relevant Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:bg-white outline-none cursor-pointer"
                  >
                    <option value="0-1 years (Graduate)">0-1 years (Graduate)</option>
                    <option value="1-3 years (Associate)">1-3 years (Associate)</option>
                    <option value="3-5 years (Senior)">3-5 years (Senior)</option>
                    <option value="5+ years (Senior / Practice Lead)">5+ years (Senior / Practice Lead)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                  LinkedIn Profile / GitHub / Portfolio URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:bg-white outline-none"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3B010B] uppercase tracking-wider">
                  Cover Note & Core Accreditations <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="coverNote"
                  rows="4"
                  required
                  value={formData.coverNote}
                  onChange={handleChange}
                  className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:bg-white outline-none"
                  placeholder="Summarize your key technical / legal certifications, current career stage, and what motivates you to join Crestara Advisory Group..."
                ></textarea>
              </div>

              {/* Recruitment Privacy Notice */}
              <div className="pt-2 border-t border-[#FAF7F2]">
                <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                  Your application data will be handled confidentially under our Privacy Notice and used strictly for talent evaluation. CV documents should also be forwarded to <a href="mailto:careers@crestaraadvisorygroup.com" className="text-[#75162D] font-mono font-medium underline">careers@crestaraadvisorygroup.com</a>.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 font-display border border-[#F2D9A0]/30"
              >
                <FaWhatsapp className="text-lg text-[#25D366]" />
                <span>Submit Application & Notify Talent Team</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Direct Talent Contact Strip */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-8">
        <div className="bg-gradient-to-br from-[#F2E5C6] via-white to-[#F2D9A0]/70 p-8 rounded-3xl text-center text-[#3B010B] space-y-4 border-2 border-[#F2D9A0] shadow-xl">
          <h3 className="text-xl font-bold font-display text-[#75162D]">
            Direct Talent & Recruitment Desk
          </h3>
          <p className="text-xs text-gray-700 font-light max-w-xl mx-auto">
            Questions regarding open opportunities or executive placements? Contact our Talent team directly at <strong className="font-mono text-[#75162D]">careers@crestaraadvisorygroup.com</strong> or via WhatsApp Desk at <strong className="text-[#75162D] font-mono">+263 775 040 725</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
