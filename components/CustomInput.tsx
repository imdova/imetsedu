import React, { forwardRef } from "react";
import { Info } from "lucide-react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  helperText?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`
              w-full 
              px-3 
              py-2 
              border 
              rounded-md 
              text-sm 
              focus:outline-none 
              focus:ring-2 
              focus:ring-gold 
              hover:border-gold 
              ${
                error
                  ? "border-red-500 focus:ring-red-500 text-red-900"
                  : "border-gray-300 focus:border-gold focus:ring-gold"
              }
              ${className || ""}
            `}
            {...props}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Info className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {(helperText || error) && (
          <p
            className={`
              mt-1 
              text-xs 
              ${error ? "text-red-600" : "text-gray-500"}
            `}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;

