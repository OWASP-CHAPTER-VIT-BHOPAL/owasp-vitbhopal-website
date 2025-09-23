"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CalenderLogo, LocationLogo } from "./svg";

interface PastEventsProps {
  imgUrl?: string;
  title: string;
  date: string;
  description: string;
  venue?: string;
}

const PastEvents: React.FC<PastEventsProps> = ({ imgUrl, title, date, description, venue }) => {
  const [imageSrc, setImageSrc] = useState(imgUrl || "/members/placeholder.png");

  const handleImageError = () => {
    setImageSrc("/members/placeholder.png");
  };

  return (
    <div className="flex items-start h-60 w-[80%] mx-auto gap-6">
      <div className="rounded-2xl w-full h-full flex items-center justify-center">
        {imgUrl ? (
          <Image
            src={imageSrc}
            alt={title}
            width={200}
            height={200}
            className="rounded-[10px] h-full w-full object-cover"
            onError={handleImageError}
          />
        ) : null}
      </div>

      <div className="relative border-2 border-[var(--border)] rounded-2xl flex-1 h-full">
        <div className="relative z-10 flex flex-col h-full justify-between p-8 w-[736px]">
          <div className="flex justify-between">
            <div className="text-white text-2xl font-bold mb-2">
              {title}
            </div>
            <div className="flex flex-row items-center w-fit text-sm gap-2 bg-white/10 rounded-full px-3">
              <CalenderLogo />
              <span>Date: {date}</span>
            </div>
          </div>
          <div className="mt-4">
            {description}
          </div>
          <div className="flex items-center gap-2 text-white/80 text-base mt-4">
            <LocationLogo className="w-5 h-5" />
            <span>{venue || "VIT Bhopal University, Bhopal"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
