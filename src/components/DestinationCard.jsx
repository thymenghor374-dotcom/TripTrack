import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { fadeUp,heading, body } from '../constants/homeConstants';
import { Heart, Plane, ChevronRight } from 'lucide-react';

const DestinationCard = ({ d }) => {
  const [liked, setLiked] = useState(false);
  return (
    <motion.article variants={fadeUp} className="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden bg-slate-200">
        <img src={d.src} alt={`${d.name}, ${d.country}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <button
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          aria-label={`Save ${d.name}`}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-slate-600 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white"
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-[#FF6B35] text-[#FF6B35]" : ""}`} />
        </button>
      </div>
      <div className="p-6" style={body}>
        <h3 style={heading} className="text-xl font-bold text-[#0F172A]">{d.name}</h3>
        <p className="text-sm text-[#64748B]">{d.country}</p>
        <ul className="mt-5 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
          {d.flights.map((f) => (
            <li key={f.date} className="flex items-center gap-3 py-3.5">
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ${f.tone}`}>
                <Plane className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#0F172A]">{f.date}</p>
                <p className="truncate text-xs text-[#64748B]">{f.route} with {f.airline}</p>
              </div>
              <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{f.stops}</span>
            </li>
          ))}
        </ul>
        <a href="#destinations" className="mt-4 flex items-center justify-end gap-1 text-sm font-bold text-[#FF6B35] transition-all duration-300 group-hover:gap-2">
          from {d.price} <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

export default DestinationCard
