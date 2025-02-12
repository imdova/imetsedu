"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import StickyCTA from "@/components/StickyCTA";
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
// const ApplySection = dynamic(() => import("@/components/apply"));
// const CallToAction = dynamic(() => import("@/components/CallToAction"));

const DynamicPage: React.FC<PageType> = ({ blocks, forms }) => {
  // Helper function to render the correct component based on block type
  const renderComponent = (block: Block): React.ReactNode => {
    switch (block.type) {
      case "header":
        return <Header key={block.id} {...block} forms={forms} />;
      case "stickyCTA":
        return <StickyCTA key={block.id} {...block} forms={forms} />;
      case "hero":
        return <Hero key={block.id} {...block} />;
      case "features":
        return <Features key={block.id} {...block} />;
      case "curriculum":
        return <Curriculum key={block.id} {...block} />;
      case "instructor":
        return <InstructorCard key={block.id} {...block} />;
      case "testimonials":
        return <Testimonials key={block.id} {...block} />;
      case "VideoGrid":
        return <VideoGrid key={block.id} {...block} />;
      case "about":
        return <AboutSection key={block.id} {...block} />;
      case "program":
        return <Programs key={block.id} {...block} />;
      default:
        return null;
    }
  };

  // Filter blocks into main content and curriculum+ sections
  const mainBlocks = blocks.filter((block) =>
    ["header", "hero", "features"].includes(block.type),
  );

  const contentBlocks = blocks.filter(
    (block) => !["header", "hero", "features"].includes(block.type),
  );

  return (
    <div>
      <main>
        {/* Render main blocks (hero and features) */}
        {mainBlocks.map((block) => renderComponent(block))}
        {/* Render remaining content in a separate div */}
        <div>{contentBlocks.map((block) => renderComponent(block))}</div>
      </main>
    </div>
  );
};

export default DynamicPage;
