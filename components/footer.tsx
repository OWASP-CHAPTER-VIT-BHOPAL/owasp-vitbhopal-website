import React from "react";
import { Container } from "./container";
import {
  footerItems,
  extraFooterItems,
  socialMediaLinks,
} from "@/Content/LayoutElements";
import * as Icons from "@tabler/icons-react";

type IconComponent = React.ComponentType<{ size?: number }>;

const SocialIcon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const iconProps = {
    width: size,
    height: size,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  };

  switch (name) {
    case "Instagram":
      return (
        <svg {...iconProps}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...iconProps}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case "GitHub":
      return (
        <svg {...iconProps}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case "Discord":
      return (
        <svg {...iconProps}>
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
        </svg>
      );
    case "Twitter":
      return (
        <svg {...iconProps}>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      );
    default:
      return <span className="text-xs font-bold">{name.charAt(0)}</span>;
  }
};

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
              {socialMediaLinks.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-full bg-black hover:bg-gray-800 flex justify-center items-center transition-colors duration-200"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 flex items-center justify-center"
                    aria-label={item.name}
                  >
                    <SocialIcon name={item.name} size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-2 lg:mt-4 w-full gap-4 lg:gap-6">
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <button className="bg-black text-white px-4 py-2 rounded-2xl text-sm md:text-base lg:text-lg font-medium w-fit mb-2">
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
