import { heroData } from "@/constants/hero";
import YouTubePlayer from "./YouTubePlayer";

const Hero = () => {
  return (
    <section className="container mx-auto mb-4 grid grid-cols-1 items-center px-4 md:grid-cols-2 lg:max-w-[1170px]">
      <h1 className="mb-6 text-center text-4xl font-bold">{heroData.title}</h1>
      <div className="aspect-video overflow-hidden rounded-lg">
        <YouTubePlayer videoUrl={heroData.videoUrl} priority={true} />
      </div>
    </section>
  );
};

export default Hero;
