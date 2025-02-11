interface Result<T = void> {
  success: boolean;
  message: string;
  data?: T;
}

/// buttons

type ButtonVariant = "contained" | "outlined";
type ButtonColor = "primary" | "warning" | "success" | "error";

// page
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Block<T = any> {
  id: string;
  type:
    | "header"
    | "hero"
    | "features"
    | "curriculum"
    | "instructor"
    | "testimonials"
    | "VideoGrid"
    | "about"
    | "program";
  title?: string;
  data?: T;
}
