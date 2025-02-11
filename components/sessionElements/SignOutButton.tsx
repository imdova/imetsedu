"use client";
import { signOut } from "next-auth/react";
import { ButtonHTMLAttributes } from "react";

const SignOutButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode }
> = (props) => {
  const { onClick, ...rest } = props;

  const logOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    signOut({ callbackUrl: "/" });
    onClick?.(e);
  };
  return (
    <button {...rest} onClick={logOut}>
      {props.children}
    </button>
  );
};

export default SignOutButton;
