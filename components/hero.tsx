import { heroData } from "@/constants/hero";


const Hero = () => {
  return (
    <section className="container lg:max-w-[1170px] mx-auto px-4 mb-12 grid grid-cols-1 items-center md:grid-cols-2">
      <h1 className="text-4xl font-bold text-center mb-6">
        {heroData.title}
      </h1>
      <div className="aspect-video rounded-lg overflow-hidden mb-8">
        <iframe
          className="w-full h-full"
          src={heroData.videoUrl}
          title={heroData.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default Hero;
