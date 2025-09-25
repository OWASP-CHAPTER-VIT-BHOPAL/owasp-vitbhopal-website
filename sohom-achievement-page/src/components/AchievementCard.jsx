import React from "react";

export default function AchievementCard({ image, title, gradientClass }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 bg-[#1a1a1d] border-2 border-gray-700 rounded-2xl p-6 relative shadow-xl overflow-visible">
      {/* Gradient glows in corners */}
      <div
        className={`absolute top-0 right-0 w-40 h-40 ${gradientClass} blur-2xl opacity-40 rounded-tr-2xl`}
      />
      <div
        className={`absolute bottom-0 left-0 w-40 h-40 ${gradientClass} blur-2xl opacity-40 rounded-bl-2xl`}
      />

      {/* Floating Image with gradient border */}
      <div
        className={`relative -mt-10 p-[2px] rounded-xl ${gradientClass} shrink-0`}
      >
        <div className="bg-[#1a1a1d] rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-[340px] h-[200px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 text-gray-400 text-sm leading-relaxed">
        <h3 className="text-gray-300 font-semibold mb-2">{title}</h3>
        <p>
          Over the years we've transformed the face of cybersecurity, thereby
          therefore realise regardless thereafter unrestored underestimated
          variety of various undisputed achievements.
        </p>
        <p className="mt-3">
          Over the years we've transformed the face of cybersecurity, thereby
          therefore realise regardless thereafter unrestored underestimated
          variety of various undisputed achievements.
        </p>
      </div>
    </div>
  );
}
