import React from 'react'

const Answer = ({ a }) => {
  return (
    <div className="space-y-3 text-[15px] leading-relaxed text-[#64748B]">
      {a.text && <p>{a.text}</p>}
      {a.list && (
        <ul className="space-y-2.5">
          {a.list.map(([lead, rest], i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B35]" aria-hidden="true" />
              <span>
                {rest ? (
                  <>
                    <strong className="font-semibold text-[#0F172A]">{lead}</strong> {rest}
                  </>
                ) : (
                  lead
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Answer
