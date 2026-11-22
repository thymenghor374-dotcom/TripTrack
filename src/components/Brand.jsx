import React from 'react'
import { heading } from '../constants/homeConstants';
import { Compass } from 'lucide-react';

const Brand = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#FF6B35] text-white shadow-lg shadow-orange-500/30">
        <Compass className="h-5 w-5" />
      </span>
      <span style={heading} className="text-xl font-extrabold tracking-tight text-white">TripTrack</span>
    </div>
  );
}

export default Brand
