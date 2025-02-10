import { ProgramType } from "@/types";
import { BookOpen, Target, Users } from "lucide-react";

export const programsSection: { title: string } = {
  title: "Related Programs",
};

// make sure slug is unique value

export const programsData: ProgramType[] = [
  {
    title: "Hospital Management Diploma",
    slug: "hospital-management-diploma",
    description:
      "Develop essential leadership skills for the modern workplace.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
    features: [
      {
        icon: BookOpen,
        title: "8 Lectures",
      },
      {
        icon: Target,
        title: "Online-zoom live",
      },
      {
        icon: Users,
        title: "Certified Instructor",
      },
    ],
    price: null,

    // the url that the title of the program will go to - if link = null ->  nothing will happened
    link: null,

    // you can display a text over the image by adding text here
    overImageText: null,
  },
  {
    title: "Healthcare Marketing Management Diploma",
    slug: "healthcare-marketing-management-diploma",
    description: "Master the latest digital marketing strategies and tools.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
    features: [
      {
        icon: BookOpen,
        title: "8 Lectures",
      },
      {
        icon: Target,
        title: "Online-zoom live",
      },
      {
        icon: Users,
        title: "Certified Instructor",
      },
    ],
    price: null,
    link: null,
    overImageText: null,
  },
  {
    title: "Healthcare Supply Chain Management Diploma",
    slug: "healthcare-supply-chain-management-diploma",
    description: "Learn to make data-driven decisions for business growth.",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
    features: [
      {
        icon: BookOpen,
        title: "8 Lectures",
      },
      {
        icon: Target,
        title: "Online-zoom live",
      },
      {
        icon: Users,
        title: "Certified Instructor",
      },
    ],
    price: null,
    link: null,
    overImageText: null,
  },
  {
    title: "Healthcare Financial Management Diploma",
    slug: "healthcare-financial-management-diploma",
    description: "Learn to make data-driven decisions for business growth.",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
    features: [
      {
        icon: BookOpen,
        title: "8 Lectures",
      },
      {
        icon: Target,
        title: "Online-zoom live",
      },
      {
        icon: Users,
        title: "Certified Instructor",
      },
    ],
    price: null,
    link: null,
    overImageText: null,
  },
  {
    title: "Healthcare Strategic Management Diploma",
    slug: "healthcare-strategic-management-diploma",
    description: "Learn to make data-driven decisions for business growth.",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
    features: [
      {
        icon: BookOpen,
        title: "8 Lectures",
      },
      {
        icon: Target,
        title: "Online-zoom live",
      },
      {
        icon: Users,
        title: "Certified Instructor",
      },
    ],
    price: null,
    link: null,
    overImageText: null,
  },
];
