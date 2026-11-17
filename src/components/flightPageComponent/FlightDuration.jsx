import React, { useState } from "react";

const MIN = 6;
const MAX = 14;
const STEP = 1;
const MARKS = [6, 10, 12, 14];

const getPercent = (value) => ((value - MIN) / (MAX - MIN)) * 100;

const FlightDuration = () => {
  const [time, setTime] = useState(10);
  const percent = getPercent(time);

  return (
    <div className="pt-4">
      {/* Current duration */}
      <div className="mb-4 text-center text-sm font-bold text-[#0F172A]">
        {time}h
      </div>

      {/* Slider */}
      <input
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #FF6B35 ${percent}%, #E2E8F0 ${percent}%)`,
        }}
        className="
          h-2 w-full cursor-pointer appearance-none rounded-full
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-[#FF6B35]
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:shadow
          [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-2
          [&::-moz-range-thumb]:border-[#FF6B35]
          [&::-moz-range-thumb]:bg-white
        "
      />

      {/* Clickable marks */}
      <div className="relative mt-3 h-10">
        {MARKS.map((mark) => (
          <button
            key={mark}
            type="button"
            onClick={() => setTime(mark)}
            style={{ left: `${getPercent(mark)}%` }}
            className={`absolute flex -translate-x-1/2 flex-col items-center gap-1 text-sm font-semibold transition ${
              time >= mark ? "text-[#FF6B35]" : "text-[#0F172A]"
            } hover:text-[#FF6B35]`}
          >
            <span className="h-3 w-[2px] bg-current opacity-50" />
            {mark}h
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlightDuration;