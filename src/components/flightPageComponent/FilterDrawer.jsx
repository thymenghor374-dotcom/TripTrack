import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';


const FilterDrawer = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm" />
          <motion.aside
            role="dialog"
            aria-label="Filters"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-[#F8FAFC] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#E5E7EB] bg-white px-6 py-5">
              <h2 style={heading} className="text-lg font-bold text-[#0F172A]">Filters</h2>
              <button type="button" onClick={onClose} aria-label="Close filters" className="grid h-10 w-10 place-items-center rounded-full border border-[#E5E7EB] text-slate-600"><X className="h-5 w-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5"><FilterPanel /></div>
            <div className="border-t border-[#E5E7EB] bg-white p-5" style={body}>
              <button type="button" onClick={onClose} className="w-full rounded-full bg-[#FF6B35] py-4 font-semibold text-white shadow-xl shadow-orange-500/30">Show Results</button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

export default FilterDrawer
