import React from "react";
import "./Input.scss";

export interface InputProps {
    type?: string;
    id?: string;
    value?: string;
    defaultValue?: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    name?: string;
    label?: string;
    errorMessage?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent) => void;
}

const Input = ({
                   type,
                   value,
                   defaultValue,
                   className,
                   id,
                   placeholder,
                   required,
                   name,
                   label,
                   checked,
                   errorMessage,
                   onChange,
                   onKeyPress
               }: InputProps) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>
                <input
                    type={type || "text"}
                    value={value}
                    id={id}
                    defaultValue={defaultValue}
                    className={`${className} input-wrapper__input`}
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    checked={checked}
                />
                <span>{label}</span>
            </label>
            <strong className="input-wrapper__error">{errorMessage}</strong>
        </div>
    );
};

export default Input;
