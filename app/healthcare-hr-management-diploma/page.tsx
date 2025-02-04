import ApplySection, { CallToAction } from "@/components/apply";
import Curriculum from "@/components/Curriculum";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import { InstructorCard } from "@/components/instructorCard";
// import HeroSection from "@/components/newHero";
import Programs from "@/components/programs";
import Testimonials from "@/components/Testimonials";
import VideoGrid from "@/components/VideoGrid";
import WaveDiv from "@/components/wavediv";
import { videoData } from "@/constants/videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare hr management diploma", // This will be shown as "Healthcare hr management diploma | IMETS School of Business"
};
export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-[60px] ">
        <div className="bg-primary py-5 mb-4">
          <div className="flex text-sm text-center items-center justify-center">
            <CallToAction />
          </div>
        </div>
        <div>
          <Hero />
          {/* <section className="container lg:max-w-[1170px] overflow-hidden mx-auto px-4 flex justify-center items-center">
            <div className="relative w-full max-w-md mb-12">
              <Image
                src="/images/stares.png"
                alt="Digital Transformation"
                width={600}
                height={400}
                className="rounded-xl bg-blend-multiply"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full "></div>
              <div className="absolute -top-6 -lef-2 w-14 h-14 bg-gold rounded-full "></div>
              <div className="absolute -top-12 -lef-10 w-32 h-32 border border-gold rounded-full "></div>
            </div>
          </section> */}

          <Features />
        </div>
        <div>
          {/* Hero Section */}
          {/* Features Grid */}
          {/* Curriculum Section */}
          <WaveDiv className="fill-primary mb-4">
            <div className="bg-primary w-full p-4">
              <Curriculum />
            </div>
          </WaveDiv>
          <InstructorCard />

          {/* Testimonials */}
          <Testimonials />

          {/* About Section */}

          <VideoGrid videos={videoData} />
          <WaveDiv className="fill-primary mb-12">
            <section className="container lg:max-w-[1170px] mx-auto bg-primary p-4  ">
              <h2 className="text-2xl font-bold text-gold mb-4 text-center md:text-left">
                About the Program
              </h2>
              <p className="text-sm md:text-base text-white text-center md:text-left">
                Our comprehensive professional development program is designed
                to equip you with the skills and knowledge needed to excel in
                today&#39;s competitive job market. Through a combination of
                expert instruction, hands-on projects, and networking
                opportunities, you&lsquo;ll be prepared to take your career to
                the next level.
              </p>
            </section>
          </WaveDiv>
          {/* Recommended Programs */}
          <Programs />

          {/* Sticky Apply Button */}
          <ApplySection />
        </div>
      </main>
    </div>
  );
}
