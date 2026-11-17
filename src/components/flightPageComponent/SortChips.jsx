import React from 'react'
import { motion } from 'framer-motion';
import { body } from '../../constants/homeConstants';
import { SORTS } from '../../constants/flightConstant';

const SortChips = ({active, setActive}) => {
  return (
    <div role="radiogroup" aria-label="Sort flights" className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-wrap lg:px-0" style={body}>
      {SORTS.map(({ label, icon: Icon }) => {
        const on = active === label;
        return (
          <motion.button
            key={label}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => setActive(label)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              on
                ? "border-[#0F172A] bg-[#0F172A] text-white shadow-lg shadow-slate-900/20"
                : "border-[#E5E7EB] bg-white text-slate-600 hover:border-slate-300 hover:shadow-md"
            }`}
          >
            <Icon className={`h-4 w-4 ${on ? "text-[#FF6B35]" : "text-slate-400"}`} /> {label}
          </motion.button>
        );
      })}
    </div>
  );
}

export default SortChips
