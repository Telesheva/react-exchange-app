import React from "react";
import "./Input.scss";
export interface InputProps {
  type?: string;
  value?: string;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
}

const Input = ({
  type,
  value,
  defaultValue,
  className,
  placeholder,
  required,
  name,
  errorMessage,
  onChange,
  onKeyPress
}: InputProps) => {
  return (
    <div className="input-wrapper">
      <input
        type={type || "text"}
        value={value}
        defaultValue={defaultValue}
        className={`${className} input-wrapper__input`}
        placeholder={placeholder}
        required={required}
        name={name}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <strong className="input-wrapper__error">{errorMessage}</strong>
    </div>
  );
};

export default Input;
