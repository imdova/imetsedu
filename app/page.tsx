import ApplySection from "@/components/apply";
import Curriculum from "@/components/Curriculum";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import { InstructorCard } from "@/components/instructorCard";
import Programs from "@/components/programs";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "IMETS School of Business",
    template: "%s | IMETS School of Business",
  },
  description:
    "Empowering future healthcare professionals through top-tier education and training programs.",
  openGraph: {
    title: "IMETS School of Business",
    description:
      "Join IMETS School of Business for specialized healthcare job training and business programs designed for career success.",
    url: baseUrl,
    siteName: "IMETS School of Business",
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "IMETS School of Business",
    description:
      "Advance your career with IMETS School of Business—offering premier healthcare job training and business programs.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
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
