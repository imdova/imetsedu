interface FieldConfig<T> {
  name: Path<T>;
  type: string;
  label?: string;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validation?: Record<string, any>;
  options?: Option[];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
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
