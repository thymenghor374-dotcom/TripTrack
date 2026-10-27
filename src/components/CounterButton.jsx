import React from 'react'
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const CounterButton = ({ kind, disabled, onClick, label }) => {
  const plus = kind === "plus";
  const Icon = plus ? Plus : Minus;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      whileHover={disabled ? undefined : { scale: 1.1 }}
      whileTap={disabled ? undefined : { scale: 0.92 }}
      className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 ${
        plus
          ? "border-[#2563EB] bg-[#2563EB] text-white shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 disabled:border-slate-200 disabled:bg-slate-200 disabled:shadow-none"
          : "border-[#E5E7EB] bg-white text-[#0F172A] hover:border-slate-400 hover:shadow-md"
      } disabled:cursor-not-allowed ${plus ? "" : "disabled:border-slate-200 disabled:text-slate-300 disabled:shadow-none"}`}
    >
      <Icon className="h-4 w-4" strokeWidth={2.5} />
    </motion.button>
  );
}

export default CounterButton
