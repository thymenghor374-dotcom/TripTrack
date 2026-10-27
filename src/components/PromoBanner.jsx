import React from 'react'
import { motion } from 'framer-motion';
import { Luggage, Clock, ArrowRight } from 'lucide-react';
import { IMAGES, fadeUp, body, heading } from '../constants/homeConstants';
import { stagger } from '../constants/homeConstants';


const PromoBanner = () => {
  return (
    <section id="deals" className="px-6 pb-20 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="group relative mx-auto flex min-h-[520px] max-w-7xl items-center overflow-hidden rounded-[2.5rem] bg-slate-800 shadow-2xl shadow-slate-900/25 lg:min-h-[560px]"
      >

         
      
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/55 to-[#0F172A]/10 max-lg:from-[#0F172A]/85 max-lg:via-[#0F172A]/70 max-lg:to-[#0F172A]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
 
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#FF6B35]/30 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 28, 0], x: [0, -16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/3 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
        />
 
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="relative flex w-full max-w-2xl flex-col items-center px-6 py-16 text-center sm:px-12 lg:items-start lg:px-16 lg:py-20 lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            style={body}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 backdrop-blur-xl"
          >
            <Clock className="h-4 w-4 text-[#FF6B35]" /> Limited Time Deals
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={heading}
            className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Your next adventure starts with unbeatable savings.
          </motion.h2>
          <motion.p variants={fadeUp} style={body} className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Discover exclusive flight and hotel offers to destinations around the world. Compare prices, book with confidence, and save up to 30% on selected trips.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <motion.a
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#deals"
              style={body}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-orange-500/50"
            >
              Explore Deals <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#destinations"
              style={body}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-transparent px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white/15 hover:backdrop-blur-xl"
            >
              Browse Destinations
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PromoBanner
