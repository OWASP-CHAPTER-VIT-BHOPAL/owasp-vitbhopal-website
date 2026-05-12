"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SponsorCardProps {
  name: string;
  imgUrl: string;
  tier?: string;
  href?: string;
  className?: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  name,
  imgUrl,
  tier,
  href = "#",
  className,
}) => {
  const [imageSrc, setImageSrc] = useState(
    imgUrl || "/members/placeholder.png",
  );

  const handleImageError = () => {
    setImageSrc("/members/placeholder.png");
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group w-full max-w-75 transition-transform active:scale-[0.97]",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#202020] to-[#191919] p-6 shadow-[0_1px_0.5px_#ffffff1a_inset,0_1px_1px_#ffffff35_inset,0_10px_10px_-9px_#00000070,0_20px_20px_-14px_#00000060,0_0px_6px_0px_#00000060] transition-all duration-300">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-contain p-4 opacity-70 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              onError={handleImageError}
            />
          </div>
        </div>
        {tier && (
          <div className="absolute top-3 right-3 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            {tier}
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#E18C50]">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default SponsorCard;
