import React from 'react'
import { motion } from 'framer-motion';

const Chip = ({ selected, onClick, children }) => {
  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
        selected
          ? "border-[#FF6B35] bg-[#FF6B35] text-white shadow-lg shadow-orange-500/25"
          : "border-[#E5E7EB] bg-white text-[#0F172A] shadow-[0_1px_3px_rgba(15,23,42,0.05)] hover:border-slate-300 hover:shadow-md"
      }`}
    >
      {children}
    </motion.button>
  );
}

export default Chip
