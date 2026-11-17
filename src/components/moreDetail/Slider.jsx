import React from 'react'
import { THUMB } from '../../constants/filterComponent';


const Slider = ({ min, max, step, value, onChange, label }) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="py-2">
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent outline-none focus-visible:ring-4 focus-visible:ring-orange-100 ${THUMB}`}
        style={{
          background: `linear-gradient(to right, #FF6B35 ${pct}%, #E5E7EB ${pct}%)`,
        }}
      />
    </div>
  );
}

export default Slider
