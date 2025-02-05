import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Healthcare hr management diploma", // This will be shown as "Healthcare hr management diploma | IMETS School of Business"
};
const Curriculum = dynamic(() => import("@/components/Curriculum"));
const InstructorCard = dynamic(() => import("@/components/instructorCard"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const VideoGrid = dynamic(() => import("@/components/VideoGrid"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const Programs = dynamic(() => import("@/components/programs"));
const ApplySection = dynamic(() => import("@/components/apply"));
const CallToAction = dynamic(() => import("@/components/CallToAction"));

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
