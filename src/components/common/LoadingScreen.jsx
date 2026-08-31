import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-primary flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Pulse */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-secondary rounded-full blur-[100px]"
      />

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Animated Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#B6924A]"
        >
          <span className="material-symbols-outlined text-8xl">verified_user</span>
        </motion.div>

        {/* Brand Text */}
        <div className="text-center space-y-2">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-white font-bold tracking-tight uppercase"
          >
            Elysian Consulting
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#B6924A] tracking-[0.3em] uppercase text-xs font-semibold"
          >
            International Advisory & Oversight
          </motion.p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#B6924A]"
          />
        </div>
      </div>

      {/* Decorative Governance Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid grid-cols-4 gap-20 p-20">
         {[...Array(12)].map((_, i) => (
           <span key={i} className="material-symbols-outlined text-white text-6xl">shield</span>
         ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
