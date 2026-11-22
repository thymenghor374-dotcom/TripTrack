import React from 'react'
import { useMotionValue,useSpring,useTransform,motion } from 'framer-motion';
import { DESTINATIONS,TRUST_FEATURES,HERO } from '../constants/registerComponent';
import { Plane,Star,Check } from 'lucide-react';
import { heading } from '../constants/filterComponent';
import Brand from './Brand';


const HeroRegister = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const imgX = useTransform(sx, (v) => v * -14);
  const imgY = useTransform(sy, (v) => v * -14);
  const cardX = useTransform(sx, (v) => v * 10);
  const cardY = useTransform(sy, (v) => v * 10);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={() => { mx.set(0); my.set(0); }}
      className="relative isolate flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#0F172A] p-6 sm:min-h-[260px] sm:p-8 lg:w-[44%] lg:min-h-0 lg:p-10"
    >
      {/* parallax image */}
      <motion.img
        src={HERO}
        alt="Whitewashed buildings above the sea in Santorini"
        style={{ x: imgX, y: imgY }}
        animate={{ scale: [1.12, 1.18, 1.12] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-20 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/45 to-[#0F172A]/90" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-16 -top-16 -z-10 h-72 w-72 rounded-full bg-[#FF6B35]/35 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 24, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-20 -left-10 -z-10 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* airplane flying across the sky */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-[18%] -z-10 flex items-center will-change-transform"
        initial={{ x: "-20%" }}
        animate={{ x: "600%" }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <span className="h-px w-24 bg-gradient-to-r from-transparent to-white/70" />
        <Plane className="h-5 w-5 text-white" fill="currentColor" />
      </motion.div>

      {/* floating destination cards (desktop) */}
      {DESTINATIONS.map((d) => (
        <motion.div
          key={d.name}
          style={{ x: cardX, y: cardY }}
          className={`absolute hidden lg:block ${d.pos}`}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5 + d.delay, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/15 p-2.5 pr-4 shadow-xl shadow-slate-900/20 backdrop-blur-xl"
          >
            <img src={d.src} alt="" className="h-11 w-11 rounded-xl object-cover" />
            <div>
              <p style={heading} className="text-sm font-bold text-white">{d.name}</p>
              <p className="flex items-center gap-1 text-xs text-white/80">
                <Star className="h-3 w-3 fill-[#FF6B35] text-[#FF6B35]" /> {d.price}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}

        <Brand/>

      <div>
        <h2 style={heading} className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
          Create your TripTrack account
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80 lg:text-[15px]">
          Join thousands of travelers discovering amazing destinations, exclusive deals, and unforgettable journeys.
        </p>
        <ul className="mt-6 hidden space-y-3 lg:block">
          {TRUST_FEATURES.map((t) => (
            <li key={t} className="flex items-center gap-3 text-sm font-medium text-white">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400/90 text-white shadow-lg shadow-emerald-500/30">
                <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );  
}

export default HeroRegister
