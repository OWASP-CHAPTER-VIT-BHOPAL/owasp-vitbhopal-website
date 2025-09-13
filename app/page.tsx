"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Header Section */}
      <header className="relative z-50 px-6 py-6 animate-fade-in-down">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* OWASP VIT Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <img src="/images/owasp-vit-logo.png" alt="OWASP VIT Bhopal Logo" className="w-12 h-12 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            <a href="#members" className="hover:text-blue-300 transition-colors duration-300 font-medium text-white">
              Members
            </a>
            <a href="#contact" className="hover:text-blue-300 transition-colors duration-300 font-medium text-white">
              Contact Us
            </a>
            <button className="text-white hover:text-blue-300 transition-colors duration-300">
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden animate-slide-in-right text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-sm p-6 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <a href="#members" className="hover:text-blue-300 transition-colors duration-300 font-medium text-white">
                Members
              </a>
              <a href="#contact" className="hover:text-blue-300 transition-colors duration-300 font-medium text-white">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Diagonal Cut */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"></div>

        {/* Diagonal cut at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-slate-900">
            <path d="M0,120 L1200,0 L1200,120 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up text-balance text-white">
              Welcome to OWASP
              <br />
              VIT Bhopal University
              <br />
              Student Chapter
            </h1>
            <p className="text-xl md:text-2xl text-white animate-fade-in-up animation-delay-200 font-light">
              the Elite Club of Cybersecurity
            </p>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 px-8 py-3 rounded-full animate-fade-in-up animation-delay-400 hover:scale-105 transform font-semibold text-lg">
              Join Us
            </button>
          </div>

          {/* Right Content - OWASP Logo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 animate-float">
              <img src="/images/owasp-logo.png" alt="OWASP Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section className="relative py-20 px-6">
        {/* Diagonal cut at top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-slate-900 rotate-180">
            <path d="M0,120 L1200,0 L1200,120 Z" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-slate-900"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 animate-fade-in-up">→ Our Events</h2>

          {/* Event Card Layout */}
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Left Content Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl z-10 lg:w-1/2 lg:mr-8 animate-slide-in-left">
              <div className="space-y-6">
                <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                  Workshop
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Shell n Zen at AdVITya 2025
                </h3>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-105 transform font-semibold">
                  View More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 lg:-ml-8 animate-slide-in-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/event-photo.jpg"
                  alt="Shell n Zen workshop presentation at AdVIT 2025"
                  className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Diagonal cut at top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-slate-900 rotate-180">
            <path d="M0,120 L1200,0 L1200,120 Z" />
          </svg>
        </div>

        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-green-500"></div>

        {/* Diagonal cut at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <path d="M0,0 Q600,80 1200,0 L1200,120 L0,120 Z" fill="url(#curveGradient)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in-up">→ Our Achievements</h2>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
              Some Key milestones achieved by our community and community members
            </p>
          </div>

          {/* Right Content - Achievement Cards */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* First Achievement Card */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 relative z-20">
                <div className="space-y-4">
                  <img
                    src="/person-in-orange-shirt-giving-presentation-at-conf.jpg"
                    alt="OWASP Italy event presentation"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    Event
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    Talk Given by our President at an Event by OWASP Italy
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300"
                  >
                    → Learn More
                  </a>
                </div>
              </div>

              {/* Second Achievement Card (overlapping) */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl absolute top-8 left-16 hover:scale-105 transition-transform duration-300 z-10">
                <div className="space-y-4">
                  <img
                    src="/person-in-orange-shirt-giving-presentation-at-conf.jpg"
                    alt="OWASP Italy event presentation"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    Event
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    Talk Given by our President at an Event by OWASP Italy
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-300"
                  >
                    → Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative py-20 px-6">
        {/* Diagonal cut at top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-slate-900 rotate-180">
            <path d="M0,120 L1200,0 L1200,120 Z" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-slate-900"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 animate-fade-in-up">→ Photo Gallery</h2>

          {/* Gallery Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/event-photo.jpg"
                alt="OWASP VIT event presentation with speaker on stage"
                className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Gallery Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {[...Array(12)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === 0 ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`View photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-16 px-6 overflow-hidden">
        {/* Diagonal gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-purple-600"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Logo and Title */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center space-x-4">
              <img src="/images/owasp-vit-logo.png" alt="OWASP VIT Bhopal Logo" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight">
              OWASP VIT Bhopal University
              <br />
              Student Chapter
            </h3>
          </div>

          {/* Right Content - Navigation Links */}
          <div className="grid grid-cols-2 gap-8 animate-slide-in-right">
            {/* First Column */}
            <div className="space-y-4">
              <a
                href="#home"
                className="block text-white hover:text-white/80 transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#achievements"
                className="block text-white hover:text-white/80 transition-colors duration-300 font-medium"
              >
                Achievements
              </a>
              <a
                href="#members"
                className="block text-white hover:text-white/80 transition-colors duration-300 font-medium"
              >
                Members
              </a>
              <a
                href="#content"
                className="block text-white hover:text-white/80 transition-colors duration-300 font-medium"
              >
                Content
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-white/80 transition-colors duration-300 font-medium"
              >
                Contact Us
              </a>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <a
                href="#report-bug"
                className="block text-white hover:text-white/80 transition-colors duration-300 font-medium"
              >
                Report a Bug
              </a>
              <a
                href="#join-team"
                className="block text-white hover:text-white/80 transition-colors duration-300 font-medium"
              >
                Join Our Team
              </a>
              <a
                href="#ctf"
                className="block text-white hover:text-white/80 transition-colors duration-300 font-medium"
              >
                Play CTF with us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-10 text-center mt-12">
          <p className="text-white/90 text-sm font-medium">© 2025 OWASP VIT Bhopal University Student Chapter</p>
        </div>
      </footer>
    </div>
  )
}
