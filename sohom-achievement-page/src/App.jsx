import React from "react";
import AchievementCard from "./components/AchievementCard";
import owaspLogo from "./assets/owasp-logo.png";
import award1 from "./assets/award1.jpg";
import award2 from "./assets/award2.jpg";
import award3 from "./assets/award3.jpg";
import award4 from "./assets/award4(1).png"; // For Achievements section image
import * as Icons from "@tabler/icons-react";

// Dummy content (replace with "@/Content/LayoutElements" if you have it)
const footerItems = [
    { name: "Home", href: "#" },
              { name: "About", href: "#" },
              { name: "Members", href: "#" },
              { name: "Achievements", href: "#" },
              { name: "Events", href: "#" },
              { name: "Contact Us", href: "#" },
              { name: "Report a Bug", href: "#" },
];
const extraFooterItems = [
                { name: "Join Our Team", href: "#" },
              { name: "Play CTF with us", href: "#" },
];
const socialMediaLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: "IconBrandLinkedin" },
  { name: "Facebook", href: "https://facebook.com", icon: "IconBrandFacebook" },
  { name: "Twitter", href: "https://twitter.com", icon: "IconBrandTwitter" },
  
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f11] via-[#0b0b0d] to-[#020205] text-white font-poppins">
      {/* Header */}
      <header className="max-w-[1100px] mx-auto flex items-center justify-between py-6 px-4">
        <img src={owaspLogo} alt="OWASP" className="h-10" />
        <nav className="hidden md:flex gap-8 text-white/60 text-sm">
          <a href="#">Services</a>
          <a href="#" className="text-white">About Us</a>
          <a href="#">Events</a>
          <a href="#">Contact Us</a>
        </nav>
        <button
          className="bg-white text-black px-4 py-2 font-medium 
          [clip-path:polygon(0%_0%,calc(100%-15px)_0%,100%_15px,100%_100%,15px_100%,0%_calc(100%-15px))]"
        >
          Registrations
        </button>
      </header>

      {/* Hero Achievements Section */}
      <section className="max-w-[1100px] mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left text */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-2 border-b-2 border-dashed border-gray-500 inline-block pb-2">
            Achievements
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg">
            Over the years we’ve transformed the face of cybersecurity, thereby therefore
            realise regardless thereafter unrestored underestimated variety of various
            undisputed achievements.
          </p>
        </div>
        {/* Right Image */}
        <div className="dotted-rect rotate-90" />
        <div className="flex-1 flex justify-center relative z-10">
          <div className="dotted-rect" />
          <img
            src={award4}
            alt="Achievements Graphic"
            className="w-72 h-72 object-contain opacity-90"
          />
        </div>
      </section>

      {/* Content */}
      <main className="max-w-[1100px] mx-auto px-4 pb-20">
        {/* Title with dropdown */}
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-dashed border-gray-600 pb-4">
          <h1 className="text-4xl font-bold">Our Achievements</h1>
          <select className="bg-[#1a1a1d] border border-gray-600 rounded-lg px-4 py-2 text-gray-300 text-sm">
            <option>Select</option>
          </select>
        </section>

        {/* Grey paragraph under heading */}
        <p className="text-gray-400 mt-4 max-w-3xl">
          Over the years we've transformed the face of cybersecurity, thereby therefore
          realise regardless thereafter unrestored underestimated variety of various
          undisputed achievements.
        </p>

        {/* Cards */}
        <section className="mt-8 flex flex-col gap-8">
          <AchievementCard
            image={award1}
            title="INFOSEC Awards"
            gradientClass="bg-gradient-to-br from-orange-500 to-transparent"
          />
          <AchievementCard
            image={award2}
            title="INFOSEC Awards"
            gradientClass="bg-gradient-to-br from-purple-500 to-indigo-500"
          />
          <AchievementCard
            image={award3}
            title="INFOSEC Awards"
            gradientClass="bg-gradient-to-br from-blue-500 to-cyan-400"
          />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="h-[60vh] bg-gradient-to-b flex flex-col rounded-t-2xl px-10 py-5 from-[#999] to-white w-full">
        {/* Links & Socials */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col gap-2">
            <div>
              {footerItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-md font-medium text-black/80 hover:text-black mr-6"
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
                  className="text-md font-medium text-black/80 hover:text-black mr-6"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-3 items-center mt-2">
            {socialMediaLinks.map((item, idx) => {
              const Icon =
                item.icon && Icons[item.icon] ? Icons[item.icon] : null;
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

        {/* Contact & Subscribe */}
        <div className="flex justify-between items-center mt-15 w-full">
          <div className="flex flex-col gap-2">
            <button className="bg-black text-white px-4 py-1 rounded-lg text-lg font-medium w-fit mb-2">
              Contact us
            </button>
            <div className="text-base text-black/80">Email: OWASP@gmail.com</div>
            <div className="text-base text-black/80">Phone: +91 8223091234</div>
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

        {/* Footer Bottom */}
        {/* Footer bottom */}
<div className="border-t-[3px] border-black/30 mt-20 pt-10">
  <div className="flex items-center text-black/80 text-sm">
    © {new Date().getFullYear()} OWASP 2025 All Rights Reserved.
    <span className="ml-20">
      <a href="/privacy-policy" className="hover:underline">
        Privacy Policy
      </a>
    </span>
  </div>
</div>



      </footer>
    </div>
  );
}
