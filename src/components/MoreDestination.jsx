import React from 'react'
import FilterBar from './FilterBar';
import CountryCard from './CountryCard';
import { COUNTRIES } from '../constants/homeConstants';
import { motion } from 'framer-motion';
import { heading,stagger } from '../constants/homeConstants';

const MoreDestination = () => {
  return (
    <section id="more-destinations" className="bg-[#F8FAFC] pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={heading}
          className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl"
        >
          Explore everywhere in <span className="text-[#FF6B35]">December</span>
        </motion.h2>
        <div className="mt-8 mb-14">
          <FilterBar />
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {COUNTRIES.map((c) => <CountryCard key={c.name} c={c} />)}
        </motion.div>
      </div>
    </section>
    
  );
}

export default MoreDestination
