import React from 'react'
import { motion } from 'framer-motion';
import { STATS } from '../constants/homeConstants';
import { stagger,heading, body } from '../constants/homeConstants';
import { fadeUp } from '../constants/homeConstants';

const Stats = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
      <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label, tone }) => (
          <motion.li key={label} variants={fadeUp} className="flex flex-col items-center rounded-3xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
            <span className={`mb-5 grid h-16 w-16 place-items-center rounded-full ${tone}`}>
              <Icon className="h-7 w-7" />
            </span>
            <p style={heading} className="text-3xl font-extrabold text-[#0F172A]">{value}</p>
            <p style={body} className="mt-1 text-sm text-[#64748B]">{label}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Stats
