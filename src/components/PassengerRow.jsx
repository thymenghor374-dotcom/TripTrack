import React from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import CounterButton from './CounterButton';
import { heading } from '../constants/homeConstants';

const PassengerRow = ({ title, description, value, min, max, onChange }) => {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <p style={heading} className="text-base font-bold text-[#0F172A]">{title}</p>
        <p className="mt-0.5 text-sm text-[#64748B]">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <CounterButton kind="minus" label={`Decrease ${title}`} disabled={value <= min} onClick={() => onChange(value - 1)} />
        <span className="relative grid h-7 w-6 place-items-center overflow-hidden text-base font-bold text-[#0F172A]" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={value}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {value}
            </motion.span>
          </AnimatePresence>
        </span>
        <CounterButton kind="plus" label={`Increase ${title}`} disabled={value >= max} onClick={() => onChange(value + 1)} />
      </div>
    </div>
  );
}

export default PassengerRow
