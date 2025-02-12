import { ControllerRenderProps, FieldError, Path } from "react-hook-form";
import CustomSelect from "../CustomSelect";
import PhoneNumberInput from "../phoneNumberInput";
import CustomInput from "../CustomInput";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderCheckboxField = <T extends Record<string, any>>(
  field: FieldConfig<T>,
  controllerField: ControllerRenderProps<T, Path<T>>,
  error: FieldError | undefined,
) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      {...controllerField}
      checked={!!controllerField.value}
      onChange={(e) => controllerField.onChange(e)}
      className="h-5 w-5 rounded border-gray-300 text-gold focus:ring-gold"
    />
    <label className="ml-2 block text-sm text-gray-900">
      {field.label || ""}
    </label>
    {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderSelectField = <T extends Record<string, any>>(
  field: FieldConfig<T>,
  controllerField: ControllerRenderProps<T, Path<T>>,
  error: FieldError | undefined,
) => (
  <div className="w-full">
    <CustomSelect
      {...controllerField}
      label={field.label}
      options={field.options || []}
      placeholder={field.inputProps?.placeholder || "Select"}
      error={error?.message}
      helperText={error?.message}
    />
  </div>
);

export const renderPhoneField = <T extends Record<string, unknown>>(
  field: FieldConfig<T>,
  controllerField: ControllerRenderProps<T, Path<T>>,
  error: FieldError | undefined,
) => (
  <div className="w-full">
    <PhoneNumberInput
      {...controllerField}
      value={
        controllerField.value as string | number | readonly string[] | undefined
      }
      {...field.inputProps}
      type="tel"
      label={field.label}
      error={error?.message}
      helperText={error?.message}
    />
  </div>
);

export const renderInputField = <T extends Record<string, unknown>>(
  field: FieldConfig<T>,
  controllerField: ControllerRenderProps<T, Path<T>>,
  error: FieldError | undefined,
) => (
  <div className="w-full">
    <CustomInput
      {...controllerField}
      value={
        controllerField.value as string | number | readonly string[] | undefined
      }
      {...field.inputProps}
      type={field.type}
      label={field.label}
      error={error?.message}
      helperText={error?.message}
    />
  </div>
);
