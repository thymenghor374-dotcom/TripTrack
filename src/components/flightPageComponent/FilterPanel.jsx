import React from 'react'
import FilterCard from './FilterCard';
import CheckRow from './CheckRow';
import { Sunrise,Sun,Sunset,Moon,Ticket,Plane,Shield,Clock,Luggage } from 'lucide-react';
import { body } from '../../constants/homeConstants';
import TimeSlot from './TimeSlot';
import PriceRange from './PriceRange';
import FlightDuration from './FlightDuration';

const FilterPanel = () => {
  const slots = [
    { icon: Sunrise, label: "Morning", range: "05–12", on: true },
    { icon: Sun, label: "Afternoon", range: "12–17" },
    { icon: Sunset, label: "Evening", range: "17–21" },
    { icon: Moon, label: "Night", range: "21–05" },
  ];
  return (
    <div className="flex flex-col gap-5" style={body}>
      <FilterCard title="Price Range" icon={Ticket}>
        <PriceRange/>
      </FilterCard>
      <FilterCard title="Stops" icon={Plane}>
        <CheckRow type='radio' name="stops"  label="Direct" meta="$649" defaultChecked />
        <CheckRow type='radio' name="stops"  label="1 Stop" meta="$524" />
        <CheckRow type='radio' name="stops"  label="2+ Stops" meta="$498" />
      </FilterCard>
      <FilterCard title="Airlines" icon={Shield}>
        <CheckRow name="airline" type='checkbox' label="Aerolux Airways" defaultChecked />
        <CheckRow name="airline" type='checkbox' label="Skyline Air" />
        <CheckRow name="airline" type='checkbox' label="Oceanic Jet" />
        <CheckRow name="airline" type='checkbox' label="Meridian Air" />
      </FilterCard>
      <FilterCard title="Departure Time" icon={Clock}>
        <div className="grid grid-cols-2 gap-3">
          {slots.map((slot) => (
            <TimeSlot
              key={slot.label}
              icon={slot.icon}
              label={slot.label}
              range={slot.range}
              defaultChecked={slot.on}
            />
          ))}
        </div>
      </FilterCard>
      <FilterCard title="Flight Duration" icon={Clock}>
        <FlightDuration/>
      </FilterCard>
      <FilterCard title="Cabin & Checked Baggage" icon={Luggage}>
        <CheckRow type='checkbox' label="Cabin bag included" defaultChecked />
        <CheckRow type='checkbox' label="Checked bag included" />
      </FilterCard>
    </div>
  );
}

export default FilterPanel
