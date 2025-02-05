"use client";
import { programsData, programsSection } from "@/constants/programs";
import { Carousel } from "./Carousel";
import ProgramCard from "./program-card";

const Programs = () => {
  return (
    <section className="container mx-auto mb-12 px-4 lg:max-w-[1170px]">
      <h2 className="mb-4 text-center text-2xl font-bold">
        {programsSection.title}
      </h2>
      <Carousel
        items={programsData}
        renderItem={(item) => <ProgramCard {...item} />}
      />
    </section>
  );
};

export default Programs;
