import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight, BadgePercent } from 'lucide-react';
import { stagger } from '../../constants/homeConstants';
import { body,heading } from '../../constants/homeConstants';
import { fadeUp } from '../../constants/homeConstants';

const PromoStrip = () => {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="group relative mx-auto flex min-h-[380px] max-w-7xl items-center overflow-hidden rounded-[2.5rem] bg-slate-800 shadow-2xl shadow-slate-900/25">
        <img
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury overwater villas on a tropical lagoon"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-[#0F172A]/10 max-lg:to-[#0F172A]/50" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#FF6B35]/30 blur-3xl" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex max-w-2xl flex-col items-center px-6 py-14 text-center sm:px-12 lg:items-start lg:px-16 lg:text-left"
          style={body}
        >
          <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
            <BadgePercent className="h-4 w-4 text-[#FF6B35]" /> Bundle &amp; Save
          </motion.p>
          <motion.h2 variants={fadeUp} style={heading} className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Save up to 30% on hotels when you book your flight.
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-8 w-full sm:w-auto">
            <motion.a
              href="#hotels"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-orange-500/50 sm:w-auto"
            >
              Explore Hotel Deals <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default PromoStrip
