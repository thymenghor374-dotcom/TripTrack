import React,{useState} from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heading } from '../../constants/filterComponent';

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <section className="border-b border-[#EEF0F3] py-6 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span style={heading} className="text-lg font-bold text-[#0F172A]">{title}</span>
        <ChevronDown className={`h-5 w-5 text-[#64748B] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Section
