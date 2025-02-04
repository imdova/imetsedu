import React, { forwardRef, useState, useEffect, useRef } from "react";
import { ChevronDown, Check, Search } from "lucide-react";
import Flag from "./flagitem";

interface Option {
  value: string;
  label: string;
  phoneCode: string;
}

interface SearchableSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

const SearchableSelectCountry = forwardRef<
  HTMLSelectElement,
  SearchableSelectProps
>(
  (
    {
      label,
      options,
      error,
      helperText,
      className,
      onChange,
      value: controlledValue,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(
      options.find((opt) => opt.value === controlledValue) || null
    );
    const [searchTerm, setSearchTerm] = useState("");
    const selectContainerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectContainerRef.current &&
          !selectContainerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    useEffect(() => {
      if (isOpen && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [isOpen]);

    const handleOptionSelect = (option: Option) => {
      setSelectedOption(option);
      setIsOpen(false);
      setSearchTerm("");

      // Trigger onChange if provided
      if (onChange) {
        const syntheticEvent = {
          target: { value: option.value },
          currentTarget: (ref as React.RefObject<HTMLSelectElement>)?.current,
        } as React.ChangeEvent<HTMLSelectElement>;
        onChange(syntheticEvent);
      }
    };

    return (
      <div ref={selectContainerRef} className="relative">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}

        <div
          className={`relative w-full ${
            error ? "text-red-900" : "text-gray-900"
          }`}
        >
          <select
            ref={ref}
            className="hidden"
            value={controlledValue}
            onChange={(e) => console.log(e.target.value)}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-fit min-w-[90px] px-3 py-2 border rounded-md rounded-r-none  text-sm cursor-pointer
              flex items-center justify-between
              ${error ? "border-red-500" : "border-gray-300"}
              ${className || ""}
            `}
          >
            <span>
              {/* <Flag code={option.value} name={option.label} /> */}
              {selectedOption ? (
                <div className="flex">
                  <Flag
                    code={selectedOption.value.toLowerCase()}
                    name={selectedOption.label}
                  />{" "}
                  <span className="line-clamp-1">
                    {selectedOption.phoneCode}
                  </span>
                </div>
              ) : (
                placeholder || "Select an option"
              )}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>

          {isOpen && (
            <div className="absolute z-10 min-w-[300px] mt-1 w-full bg-white border rounded-md shadow-lg">
              <div className="p-2 border-b">
                <div className="relative">
                  <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 pr-3 py-1 text-sm border rounded-md"
                    placeholder="Search..."
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>

              <ul className="max-h-48 overflow-auto">
                {filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => handleOptionSelect(option)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                  >
                    {option.label}
                    {selectedOption?.value === option.value && (
                      <Check className="h-4 w-4 text-blue-500" />
                    )}
                  </li>
                ))}
                {filteredOptions.length === 0 && (
                  <li className="px-3 py-2 text-gray-500 text-sm">
                    No results found
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {(helperText || error) && (
          <p
            className={`mt-1 text-xs ${
              error ? "text-red-600" : "text-gray-500"
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

SearchableSelectCountry.displayName = "SearchableSelectCountry";

export default SearchableSelectCountry;
