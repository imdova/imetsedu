"use client";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import PhoneNumberInput from "./phoneNumberInput";
import { useState } from "react";
import { useNotification } from "./NotificationComponent";
import {
  formFields,
  formSectionData,
  sendToMailerLite,
} from "@/constants/form";
import { getDefaultValues } from "@/util/form";
import { sendDataToGoogleSheet } from "@/lib/google.sheet";
import { sendDataToMailerLite } from "@/lib/mailer_lite";
import { FieldConfig } from "@/types";

interface DynamicModalProps {
  close: () => void;
}

const ApplicationForm: React.FC<DynamicModalProps> = ({ close }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { showNotification } = useNotification();

  const { control, handleSubmit } = useForm({
    defaultValues: getDefaultValues(formFields),
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    setLoading(true);
    setError("");
    try {
      let response;
      if (sendToMailerLite) {
        response = await sendDataToMailerLite(data);
      } else {
        response = await sendDataToGoogleSheet(data);
      }
      if (response.success) {
        close();
        showNotification("success", formSectionData.successMessage);
      } else {
        setError("Failed to send your data ");
        showNotification("error", "sending data");
      }
    } catch {
      setError("Failed to send your data ");
      showNotification("error", "sending data");
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field: FieldConfig) => {
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
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-4 text-left"
      noValidate
    >
      <div>
        {formSectionData.title && (
          <h2 className="mb-1 text-2xl font-bold leading-none">
            {formSectionData.title}
          </h2>
        )}
        {formSectionData.content && (
          <p className="text-sm text-neutral-500">{formSectionData.content}</p>
        )}
      </div>

      <div className="mt-1 grid grid-cols-12 gap-4">
        {formFields.map((field) => {
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
      <p className="text-sm text-red-500">{error}</p>
      <button
        type="submit"
        className="hover:bg-gold/90 focus:ring-gold/50 flex w-full items-center justify-center rounded-md bg-gold px-4 py-4 text-sm font-medium text-white shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        {loading ? "Loading..." : formSectionData.submitButtonText}
      </button>
    </form>
  );
};

export default ApplicationForm;
