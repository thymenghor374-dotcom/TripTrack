import React from 'react'
import { motion } from 'framer-motion';

const Radio = ({ selected, label, onClick }) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors duration-300 hover:bg-slate-50"
    >
       <span
        className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
          selected
            ? "border-[#FF6B35] bg-[#FF6B35] shadow-[0_0_0_4px_rgba(255,107,53,0.15)]"
            : "border-slate-300 bg-white group-hover:border-slate-400"
        }`}
      >
        <motion.span
          initial={false}
          animate={{
            scale: selected ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
          className="absolute h-2 w-2 rounded-full bg-white"
        />
      </span>

      <span className="text-sm font-medium text-[#0F172A]">
        {label}
      </span>
    </button>
  );
}

export default Radio
