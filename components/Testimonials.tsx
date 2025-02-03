'use client'
import { testimonialsData } from "@/constants/testimonials";
import { Carousel } from "./Carousel";
import { TestimonialCard } from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="container lg:max-w-[1170px] mx-auto px-4 mb-12">
     <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Student Success Stories</h2>
      <Carousel
        items={testimonialsData}
        renderItem={(item) => <TestimonialCard {...item} />}
      />
    </section>
  );
};

export default Testimonials;
