import React from 'react'
import { motion } from 'framer-motion';
import { heading,body,stagger, FEATURES,fadeUp } from '../constants/homeConstants';

const Features = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 style={heading} className="text-4xl font-extrabold tracking-tight text-[#0F172A]">Travel planning without the hassle</h2>
          <p style={body} className="mt-4 text-[#64748B]">Everything you need to find, book and enjoy your next trip.</p>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text, tone }) => (
            <motion.article key={title} variants={fadeUp} className="rounded-3xl border border-[#E5E7EB] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl ${tone}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 style={heading} className="text-xl font-bold text-[#0F172A]">{title}</h3>
              <p style={body} className="mt-3 leading-relaxed text-[#64748B]">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features
