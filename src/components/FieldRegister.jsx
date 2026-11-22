import React,{useState} from 'react'
import { motion } from 'framer-motion';
import {item} from '../constants/registerComponent';
import { Eye } from 'lucide-react';

const FieldRegister = ({ id, label, type = "text", icon: Icon, autoComplete, withToggle }) => {
  const [shown, setShown] = useState(false);
  const inputType = withToggle ? (shown ? "text" : "password") : type;
  return (
    <motion.div variants={item} className="relative">
      <input
        id={id}
        name={id}
        type={inputType}
        placeholder=" "
        autoComplete={autoComplete}
        className="peer h-14 w-full rounded-2xl border border-[#E5E7EB] bg-white pb-1 pl-12 pr-12 pt-5 text-[15px] font-medium text-[#0F172A] outline-none transition-all duration-300 placeholder-transparent hover:border-slate-300 focus:border-[#FF6B35] focus:ring-4 focus:ring-orange-100"
      />
      <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#94A3B8] transition-colors duration-300 peer-focus:text-[#FF6B35]" aria-hidden="true" />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-12 top-2 text-xs font-medium text-[#64748B] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[#FF6B35]"
      >
        {label}
      </label>
      {withToggle && (
        <button
          type="button"
          onClick={() => setShown((v) => !v)}
          aria-label={shown ? "Hide password" : "Show password"}
          aria-pressed={shown}
          className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-[#64748B] transition-colors duration-300 hover:bg-slate-100 hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
        >
          {shown ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      )}
    </motion.div>
  );
}

export default FieldRegister
