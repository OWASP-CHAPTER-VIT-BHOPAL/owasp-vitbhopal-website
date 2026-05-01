import { pastSpeakers } from "@/Content/Speakers";
import SpeakersBig from "@/components/sections/SpeakersBig";
import PastSpeakerCard from "@/components/cards/PastSpeakerCard";

export default function PastSpeakersSection() {
  return (
    <section className="mb-10 sm:mb-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
            Past Speakers
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-(--muted-text) sm:text-base">
            A spotlight on the speakers who have shaped our past events and
            shared their expertise.
          </p>
        </div>
      </div>

      <div className="my-3 w-full border-2 border-dashed border-white/12 sm:my-4" />

      {/* Small screens: Older Card Grid */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {pastSpeakers.map((speaker) => (
          <PastSpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </div>

      {/* md screens and above: SpeakersBig */}
      <div className="hidden md:block">
        <SpeakersBig speakers={pastSpeakers} />
      </div>
    </section>
  );
}
