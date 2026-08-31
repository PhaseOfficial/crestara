import { motion } from "framer-motion";

const Methodology = () => {
  const steps = [
    { number: 1, title: "Consultation", description: "Initial consultation to understand your needs, objectives, and specific requirements for overseas engagements." },
    { number: 2, title: "Assessment", description: "Thorough assessment and strategic planning, including risk analysis and resource allocation." },
    { number: 3, title: "Proposal", description: "Detailed proposal outlining our approach, timeline, deliverables, and transparent pricing structure." },
    { number: 4, title: "Research", description: "In-depth research and groundwork, including stakeholder mapping and regulatory landscape analysis." },
    { number: 5, title: "Report", description: "Regular progress reporting with verified data, timestamps, and geolocation evidence for complete transparency." },
    { number: 6, title: "Action", description: "Execution of agreed-upon actions with continuous monitoring and adaptive management based on evolving circumstances." }
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">
            Our 6-Step Methodology
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Our structured approach ensures transparency, accountability, and consistent delivery of exceptional service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-6 border border-gray-200 rounded-lg hover:border-[#B6924A] transition-border"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#B6924A]/20">
                <span className="text-[#B6924A] font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="font-semibold text-[#1E2A38] mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Methodology;