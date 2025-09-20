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
    <div className="flex flex-col md:flex-row items-start gap-6 bg-[#1a1a1d] border-2 border-gray-700 rounded-2xl p-6 relative shadow-xl overflow-visible">
      <div
        className={`absolute top-0 right-0 w-40 h-40 ${gradientClass} blur-2xl opacity-40 rounded-tr-2xl`}
      />
      <div
        className={`absolute bottom-0 left-0 w-40 h-40 ${gradientClass} blur-2xl opacity-40 rounded-bl-2xl`}
      />
      <div
        className={`relative -mt-12 p-1 rounded-xl ${gradientClass} shrink-0`}
      >
        <div className="bg-[#1a1a1d] rounded-xl overflow-hidden">
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
