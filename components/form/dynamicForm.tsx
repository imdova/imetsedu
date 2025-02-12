import React from "react";
import { Controller, Path, useForm } from "react-hook-form";

import Button from "../UI/Button";
import { getDefaultValues } from "@/util/form";
import {
  renderCheckboxField,
  renderInputField,
  renderPhoneField,
  renderSelectField,
} from "./renderFields";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  submitButtonText = "Submit",
  submitButtonTextColor = "primary",
}: DynamicModalProps<T>) => {
  const { control, handleSubmit } = useForm({
    defaultValues: getDefaultValues(fields, initialValues),
  });

  const renderField = (field: FieldConfig<T>) => (
    <Controller
      key={String(field.name)}
      name={field.name as Path<T>}
      control={control}
      rules={{
        required: field.required
          ? `${field.label || String(field.name)} is required`
          : false,
        ...field.validation,
      }}
      render={({ field: controllerField, fieldState: { error } }) => {
        switch (field.type) {
          case "checkbox":
            return renderCheckboxField(field, controllerField, error);
          case "select":
            return renderSelectField(field, controllerField, error);
          case "phone":
            return renderPhoneField(field, controllerField, error);
          default:
            return renderInputField(field, controllerField, error);
        }
      }}
    />
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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

      {error && <p className="text-sm text-red-500">{error}</p>}

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
