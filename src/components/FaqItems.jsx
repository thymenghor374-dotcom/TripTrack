import React,{useId} from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heading } from '../constants/FAQComponent';
import Answer from './Answer';

const FaqItems = ({ index, item, open, onToggle }) => {
  const id = useId();
  return (
    <div className="border-b border-[#EEF0F3] last:border-b-0">
      <h3>
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-4 py-6 text-left"
        >
          <span className="flex items-center gap-4">
            <span
              style={heading}
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold transition-colors duration-300 ${
                open ? "bg-[#FF6B35] text-white shadow-lg shadow-orange-500/25" : "bg-[#FFF4EC] text-[#FF6B35]"
              }`}
            >
              {index + 1}
            </span>
            <span style={heading} className="text-lg font-bold text-[#0F172A] transition-colors duration-300 group-hover:text-[#FF6B35]">
              {item.q}
            </span>
          </span>
          <ChevronDown className={`h-5 w-5 shrink-0 text-[#64748B] transition-transform duration-300 ${open ? "rotate-180 text-[#FF6B35]" : ""}`} />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-[3.25rem] pr-2 sm:pr-10">
              <Answer a={item.a} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FaqItems
