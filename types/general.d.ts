interface Result<T = void> {
  success: boolean;
  message: string;
  data?: T;
}

/// buttons

type ButtonVariant = "contained" | "outlined";
type ButtonColor = "primary" | "warning" | "success" | "error";
