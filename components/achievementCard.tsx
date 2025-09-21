"use client";
import React from "react";
import Image from "next/image";

interface AchievementCardProps {
  image: string;
  title: string;
  gradientClass: string;
  description: string;
}

export default function AchievementCard({ image, title, gradientClass, description }: AchievementCardProps) {
  return (
    <div className="group flex flex-col md:flex-row items-start gap-6 bg-[#1a1a1d] border-2 border-gray-700 rounded-2xl p-6 relative shadow-xl overflow-visible">
      <div
        className={`absolute top-0 right-0 w-40 h-40 ${gradientClass} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-tr-2xl`}
      />
      <div
        className={`relative -mt-12 group-hover:-mt-10 p-1 rounded-xl ${gradientClass} shrink-0 group-hover:transition-transform group-hover:duration-300`}
      >
        <div className="bg-transparent group-hover:bg-white/10 rounded-xl overflow-hidden transition-colors duration-300">
          <Image
            src={image}
            width={340}
            height={200}
            alt={title}
            className="w-[450px] h-[230px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 text-gray-400 text-sm leading-relaxed">
        <h3 className="text-gray-300 font-semibold mb-2">{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
