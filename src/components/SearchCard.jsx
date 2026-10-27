import React,{useState} from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import { body,TABS,FIELDS } from '../constants/homeConstants';
import Field from './Field';
import { Search } from 'lucide-react';
import { STATS } from '../constants/homeConstants';
import TripTypeSelector from './TripTypeSelector';
import BaggageToggles from './BaggageToggles';
import SingleTripFields from './SingleTripFields';
import MultiCityFields from './MultiCityFields';


const SearchCard = () => {
  const [active, setActive] = useState("Flights");
  const [trip, setTrip] = useState("return");
  return (
    <div className="relative z-10 mx-auto -mt-36 max-w-7xl px-6 lg:px-12" style={body}>
      <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur-xl lg:p-8">
        <div role="tablist" aria-label="Booking type" className="mb-8 flex flex-wrap gap-2">
          {TABS.map(({ label, icon: Icon }) => {
            const on = active === label;
            return (
              <button
                key={label}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(label)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  on ? "bg-[#0F172A] text-white shadow-lg" : "text-[#64748B] hover:bg-slate-100"
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            );
          })}
        </div>
        <div className="mb-8 flex flex-col gap-6">
          <TripTypeSelector value={trip} onChange={setTrip} />
          <BaggageToggles />
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {trip === "multi-city" ? (
            <MultiCityFields key="multi" />
          ) : (
            <SingleTripFields key="single" oneWay={trip === "one-way"} />
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,107,53,0.55)" }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FF6B35] py-5 text-lg font-bold text-white shadow-xl shadow-orange-500/30"
        >
          <Search className="h-5 w-5" /> Search
        </motion.button>
      </div>
    </div>
  );
}

export default SearchCard
