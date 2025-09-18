import React from "react";
import Image from "next/image";
import { upCommingEvents } from "../Content/Events";
import { UpcomingeventSVG, CalenderLogo, ClockLogo, LocationLogo } from "./svg";

const moreEventscard = () => {
  const event = upCommingEvents[0];
  return (
    <div className="flex items-start gap-6">
      {/* Image Section */}
      <div className="rounded-[13px] bg-[#D9D9D9] w-[220px] h-[220px] min-w-[220px] min-h-[220px] flex items-center justify-center">
        {event.imgUrl ? (
          <Image
            src={event.imgUrl}
            alt={event.title}
            width={200}
            height={200}
            className="rounded-[10px] object-cover"
          />
        ) : null}
      </div>
      {/* Details Section */}
      <div className="relative flex-1 min-h-[220px]">
        {/* SVG background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <UpcomingeventSVG />
        </div>
        {/* Details content */}
        <div className="relative z-10 flex flex-col h-full justify-between p-8 w-[736px]">
          <div>
            <div className="text-white text-2xl font-bold mb-2">
              {event.title}
            </div>
            <div className="flex flex-row gap-4 mb-2 bg-white/10 rounded-full px-3 py-1">
              <div className="flex items-center gap-1 text-sm text-white">
                <CalenderLogo />
                <span>Date: {event.date}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-white">
                <ClockLogo />
                <span>Time: {event.time}</span>
              </div>
            </div>
            <div className="mb-1">
              <span className="font-bold">Motto:</span> Motto will be added here
            </div>
            <div className="mb-2">
              <span className="font-bold">Description:</span>{" "}
              {event.description}
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-base mt-4">
            <LocationLogo className="w-5 h-5" />
            <span>{event.venue || "VIT Bhopal University, MP"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default moreEventscard;
