import { motion } from "framer-motion";

/**
 * ServiceAnimatedSVG
 * Custom vector animations tailored for each Crestara Advisory Group service pillar.
 * Uses Framer Motion for continuous ambient animations matching brand colors:
 * Sand Gold (#F2D9A0), Champagne (#F2E5C6), Burgundy (#75162D), Deep Wine (#3B010B).
 */
export const ServiceAnimatedSVG = ({ type, className = "w-14 h-14" }) => {
  // Normalize type
  const normalized = (type || "").toLowerCase();

  // 1. Offensive Penetration Testing / Ethical Hacking
  if (
    normalized.includes("pentest") ||
    normalized.includes("offensive") ||
    normalized.includes("ethical") ||
    normalized.includes("cy-pentest")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Crosshair Ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            stroke="#75162D"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner Target Ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="32"
            stroke="#F2D9A0"
            strokeWidth="1.5"
            strokeDasharray="8 4"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          {/* Radar Sweep Line */}
          <motion.line
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            stroke="#75162D"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            style={{ transformOrigin: "50px 50px" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          {/* Target Center Node */}
          <motion.circle
            cx="50"
            cy="50"
            r="12"
            fill="#3B010B"
            stroke="#F2D9A0"
            strokeWidth="2"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Crosshair Lines */}
          <line x1="50" y1="2" x2="50" y2="20" stroke="#75162D" strokeWidth="2" />
          <line x1="50" y1="80" x2="50" y2="98" stroke="#75162D" strokeWidth="2" />
          <line x1="2" y1="50" x2="20" y2="50" stroke="#75162D" strokeWidth="2" />
          <line x1="80" y1="50" x2="98" y2="50" stroke="#75162D" strokeWidth="2" />
          {/* Exploit Target Indicator */}
          <motion.circle
            cx="66"
            cy="34"
            r="4"
            fill="#75162D"
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <path d="M46 50L49 53L55 47" stroke="#F2D9A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  // 2. Cyber Security Health Check / Vulnerability Assessment
  if (
    normalized.includes("health") ||
    normalized.includes("assess") ||
    normalized.includes("diagnostic") ||
    normalized.includes("hygiene") ||
    normalized.includes("cy-health") ||
    normalized.includes("cy-sme-assess")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Shield Contour */}
          <motion.path
            d="M50 8L82 22V50C82 70 68 87 50 94C32 87 18 70 18 50V22L50 8Z"
            stroke="#75162D"
            strokeWidth="2"
            fill="#FAF7F2"
            animate={{ stroke: ["#75162D", "#F2D9A0", "#75162D"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Scanning Line Wave */}
          <motion.line
            x1="24"
            y1="30"
            x2="76"
            y2="30"
            stroke="#F2D9A0"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ y1: [25, 75, 25], y2: [25, 75, 25] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Medical / Security Cross Plus */}
          <motion.path
            d="M50 32V64M34 48H66"
            stroke="#3B010B"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ scale: [0.95, 1.05, 0.95] }}
            style={{ transformOrigin: "50px 48px" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Verified Health Pulse */}
          <motion.circle
            cx="50"
            cy="48"
            r="16"
            stroke="#75162D"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    );
  }

  // 3. Digital Forensics & Incident Response (DFIR)
  if (
    normalized.includes("forensic") ||
    normalized.includes("dfir") ||
    normalized.includes("incident") ||
    normalized.includes("cy-forensics")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fingerprint Arcs */}
          <motion.path
            d="M50 25C38 25 30 35 30 48C30 65 40 75 40 82"
            stroke="#75162D"
            strokeWidth="2.2"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, 40, 0] }}
            strokeDasharray="40 5"
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M50 18C33 18 22 30 22 48C22 72 34 84 34 88"
            stroke="#F2D9A0"
            strokeWidth="2.2"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [40, 0, 40] }}
            strokeDasharray="40 5"
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M50 32C42 32 37 38 37 48C37 60 44 70 48 76"
            stroke="#3B010B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <motion.path
            d="M50 40C46 40 44 43 44 48C44 55 48 62 50 66"
            stroke="#75162D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Forensic Magnifying Glass / Scanner Lens */}
          <motion.g
            animate={{
              x: [-4, 6, -4],
              y: [-4, 4, -4]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="62" cy="56" r="18" stroke="#3B010B" strokeWidth="2.5" fill="#F2E5C6" fillOpacity="0.4" />
            <line x1="75" y1="69" x2="88" y2="82" stroke="#3B010B" strokeWidth="4" strokeLinecap="round" />
            <motion.circle
              cx="62"
              cy="56"
              r="10"
              stroke="#75162D"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ rotate: 360 }}
              style={{ transformOrigin: "62px 56px" }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </motion.g>
        </svg>
      </div>
    );
  }

  // 4. Cyber Defense Retainer SLA / Active Defense
  if (
    normalized.includes("cy-retainer") ||
    (normalized.includes("defense") && normalized.includes("retainer")) ||
    normalized.includes("active resilience")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orbiting Defense Rings */}
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            stroke="#75162D"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="32"
            stroke="#F2D9A0"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          {/* Central Shield Fortress */}
          <path
            d="M50 20L72 30V50C72 65 62 76 50 82C38 76 28 65 28 50V30L50 20Z"
            fill="#3B010B"
            stroke="#F2D9A0"
            strokeWidth="2"
          />
          {/* Active Status Beacon */}
          <motion.circle
            cx="50"
            cy="50"
            r="6"
            fill="#F2D9A0"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M44 50L48 54L56 44"
            stroke="#3B010B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Orbiting Sentinel Node */}
          <motion.circle
            cx="85"
            cy="50"
            r="4"
            fill="#75162D"
            animate={{ rotate: 360 }}
            style={{ transformOrigin: "50px 50px" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    );
  }

  // 5. Data Protection Statutory Compliance Starter Pack / POTRAZ
  if (
    normalized.includes("dp-starter") ||
    normalized.includes("starter") ||
    normalized.includes("statutory") ||
    normalized.includes("launch")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Compliance Document Base */}
          <motion.rect
            x="24"
            y="14"
            width="52"
            height="72"
            rx="8"
            fill="#FAF7F2"
            stroke="#75162D"
            strokeWidth="2"
            animate={{ y: [14, 12, 14] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Document Content Lines */}
          <line x1="34" y1="28" x2="66" y2="28" stroke="#3B010B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="38" x2="60" y2="38" stroke="#F2D9A0" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="46" x2="56" y2="46" stroke="#F2D9A0" strokeWidth="2" strokeLinecap="round" />
          {/* Statutory POTRAZ Seal Badge */}
          <motion.g
            animate={{ scale: [1, 1.1, 1] }}
            style={{ transformOrigin: "58px 66px" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="58" cy="66" r="14" fill="#75162D" stroke="#F2D9A0" strokeWidth="2" />
            <path
              d="M52 66L56 70L65 61"
              stroke="#F2E5C6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
          {/* Ribbon */}
          <path d="M53 78L50 88L58 84L66 88L63 78" fill="#560B18" />
        </svg>
      </div>
    );
  }

  // 6. Outsourced DPO Retainers (Essential / Business / Pro)
  if (
    normalized.includes("dpo") ||
    normalized.includes("dp-essential") ||
    normalized.includes("dp-business") ||
    normalized.includes("dp-pro") ||
    normalized.includes("privacy")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orbiting Satellite Data Ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="#F2D9A0"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          {/* Satellite Nodes */}
          <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: "50px 50px" }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}>
            <circle cx="50" cy="10" r="4" fill="#75162D" stroke="#FAF7F2" strokeWidth="1" />
            <circle cx="90" cy="50" r="4" fill="#75162D" stroke="#FAF7F2" strokeWidth="1" />
            <circle cx="50" cy="90" r="4" fill="#75162D" stroke="#FAF7F2" strokeWidth="1" />
            <circle cx="10" cy="50" r="4" fill="#75162D" stroke="#FAF7F2" strokeWidth="1" />
          </motion.g>
          {/* Central DPO Privacy Shield */}
          <path
            d="M50 22L70 32V50C70 64 60 74 50 80C40 74 30 64 30 50V32L50 22Z"
            fill="#75162D"
            stroke="#F2D9A0"
            strokeWidth="2"
          />
          {/* User / Officer Icon in Center */}
          <circle cx="50" cy="44" r="7" fill="#F2E5C6" />
          <path d="M38 62C38 56 43 53 50 53C57 53 62 56 62 62" stroke="#F2E5C6" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // 7. FMVA® 3-Statement Financial Modelling & Valuation
  if (
    normalized.includes("modelling") ||
    normalized.includes("3-statement") ||
    normalized.includes("valuation") ||
    normalized.includes("fmva") ||
    normalized.includes("fin-model") ||
    normalized.includes("fin-val")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid Axes */}
          <line x1="18" y1="82" x2="84" y2="82" stroke="#3B010B" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="18" x2="18" y2="82" stroke="#3B010B" strokeWidth="2" strokeLinecap="round" />
          {/* 3 Interactive Financial Bars (P&L, Balance Sheet, Cash Flow) */}
          <motion.rect
            x="26"
            y="48"
            width="12"
            height="34"
            rx="3"
            fill="#F2D9A0"
            stroke="#75162D"
            strokeWidth="1.5"
            animate={{ height: [34, 44, 34], y: [48, 38, 48] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.rect
            x="44"
            y="32"
            width="12"
            height="50"
            rx="3"
            fill="#75162D"
            stroke="#3B010B"
            strokeWidth="1.5"
            animate={{ height: [50, 60, 50], y: [32, 22, 32] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.rect
            x="62"
            y="20"
            width="12"
            height="62"
            rx="3"
            fill="#3B010B"
            stroke="#F2D9A0"
            strokeWidth="1.5"
            animate={{ height: [62, 54, 62], y: [20, 28, 20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          {/* Ascending Valuation Trend Curve */}
          <motion.path
            d="M20 70C36 60 48 40 76 22"
            stroke="#75162D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Growth Node Peak */}
          <motion.circle
            cx="76"
            cy="22"
            r="4.5"
            fill="#F2D9A0"
            stroke="#75162D"
            strokeWidth="2"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }

  // 8. BIDA® Executive Management Dashboards
  if (
    normalized.includes("dashboard") ||
    normalized.includes("bida") ||
    normalized.includes("analytics") ||
    normalized.includes("fin-dash")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dashboard Monitor Screen */}
          <rect x="14" y="18" width="72" height="52" rx="6" fill="#3B010B" stroke="#F2D9A0" strokeWidth="2" />
          <rect x="18" y="22" width="64" height="44" rx="4" fill="#560B18" />
          {/* Dashboard Stand */}
          <path d="M42 70L38 82H62L58 70" stroke="#3B010B" strokeWidth="2" fill="#FAF7F2" />
          {/* Circular Gauge / Speedometer */}
          <motion.circle
            cx="32"
            cy="44"
            r="12"
            stroke="#F2D9A0"
            strokeWidth="2.5"
            strokeDasharray="24 16"
            animate={{ rotate: [0, 180, 0] }}
            style={{ transformOrigin: "32px 44px" }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="32" cy="44" r="3" fill="#FAF7F2" />
          {/* Live Waveform / Sparkline */}
          <motion.path
            d="M52 50L58 38L64 48L72 32"
            stroke="#F2D9A0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ pathLength: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="72" cy="32" r="2.5" fill="#FAF7F2" />
        </svg>
      </div>
    );
  }

  // 9. Fractional CFO & Advisory Retainer
  if (
    normalized.includes("cfo") ||
    normalized.includes("fractional") ||
    normalized.includes("fin-cfo")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Financial Balance Scale Beam */}
          <line x1="20" y1="36" x2="80" y2="36" stroke="#3B010B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="50" y1="20" x2="50" y2="78" stroke="#3B010B" strokeWidth="3" strokeLinecap="round" />
          <path d="M36 78H64" stroke="#3B010B" strokeWidth="3" strokeLinecap="round" />
          {/* Scale Pans with Oscillating Tilt */}
          <motion.g
            animate={{ rotate: [-6, 6, -6] }}
            style={{ transformOrigin: "50px 36px" }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Left Pan (Capital) */}
            <line x1="24" y1="36" x2="16" y2="52" stroke="#75162D" strokeWidth="1.5" />
            <line x1="24" y1="36" x2="32" y2="52" stroke="#75162D" strokeWidth="1.5" />
            <path d="M14 52C14 58 34 58 34 52H14Z" fill="#F2D9A0" stroke="#75162D" strokeWidth="1.5" />
            
            {/* Right Pan (Governance / ROI) */}
            <line x1="76" y1="36" x2="68" y2="52" stroke="#75162D" strokeWidth="1.5" />
            <line x1="76" y1="36" x2="84" y2="52" stroke="#75162D" strokeWidth="1.5" />
            <path d="M66 52C66 58 86 58 86 52H66Z" fill="#75162D" stroke="#F2D9A0" strokeWidth="1.5" />
          </motion.g>
          {/* Treasury Ascending Growth Arrow */}
          <motion.path
            d="M50 20L62 10M62 10H52M62 10V20"
            stroke="#75162D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }

  // 10. Integrated SME Protection Retainer
  if (
    normalized.includes("sme") ||
    normalized.includes("int-sme")
  ) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 3 Interconnected Rotating Triangular Synergy Hubs */}
          <motion.g
            animate={{ rotate: 360 }}
            style={{ transformOrigin: "50px 50px" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Triangle Connector Lines */}
            <polygon points="50,20 80,72 20,72" stroke="#F2D9A0" strokeWidth="2" strokeDasharray="4 4" fill="none" />
            
            {/* Node 1: Cyber (Top) */}
            <circle cx="50" cy="20" r="10" fill="#75162D" stroke="#F2D9A0" strokeWidth="2" />
            {/* Node 2: Privacy (Bottom Right) */}
            <circle cx="80" cy="72" r="10" fill="#3B010B" stroke="#F2D9A0" strokeWidth="2" />
            {/* Node 3: Finance (Bottom Left) */}
            <circle cx="20" cy="72" r="10" fill="#F2D9A0" stroke="#75162D" strokeWidth="2" />
          </motion.g>

          {/* Central Crestara Core */}
          <motion.circle
            cx="50"
            cy="50"
            r="12"
            fill="#FAF7F2"
            stroke="#75162D"
            strokeWidth="2"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <path d="M46 50L49 53L55 47" stroke="#75162D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  // 11. Integrated Business & Corporate Retainers (Enterprise Suite)
  // Default fallback for any integrated / comprehensive enterprise suite
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Enterprise Shield Diamond Geometry */}
        <motion.path
          d="M50 10L86 32V68L50 90L14 68V32L50 10Z"
          stroke="#75162D"
          strokeWidth="2"
          fill="#FAF7F2"
          animate={{ stroke: ["#75162D", "#F2D9A0", "#75162D"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Concentric Rotating Matrix */}
        <motion.circle
          cx="50"
          cy="50"
          r="26"
          stroke="#F2D9A0"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="16"
          stroke="#3B010B"
          strokeWidth="2"
          strokeDasharray="6 4"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        {/* Center Pillar Core */}
        <motion.circle
          cx="50"
          cy="50"
          r="7"
          fill="#75162D"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* 4 Cardinal Data Flow Pulses */}
        <line x1="50" y1="12" x2="50" y2="28" stroke="#75162D" strokeWidth="2" />
        <line x1="50" y1="72" x2="50" y2="88" stroke="#75162D" strokeWidth="2" />
        <line x1="16" y1="50" x2="32" y2="50" stroke="#75162D" strokeWidth="2" />
        <line x1="68" y1="50" x2="84" y2="50" stroke="#75162D" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ServiceAnimatedSVG;
