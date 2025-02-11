// header types
export type HeaderType = {
  content: string;
  endDate: string;
};
export type CtaButtonInHeader = {
  buttonText: string;
  buttonUrl?: string | null;
};
// hero type

export type HeroType = {
  title: string;
  videoUrl: string;
};

// instructor types

export type InstructorType = {
  sectionTitle: string;
  name: string;
  title: string;
  image: string;
  content: string;
};

/// about types
export type AboutType = {
  name: string;
  title: string;
  image: string;
  content: string;
};

// Curriculum types
export type CurriculumItemType = {
  title: string;
  content: string;
};

// features types
export type FeaturesType = {
  icon: React.ElementType;
  title: string;
  description?: string;
};

// form types
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FieldConfig<T = Record<string, any>> {
  name: keyof T; // Dynamically restricts to keys of T
  label?: string;
  type: FieldType;
  required?: boolean;
  validation?: Record<string, unknown>;
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

// programs types

export interface ProgramType {
  title: string;
  slug: string;
  description: string;
  duration: string;
  image: string;
  features?: FeaturesType[];
  price?: string | null;
  link?: string | null;
  overImageText?: string | null;
}

// Testimonials types

export type TestimonialType = {
  id: string;
  name: string;
  role: string;
  media?: string[];
  path?: string[];
  userPhoto?: string;
  content?: string;
};

// video types

export type VideType = {
  id: string;
  title: string;
  videoUrl: string;
};
