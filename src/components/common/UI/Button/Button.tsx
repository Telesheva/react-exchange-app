import React from "react";
import "./Button.scss";

export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent) => void;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
  colorScheme?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  type,
  onClick,
  onSubmit,
  colorScheme,
  disabled,
  children
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      onSubmit={onSubmit}
      className={`btn btn__${colorScheme}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
