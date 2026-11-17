import React,{useState} from 'react'
import { FILTERS } from '../constants/homeConstants';
import { motion } from 'framer-motion';
import { body } from '../constants/homeConstants';
import { SlidersHorizontal,ChevronDown } from 'lucide-react';
import FilterPopup from './moreDetail/FilterPopup';

const FilterBar = () => {
  const [activeFilter,setActiveFilter] = useState("Stops");
  const [showFilter,setShowFilter] = useState(false);

  const [filters, setFilters] = useState({
    budget: 2000,
    styles: [],
    region: "Everywhere",
  });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div
      className="-mx-6 flex items-center gap-3 overflow-x-auto pl-8 pr-6 py-2 lg:mx-0 lg:px-0"
      style={body}
    >
        <motion.button
          onClick={() => {
            setActiveFilter("All");
            setShowFilter(true);
          }}
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="ml-2 flex shrink-0 items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#111827] shadow-[0_2px_8px_-4px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-[#0F172A] hover:shadow-[0_8px_20px_-10px_rgba(15,23,42,0.2)]
                    cursor-pointer"
        >
          <SlidersHorizontal className="h-4 w-4 text-[#0F172A]" /> Filters
        </motion.button>

        {showFilter && (
          <FilterPopup 
            activeFilter={activeFilter}
            onClose={() => setShowFilter(false)}
            f={filters}
            set={updateFilter}
            />
        )}
      
      <span className="h-8 w-px shrink-0 bg-[#E5E7EB]" aria-hidden="true" />
      {FILTERS.map((filter) => (
        <motion.button
          key={filter}
          type="button"
          onClick={() => {
            setActiveFilter(filter);
            setShowFilter(true);
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer
            ${
              activeFilter === filter
                ? "border-[#FF6B35] bg-orange-50 text-[#FF6B35]"
                : "border-[#E5E7EB] bg-white text-[#64748B] hover:border-[#0F172A] hover:text-[#0F172A]"
            }`}
        >
          {filter}
          <ChevronDown className="h-4 w-4" />
        </motion.button>
      ))}
      <button
        type="button"
        className="shrink-0 px-3 text-sm font-semibold text-[#94A3B8] transition-colors duration-300 hover:text-[#F55A24]"
      >
        Clear filters
      </button>
    </div>
  );
}

export default FilterBar
