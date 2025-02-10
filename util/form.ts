import { FieldConfig } from "@/types";

export const getDefaultValues = (fields: FieldConfig[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const defaults: Record<string, any> = {};
  fields.forEach((field) => {
    defaults[String(field.name)] = field.type === "checkbox" ? false : "";
  });
  return defaults;
};

export const isValidEgyptianPhoneNumber = (phone: string): boolean => {
  const egyptianPhoneRegex = /^(?:\+20|0020)?(10|11|12|15)\d{8}$/;
  return egyptianPhoneRegex.test(phone);
};
