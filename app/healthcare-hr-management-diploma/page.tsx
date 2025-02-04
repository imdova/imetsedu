import ApplySection from "@/components/apply";
import Curriculum from "@/components/Curriculum";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import { InstructorCard } from "@/components/instructorCard";
import Programs from "@/components/programs";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare hr management diploma", // This will be shown as "About Us | IMETS School of Business"
};
export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-40 ">
        <div>
          <Hero />
          <InstructorCard />
          <Features />
        </div>
        <div>
          {/* Hero Section */}
          {/* Features Grid */}
          {/* Curriculum Section */}
          <Curriculum />

          {/* Testimonials */}
          <Testimonials />

          {/* About Section */}
          <section className="container lg:max-w-[1170px] mx-auto px-4 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
              About the Program
            </h2>
            <p className="text-sm md:text-base text-neutral-500 text-center md:text-left">
              Our comprehensive professional development program is designed to
              equip you with the skills and knowledge needed to excel in
              today&#39;s competitive job market. Through a combination of
              expert instruction, hands-on projects, and networking
              opportunities, you&lsquo;ll be prepared to take your career to the
              next level.
            </p>
          </section>

          {/* Recommended Programs */}
          <Programs />

          {/* Sticky Apply Button */}
          <ApplySection />
        </div>
      </main>
    </div>
  );
}
