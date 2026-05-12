"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface MemberCardProps {
  image: string;
  name: string;
  position?: string;
  alt?: string;
  href?: string;
}

const arrowIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const baseClassName =
  "group relative flex w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-[#202020] to-[#191919] shadow-[0_1px_0.5px_#ffffff1a_inset,0_1px_1px_#ffffff35_inset,0_10px_10px_-9px_#00000070,0_20px_20px_-14px_#00000060,0_0px_6px_0px_#00000060] transition-transform active:scale-[0.97]";

const MemberCard: React.FC<Readonly<MemberCardProps>> = ({
  image,
  name,
  position,
  alt,
  href = "#",
}) => {
  const [imageSrc, setImageSrc] = useState(image || "/members/placeholder.png");

  const handleImageError = () => {
    setImageSrc("/members/placeholder.png");
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name}'s profile`}
      className={`${baseClassName} cursor-pointer`}
    >
      <div className="p-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-[calc(var(--radius-3xl)-(--spacing(2)))] bg-[#0f0f0f]">
          <Image
            src={imageSrc}
            fill
            alt={alt || name}
            className="h-full w-full rounded-[calc(var(--radius-3xl)-(--spacing(2)))] object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
            onError={handleImageError}
          />
          <div className="pointer-events-none absolute inset-0 z-10 rounded-[calc(var(--radius-3xl)-(--spacing(2)))] shadow-[0_0.5px_0_#ffffff50,0_2px_6px_#00000090_inset]" />
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-base leading-4 font-semibold text-white md:text-lg">
            {name}
          </h3>
          {position && (
            <p className="text-sm whitespace-pre-wrap text-gray-300 opacity-80">
              {position}
            </p>
          )}
        </div>
        <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-[#202020] to-[#191919] p-2 text-white/50 shadow-[0_1px_0.5px_#ffffff1a_inset,0_1px_1px_#ffffff35_inset,0_4px_4px_-3px_#00000070,0_0px_2px_0px_#00000060] transition-colors group-hover:text-white">
          <span className="shrink-0 scale-90">{arrowIcon}</span>
        </div>
      </div>
    </Link>
  );
};

export default MemberCard;
