import React from "react";
import Image from "next/image";
import { Container } from "./container";
import { achivementsContent } from "../Content/Achivements";

const Achievement = () => {
  return (
    <Container>
      <h1 className="text-white font-figtree text-[70px] font-medium mt-10 leading-[81px] not-italic ">
        Our Achievements
      </h1>
      <div className="w-full h-[2] bg-white/12" />
      <div className="text-sm font-normal text-[var(--muted-text)] mb-8">
        Over the years we’ve transformed the face of cybersecurity, therby
        therefore realise regardless thereafter unrestored underestimated
        variety of various undisputed achievments
      </div>
      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {achivementsContent.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[320px]">
            <div className="bg-white/5 rounded-[18px] border-[3px] border-white/40 flex-shrink-0 w-full overflow-hidden">
              <Image
                src={item.imgUrl}
                width={332}
                height={160}
                alt={item.title}
                className="w-full h-40 object-cover "
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
