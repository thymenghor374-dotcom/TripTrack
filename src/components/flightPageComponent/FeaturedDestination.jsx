import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight,Star,Plane, MapPin,Pencil } from 'lucide-react';
import { body } from '../../constants/homeConstants';
import { heading } from '../../constants/homeConstants';
import { DETAILS,AIRLINE_AVATARS } from '../../constants/flightConstant';


const FeaturedDestination = () => {
  return (
    <motion.section
      aria-label="Featured destination"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-7xl px-6 pt-10 lg:px-12"
      style={body}
    >
      <div className="group overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25)] sm:p-4">
        <div className="relative flex min-h-[340px] items-end overflow-hidden rounded-3xl bg-slate-800 lg:min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2000&q=80"
            alt="Eiffel Tower rising above the Paris skyline at sunset"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-[#0F172A]/35 to-transparent max-md:from-[#0F172A]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/10 to-transparent" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 backdrop-blur-xl sm:left-7 sm:top-7">
            <Star className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" /> Featured Destination
          </span>
          <div className="relative max-w-2xl p-6 sm:p-9 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">Flight Route • Round Trip</p>
            <h2 style={heading} className="mt-3 flex flex-wrap items-center gap-x-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              New York <ArrowRight className="h-7 w-7 text-[#FF6B35] sm:h-9 sm:w-9 lg:h-10 lg:w-10" /> Paris
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Experience the romance of Paris with world-class museums, iconic landmarks, charming cafés, and unforgettable city views.
            </p>
          </div>
        </div>
 
        <div className="px-3 pb-3 pt-6 sm:px-5 sm:pb-4 lg:px-6">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
              {[
                { icon: Plane, label: "From", city: "New York", airport: "JFK Airport", rotate: true },
                { icon: MapPin, label: "To", city: "Paris", airport: "CDG Airport" },
              ].map(({ icon: Icon, label, city, airport, rotate }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-orange-100 text-[#FF6B35] transition-transform duration-300 group-hover:scale-105">
                    <Icon className={`h-6 w-6 ${rotate ? "-rotate-45" : ""}`} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">{label}</p>
                    <p style={heading} className="text-xl font-bold text-[#0F172A]">{city}</p>
                    <p className="text-sm text-[#64748B]">{airport}</p>
                  </div>
                </div>
              ))}
            </div>
 
            <dl className="grid flex-1 grid-cols-2 gap-3 rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-3 sm:grid-cols-4 xl:max-w-2xl">
              {DETAILS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                    <Icon className="h-3.5 w-3.5 text-[#FF6B35]" /> {label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-bold text-[#0F172A]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
 
          <div className="mt-6 flex flex-col gap-5 border-t border-[#E5E7EB] pt-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-[#64748B]">Airlines:</span>
              <div className="flex items-center">
                {AIRLINE_AVATARS.map((a, i) => (
                  <span
                    key={a.code}
                    title={a.name}
                    aria-label={a.name}
                    style={heading}
                    className={`grid h-10 w-10 place-items-center rounded-full text-xs font-extrabold text-white ring-2 ring-white transition-transform duration-300 hover:z-10 hover:scale-110 ${a.tone} ${i ? "-ml-2.5" : ""}`}
                  >
                    {a.code}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-[#64748B]">+4 more</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0F172A] bg-white px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition-colors duration-300 hover:bg-[#0F172A] hover:text-white sm:w-auto"
              >
                <Pencil className="h-4 w-4" /> Modify Search
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-orange-500/50 sm:w-auto"
              >
                View Flights <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedDestination
