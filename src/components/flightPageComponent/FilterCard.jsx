import React from 'react'
import { heading } from '../../constants/homeConstants';

const FilterCard = ({ title, icon: Icon, children }) => {
  return (
    <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
      <h3 style={heading} className="mb-5 flex items-center gap-2.5 text-base font-bold text-[#0F172A]">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-orange-100 text-[#FF6B35]"><Icon className="h-4 w-4" /></span>
        {title}
      </h3>
      {children}
    </section>
  );
}

export default FilterCard
