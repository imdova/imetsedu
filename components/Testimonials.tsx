"use client";
import { testimonialsData } from "@/constants/testimonials";
import { Carousel } from "./Carousel";
import { TestimonialCard } from "./TestimonialCard";
import WaveDiv from "./wavediv";

const Testimonials = () => {
  return (
    <section className="container lg:max-w-[1170px] mx-auto md:px-4 mb-4 space-y-2">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        Student Success Stories
      </h2>
      <Carousel
        items={testimonialsData}
        renderItem={(item) => <TestimonialCard {...item} />}
      />
      <WaveDiv className="fill-gold">
        <div className="bg-gold w-full pb-2">
          <Carousel
            items={testimonialsData}
            renderItem={(item) => <TestimonialCard {...item} />}
          />
        </div>
      </WaveDiv>

      <Carousel
        items={testimonialsData}
        renderItem={(item) => <TestimonialCard {...item} />}
      />
    </section>
  );
};

export default Testimonials;
