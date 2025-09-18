import { Container } from "./container";
import { HeroDashSVG, HeroSVG } from "./svg";

const HeroSection = () => {
  return (
    <Container>
      <div className="relative w-full flex items-center justify-center my-[100px] ">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none">
          <div className="flex-shrink-0 flex flex-col select-none">
            <div className="flex flex-row justify-center items-center">
              <span className="text-[#ABABAB] text-[111px] not-italic font-bold leading-[109px]">
                OWASP
              </span>
              <span className="text-[#ABABAB] text-[111px] not-italic font-normal leading-[109px] ml-6">
                VIT Bhopal
              </span>
            </div>
            <div className="flex flex-row justify-end items-center w-full h-[41px] flex-shrink-0 mt-2">
              <HeroDashSVG />
              <span className="text-[#ABABAB] text-[30px] not-italic font-semibold leading-[40px] text-end">
                University Student Chapter
              </span>
            </div>
          </div>
        </div>
        <div className=" relative z-10">
          <HeroSVG />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
