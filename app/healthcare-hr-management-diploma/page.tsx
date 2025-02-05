import AboutSection from "@/components/AboutSection";
import ApplySection, { CallToAction } from "@/components/apply";
import Curriculum from "@/components/Curriculum";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import { InstructorCard } from "@/components/instructorCard";
import Programs from "@/components/programs";
import Testimonials from "@/components/Testimonials";
import VideoGrid from "@/components/VideoGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare hr management diploma", // This will be shown as "Healthcare hr management diploma | IMETS School of Business"
};
export default function Home() {
  return (
    <div>
      <Header />
      <CallToAction />
      <main>
        <Hero />
        <Features />
        {/* this in separate div to make the apply button stick after this section
        if you need to make the apply sticky after the Curriculum move it up (out of the <div></div>) */}

        <div>
          <Curriculum />

          {/* Instructor section */}
          <InstructorCard />

          {/* Testimonials */}
          <Testimonials />
          <VideoGrid />

          {/* About Section */}
          <AboutSection />

          {/* Recommended Programs */}
          <Programs />

          {/* Sticky Apply Button */}
          <ApplySection />
        </div>
      </main>
    </div>
  );
}
