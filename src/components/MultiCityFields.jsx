import React, {useState,useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { heading } from '../constants/homeConstants';
import Field from './Field';
import { FIELD_DEFS } from '../constants/homeConstants';
import { Plus } from 'lucide-react';

const MultiCityFields = () => {
  const [segments, setSegments] = useState([{ id: 1 }, { id: 2 }]);
  const nextId = useRef(3);
  const add = () => setSegments((s) => [...s, { id: nextId.current++ }]);
  const remove = (id) => setSegments((s) => s.filter((x) => x.id !== id));
  return (
    <motion.div
      key="multi"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col gap-4"
    >
      <AnimatePresence initial={false}>
        {segments.map((seg, i) => (
          <motion.div
            key={seg.id}
            layout
            initial={{ opacity: 0, height: 0, y: -16 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="rounded-3xl border border-white/70 bg-white/60 p-4 backdrop-blur-md sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <p style={heading} className="text-sm font-bold text-[#0F172A]">Flight {i + 1}</p>
                {i >= 2 && (
                  <motion.button
                    type="button"
                    onClick={() => remove(seg.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Remove flight ${i + 1}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-[#E5E7EB] bg-white text-slate-500 transition-colors duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Field field={FIELD_DEFS.from} idPrefix={`seg${seg.id}-`} />
                <Field field={FIELD_DEFS.to} idPrefix={`seg${seg.id}-`} />
                <Field field={FIELD_DEFS.depart} idPrefix={`seg${seg.id}-`} />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <motion.button
        layout
        type="button"
        onClick={add}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#2563EB]/40 bg-white/60 py-4 text-sm font-semibold text-[#2563EB] backdrop-blur-md transition-colors duration-300 hover:border-[#2563EB] hover:bg-blue-50"
      >
        <Plus className="h-4 w-4" /> Add Another Flight
      </motion.button>
      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field field={FIELD_DEFS.pax} idPrefix="multi-" />
        <Field field={FIELD_DEFS.class} idPrefix="multi-" />
      </motion.div>
    </motion.div>
  );
}

export default MultiCityFields
