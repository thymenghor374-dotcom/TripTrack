import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { FAQS } from '../constants/FAQComponent';
import { body,heading } from '../constants/FAQComponent';
import FaqItems from './FaqItems';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="bg-[#F8FAFC] px-6 py-20 lg:px-12" style={body}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">FAQ</p>
          <h2 style={heading} className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-[#64748B]">Quick answers to common questions about searching and booking flights.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-[#E5E7EB] bg-white px-6 shadow-xl shadow-slate-900/5 sm:px-8"
        >
          {FAQS.map((item, i) => (
            <FaqItems
              key={item.q}
              index={i}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ
