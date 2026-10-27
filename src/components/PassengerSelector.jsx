import React,{useState,useRef,useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PassengerRow from './PassengerRow';

const PassengerSelector = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const ref = useRef(null);
 
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
 
  const total = adults + children;
  const summary =
   ` ${adults} Adult${adults > 1 ? "s" : ""} ` +
  (children ? `, ${children} Child${children > 1 ? "ren" : ""}` : "");
 
  return (
    <div ref={ref} className="w-full">
      <button
        id={id}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 text-left text-sm font-medium text-[#0F172A] outline-none"
      >
        <span className="truncate">{summary}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Select passengers"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-full z-40 mt-2 w-full min-w-[19rem] max-w-[calc(100vw-3rem)] rounded-2xl border border-[#E5E7EB] bg-white px-5 pb-5 pt-1 shadow-2xl shadow-slate-900/15"
          >
            <PassengerRow title="18+ Adult" description="Age 18 and above" value={adults} min={1} max={9} onChange={setAdults} />
            <div className="h-px bg-[#E5E7EB]" />
            <PassengerRow title="0–17 Children" description="Age 0 to 17" value={children} min={0} max={9} onChange={setChildren} />
            <div className="h-px bg-[#E5E7EB]" />
            <div className="flex items-center justify-between pt-4">
              <p className="text-sm font-semibold text-[#0F172A]">Total Passengers: {total}</p>
              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-[#0F172A] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-shadow duration-300 hover:shadow-xl"
              >
                Done
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PassengerSelector
