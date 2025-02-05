export type FieldType =
  | "text"
  | "number"
  | "phone"
  | "email"
  | "password"
  | "date"
  | "select"
  | "checkbox";

export interface Option {
  value: string;
  label: string;
}

export interface FieldConfig {
  name: string;
  label?: string;
  type: FieldType;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validation?: any;
  gridProps?: {
    xs?: number;
    sm?: number;
    md?: number;
  };
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  options?: Option[];
}

export type ApplicationFormData = {
  successMessage: string;
  submitUrl?: string | null;
  submitButtonText: string;
  ctaButton: string;
  ctaButtonUrl?: string | null;
  title?: string;
  content?: string;
};

// api section

export const API_GOOGLE_SHEET = "https://sheetdb.io/api/v1/7wwkfi1cusx1s";

// the data of the form

export const formSectionData: ApplicationFormData = {
  title: "Application Form",
  content: "Don't miss the offer",
  // the message appears to user after submitting
  successMessage: "Thank you for submitting our form ",
  // the url user will be redirect after submitting - if submitUrl = null ->  nothing will happened
  submitUrl: null,
  // the text at the submit form
  submitButtonText: "Submit Now",

  // the text at the button that open the form
  ctaButton: "Apply Now",

  // the url that the cta button will go to - if ctaButtonUrl = null ->  nothing will happened
  ctaButtonUrl: null,
};

// form field section the name should be the table column header
export const formFields: FieldConfig[] = [
  {
    name: "name",
    label: "Enter Your Name",
    type: "text", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Name" },
    required: true,
  },
  {
    name: "phone",
    label: "Enter Your Phone Number",
    type: "phone", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Phone Number" },
    required: true,
  },
  {
    name: "Specialty",
    label: "Enter Your Specialty",
    type: "select", // Use only text, number, email, password, date, select, checkbox
    options: [
      { label: "doctors", value: "doctors" },
      { label: "dentist", value: "dentists" },
      { label: "nurses", value: "nurses" },
    ],
    inputProps: { placeholder: "Your specialty" },
    required: true,
  },
  // {
  //   name: "isApplied",
  //   label: "did you applied before",
  //   type: "checkbox", // Use only text, number, email, password, date, select, checkbox
  // },
  // {
  //   name: "program",
  //   label: "Enter Your Specialty",
  //   type: "select", // Use only text, number, email, password, date, select, checkbox
  //   options: [
  //     { label: "doctors", value: "doctors" },
  //     { label: "dentist", value: "dentists" },
  //     { label: "nurses", value: "nurses" },
  //   ],
  //   inputProps: { placeholder: "Your specialty" },
  //   required: true,
  // },
];
