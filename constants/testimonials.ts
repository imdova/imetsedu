export type TestimonialType = {
  id: string;
  name: string;
  role: string;
  media?: string[];
  path?: string[];
  content: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    media: ["/images/testimonial1.png"],
    content:
      "This program transformed my career trajectory. The skills I learned were immediately applicable to my work.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Software Developer",
    media: ["/videos/testimonial2.mp4"],
    content:
      "The practical approach and expert guidance helped me advance in my field faster than I expected.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Project Manager",
    content:
      "Excellent curriculum and supportive community. I highly recommend this program to anyone looking to grow professionally.",
  },
];
