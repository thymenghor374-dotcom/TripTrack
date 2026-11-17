import React from 'react'
import { motion } from 'framer-motion';
import { fadeUp } from '../../constants/homeConstants';
import { body } from '../../constants/homeConstants';
import { heading } from '../../constants/homeConstants';
import { Star, Clock,Plane,Briefcase,Luggage,Coffee,Wifi,ArrowRight,
  ChevronRight
 } from 'lucide-react';
import Badge from './Badge';

const FlightCard = ({ f, activeSort}) => {
  const badgeTitles = {
    Best: "Best Choice",
    Cheapest: "Cheapest",
    Fastest: "Fastest",
    Earliest: "Earliest",
    Recommended: "Recommended",
  };
  const direct = f.stops === "Direct";
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:hover:scale-[1.02] ${
        f.best ? "border-[#FF6B35] shadow-xl shadow-orange-500/10" : "border-[#E5E7EB] shadow-sm"
      }`}
      style={body}
    >
      {f.badge === activeSort && (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 bg-gradient-to-r from-[#FF6B35] to-orange-400 px-6 py-3 text-white">
          <span style={heading} className="flex items-center gap-2 text-sm font-extrabold"><Star className="h-4 w-4 fill-white" /> 
            {badgeTitles[activeSort]}
          </span>
          <span className="text-xs font-semibold text-white/90">Best Value</span>
          <span className="text-xs font-semibold text-white/90">Fastest</span>
          <span className="text-xs font-semibold text-white/90">Highest Rated</span>
        </div>
      )}
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span style={heading} className={`grid h-12 w-12 place-items-center rounded-2xl text-sm font-extrabold text-white shadow-lg transition-transform duration-500 group-hover:scale-110 ${f.tone}`}>{f.code}</span>
              <div>
                <p style={heading} className="font-bold text-[#0F172A]">{f.airline}</p>
                <p className="text-xs text-[#64748B]">{f.aircraft}</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-600">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" /> {f.rating}
              <span className="font-medium text-[#64748B]">({f.reviews})</span>
            </span>
          </div>
 
          <div className="mt-8 grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-6">
            <div>
              <p style={heading} className="text-2xl font-extrabold text-[#0F172A] sm:text-3xl">{f.dep}</p>
              <p className="mt-1 text-sm font-semibold text-[#64748B]">{f.from}</p>
              <p className="text-xs text-[#64748B]">John F. Kennedy</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B]"><Clock className="h-3.5 w-3.5" /> {f.duration}</span>
              <div className="relative flex w-full items-center">
                <span className="h-px flex-1 bg-gradient-to-r from-slate-200 via-[#FF6B35] to-slate-200" />
                <Plane className="mx-1 h-5 w-5 rotate-90 text-[#FF6B35] transition-transform duration-500 group-hover:translate-x-2" />
                <span className="h-px flex-1 bg-gradient-to-r from-slate-200 via-[#FF6B35] to-slate-200" />
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${direct ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"}`}>{f.stops}</span>
            </div>
            <div className="text-right">
              <p style={heading} className="text-2xl font-extrabold text-[#0F172A] sm:text-3xl">{f.arr}</p>
              <p className="mt-1 text-sm font-semibold text-[#64748B]">{f.to}</p>
              <p className="text-xs text-[#64748B]">Charles de Gaulle</p>
            </div>
          </div>
 
          <div className="mt-6 flex flex-wrap gap-2">
            {f.bags.map((b) => (
              <Badge key={b} icon={b.startsWith("Cabin") ? Briefcase : Luggage} 
                tone="bg-sky-50 text-sky-700">
                {b}
              </Badge>
            ))}
            {f.meal && <Badge icon={Coffee} tone="bg-emerald-50 text-emerald-700">Free meal</Badge>}
            {f.wifi && <Badge icon={Wifi} tone="bg-orange-50 text-[#FF6B35]">Wi-Fi</Badge>}
          </div>
        </div>
 
        <div className="flex flex-col justify-between gap-6 border-t border-dashed border-[#E5E7EB] bg-[#F8FAFC] p-6 lg:w-72 lg:border-l lg:border-t-0 lg:p-8">
          <div className="text-left lg:text-right">
            <p className="text-sm font-medium text-slate-400 line-through">{f.old}</p>
            <p style={heading} className="text-4xl font-extrabold text-[#0F172A] transition-all duration-300 group-hover:text-[#FF6B35] group-hover:[text-shadow:0_0_24px_rgba(255,107,53,0.45)]">{f.price}</p>
            <p className="mt-1 text-xs font-medium text-[#64748B]">Per Traveler · USD</p>
          </div>
          <div className="flex flex-col gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B35] font-semibold text-white shadow-xl shadow-orange-500/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-orange-500/50 ${f.best ? "py-4 text-lg" : "py-3.5 text-base"}`}
            >
              Book Now <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full items-center justify-center gap-1 rounded-full border border-[#E5E7EB] bg-white py-3 text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:border-[#0F172A]"
            >
              View Details <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default FlightCard
