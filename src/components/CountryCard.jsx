import React from 'react'
import { motion } from 'framer-motion';
import { body,heading,fadeUp } from '../constants/homeConstants';
import { Plane } from 'lucide-react';

const CountryCard = ({ c }) => {
  return (
    <motion.a
      href="#more-destinations"
      variants={fadeUp}
      className="group block overflow-hidden rounded-[1.75rem] border border-[#E5E7EB] bg-white shadow-[0_4px_20px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.22)]"
    >
      <div className="relative h-56 overflow-hidden bg-slate-200">
        <img src={c.src} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-6" style={body}>
        <h3 style={heading} className="text-xl font-bold text-[#0F172A]">{c.name}</h3>
        <div className="mt-4 flex items-end justify-between gap-4">
          <p className="text-sm text-[#64748B]">Flights from</p>
          <p style={heading} className="text-xl font-extrabold text-[#111827] transition-colors duration-300 group-hover:text-[#FF6B35]">{c.price}</p>
        </div>
        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#FFF4EC] px-3 py-1 text-xs font-semibold text-[#FF6B35]">
          <Plane className="h-3.5 w-3.5" /> {c.stops}
        </p>
      </div>
    </motion.a>
  );
}

export default CountryCard
