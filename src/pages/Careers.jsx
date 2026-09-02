import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Senior Penetration Testing & Cybersecurity Specialist",
    experience: "3-5 years",
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

  const jobListings = [
    {
      id: "cyber-lead",
      title: "Senior Penetration Testing & Cybersecurity Specialist",
      department: "Offensive Security & Digital Forensics",
      location: "Harare, Zimbabwe (Hybrid)",
      type: "Full-Time",
      experience: "3+ Years",
      badge: "Priority Hire",
      summary: "Lead offensive penetration testing engagements across web applications, APIs, cloud environments, and internal networks for banking and enterprise clients.",
      responsibilities: [
        "Conduct authorized web, API, network, and cloud penetration tests under formal Rules of Engagement (RoE).",
        "Produce detailed technical vulnerability reports with proof-of-concept exploits and remediation blueprints.",
        "Perform digital forensic investigations and malware containment during active incident response.",
        "Collaborate with client development teams on secure coding practices and post-audit re-testing."
      ],
      requirements: [
        "Certified in CEH Practical, OSCP, CompTIA Security+, or equivalent offensive cybersecurity certification.",
        "Strong proficiency with Burp Suite Pro, Metasploit, Nmap, Wireshark, and Linux environments.",
        "Solid understanding of OWASP Top 10 vulnerabilities, API security, and network protocol fundamentals.",
        "Impeccable ethical standing and ability to handle strictly confidential client infrastructure."
      ]
    },
    {
      id: "dpo-consultant",
      title: "Data Protection & Privacy Compliance Consultant",
      department: "Data Protection & DPO Practice",
      location: "Harare, Zimbabwe (Hybrid)",
      type: "Full-Time",
      experience: "2+ Years",
      badge: "Regulatory Focus",
      summary: "Advise commercial clients on compliance with the Data Protection Act [Chapter 12:07], conduct DPIAs, maintain processing registers, and liaise with POTRAZ.",
      responsibilities: [
        "Draft and review Data Protection Policies, employee privacy notices, and third-party data processing agreements.",
        "Lead Data Protection Impact Assessments (DPIAs) on emerging digital platforms, AI tools, and fintech architectures.",
        "Maintain statutory Data Processing Registers and Data Mapping inventories for client organizations.",
        "Assist clients during regulatory inquiries, statutory POTRAZ filings, and data subject access requests (DSARs)."
      ],
      requirements: [
        "Degree in Law (LLB), Information Governance, Computer Science, or Certified Data Protection Officer (DPO).",
        "Deep familiarity with Zimbabwe's Data Protection Act [Chapter 12:07], POTRAZ regulations, GDPR, and POPIA.",
        "Strong analytical, legal drafting, and presentation skills for executive board presentations.",
        "Demonstrated experience in compliance auditing, risk assessments, or corporate governance."
      ]
    },
    {
      id: "finance-model",
      title: "Financial Modelling & Valuation Associate",
      department: "Financial Advisory & Corporate Modelling",
      location: "Harare, Zimbabwe (Hybrid)",
      type: "Full-Time",
      experience: "2+ Years",
      badge: "FMVA / BIDA Track",
      summary: "Build institutional 3-statement dynamic financial models, DCF company valuations, and automated PowerBI management dashboards for scaling enterprises.",
      responsibilities: [
        "Construct integrated 3-statement forecast models (P&L, Balance Sheet, Cash Flow) in Excel adhering to CFI standards.",
        "Perform DCF company valuations, scenario/sensitivity analyses, and capital project investment appraisals.",
        "Design and deploy automated executive KPI dashboards in Microsoft PowerBI and Excel.",
        "Deliver monthly budget-vs-actual variance reports and cash-flow management advisory to client leadership."
      ],
      requirements: [
        "Degree in Finance, Accounting, Economics, or Quantitative discipline; FMVA® / BIDA® or CFA candidate preferred.",
        "Expert Excel modelling skills (dynamic array formulas, INDEX/MATCH, scenario managers, circular reference avoidance).",
        "Proficiency in Microsoft PowerBI, DAX, Power Query, and financial statement analysis.",
        "Strong commercial acumen and understanding of Zimbabwean macroeconomic dynamics and multi-currency environments."
      ]
    },
    {
      id: "dfir-analyst",
      title: "Digital Forensics & Incident Response (DFIR) Analyst",
      department: "Offensive Security & Digital Forensics",
      location: "Harare, Zimbabwe (Hybrid / On-Call)",
      type: "Full-Time",
      experience: "2+ Years",
      badge: "Specialist",
      summary: "Conduct digital evidence preservation, disk/memory timeline reconstruction, and root-cause analysis for cybersecurity breaches and corporate fraud cases.",
      responsibilities: [
        "Execute forensic acquisitions of servers, workstations, mobile devices, and cloud logs maintaining chain-of-custody.",
        "Analyze disk images, memory dumps, and Windows/Linux event logs to reconstruct adversary attack paths.",
        "Draft board-admissible, legally defensible forensic investigation reports for litigation and law enforcement.",
        "Assist in rapid threat containment and threat actor eradication during emergency incident response."
      ],
      requirements: [
        "Experience with forensic tools (Autopsy, FTK Imager, Volatility, EnCase, Wireshark, SANS SIFT).",
        "Understanding of file systems (NTFS, EXT4, APFS), memory structures, and persistence mechanisms.",
        "Clear technical writing ability and strict adherence to evidence-handling jurisprudence."
      ]
    },
    {
      id: "grad-associate",
      title: "Graduate Advisory Associate (Multidisciplinary)",
      department: "Cross-Pillar Graduate Program",
      location: "Harare, Zimbabwe",
      type: "Graduate Program (12-Month Rotation)",
      experience: "Entry-Level",
      badge: "Early Career",
      summary: "Fast-track rotational program spanning Cybersecurity, Data Protection, and Financial Advisory with dedicated mentorship and sponsored certifications.",
      responsibilities: [
        "Rotate through all 3 advisory pillars, supporting senior consultants on live client engagements.",
        "Conduct industry research, regulatory bench-marking, and financial data gathering.",
        "Assist in vulnerability scans, policy documentation, and financial model testing.",
        "Complete assigned professional certifications (FMVA, CompTIA Sec+, DPO) within the 12-month program."
      ],
      requirements: [
        "Recent graduate (First or Upper Second Class) in Computer Science, Cybersecurity, Law, Finance, or Accounting.",
        "Passionate problem-solver with exceptional analytical curiosity and strong work ethic.",
        "Excellent written and verbal communication skills."
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleApply = (jobTitle) => {
    setFormData(prev => ({ ...prev, position: jobTitle }));
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
              href="#open-positions"
              className="bg-[#75162D] text-[#F2E5C6] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#3B010B] hover:text-[#F2D9A0] transition-all shadow-xl font-display border border-[#F2D9A0]/40"
            >
              Explore Open Positions
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

      {/* Open Positions */}
      <section id="open-positions" className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#75162D] text-xs font-bold uppercase tracking-widest bg-[#F2D9A0]/50 px-3 py-1 rounded-full font-display border border-[#75162D]/20">
            <span className="material-symbols-outlined text-sm">list_alt</span>
            Current Opportunities
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B010B] font-display">
            Open Advisory Positions
          </h2>
          <p className="text-gray-600 text-sm font-light">
            Review our active openings and apply directly. We evaluate applications on a rolling basis.
          </p>
        </div>

        <div className="space-y-6">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl p-7 md:p-9 border border-[#F2D9A0] shadow-sm hover:shadow-xl hover:border-[#75162D] transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#FAF7F2] pb-5">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#75162D]/10 text-[#75162D] px-2.5 py-1 rounded-full font-mono border border-[#75162D]/20">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F2E5C6] text-[#75162D] px-2.5 py-1 rounded-full border border-[#F2D9A0] font-semibold">
                      {job.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#3B010B] font-display">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-light">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#75162D]">location_on</span>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#75162D]">schedule</span>
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#75162D]">trending_up</span>
                      {job.experience} Experience
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleApply(job.title)}
                  className="bg-[#75162D] text-[#F2E5C6] hover:bg-[#3B010B] hover:text-[#F2D9A0] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md whitespace-nowrap self-start md:self-center font-display border border-[#F2D9A0]/30"
                >
                  Apply for Position
                </button>
              </div>

              <p className="text-sm text-gray-700 font-light leading-relaxed">
                {job.summary}
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B010B] font-display">Key Responsibilities:</h4>
                  <ul className="space-y-1.5">
                    {job.responsibilities.map((res, i) => (
                      <li key={i} className="text-xs text-gray-600 font-light flex items-start gap-2">
                        <span className="material-symbols-outlined text-sm text-[#75162D] flex-shrink-0 mt-0.5">check_circle</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B010B] font-display">Candidate Requirements:</h4>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-gray-600 font-light flex items-start gap-2">
                        <span className="material-symbols-outlined text-sm text-[#75162D] flex-shrink-0 mt-0.5">arrow_right</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                    Position Applied For <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full bg-[#FAF7F2] border border-[#F2D9A0] rounded-xl px-4 py-3 text-sm focus:border-[#75162D] focus:bg-white outline-none cursor-pointer"
                  >
                    {jobListings.map(j => (
                      <option key={j.id} value={j.title}>{j.title}</option>
                    ))}
                    <option value="General Spontaneous Application">General Spontaneous Application</option>
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
