interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
}

type FieldType =
  | "text"
  | "number"
  | "phone"
  | "email"
  | "password"
  | "date"
  | "select"
  | "checkbox";

interface FieldConfig<T> {
  name: keyof T;
  type: FieldType;
  label?: string;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validation?: Record<string, any>;
  options?: Option[];
  inputProps?: CustomInputProps;
  gridProps?: {
    xs?: number;
    sm?: number;
    md?: number;
  };
}

interface DynamicModalProps<T> {
  onClose: () => void;
  onSubmit: (data: T) => void;
  fields: FieldConfig<T>[];
  title?: string;
  description?: string;
  initialValues?: Partial<T>;
  children?: React.ReactNode;
  loading?: boolean;
  error?: string;
  submitButtonText?: string;
  submitButtonTextColor?: ButtonColor;
}
