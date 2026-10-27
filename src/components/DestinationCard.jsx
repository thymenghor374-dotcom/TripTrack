import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { fadeUp,heading, body } from '../constants/homeConstants';
import { Heart, Luggage } from 'lucide-react';

const DestinationCard = ({ d }) => {
  const [liked, setLiked] = useState(false);
  return (
    <motion.article variants={fadeUp} className="group relative h-96 overflow-hidden rounded-[2rem] bg-slate-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img src={d.src} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/10 to-transparent" />
      <button
        onClick={() => setLiked((v) => !v)}
        aria-pressed={liked}
        aria-label={`Save ${d.name}`}
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/40"
      >
        <Heart className={`h-5 w-5 ${liked ? "fill-[#FF6B35] text-[#FF6B35]" : ""}`} />
      </button>
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 style={heading} className="text-2xl font-bold text-white">{d.name}</h3>
        <p style={body} className="mt-1 flex items-center gap-2 text-sm text-white/80">
          <Luggage className="h-4 w-4 text-[#FF6B35]" /> {d.tours} tours
        </p>
      </div>
    </motion.article>
  );
}

export default DestinationCard
