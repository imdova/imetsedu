import { ApplicationFormData, FieldConfig } from "@/types";

//>>>>>>>>>>>/////// google sheets //////////<<<<<<<<<<<//

// api section
export const API_GOOGLE_SHEET = "https://sheetdb.io/api/v1/7wwkfi1cusx1s";

//>>>>>>>>>>>/////// mailer lite //////////<<<<<<<<<<<//

// this is a way to choose where to send your data in this case it will send to your mailer lite
// if false data will be sent to google sheets
export const sendToMailerLite = true; // true, false

// here you need to add the api token givin from here https://dashboard.mailerlite.com/integrations/api  <<< ctrl + click
export const MAILER_LITE_TOKEN = "ADD YOUR TOKEN HERE";

//>>>>>>>>>>>/////// mailer lite additional data //////////<<<<<<<<<<<//

// add groups id you want the subscribers to subscribe to it
export const groups = [
  // "4243829086487936",
  // "14133878422767533",
  // "31985378335392975",
];

//>>>>>>>>>>>/////// form Data //////////<<<<<<<<<<<//

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

//>>>>>>>>>>>/////// form Fields //////////<<<<<<<<<<<//

// form field section the name should be the table column header
export const formFields: FieldConfig[] = [
  {
    name: "email",
    label: "Email Address",
    type: "email", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Email Address" },
    required: true,
  },
  {
    name: "name",
    label: "Name",
    type: "text", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Name" },
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "phone", // Use only text, number, email, password, date, select, checkbox
    inputProps: { placeholder: "Your Phone Number" },
    required: true,
  },
  {
    name: "specialty",
    label: "Specialty",
    type: "select", // Use only text, number, email, password, date, select, checkbox
    options: [
      { label: "doctors", value: "doctors" },
      { label: "dentist", value: "dentists" },
      { label: "nurses", value: "nurses" },
    ],
    inputProps: { placeholder: "Select Your specialty" },
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
