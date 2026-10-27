import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const OptionCard = ({ label, icon: Icon, selected, onSelect }) => {
  return (
    <motion.button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        borderColor: selected ? "#2563EB" : "#E5E7EB",
        boxShadow: selected
          ? "0 8px 24px -8px rgba(37,99,235,0.35)"
          : "0 1px 2px rgba(15,23,42,0.04)",
      }}
      transition={{ duration: 0.25 }}
      className={`flex w-full items-center gap-3 rounded-2xl border-2 bg-white/90 px-5 py-3.5 text-left text-sm font-semibold backdrop-blur-md sm:w-auto ${
        selected ? "text-[#0F172A]" : "text-slate-600 hover:!border-slate-400"
      }`}
    >
      <span className="relative grid h-6 w-6 shrink-0 place-items-center">
        <motion.span
          initial={false}
          animate={{ opacity: selected ? 0 : 1 }}
          className="absolute inset-0 rounded-full border-2 border-slate-300"
        />
        <motion.span
          initial={false}
          animate={{ scale: selected ? 1 : 0, opacity: selected ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          className="absolute inset-0 grid place-items-center rounded-full bg-[#2563EB] text-white"
        >
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </motion.span>
      </span>
      <Icon className={`h-5 w-5 transition-colors duration-300 ${selected ? "text-[#2563EB]" : "text-slate-400"}`} />
      {label}
    </motion.button>
  );
}

export default OptionCard
