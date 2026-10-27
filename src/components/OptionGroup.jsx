import React, {useState} from 'react'
import OptionCard from './OptionCard';

const OptionGroup = ({ title, options, value, onChange }) => {
  const labelId = `group-${title.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div>
      <p id={labelId} className="mb-3 text-xs font-semibold text-[#64748B]">{title}</p>
      <div role="radiogroup" aria-labelledby={labelId} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {options.map((o) => (
          <OptionCard key={o.id} label={o.label} icon={o.icon} selected={value === o.id} onSelect={() => onChange(o.id)} />
        ))}
      </div>
    </div>
  );
}

export default OptionGroup
