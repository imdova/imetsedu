/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FieldConfig } from "@/types";
import CustomSelect from "../CustomSelect";
import PhoneNumberInput from "../phoneNumberInput";
import CustomInput from "../CustomInput";
import Button from "../UI/Button";

interface DynamicModalProps<T> {
  onClose: () => void;
  onSubmit: (data: any) => void;
  fields: FieldConfig<T>[];
  title?: string;
  description?: string;
  initialValues?: Record<string, unknown>;
  children?: React.ReactNode;
  loading?: boolean;
  error?: string;
  submitButtonText?: string;
  submitButtonTextColor?: ButtonColor;
}

const getDefaultValues = <T extends Record<string, unknown>>(
  currentFields: FieldConfig<T>[],
  currentInitialValues: Record<string, any>,
): Record<string, any> => {
  const defaults: Record<string, any> = {};
  currentFields.forEach((field) => {
    defaults[String(field.name)] = field.type === "checkbox" ? false : "";
  });
  return { ...defaults, ...currentInitialValues };
};

const DynamicForm = <T extends Record<string, any>>({
  onClose,
  onSubmit,
  fields,
  title,
  description,
  initialValues = {},
  children,
  loading,
  error,
  submitButtonText = "submit",
  submitButtonTextColor = "primary",
}: DynamicModalProps<T>) => {
  const {
    control,
    handleSubmit,
    reset,
    // getValues,
    // formState: { isDirty },
  } = useForm({
    defaultValues: getDefaultValues(fields, initialValues),
  });

  const submitHandler: SubmitHandler<any> = (data) => {
    onSubmit(data);
    onClose();
    reset();
  };

  const renderField = (field: FieldConfig<T>) => {
    return (
      <Controller
        key={String(field.name)}
        name={String(field.name)}
        control={control}
        rules={{
          required: field.required
            ? `${field.label || String(field.name)} is required`
            : false,
          ...field.validation,
        }}
        render={({ field: controllerField, fieldState: { error } }) => {
          if (field.type === "checkbox") {
            return (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...controllerField}
                  checked={!!controllerField.value}
                  onChange={(e) => {
                    controllerField.onChange(e);
                  }}
                  className="h-5 w-5 rounded border-gray-300 text-gold focus:ring-gold"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  {field.label || ""}
                </label>
                {error && (
                  <p className="mt-1 text-xs text-red-600">{error.message}</p>
                )}
              </div>
            );
          }

          if (field.type === "select" && field.options) {
            return (
              <div className="w-full">
                <CustomSelect
                  {...controllerField}
                  label={field.label}
                  options={field.options}
                  placeholder={field.inputProps?.placeholder || "Select"}
                  error={error?.message}
                  helperText={error?.message}
                />
              </div>
            );
          }
          if (field.type === "phone") {
            return (
              <div className="w-full">
                <PhoneNumberInput
                  {...controllerField}
                  {...field.inputProps}
                  type="tel"
                  label={field.label}
                  error={error?.message}
                  helperText={error?.message}
                />
              </div>
            );
          }
          return (
            <div className="w-full">
              <CustomInput
                {...controllerField}
                {...field.inputProps}
                type={field.type}
                label={field.label}
                error={error?.message}
                helperText={error?.message}
              />
            </div>
          );
        }}
      />
    );
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full space-y-4 text-left"
      noValidate
    >
      <div>
        {title && (
          <h2 className="mb-1 text-2xl font-bold leading-none">{title}</h2>
        )}
        {description && (
          <p className="text-sm text-neutral-500">{description}</p>
        )}
      </div>

      <div className="mt-1 grid grid-cols-12 gap-4">
        {fields.map((field) => {
          // Default to full width, allow custom grid sizing
          const xs = field.gridProps?.xs ?? 12;
          const sm = field.gridProps?.sm ?? xs;
          const md = field.gridProps?.md ?? sm;

          return (
            <div
              key={String(field.name)}
              className={`col-span-12 sm:col-span-${sm} md:col-span-${md}`}
            >
              {renderField(field)}
            </div>
          );
        })}
      </div>
      {children}
      <p className="text-sm text-red-500">{error}</p>
      <div className="flex items-center justify-end space-x-4">
        <Button
          type="button"
          color="primary"
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          loading={loading}
          color={submitButtonTextColor}
          type="submit"
          variant="contained"
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default DynamicForm;
