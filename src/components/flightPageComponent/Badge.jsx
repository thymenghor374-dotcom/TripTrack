import React from 'react'

const Badge = ({ icon: Icon, children, tone = "bg-slate-100 text-slate-600" }) => {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${tone}`}>
      <Icon className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

export default Badge
