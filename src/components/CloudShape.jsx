import React,{useId} from 'react'

const CloudShape = ({ className }) => {
  const gid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 220 110" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.7" stopColor="#FFF8F4" />
          <stop offset="1" stopColor="#FFE9D2" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gid})`}>
        <circle cx="62" cy="68" r="30" />
        <circle cx="96" cy="48" r="38" />
        <circle cx="140" cy="46" r="34" />
        <circle cx="168" cy="68" r="30" />
        <rect x="36" y="66" width="156" height="38" rx="19" />
      </g>
    </svg>
  );
}

export default CloudShape
