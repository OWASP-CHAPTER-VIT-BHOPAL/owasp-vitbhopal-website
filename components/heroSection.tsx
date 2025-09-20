import { Container } from "./container";
import { HeroDashSVG, HeroSVG } from "./svg";

const HeroSection = () => {
  return (
    <Container className="px-4 md:px-6 lg:px-8">
      <div className="relative w-full flex items-center justify-center my-8 md:my-16 lg:my-[100px] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none px-2">
          <div className="flex-shrink-0 flex flex-col select-none w-full">
            <div className="flex flex-col items-center gap-2 md:hidden">
              <span className="text-[#ABABAB] text-8xl sm:text-8xl not-italic font-bold leading-tighter">
                OWASP
              </span>
              <span className="text-[#ABABAB] text-7xl sm:text-8xl not-italic font-normal leading-tighter">
                VIT Bhopal
              </span>
              <div className="w-full border-8"/>
              <span className="text-[#ABABAB] text-3xl sm:text-4xl not-italic font-semibold leading-tight">
                University Student Chapter
              </span>
            </div>

            {/* Desktop: Original horizontal layout */}
            <div className="hidden md:flex flex-col">
              <div className="flex flex-row justify-center items-center">
                <span className="text-[#ABABAB] text-6xl lg:text-[111px] not-italic font-bold leading-tight lg:leading-[109px]">
                  OWASP
                </span>
                <span className="text-[#ABABAB] text-6xl lg:text-[111px] not-italic font-normal leading-tight lg:leading-[109px] ml-6">
                  VIT Bhopal
                </span>
              </div>
              <div className="flex flex-row justify-end items-center w-full h-[41px] flex-shrink-0 mt-2">
                <HeroDashSVG />
                <span className="text-[#ABABAB] text-2xl lg:text-[30px] not-italic font-semibold leading-tight lg:leading-[40px] text-end">
                  University Student Chapter
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full flex justify-center">
          <div className="w-full max-w-sm opacity-0 md:opacity-100 sm:max-w-md md:max-w-lg lg:max-w-full">
            <HeroSVG className="w-full h-auto" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
