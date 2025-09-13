import React from 'react'

export const UpcomingEvent = () => {
  return (
    <div className="w-full rounded-2xl border-2 border-[var(--border)] mt-8 ">
      <div className="w-full h-full flex flex-col p-6">
        <div className='flex justify-between items-center'>
          <div className="text-3xl font-medium">Upcoming Event</div>
          <div>
              <a href='/events' className="text-md font-medium transition-transform duration-200 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right transition-transform duration-200 group-hover:rotate-0 rotate-45"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
              </a>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[var(--border)] my-4" />
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 h-58 bg-white rounded-2xl aspect-square" />
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold">Shell n'Zen</div>
            <div className="text-sm font-normal text-[var(--muted-text)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div>
              <div className="text-sm font-medium text-[var(--muted-text)]">Date: 25th December 2023</div>
              <div className="text-sm font-medium text-[var(--muted-text)]">Time: 10:00 AM - 4:00 PM</div>
              <div className="text-sm font-medium text-[var(--muted-text)]">Location: VIT Bhopal University</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
