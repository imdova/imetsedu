'use client'
import { programsData } from "@/constants/programs";
import { Carousel } from "./Carousel";
import ProgramCard from "./program-card";

const Programs = () => {
  return (
    <section className="container  lg:max-w-[1170px] mx-auto px-4 mb-12">
      <h2 className="text-2xl font-bold mb-6">Related Programs</h2>
      <Carousel
        items={programsData}
        renderItem={(item) => <ProgramCard {...item} />}
      />
    </section>
  );
};

export default Programs;
