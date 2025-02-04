export type TestimonialType = {
  id: string;
  name: string;
  role: string;
  media?: string[];
  path?: string[];
  userPhoto?: string;
  content?: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    id: "1",
    name: "Dr Salma Hamdy",
    role: "Dentist",
    media: [
      "https://templates.mediamodifier.com/64369626a9edfd6d989ad384/fake-whatsapp-message-generator.jpg",
    ],
    userPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    // content:"This program transformed my career trajectory. The skills I learned were immediately applicable to my work.",
  },
  {
    id: "2",
    name: "Dr Mariam Magdi",
    role: "Pharmacist",
    // media: ["/videos/testimonial2.mp4"],
    userPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content:
      "The practical approach and expert guidance helped me advance in my field faster than I expected.",
  },
  {
    id: "3",
    name: "Dr Fatma Salama",
    role: "Public Health",
    userPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content:
      "Excellent curriculum and supportive community. I highly recommend this program to anyone looking to grow professionally.",
  },
];
