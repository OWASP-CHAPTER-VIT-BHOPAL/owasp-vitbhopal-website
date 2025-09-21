import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bi0s - Cybersecurity Team</title>
        <meta name="description" content="bi0s cybersecurity team from Amrita Vishwa Vidyapeetham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="bg-black p-4">
          <nav className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-white mb-4 sm:mb-0">
                bi0s
              </Link>
              <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 sm:gap-x-6 gap-y-2">
                <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
                <Link href="/members" className="hover:text-gray-300 transition-colors">Members</Link>
                <Link href="/achievements" className="hover:text-gray-300 transition-colors">Achievements</Link>
                <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
                <span className="hover:text-gray-300 transition-colors cursor-pointer">⚙</span>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <section className="mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">About bi0s</h1>
            <p className="text-base sm:text-lg leading-relaxed text-white">
              Team bi0s is a cyber-security enthusiast club and research group from Amrita Vishwa Vidyapeetham (University), 
              India. The team was formally launched as a CTF team in 2007 under the mentorship of Vipin Pavithran, a faculty 
              at Amrita's Centre for Cyber Security. It was among the first CTF team from India, and ever-since has been 
              spearheading CTFs in the country - from starting InCTF, India's First CTF and consistently ranking No.1 in 
              CTFTime since it was established. Over the years, the team has evolved into a cyber-security research group, 
              with specialized teams in 10+ cyber-security focus areas.
            </p>
          </section>

          {/* How we function */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">How we function?</h2>
            <p className="text-base sm:text-lg leading-relaxed text-white">
              The team functions as a family, and uses a mentor mentee model wherein senior students train and pass on 
              experience & skills they gained to their junior mentees. This happens through out their years at the 
              community, and is facilitated through various activities the club organizes & events and contests it 
              participates as a team.
            </p>
          </section>

          {/* What do we do */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">What do we do?</h2>
            <p className="text-base sm:text-lg mb-6 text-white">Here are some of the things our members do:</p>
            <ol className="space-y-3 text-base sm:text-lg">
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">1.</span>
                <span>Learning & Researching on various Cyber Security fields</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">2.</span>
                <span>Participating & organizing CTFs across the world</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">3.</span>
                <span>Organizing workshops & training programmes</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">4.</span>
                <span>Contributing to open-source security tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">5.</span>
                <span>Designing and testing hardware security modules</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">6.</span>
                <span>Collaborating in international cyber-security research projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">7.</span>
                <span>Penetration testing, bug-bounty hunting & submitting CVEs</span>
              </li>
              <li className="flex items-start">
                <span className="text-white font-bold mr-3">8.</span>
                <span>Providing Cyber Security Consultancy Services</span>
              </li>
            </ol>
          </section>

          {/* Our Teams */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">Our Teams</h2>
            <p className="text-base sm:text-lg mb-6 lg:mb-8 text-white">
              We have specialized teams focusing on various areas in cyber-security -
            </p>
            
            <div className="space-y-6 lg:space-y-8">
              {/* First Row - 2 teams */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* bi0s CTF */}
                <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 text-white">bi0s CTF</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    The bi0s CTF team participates in various global CTFs 
                    throughout the year, and also hosts various CTFs 
                    including the InCTF and bi0sCTF. It specializes in 
                    Web Security, Reverse Engineering, Binary 
                    Exploitation, Cryptography, Forensics, Android etc.
                  </p>
                </div>

                {/* bi0s Hardware */}
                <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 text-white">bi0s Hardware</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    The bi0s Hardware team specializes in hardware cyber 
                    security research and testing. It specializes in 
                    Embedded Systems, Firmware Analysis, Wireless 
                    Security, Automotive Security, ICS/SCADA Security, 
                    Side Channel Analysis etc.
                  </p>
                </div>
              </div>

              {/* Second Row - 2 teams */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* bi0s Pentest */}
                <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 text-white">bi0s Pentest</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    The bi0s Pentest team actively research on how to 
                    detect and exploit flaws in various networks, cloud 
                    appliances and web-based systems. With the main focus 
                    on penetration testing and RedTeam type CTFs, we 
                    actively participate in bug-bounty programs for a 
                    real-time bug-hunting experience.
                  </p>
                </div>

                {/* bi0s Research */}
                <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 text-white">bi0s Research</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    The bi0s Research team focuses on cutting-edge 
                    cybersecurity research, publishing papers, and 
                    developing innovative security solutions. They work 
                    on advanced threat detection, AI security, and 
                    emerging technologies in cybersecurity.
                  </p>
                </div>
              </div>

              {/* Third Row - 2 teams */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* bi0s Forensics */}
                <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 text-white">bi0s Forensics</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    The bi0s Forensics team specializes in digital 
                    forensics, incident response, and malware analysis. 
                    They work on memory forensics, network forensics, 
                    and mobile device investigations for real-world 
                    security incidents.
                  </p>
                </div>

                {/* bi0s Training */}
                <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 text-white">bi0s Training</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    The bi0s Training team develops and delivers 
                    cybersecurity education programs, workshops, and 
                    bootcamps. They focus on skill development, 
                    certification preparation, and knowledge transfer 
                    to the next generation of security professionals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">Here's what recruiters had to say about us</h2>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                <p className="text-base sm:text-lg italic text-white mb-4">
                  "Freshers from Amrita are better than experienced people I 
                  have hired from outside. 8 out of 12 people in the 
                  security team are Amrita alumni."
                </p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Senior Manager, Product Security, VMware
                </p>
              </div>

              <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                <p className="text-base sm:text-lg italic text-white mb-4">
                  "I can vouch for their superior technical skills, 
                  dedication and enthusiasm. The training they receive is 
                  excellent."
                </p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Information Security Investigator, Cisco
                </p>
              </div>

              <div className="bg-black-800 p-4 sm:p-6 rounded-lg">
                <p className="text-base sm:text-lg italic text-white mb-4">
                  "I am very happy with their performance, especially level 
                  of understanding in cyber-security"
                </p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Divyanshu Verma, Sr. Manager, Intel R&D, Bengaluru
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black p-4 sm:p-6 mt-12 lg:mt-16">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-0 text-center sm:text-left">
              © Team bi0s 2007 - 2024. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-500 hover:text-red-400 text-sm sm:text-base">Streaming</a>
              <a href="#" className="text-gray-400 hover:text-white">✉</a>
              <a href="#" className="text-gray-400 hover:text-white">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white">👤</a>
              <a href="#" className="text-gray-400 hover:text-white">💼</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
};

export default Home;