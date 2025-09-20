import React from 'react'
import Image from 'next/image'
import AchievementCard from '@/components/achievementCard'
import { Container } from '@/components/container'

const page = () => {
    return (
        <>
        <Container>
            <section className="w-full mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
                {/* Left text */}
                <div className="flex-1">
                    <h2 className="text-5xl font-bold mb-2 border-b-2 border-dashed border-gray-500 inline-block pb-2">
                        Achievements
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-lg">
                        Over the years we&apos;ve transformed the face of cybersecurity, thereby therefore
                        realise regardless thereafter unrestored underestimated variety of various
                        undisputed achievements.
                    </p>
                </div>
                {/* Right Image */}
                <div className="dotted-rect rotate-90" />
                <div className="flex-1 flex justify-center relative z-10">
                    <div className="dotted-rect" />
                    <Image
                        src="/testimg1.png"
                        alt="Achievements Graphic"
                        width={288}
                        height={288}
                        className="w-72 h-72 object-contain opacity-90"
                    />
                </div>
            </section>

            {/* Content */}
            <section className="px-4 pb-20">
                {/* Title with dropdown */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-dashed border-gray-600 pb-4">
                    <h1 className="text-4xl font-bold">Our Achievements</h1>
                    <select className="bg-[#1a1a1d] border border-gray-600 rounded-lg px-4 py-2 text-gray-300 text-sm">
                        <option>Select</option>
                    </select>
                </div>

                {/* Grey paragraph under heading */}
                <p className="text-gray-400 mt-4">
                    Over the years we&apos;ve transformed the face of cybersecurity, thereby therefore
                    realise regardless thereafter unrestored underestimated variety of various
                    undisputed achievements.
                </p>

                {/* Cards */}
                <div className="mt-8 flex flex-col gap-8">
                    <AchievementCard
                        image="/testimg1.png"
                        title="INFOSEC Awards"
                        gradientClass="bg-gradient-to-br from-orange-500 to-transparent"
                    />
                    <AchievementCard
                        image="/testimg1.png"
                        title="INFOSEC Awards"
                        gradientClass="bg-gradient-to-br from-blue-500 to-cyan-400"
                    />
                </div>
            </section>
            </Container>
        </>
    )
}

export default page