interface PageType {
  title: string;
  slug: string;
  isActive: boolean;
  blocks: Block[];
  forms: FormType[];
}

type BlockType =
  | "header"
  | "stickyCTA"
  | "hero"
  | "features"
  | "curriculum"
  | "instructor"
  | "testimonials"
  | "VideoGrid"
  | "about"
  | "program";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Block<T = any> {
  id: string;
  type: BlockType;
  title?: string;
  data?: T;
}

interface FormType {
  id: string;
  title: string;
  content: string;
  successMessage: string;
  submitButtonText: string;
  fields: FieldConfig[]; // Use a more specific type if you know the structure of `fields`
  submitTo: "mailerLite" | "googleSheets";
  mailerID?: string | null;
  googleSheetAPI?: string | null;
  groups?: string[];
  afterSubmitRedirect?: string | null;
}
