import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/common/SEO";

import heroBgImg from "../assets/stock/healthcare-hero-bg.jpg";
import heroPortraitImg from "../assets/stock/healthcare-hero-new.png";
import featuredImg from "../assets/stock/healthcare-featured.jpg";
import impactImg from "../assets/stock/healthcare-impact.jpg";

const HealthcareExpertise = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const trustBadges = [
    { icon: "favorite", label: "Compassionate\nCare" },
    { icon: "verified_user", label: "Trusted &\nProfessional" },
    { icon: "person", label: "Person-Centred\nApproach" },
    { icon: "public", label: "Across Southern\nAfrica & Europe" }
  ];

  const homecareServices = [
    {
      title: "Personalised Homecare",
      tag: "PERSON-CENTRED CARE",
      icon: "home_health",
      desc: "Supporting individuals to live safely, comfortably and independently in their own homes through person-centred care tailored to their unique needs."
    },
    {
      title: "Welfare & Wellbeing Visits",
      tag: "REGULAR CHECK-INS",
      icon: "volunteer_activism",
      desc: "Regular visits to check on your loved one's wellbeing, provide companionship and identify concerns early."
    },
    {
      title: "Family Liaison & Communication",
      tag: "KEEPING FAMILIES CONNECTED",
      icon: "forum",
      desc: "Keeping families informed through regular updates, progress reports and open communication wherever they are in the world."
    },
    {
      title: "Medication & Daily Living Support",
      tag: "INDEPENDENCE & DIGNITY",
      icon: "medication",
      desc: "Helping individuals manage daily routines, medication prompts, meal preparation, mobility and activities that promote independence."
    },
    {
      title: "Hospital Discharge & Recovery Support",
      tag: "SAFE RECOVERY AT HOME",
      icon: "local_hospital",
      desc: "Providing practical assistance following hospital discharge to support a safe and supported recovery at home."
    },
    {
      title: "Care Coordination",
      tag: "PERSON-CENTRED PATHWAYS",
      icon: "groups",
      desc: "Working with healthcare professionals, carers and family members to ensure services remain coordinated and person-centred."
    },
    {
      title: "Independent Wellbeing Reviews",
      tag: "OBJECTIVE WELFARE ASSESSMENTS",
      icon: "fact_check",
      desc: "Providing objective welfare visits and wellbeing assessments with honest recommendations."
    },
    {
      title: "Diaspora Family Support",
      tag: "OVERSEAS FAMILY OVERSIGHT",
      icon: "public",
      desc: "Offering trusted local support, regular communication and professional oversight for families living overseas."
    }
  ];

  const whyFamiliesCommitments = [
    {
      title: "Compassionate Care",
      desc: "Treating every individual with dignity, kindness and respect."
    },
    {
      title: "Trusted Local Presence",
      desc: "Providing dependable support when families cannot be there."
    },
    {
      title: "Regular Family Updates",
      desc: "Keeping families informed through honest and timely communication."
    },
    {
      title: "Person-Centred Care",
      desc: "Tailoring every care plan to the individual's needs and preferences."
    },
    {
      title: "Professional Oversight",
      desc: "Delivering services with quality, accountability and safeguarding at the core."
    },
    {
      title: "Peace of Mind",
      desc: "Giving families confidence that their loved ones are safe, supported and never alone."
    }
  ];

  const whoWeSupport = [
    "Older adults wishing to remain independent at home.",
    "Individuals recovering from illness or hospital admission.",
    "People living with long-term health conditions.",
    "Individuals requiring ongoing support with daily living.",
    "Families living abroad seeking trusted local oversight.",
    "Relatives requesting regular welfare checks and professional updates."
  ];

  const careJourney = [
    "Initial Consultation",
    "Care Assessment",
    "Personalised Care Plan",
    "Ongoing Care & Monitoring",
    "Family Updates"
  ];

  const expertise = [
    {
      icon: "medical_services",
      title: "Healthcare Consultancy",
      desc: "Strategic advice and operational support to improve healthcare services and outcomes."
    },
    {
      icon: "health_and_safety",
      title: "Clinical Governance & Quality Assurance",
      desc: "Strengthening patient safety, compliance and quality through robust systems and audits."
    },
    {
      icon: "groups_3",
      title: "Workforce Development & Leadership",
      desc: "Building capable teams and strong leaders through training, mentoring and capacity building."
    },
    {
      icon: "domain",
      title: "Healthcare Infrastructure & Service Development",
      desc: "Supporting the design, improvement and sustainability of healthcare facilities and services."
    },
    {
      icon: "school",
      title: "Training & Capacity Building",
      desc: "Professional education and skills development for healthcare professionals."
    },
    {
      icon: "public",
      title: "International Health Partnerships",
      desc: "Collaborating with governments, NGOs and partners to strengthen health systems."
    }
  ];

  const stats = [
    { value: "500+", label: "Families\nSupported", icon: "family_restroom" },
    { value: "1,000+", label: "Home Visits\nCompleted", icon: "home_health" },
    { value: "50+", label: "Healthcare\nPartners", icon: "handshake" },
    { value: "2", label: "Continents\nServed", icon: "public" },
    { value: "25+", label: "Organisations\nSupported", icon: "apartment" },
    { value: "100%", label: "Commitment to\nQuality & Care", icon: "verified" }
  ];

  const approachSteps = [
    { icon: "search", title: "Assess", desc: "Understanding needs, challenges and priorities." },
    { icon: "lightbulb", title: "Design", desc: "Creating tailored solutions and care plans." },
    { icon: "settings", title: "Implement", desc: "Delivering with expertise, compassion and professionalism." },
    { icon: "monitor_heart", title: "Monitor", desc: "Continuous oversight and quality assurance." },
    { icon: "trending_up", title: "Improve", desc: "Continuous improvement for better outcomes and sustainable impact." }
  ];

  const expertiseAreas = [
    "UK Nursing",
    "Biomedical Science",
    "Clinical Governance",
    "Healthcare Leadership",
    "Quality Assurance",
    "Adult Social Care",
    "Workforce Development",
    "Service Improvement"
  ];

  const impactCards = [
    {
      icon: "volunteer_activism",
      title: "Supporting Families Across Borders",
      desc: "Helping diaspora families coordinate compassionate care and maintain regular communication with loved ones living in Southern Africa."
    },
    {
      icon: "health_and_safety",
      title: "Strengthening Healthcare Services",
      desc: "Supporting organisations to improve governance, workforce capability and quality assurance through practical consultancy and implementation."
    },
    {
      icon: "eco",
      title: "Building Sustainable Care",
      desc: "Working with partners to develop person-centred care services that improve health outcomes and strengthen communities."
    }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-20 pb-12 font-sans">
      <SEO
        title="UK Healthcare Governance & Care Advisory | Elysian Global"
        description="Combining UK healthcare leadership, registered nursing experience, and NHS clinical governance standards to support health institutions and diaspora families across Southern Africa."
        keywords="UK healthcare governance Zimbabwe, Zimbabwe healthcare consultancy, clinical governance, care quality assurance, diaspora family care Zimbabwe, healthcare advisory Southern Africa"
        canonical="https://www.elysianglobalservices.com/healthcare-expertise"
      />
      {/* ===================== HERO ===================== */}

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src={heroBgImg} alt="Compassionate healthcare across borders" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A38]/95 via-[#1E2A38]/85 to-[#0F172A]/95"></div>
        </div>

        <div className="relative z-10 py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/15 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
                <span className="material-symbols-outlined text-sm">health_and_safety</span>
                Healthcare & Care Solutions
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Compassionate Care.<br />
                <span className="text-[#B6924A] italic">Trusted Support. Peace of Mind.</span>
              </h1>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-[#B6924A] text-[#1E2A38] px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  Speak to Our Team
                </Link>
                <a
                  href="https://wa.me/447984937336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp Advisory Desk
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative space-y-5"
            >
              <div className="bg-[#1E2A38]/80 backdrop-blur-md border border-[#B6924A]/30 rounded-2xl p-7 md:p-8 shadow-2xl">
                <span className="material-symbols-outlined text-[#B6924A] text-5xl mb-3 block">format_quote</span>
                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed italic">
                  Because every family deserves peace of mind. Every patient deserves dignity. Every organisation deserves the support to deliver exceptional care.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#B6924A]/30 h-64 md:h-72 lg:h-80">
                <img
                  src={heroPortraitImg}
                  alt="Compassionate nurse with elderly patient â€” Elysian homecare"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#B6924A] text-[#1E2A38] flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-xl">favorite</span>
                  </div>
                  <span className="text-xs text-white font-semibold uppercase tracking-widest">Compassionate Care, Trusted Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="relative z-10 bg-white/5 backdrop-blur-sm border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B6924A]/15 text-[#B6924A] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">{b.icon}</span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-white whitespace-pre-line leading-tight uppercase tracking-wide">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED FLAGSHIP SERVICE ===================== */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto space-y-7">
          <motion.div {...fadeInUp} className="text-center space-y-2 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">favorite</span>
              Our Featured Service
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38]">Homecare, Family Support & Care Coordination</h2>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              Helping families ensure their loved ones receive safe, compassionate and dignified care.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Featured Image */}
              <div className="lg:col-span-4 relative h-72 lg:h-auto min-h-[420px]">
                <img src={featuredImg} alt="Family supporting an elderly loved one with warmth and care" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1E2A38]/85 backdrop-blur-md rounded-2xl border border-[#B6924A]/40 hidden lg:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="material-symbols-outlined text-2xl">favorite</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#B6924A] uppercase tracking-wider">Our Featured Service</span>
                    <span className="text-white/80 text-xs font-light">Homecare, Family Support & Care Coordination</span>
                  </div>
                </div>
              </div>

              {/* 8 Homecare Services */}
              <div className="lg:col-span-8 p-7 md:p-10 space-y-6 border-t lg:border-t-0 lg:border-l border-gray-100">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A]">Our Homecare & Family Support Services</span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1E2A38]">Specialist Support for Every Stage</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 pt-2">
                  {homecareServices.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#B6924A]/10 text-[#B6924A] flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-xl">{s.icon}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#B6924A] bg-[#B6924A]/10 px-2 py-0.5 rounded-full border border-[#B6924A]/20 inline-block mb-1">{s.tag}</span>
                        <h4 className="text-sm font-bold text-[#1E2A38] leading-tight">{s.title}</h4>
                        <p className="text-xs text-gray-600 font-light leading-snug mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== WHY FAMILIES CHOOSE ELYSIAN ===================== */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto space-y-7">
          <motion.div {...fadeInUp} className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">verified</span>
              Our Commitment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Why Families Choose Elysian</h2>
            <p className="text-gray-600 text-base font-light">
              Six commitments that shape how we support every individual and every family we work with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFamiliesCommitments.map((c, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#F7F4EE] rounded-2xl p-7 border border-gray-100 hover:border-[#B6924A]/40 transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">verified_user</span>
                </div>
                <h3 className="text-lg font-bold text-[#1E2A38]">{c.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHO WE SUPPORT ===================== */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div {...fadeInUp} className="space-y-5">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">groups</span>
              Who We Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Individuals, Families and Loved Ones<br />Across Every Life Stage
            </h2>
            <p className="text-white/80 font-light leading-relaxed">
              Our services are designed around the real situations where families need trusted, professional and compassionate support.
            </p>
          </motion.div>

          <motion.ul {...fadeInUp} className="space-y-3">
            {whoWeSupport.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#16222F] border border-[#B6924A]/20 hover:border-[#B6924A]/50 transition-colors"
              >
                <span className="material-symbols-outlined text-[#B6924A] mt-0.5 flex-shrink-0">check_circle</span>
                <span className="text-white font-light text-sm md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-10 md:py-12 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="bg-[#1E2A38] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white">
              <div className="lg:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  We support health and care<br /><span className="text-[#B6924A]">across borders</span>
                </h2>
              </div>

              <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="text-center lg:text-left lg:border-l lg:border-white/10 lg:pl-5 first:lg:border-l-0 first:lg:pl-0"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#B6924A]/15 text-[#B6924A] flex items-center justify-center mx-auto lg:mx-0 mb-3">
                      <span className="material-symbols-outlined text-xl">{s.icon}</span>
                    </div>
                    <div className="text-2xl md:text-3xl font-extrabold text-[#B6924A] mb-1">{s.value}</div>
                    <div className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider font-semibold whitespace-pre-line leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== OUR CARE JOURNEY ===================== */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-6xl mx-auto space-y-7">
          <motion.div {...fadeInUp} className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">timeline</span>
              Our Care Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">A Clear Path From First Call to Ongoing Care</h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#B6924A]/30 via-[#B6924A] to-[#B6924A]/30 -z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {careJourney.map((step, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center space-y-3"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#1E2A38] text-[#B6924A] flex items-center justify-center border-4 border-[#B6924A] shadow-lg">
                    <span className="font-bold text-3xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#1E2A38] leading-tight max-w-[180px] mx-auto">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HEALTHCARE EXPERTISE ===================== */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-7">
          <motion.div {...fadeInUp} className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Our Healthcare Expertise</h2>
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
              Complementary specialist services that strengthen healthcare systems and support organisations across borders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#F7F4EE] rounded-2xl p-7 border border-gray-100 hover:border-[#B6924A]/40 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center mb-4 group-hover:bg-[#B6924A] group-hover:text-[#1E2A38] transition-colors">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#1E2A38] mb-2 group-hover:text-[#B6924A] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HEALTHCARE APPROACH ===================== */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto space-y-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Our Healthcare Approach</h2>
              </motion.div>

              <div className="relative">
                <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-[#B6924A]/20 via-[#B6924A]/60 to-[#B6924A]/20"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative">
                  {approachSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      {...fadeInUp}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="text-center space-y-3 relative bg-[#F7F4EE]"
                    >
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#1E2A38] text-[#B6924A] flex items-center justify-center border-2 border-[#B6924A]/40 shadow-md">
                        <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#1E2A38] uppercase tracking-wider">{step.title}</h3>
                      <p className="text-xs text-gray-600 font-light leading-relaxed px-1">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div {...fadeInUp} className="lg:col-span-4 bg-white rounded-3xl p-7 md:p-8 border border-gray-100 space-y-5 shadow-md">
              <div className="space-y-2">
                <p className="text-[#B6924A] text-xs font-bold uppercase tracking-widest">Proven. Trusted. Compassionate.</p>
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2A38] leading-tight">Why Our Healthcare Expertise Matters</h3>
              </div>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Our services are informed by extensive experience across:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2">
                {expertiseAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#B6924A] text-base flex-shrink-0 mt-0.5">check</span>
                    <span className="text-sm text-[#1E2A38] font-medium leading-snug">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== MAKING A DIFFERENCE ===================== */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Making a Difference</h2>

              <div className="space-y-3">
                {impactCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeInUp}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-[#F7F4EE] rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B6924A] group-hover:text-[#1E2A38] transition-colors">
                      <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base md:text-lg font-bold text-[#1E2A38] leading-tight">{card.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div {...fadeInUp} className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/40 h-[360px] lg:h-[400px] relative">
                <img src={impactImg} alt="Compassionate care and human connection" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1E2A38]/85 backdrop-blur-md rounded-2xl border border-[#B6924A]/40 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="material-symbols-outlined text-2xl">favorite</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#B6924A] uppercase tracking-wider">Compassion in Action</span>
                    <span className="text-white/80 text-xs font-light">Every visit. Every conversation. Every life we touch.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== OUR PROMISE TO FAMILIES ===================== */}
      <section className="py-12 md:py-14 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-5 relative z-10">
          <motion.div {...fadeInUp} className="space-y-5">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">favorite</span>
              Our Promise to Families
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Safe, Supported & Never Alone.
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Entrusting the care of a loved one to someone else is never an easy decision. At Elysian Global, every visit, conversation and action is guided by compassion, professionalism and respect. Our commitment is not only to care for those you love, but also to give you confidence that they are safe, supported and never alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-10 md:py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-[#1E2A38] via-[#16222F] to-[#1E2A38] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <div className="space-y-1">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">Let&apos;s Work Together for <span className="text-[#B6924A]">Better Health and Care</span></h2>
                  <p className="text-white/75 text-sm font-light leading-relaxed max-w-xl">
                    Whether you are a family seeking trusted support or an organisation seeking healthcare solutions, we are here to help.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="bg-[#B6924A] text-[#1E2A38] px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl flex items-center gap-2"
                >
                  Book a Family Consultation
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <a
                  href="https://wa.me/447984937336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp (+44 7984 937336)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareExpertise;
