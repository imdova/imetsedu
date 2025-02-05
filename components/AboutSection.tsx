"use client";
import { aboutData } from "@/constants/about";
import WaveDiv from "./wavediv";
import Avatar from "./avatar";

const AboutSection = () => {
  return (
    <WaveDiv className="mb-12 fill-primary">
      <div className="w-full bg-primary">
        <div className="flex max-w-[600px] flex-col items-start rounded-3xl bg-primary p-4 shadow-md md:mx-auto">
          <div className="mb-4 flex items-center space-x-4">
            <Avatar
              src={aboutData.image}
              alt={aboutData.name}
              width={60}
              height={60}
              className="aspect-square w-[60px] rounded-full border border-dashed border-gold bg-primary object-contain md:w-[80px]"
            />
            <div>
              <h3 className="text-lg font-semibold text-gold md:text-2xl">
                {aboutData.name}
              </h3>
              <p className="text-sm text-gray-50 sm:text-sm md:text-base">
                {aboutData.title}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-100 md:text-base">
            {aboutData.content}
          </p>
        </div>
      </div>
    </WaveDiv>
  );
};

export default AboutSection;
