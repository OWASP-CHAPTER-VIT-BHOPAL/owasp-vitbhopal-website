"use client";
import { Container } from "../ui/container";
import React, { useState } from "react";
import { pastEvents, upCommingEvents } from "../../Content/Events";
import Image from "next/image";
import UpcomingEventCard from "../cards/UpcomingEventCard";

interface AccordionProps {
  title: string;
  imageSrc?: string;
  description: string;
  open: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const EventCollapsible: React.FC<AccordionProps> = ({
  title,
  imageSrc,
  description,
  open,
  onHover,
  onLeave,
}) => {
  const [imageUrl, setimageUrl] = useState(
    imageSrc || "/members/placeholder.png",
  );

  const handleImageError = () => {
    setimageUrl("/members/placeholder.png");
  };
  return (
    <div
      className="mt-6 w-full rounded-3xl bg-gradient-to-b from-[#202020] to-[#191919] p-4 shadow-[0_1px_0.5px_#ffffff1a_inset,0_1px_1px_#ffffff35_inset,0_10px_10px_-9px_#00000070,0_20px_20px_-14px_#00000060,0_0px_6px_0px_#00000060] transition-transform duration-300 ease-in-out active:scale-[0.99] md:mt-8 md:p-6"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="flex h-full w-full cursor-pointer items-center justify-between text-lg font-medium text-white"
        aria-expanded={open}
      >
        <span
          className={`h-full text-lg transition-all duration-300 ease-in-out md:text-2xl ${open ? "font-bold" : "font-light"}`}
        >
          {title}
        </span>
      </div>
      <div>
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:gap-6">
              {imageSrc && (
                <div className="relative aspect-square h-32 w-full flex-shrink-0 overflow-hidden rounded-xl bg-[#0f0f0f] md:h-32 md:w-40">
                  <Image
                    src={imageUrl}
                    fill
                    alt={title}
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    onError={handleImageError}
                  />
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-xl shadow-[0_0.5px_0_#ffffff50,0_2px_6px_#00000090_inset]" />
                </div>
              )}
              <p className="text-sm leading-relaxed text-(--muted-text) md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(1);
  const upcomingEvent = upCommingEvents[0];

  return (
    <Container className="px-4 md:px-6 lg:px-8">
      <div className="mt-6 flex w-full flex-col items-stretch justify-between gap-8 md:mt-10 lg:flex-row lg:gap-20">
        <div className="flex h-full w-full flex-col gap-4 lg:w-1/2">
          <div className="text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl">
            Our Events
          </div>
          <div className="h-0.5 w-full bg-white/12" />
          <div className="text-sm font-normal text-(--muted-text) md:text-base">
            Over the years, we&apos;ve transformed the face of cybersecurity,
            thereby achieving a variety of undisputed accomplishments.
          </div>

          {/* Upcoming Event Card */}
          {upcomingEvent && (
            <UpcomingEventCard
              title={upcomingEvent.title}
              date={upcomingEvent.date}
              description={upcomingEvent.description}
              imgUrl={upcomingEvent.imgUrl}
              mode={upcomingEvent.mode}
              status={upcomingEvent.status}
            />
          )}
        </div>
        <div className="flex h-full w-full flex-col justify-between lg:w-1/2">
          {pastEvents.slice(0, 3).map((event, idx) => (
            <EventCollapsible
              key={idx}
              title={event.title}
              imageSrc={event.imgUrl}
              description={event.description}
              open={openIndex === idx}
              onHover={() => setOpenIndex(idx)}
              onLeave={() => {}}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EventSection;
