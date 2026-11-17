import React, {useState} from 'react'
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { ArrowRight, Calendar } from 'lucide-react';
import { DESTINATIONS, heading, body, stagger } from '../constants/homeConstants';
import { DEST_FILTERS } from '../constants/flightConstant';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [filter, setFilter] = useState("Direct");
  return (
    <section id="destinations" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p style={body} className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">Curated journeys</p>
          <h2 style={heading} className="mt-2 text-4xl font-extrabold tracking-tight text-[#0F172A]">Popular destinations</h2>
          <p style={body} className="mt-3 text-[#64748B]">Find the lowest prices on one-way and return tickets right here.</p>
        </div>
        <Link to="/more/flights" style={body} className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35] hover:shadow-md">
          See all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div role="radiogroup" aria-label="Flight type" className="mt-8 flex flex-wrap items-center gap-3" style={body}>
        {DEST_FILTERS.map((f) => {
          const on = filter === f;
          return (
            <motion.button
              key={f}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                on ? "border-[#0F172A] bg-[#0F172A] text-white shadow-lg shadow-slate-900/20" : "border-[#E5E7EB] bg-white text-slate-600 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {f}
            </motion.button>
          );
        })}
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2.5 text-sm font-semibold text-[#FF6B35]">
          <Calendar className="h-4 w-4" /> December flights from 241,794 KHR
        </span>
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => <DestinationCard key={d.name} d={d} />)}
      </motion.div>
    </section>
  );
}

export default Destinations
