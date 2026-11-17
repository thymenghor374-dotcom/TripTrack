import React from 'react'

const TimeSlot = ({ icon: Icon, label, range, defaultChecked }) => {
   return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="peer hidden"
      />

      <div className="flex flex-col items-center gap-1 rounded-2xl border border-[#E5E7EB] px-3 py-3 text-xs font-semibold text-slate-600 transition-all duration-300 hover:scale-[1.02] peer-checked:border-[#FF6B35] peer-checked:bg-orange-50 peer-checked:text-[#FF6B35]">
        <Icon className="h-5 w-5" />
        {label}
        <span className="font-medium text-[#64748B]">
          {range}
        </span>
      </div>
    </label>
  );
}

export default TimeSlot
