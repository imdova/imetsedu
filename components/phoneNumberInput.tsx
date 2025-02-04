import { useState } from "react";
import { CountryCode, parsePhoneNumberFromString } from "libphonenumber-js";
import CustomInput from "./CustomInput";
import SearchableSelectCountry from "./SearchableCountrySelect";
import countries from "@/constants/countries.json";

const formatCode = (code: string): string => {
  if (!code.startsWith("+")) {
    return `+${code}`;
  }
  return code;
};

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  helperText?: string;
}

const PhoneNumberInput: React.FC<CustomInputProps> = (props) => {
  const { error, helperText } = props;
  console.log("🚀 ~ helperText:", helperText);
  const [countryCode, setCountryCode] = useState<string>("EG"); // Default to Egypt
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = event.target.value;
    console.log("🚀 ~ handleCountryChange ~ newCode:", newCode);
    setCountryCode(newCode);
    validateAndFormatPhone(phoneNumber, newCode);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = e.target.value;
    setPhoneNumber(inputNumber);
    validateAndFormatPhone(inputNumber, countryCode);
  };

  const validateAndFormatPhone = (input: string, code: string) => {
    const phoneNumberObj = parsePhoneNumberFromString(
      input,
      code as CountryCode
    );
    if (phoneNumberObj && phoneNumberObj.isValid()) {
      // setPhoneNumber(phoneNumberObj.formatInternational());
      setIsValid(true);
      if (props.onChange) {
        const syntheticEvent = {
          target: { value: phoneNumberObj.number },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        props.onChange(syntheticEvent);
      }
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Phone Number
      </label>
      <div className="flex">
        <SearchableSelectCountry
          options={countries.map((x) => ({
            value: x.isoCode,
            label: x.name + " (" + formatCode(x.phonecode) + ")",
            phoneCode: formatCode(x.phonecode),
          }))}
          value={countryCode}
          onChange={handleCountryChange}
          placeholder="Select a country"
        />
        <CustomInput
          {...props}
          className="rounded-l-none"
          value={phoneNumber}
          onChange={handlePhoneChange}
          error={!isValid || !!error}
          helperText={helperText || !isValid ? "Invalid phone number" : ""}
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
