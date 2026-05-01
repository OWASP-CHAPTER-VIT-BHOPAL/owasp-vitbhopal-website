"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PastSpeaker } from "@/Content/Speakers";

type SpeakersBigProps = {
  speakers?: PastSpeaker[];
};

const SpeakersBig = ({ speakers = [] }: SpeakersBigProps) => {
  const [activeSpeaker, setActiveSpeaker] = useState<PastSpeaker | null>(null);

  if (!speakers || speakers.length === 0) return null;

  return (
    <div className="relative flex min-h-auto w-full flex-col bg-transparent lg:min-h-[80vh]">
      {/* List Section */}
      <div
        className="flex w-full flex-col gap-0 py-0 lg:gap-2 lg:py-10"
        onMouseLeave={() => setActiveSpeaker(null)}
      >
        {speakers.map((speaker, idx) => (
          <React.Fragment key={idx}>
            {/* Mobile/Tablet View - Custom "Big" Layout */}
            <div className="flex w-full flex-col border-b border-white/10 px-0 py-6 lg:hidden">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-3xl leading-none font-light tracking-tighter text-white md:text-4xl">
                  {speaker.name}
                </h3>
                {speaker.socialLink && (
                  <a
                    href={speaker.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mt-2 -mr-2 p-2 text-white/50 transition-colors hover:text-white"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="flex gap-5">
                <div className="aspect-3/4 w-24 shrink-0 overflow-hidden rounded-3xl md:w-32">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-full w-full object-cover grayscale-50"
                  />
                </div>
                <div className="flex flex-col justify-end pb-1">
                  <span className="mb-1 text-xs font-bold tracking-widest text-white/50 uppercase md:text-sm">
                    {speaker.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <motion.div
              layoutId={`speaker-row-${speaker.name}`}
              className="group hidden cursor-pointer grid-cols-1 items-center gap-2 lg:grid xl:grid-cols-12"
              onMouseEnter={() => setActiveSpeaker(speaker)}
            >
              {/* Left: Designation */}
              <motion.div
                layout
                className="order-2 flex flex-col items-start text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 xl:order-1 xl:col-span-3"
              >
                <span className="text-sm font-bold tracking-wide text-white/50 uppercase md:text-base">
                  {speaker.role}
                </span>
              </motion.div>

              {/* Middle: Name */}
              <div className="order-1 flex justify-start xl:order-2 xl:col-span-9">
                <motion.h2
                  layout
                  className="text-left text-4xl font-semibold tracking-tighter text-white capitalize opacity-60 transition-all duration-300 group-hover:pl-8 group-hover:opacity-100 md:text-6xl"
                >
                  {speaker.name}
                </motion.h2>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      {/* Right: Absolute Image Section */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-end pr-4 lg:flex">
        <AnimatePresence mode="popLayout">
          {activeSpeaker?.image && (
            <motion.div
              layoutId="active-speaker-image"
              key={activeSpeaker.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="relative aspect-4/5 w-full max-w-75 overflow-hidden rounded-3xl bg-white/5 shadow-2xl"
            >
              <Image
                src={activeSpeaker.image}
                alt={activeSpeaker.name}
                fill
                className="object-cover grayscale-50"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpeakersBig;
