"use client";
import {
  testimonialsData1,
  testimonialsData2,
  testimonialsSection,
} from "@/constants/testimonials";
import { Carousel } from "./Carousel";
import { TestimonialCard } from "./TestimonialCard";
import WaveDiv from "./wavediv";

const Testimonials = () => {
  return (
    <section className="mb-4 space-y-2">
      <div className="container mx-auto space-y-2 md:px-4 lg:max-w-[1170px]">
        <h2 className="mb-4 text-center text-2xl font-bold md:text-left">
          {testimonialsSection.title}
        </h2>
        <Carousel
          items={testimonialsData1}
          renderItem={(item) => <TestimonialCard {...item} />}
        />
      </div>

      <WaveDiv className="fill-gold">
        <div className="w-full bg-gold pb-2">
          <div className="container mx-auto space-y-2 md:px-4 lg:max-w-[1170px]">
            <Carousel
              items={testimonialsData2}
              renderItem={(item) => <TestimonialCard {...item} />}
            />
          </div>
        </div>
      </WaveDiv>
    </section>
  );
};

export default Testimonials;
