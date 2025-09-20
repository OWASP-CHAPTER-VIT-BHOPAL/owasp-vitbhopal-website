import React from "react";
import { Container } from "./container";
import {
  footerItems,
  extraFooterItems,
  socialMediaLinks,
} from "@/Content/LayoutElements";
import * as Icons from "@tabler/icons-react";

type IconComponent = React.ComponentType<{ size?: number }>;

const Footer = () => {
  return (
    <Container>
      <div className="min-h-[60vh] md:h-[60vh] bg-gradient-to-b flex flex-col rounded-t-2xl px-5 md:px-10 py-5 from-[#999] to-white w-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-10 gap-4 md:gap-0">
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="flex flex-wrap gap-2 md:gap-0">
              {footerItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-sm md:text-md font-medium text-[var(--text-colour)]/80 hover:text-[var(--text-colour)] mr-3 md:mr-6"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 md:gap-0">
              {extraFooterItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-sm md:text-md font-medium text-[var(--text-colour)]/80 hover:text-[var(--text-colour)] mr-3 md:mr-6"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-center mt-2 justify-center md:justify-start w-full md:w-auto">
            {socialMediaLinks.map((item, idx) => {
              const Icon =
                item.icon &&
                (Icons as unknown as Record<string, IconComponent>)[item.icon]
                  ? (Icons as unknown as Record<string, IconComponent>)[
                      item.icon
                    ]
                  : null;
              return (
                <div
                  key={idx}
                  className="p-2 rounded-full bg-black transition-colors duration-200"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999]"
                    aria-label={item.name}
                  >
                    {Icon ? <Icon size={20} className="md:w-6 md:h-6" /> : null}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4 lg:mt-15 w-full gap-6 lg:gap-0">
          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <button className="bg-black text-white px-4 py-1 rounded-lg text-base lg:text-lg font-medium w-fit mb-2">
              Contact us
            </button>
            <div className="text-sm lg:text-base text-black/80">
              Email: OWASP@gamil.com
            </div>
            <div className="text-sm lg:text-base text-black/80">
              Phone: +91 0000000000
            </div>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto">
            <input
              type="email"
              placeholder="Email"
              className="px-4 lg:px-6 py-2 lg:py-3 rounded-xl border border-black bg-transparent text-black text-base lg:text-lg focus:outline-none w-full sm:min-w-[220px]"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 lg:px-8 py-2 lg:py-3 rounded-xl text-base lg:text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="border-t border-black/30 mt-auto pt-4 flex flex-col md:flex-row items-center justify-between text-black/80 text-sm lg:text-base gap-4 md:gap-6">
          <div className="mt-4 md:mt-10 text-center md:text-left">
            © {new Date().getFullYear()} OWASP All Rights Reserved
          </div>
          <a
            href="/privacy-policy"
            className="hover:underline text-center md:text-left"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
