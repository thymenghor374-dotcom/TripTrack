import React from 'react'
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS, heading, body, stagger } from '../constants/homeConstants';

const Destinations = () => {
  return (
    <section id="destinations" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 style={heading} className="text-4xl font-extrabold tracking-tight text-[#0F172A]">Popular destinations</h2>
          <p style={body} className="mt-3 text-[#64748B]">Where travellers are heading this season.</p>
        </div>
        <a href="#destinations" style={body} className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] px-6 py-3 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35]">
          See all <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => <DestinationCard key={d.name} d={d} />)}
      </motion.div>
    </section>
  );
}

export default Destinations
