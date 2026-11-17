import React, { useState, useEffect } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import {
  DEFAULTS,
  body,
  heading,
  TRIP_STYLES,
  CONTINENTS,
  toggle
} from "../../constants/filterComponent";
import { X } from "lucide-react";
import Radio from "./Radio";
import { STOPS } from "../../constants/filterComponent";
import Slider from "./Slider";
import Chip from "./Chip";

const FilterPopup = ({ activeFilter,
  open,
  onClose,
  f,
  set, }) => {
  const [internalOpen, setInternalOpen] = useState(true);
  const [selectedStop,setSelectedStop] = useState("any");
  const isOpen = open ?? internalOpen;
  const close = onClose ?? (() => setInternalOpen(false));
  
 
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });
 
  const budgetLabel =
    f.budget >= 2000 ? "Any budget" : `Up to $${f.budget.toLocaleString()}`;

 
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/50 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          style={body}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Filters"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="flex max-h-[92vh] w-full max-w-[500px] flex-col overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-2xl shadow-slate-900/25"
          >
            <header className="flex items-center justify-between border-b border-[#EEF0F3] bg-white px-8 py-6">
              <h2
                style={heading}
                className="text-2xl font-extrabold tracking-tight text-[#0F172A]"
              >
                Filters
              </h2>
              <motion.button
                type="button"
                onClick={close}
                aria-label="Close filters"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.92 }}
                className="grid h-10 w-10 place-items-center rounded-full text-[#64748B] transition-colors duration-300 hover:bg-slate-100 hover:text-[#0F172A]"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </header>

            <div className="flex-1 overflow-y-auto px-8">
              {(activeFilter === "All" || activeFilter === "Stops") && (
                <Section title="Stops">
                  <div
                    role="radiogroup"
                    aria-label="Stops"
                    className="flex flex-col"
                  >
                    {STOPS.map((s) => {
                      return (
                        <Radio
                          key={s.id}
                          label={s.label}
                          selected={selectedStop === s.id}
                          onClick={() => setSelectedStop(s.id)}
                        />
                      );
                    })}
                  </div>
                </Section>
              )}

              {(activeFilter === "All" || activeFilter === "Flight budget") && (
                <Section title="Flight budget">
                  <p className="mb-4 text-[15px] font-medium text-[#0F172A]">
                    {budgetLabel}
                  </p>
                  <Slider
                    min={100}
                    max={2000}
                    step={50}
                    value={f.budget}
                    onChange={(v) => set("budget", v)}
                    label="Flight budget"
                  />
                </Section>
              )}

              {(activeFilter === "All" || activeFilter === "Trip style") && (
                <Section title="Trip style">
                  <div className="flex flex-wrap gap-3 ml-2 py-5">
                    {TRIP_STYLES.map((t) => (
                      <Chip
                        key={t}
                        selected={f.styles.includes(t)}
                        onClick={() => set("styles", toggle(f.styles, t),console.log(f.style))}
                      >
                        {t}
                      </Chip>
                    ))}
                  </div>
                </Section>
              )}

              {(activeFilter === "All" || activeFilter === "Continents") && (
                <Section title="Choose where to explore">
                  <div
                    role="radiogroup"
                    aria-label="Region"
                    className="flex flex-wrap gap-3 py-5 ml-2"
                  >
                    {CONTINENTS.map((r) => (
                      <Chip
                        key={r}
                        selected={f.region === r}
                        onClick={() => set("region", r)}
                      >
                        {r}
                      </Chip>
                    ))}
                  </div>
                </Section>
              )}
            </div>

            <footer className="flex items-center justify-between gap-4 border-t border-[#EEF0F3] bg-white px-8 py-5">
              <button
                type="button"
                onClick={() => setF(DEFAULTS)}
                className="text-[15px] font-medium text-[#64748B] transition-colors duration-300 hover:text-[#FF6B35]"
              >
                Clear filters
              </button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl bg-[#0F172A] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-slate-900/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/30"
              >
                Show 76 results
              </motion.button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterPopup;
