import React from "react";
import Image from "next/image";
import { Container } from "./container";
import { achivementsContent } from "../Content/Achivements";

const Achievement = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 mt-10">
        <h1 className="text-white font-figtree text-[70px] font-medium leading-[81px] not-italic">
          Our Achievements
        </h1>
        <div className="w-full h-[2px] bg-white/12" />
        <div className="text-sm font-normal text-[var(--muted-text)]">
          Over the years we’ve transformed the face of cybersecurity, therby
          therefore realise regardless thereafter unrestored underestimated
          variety of various undisputed achievments
        </div>
      </div>
      <div className="flex mt-6 overflow-x-auto gap-6 pb-4 scroll-hide">
        {achivementsContent.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[320px]">
            <div className="w-full rounded-2xl border-2 border-[var(--border)] aspect-square mt-2 bg-white/5 flex-shrink-0 overflow-hidden">
              <Image
                src={item.imgUrl}
                width={332}
                height={160}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl bg-[#111] aspect-[2.1/1]"
              />
            </div>
            <div className="mt-3 text-base font-semibold text-center text-white/80">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Achievement;
