import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  type = "button",
  loading = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-md px-4 py-2 font-medium shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const colorStyles: Record<ButtonColor, Record<ButtonVariant, string>> = {
    primary: {
      contained:
        "hover:bg-yellow-600/60 focus:ring-gold/50 rounded-md bg-gold px-4 py-2 font-medium text-white shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
      outlined:
        "hover:bg-gray-200 focus:ring-gold/50 rounded-md border px-4 py-2 font-medium text-black shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
    },
    warning: {
      contained:
        "hover:bg-yellow-500/60 focus:ring-yellow-500/50 rounded-md bg-yellow-500 px-4 py-2 font-medium text-white shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
      outlined:
        "hover:bg-gray-200 focus:ring-yellow-500/50 rounded-md border px-4 py-2 font-medium text-black shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
    },
    success: {
      contained:
        "hover:bg-green-600/60 focus:ring-green-500/50 rounded-md bg-green-600 px-4 py-2 font-medium text-white shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
      outlined:
        "hover:bg-gray-200 focus:ring-green-500/50 rounded-md border px-4 py-2 font-medium text-black shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
    },
    error: {
      contained:
        "hover:bg-red-600/60 focus:ring-red-500/50 rounded-md bg-red-600 px-4 py-2 font-medium text-white shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
      outlined:
        "hover:bg-gray-200 focus:ring-red-500/50 rounded-md border px-4 py-2 font-medium text-black shadow-simple transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
    },
  };

  const buttonStyles = `${baseStyles} ${colorStyles[color][variant]} ${className}`;

  return (
    <button type={type} className={buttonStyles} disabled={loading} {...props}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
