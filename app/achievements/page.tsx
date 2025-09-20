import { Container } from "@/components/container";
import AchievementCard from "@/components/achievementCard";
import { achivementsContent } from "@/Content/Achievements";
import { HeroDashSVG } from "@/components/svg";

export default function Achievements() {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row justify-between items-center bg-white pt-20 pb-20">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-extrabold">
            <span className="text-orange-500">OUR</span>
            <br />
            <span className="text-gray-950">ACHIEVEMENTS</span>
          </h1>
          <div className="pt-10 w-full">
            <p className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-700 max-w-lg leading-relaxed">
              Celebrating the milestones and accomplishments that define our journey and success in cybersecurity education and community building.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 mr-8 mt-12 md:mt-0">
          <HeroDashSVG className="w-full h-auto" />
        </div>
      </section>
      
      <section className="w-full py-20">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-8">
            {achivementsContent.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                description={achievement.description}
                image={achievement.imgUrl}
                gradientClass={index % 2 === 0 ? "bg-gradient-to-br from-orange-500 to-transparent" : "bg-gradient-to-br from-blue-500 to-cyan-400"}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}