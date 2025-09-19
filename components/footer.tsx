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
      <div className="h-[60vh] bg-gradient-to-b flex flex-col rounded-t-2xl px-10 py-5 from-[#999] to-white w-full">
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col gap-2">
            <div>
              {footerItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-md font-medium text-[var(--text-colour)]/80 hover:text-[var(--text-colour)] mr-6"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div>
              {extraFooterItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-md font-medium text-[var(--text-colour)]/80 hover:text-[var(--text-colour)] mr-6"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-center mt-2">
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
                    {Icon ? <Icon size={24} /> : null}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between items-center mt-15 w-full">
          <div className="flex flex-col gap-2">
            <button className="bg-black text-white px-4 py-1 rounded-lg text-lg font-medium w-fit mb-2">
              Contact us
            </button>
            <div className="text-base text-black/80">
              Email: OWASP@gamil.com
            </div>
            <div className="text-base text-black/80">Phone: +91 0000000000</div>
          </div>
          <form className="flex gap-4 items-center">
            <input
              type="email"
              placeholder="Email"
              className="px-6 py-3 rounded-xl border border-black bg-transparent text-black text-lg focus:outline-none min-w-[220px]"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="border-t border-black/30 mt-auto pt-2 flex items-center justify-between text-black/80 text-base gap-6">
          <div className="mt-10">
            © {new Date().getFullYear()} OWASP All Rights Reserved
          </div>
          <a href="/privacy-policy" className="hover:underline ml-4">
            Privacy Policy
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
