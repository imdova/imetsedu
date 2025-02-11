import { aboutData } from "./about";
import { curriculumData } from "./curriculum";
import { featuresData } from "./fearures";
import { formFields } from "./form";
import { headerData } from "./header";
import { heroData } from "./hero";
import { instructor } from "./instructor";
import { programsData } from "./programs";
import { testimonialsData1, testimonialsData2 } from "./testimonials";
import { videoData } from "./videos";

export const pages = [
  {
    title: "healthcare hr management diploma",
    slug: "healthcare-hr-management-diploma",
    blocks: [
      {
        id: "1",
        type: "header",
        data: headerData,
      },
      {
        id: "2",
        type: "hero",
        data: heroData,
      },
      {
        id: "3",
        type: "features",
        data: featuresData,
      },
      {
        id: "4",
        title: "Program curriculum",
        type: "curriculum",
        data: curriculumData,
      },
      {
        id: "5",
        title: "About the Instructor",
        type: "instructor",
        data: instructor,
      },
      {
        id: "6",
        title: "Student Success Stories",
        type: "testimonials",
        data: testimonialsData1,
      },
      {
        id: "7",
        type: "testimonials",
        data: testimonialsData2,
      },
      {
        id: "8",
        type: "VideoGrid",
        data: videoData,
      },
      {
        id: "9",
        type: "about",
        data: aboutData,
      },
      {
        id: "10",
        title: "Related Programs",
        type: "program",
        data: programsData,
      },
    ],
    forms: [
      {
        id: "1",
        title: "Application Form",
        content: "Don't miss the offer",
        successMessage: "Thank you for submitting our form ",
        submitUrl: null,
        submitButtonText: "Submit Now",
        ctaButton: "Apply Now",
        ctaButtonUrl: null,
        fields: formFields,
      },
    ],
  },
];
