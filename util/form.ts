import { FieldConfig } from "@/constants/form";

export const getDefaultValues = (fields: FieldConfig[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const defaults: Record<string, any> = {};
  fields.forEach((field) => {
    defaults[String(field.name)] = field.type === "checkbox" ? false : "";
  });
  return defaults;
};
