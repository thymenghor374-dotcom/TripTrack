import React from 'react'

const CheckRow = ({ label, meta, defaultChecked,name, type= "checkbox"}) => {
    return (
      <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-2 py-2 text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-50">
        <span className="flex items-center gap-3">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <input
              type={type}
              name={name}
              defaultChecked={defaultChecked}
              className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
            />

            {type === "radio" ? (
              // Radio
              <div className="relative flex h-5 w-5 items-center justify-center">
                <input
                  type="radio"
                  name={name}
                  defaultChecked={defaultChecked}
                  className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
                />

                <span className="h-5 w-5 rounded-full border-2 border-slate-300 transition-all peer-checked:border-[#FF6B35]" />

                <span
                  className="
                    absolute left-1/2 top-1/2
                    h-2.5 w-2.5
                    -translate-x-1/2 -translate-y-1/2
                    scale-0 rounded-full
                    bg-[#FF6B35]
                    transition-transform duration-200
                    peer-checked:scale-100
                  "
                />
              </div>
            ) : (
              // Checkbox
              <>
                <span className="h-4 w-4 rounded-md border-2 border-slate-300 transition-all peer-checked:border-[#FF6B35] peer-checked:bg-[#FF6B35]" />

                <svg
                  className="absolute h-3 w-3 scale-0 text-white transition-transform peer-checked:scale-100"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    d="M5 10.5L8.5 14L15 7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </span>

          {label}
        </span>

        {meta && (
          <span className="text-xs font-medium text-[#64748B]">{meta}</span>
        )}
      </label>
    );

}

export default CheckRow
