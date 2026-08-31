import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/263775040725?text=Hello%20Crestara%20Advisory%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 group hover:bg-[#20ba5a] transition-all border-2 border-white/20"
      title="Chat with Crestara Advisory Group on WhatsApp (+263 775 040 725)"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-1">
        WhatsApp Desk
      </span>
    </motion.a>
  );
};

export default WhatsAppFloatingButton;

