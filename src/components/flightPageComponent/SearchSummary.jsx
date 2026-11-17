import React from 'react'
import { motion } from 'framer-motion';
import { body } from '../../constants/homeConstants';
import { SUMMARY } from '../../constants/flightConstant';
import { Pencil } from 'lucide-react';

const SearchSummary = () => {
  return (
    <div className="relative z-10 mx-auto -mt-20 max-w-7xl px-6 lg:px-12" style={body}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur-xl lg:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <dl className="grid flex-1 grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
            {SUMMARY.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-orange-100 text-[#FF6B35]"><Icon className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold text-[#64748B]">{label}</dt>
                  <dd className="mt-0.5 text-sm font-bold text-[#0F172A]">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0F172A] px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:bg-[#0F172A] hover:text-white lg:w-auto"
          >
            <Pencil className="h-4 w-4" /> Edit Search
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default SearchSummary
