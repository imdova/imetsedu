import { HeaderType } from "@/types";

type BlockForm = {
  title?: string;
  content?: string;
  fields: FieldConfig<never>[];
};
export const headerForm: FieldConfig<HeaderType>[] = [
  {
    name: "oldPrice",
    label: "Old Price",
    type: "text",
    gridProps: { xs: 12, sm: 6 },
    inputProps: { placeholder: "Old Price" },
  },
  {
    name: "newPrice",
    label: "New Price",
    type: "text",
    gridProps: { xs: 12, sm: 6 },
    inputProps: { placeholder: "New Price" },
  },
  {
    name: "content",
    label: "Offer Content",
    type: "text",
    inputProps: {
      placeholder: "Offer Content",
      multiline: true,
      rows: 4,
    },
  },
  {
    name: "endDate",
    label: "The End Date Of the Offer",
    type: "date",
    gridProps: { xs: 12, sm: 6 },
    inputProps: { placeholder: "Start Year" },
  },
  {
    name: "buttonText",
    label: "Button Text",
    type: "text",
    gridProps: { xs: 12, sm: 6 },
    inputProps: { placeholder: "Button Text" },
  },
  {
    name: "buttonUrl",
    label: "Button Url",
    type: "text",
    gridProps: { xs: 12, sm: 6 },
    inputProps: { placeholder: "Button Url" },
  },
  {
    name: "formId",
    label: "Form Id",
    type: "text",
    gridProps: { xs: 12, sm: 6 },
    inputProps: { placeholder: "Form Id" },
  },
];

export const blockFormsFields: Record<BlockType, BlockForm> = {
  header: {
    title: "Header",
    content: "Header content",
    fields: headerForm,
  },
  stickyCTA: {
    title: "Sticky CTA",
    content: "Sticky CTA content",
    fields: [],
  },
  hero: {
    title: "Hero",
    content: "Hero content",
    fields: [],
  },
  features: {
    title: "Features",
    content: "Features content",
    fields: [],
  },
  curriculum: {
    title: "Curriculum",
    content: "Curriculum content",
    fields: [],
  },
  instructor: {
    title: "Instructor",
    content: "Instructor content",
    fields: [],
  },
  testimonials: {
    title: "Testimonials",
    content: "Testimonials content",
    fields: [],
  },
  VideoGrid: {
    title: "Video Grid",
    content: "Video Grid content",
    fields: [],
  },
  about: {
    title: "About",
    content: "About content",
    fields: [],
  },
  program: {
    title: "Program",
    content: "Program content",
    fields: [],
  },
};
