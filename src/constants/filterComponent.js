export const heading = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
export const body = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

export const STOPS = [
  { id: "any", label: "Any number of stops" },
  { id: "direct", label: "Direct" },
  { id: "1plus", label: "1+ stops" },
];
export const TRIP_STYLES = [
  "Beach",
  "Outdoor adventures",
  "Great food",
  "Art and culture",
  "Underrated destinations",
  "Nightlife and entertainment",
];

export const CONTINENTS = [
  "Everywhere",
  "Asia",
  "Oceania",
  "Europe",
  "Africa",
  "North America",
  "South America",
];

export const FLIGHT_OPTIONS = {
  Stops: STOPS,
  "Trip style": TRIP_STYLES,
  Continents: CONTINENTS
};

export const DEFAULTS = { stops: "any", budget: 2000, styles: [] };
export const toggle = (list, v) =>
  list.includes(v) ? list.filter((x) => x !== v) : [...list, v];

export const THUMB =
  "[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[#FF6B35] [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(255,107,53,0.35),0_4px_10px_rgba(255,107,53,0.45)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-95 " +
  "[&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-solid [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[#FF6B35] [&::-moz-range-thumb]:shadow-[0_4px_10px_rgba(255,107,53,0.45)]";
