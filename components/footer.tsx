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
    <div className="mt-16 md:mt-24 lg:mt-32 relative z-10">
      <Container className="px-4 md:px-6 lg:px-8">
        <div className="bg-gradient-to-b flex flex-col rounded-t-2xl px-4 md:px-6 lg:px-10 py-6 md:py-8 from-[#999] to-white w-full relative">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4 md:mb-6 gap-4 md:gap-4">
            <div className="flex flex-col gap-1 w-full md:w-auto">
              <div className="flex flex-wrap gap-2 md:gap-0">
                {footerItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-sm md:text-lg font-medium text-[var(--text-colour)]/80 hover:text-[var(--text-colour)] mr-3 md:mr-6 mb-1"
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
                    className="text-sm md:text-lg font-medium text-[var(--text-colour)]/80 hover:text-[var(--text-colour)] mr-3 md:mr-6 mb-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-3 items-center justify-start md:justify-end w-full md:w-auto">
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
                      {Icon ? (
                        <div className="md:w-5 md:h-5 lg:w-6 lg:h-6">
                          <Icon size={18} />
                        </div>
                      ) : null}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-2 lg:mt-4 w-full gap-4 lg:gap-6">
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm md:text-base lg:text-lg font-medium w-fit mb-2">
                Contact us
              </button>
              <div className="text-xs md:text-sm lg:text-base text-black/80">
                Email: OWASP@gamil.com
              </div>
              <div className="text-xs md:text-sm lg:text-base text-black/80">
                Phone: +91 0000000000
              </div>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center w-full lg:w-auto lg:max-w-md">
              <input
                type="email"
                placeholder="Email"
                className="px-3 md:px-4 lg:px-6 py-2 lg:py-3 rounded-xl border border-black bg-transparent text-black text-sm md:text-base lg:text-lg focus:outline-none w-full sm:min-w-[200px] md:min-w-[220px]"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 md:px-6 lg:px-8 py-2 lg:py-3 rounded-xl text-sm md:text-base lg:text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="border-t border-black/30 mt-4 md:mt-6 pt-3 md:pt-4 flex flex-col md:flex-row items-center justify-between text-black/80 text-xs md:text-sm lg:text-base gap-2 md:gap-4">
            <div className="text-center md:text-left order-2 md:order-1">
              © {new Date().getFullYear()} OWASP All Rights Reserved
            </div>
            <a
              href="/privacy-policy"
              className="hover:underline text-center md:text-right order-1 md:order-2"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
