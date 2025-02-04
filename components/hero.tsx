import { heroData } from "@/constants/hero";
import YouTubePlayer from "./YouTubePlayer";

const Hero = () => {
  return (
    <section className="container lg:max-w-[1170px] mx-auto px-4 mb-4 grid grid-cols-1 items-center md:grid-cols-2">
      <h1 className="text-4xl font-bold text-center mb-6">{heroData.title}</h1>
      <div className="aspect-video rounded-lg overflow-hidden">
        <YouTubePlayer videoUrl={heroData.videoUrl} />
      </div>
    </section>
  );
};

export default Hero;
