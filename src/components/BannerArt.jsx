import React from 'react'

const BannerArt = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.4cqw] border-b-[0.5cqw] border-[#EBD9C6] bg-gradient-to-b from-white via-[#FFF8F4] to-[#FFEBD9] shadow-inner">
      <div className="absolute inset-x-0 top-0 h-[0.9cqw] bg-[#FF6B35]" />
      <div className="absolute inset-[1cqw] rounded-[1cqw] border border-dashed border-[#FF6B35]/45" />
      <div className="absolute inset-y-0 left-0 flex w-full items-center gap-[1.6cqw] pl-[3cqw] pr-[2cqw]">
        <span className="grid h-[5.2cqw] w-[5.2cqw] shrink-0 place-items-center rounded-full bg-[#FF6B35] shadow-[0_0.4cqw_1cqw_rgba(255,107,53,0.4)]">
          <svg viewBox="0 0 24 24" className="h-[3cqw] w-[3cqw] rotate-45 fill-white" aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
          </svg>
        </span>
        <div className="leading-none">
          <p className="font-[Inter,sans-serif] text-[1.15cqw] font-semibold tracking-[0.28em] text-[#64748B]">EXPLORE WITH</p>
          <p className="mt-[0.5cqw] font-['Plus_Jakarta_Sans',sans-serif] text-[4.4cqw] font-extrabold tracking-tight text-[#0F172A]">
            TRIP<span className="text-[#FF6B35]">TRACK</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerArt
