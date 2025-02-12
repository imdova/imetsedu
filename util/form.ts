import { DefaultValues } from "react-hook-form";

export const getDefaultValues = <T extends Record<string, unknown>>(
  fields: FieldConfig<T>[],
  initialValues: Partial<T> = {},
): DefaultValues<T> => {
  const defaults: Partial<T> = {};

  fields.forEach((field) => {
    switch (field.type) {
      case "checkbox":
        defaults[field.name as keyof T] = false as T[keyof T];
        break;
      case "number":
        defaults[field.name as keyof T] = 0 as T[keyof T];
        break;
      case "date":
        defaults[field.name as keyof T] = null as T[keyof T];
        break;
      default:
        defaults[field.name as keyof T] = "" as T[keyof T];
        break;
    }
  });

  return { ...defaults, ...initialValues } as DefaultValues<T>;
};

export const isValidEgyptianPhoneNumber = (phone: string): boolean => {
  const egyptianPhoneRegex = /^(?:\+20|0020)?(10|11|12|15)\d{8}$/;
  return egyptianPhoneRegex.test(phone);
};
