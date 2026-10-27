import React from 'react'
import { motion } from 'framer-motion';
import PassengerSelector from './PassengerSelector';

const Field = ({ field, idPrefix = "", className = "", ref }) => {
  const Icon = field.icon;
  const id = `${idPrefix}${field.id}`;
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative focus-within:z-30 ${className}`}
    >
      <label htmlFor={id} className="mb-2 block text-xs font-semibold text-[#64748B]">
        {field.label}
      </label>
      <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 transition-all duration-300 focus-within:border-[#FF6B35] focus-within:ring-4 focus-within:ring-orange-100 group-hover:border-slate-300">
        <Icon className="h-5 w-5 shrink-0 text-[#FF6B35]" />
        {field.type === "passengers" ? (
          <PassengerSelector id={id} />
        ) : field.type === "select" ? (
          <select id={id} className="w-full bg-transparent text-sm font-medium text-[#0F172A] outline-none">
            {field.options.map((o) => <option key={o}>{o}</option>)}
          </select>
        ) : (
          <input id={id} type={field.type} placeholder={field.placeholder} className="w-full bg-transparent text-sm font-medium text-[#0F172A] outline-none placeholder:text-slate-400" />
        )}
      </div>
    </motion.div>
  );
}

export default Field
