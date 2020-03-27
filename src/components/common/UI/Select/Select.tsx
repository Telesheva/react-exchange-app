import React from 'react';
import './Select.scss';

export interface selectProps {
    name?: string;
    disabled?: boolean;
    required?: boolean;
    id?: string;
    size?: number;
    defaultValue?: string | "default";
    options?: Array<string>;
    onChange?: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
    selectedOption?: string;
}

const Select = ({
                    options,
                    disabled,
                    name,
                    required,
                    size,
                    defaultValue,
                    id,
                    onChange,
                    selectedOption
                }: selectProps) => {
    return (
        <select size={size} id={id} name={name} value={selectedOption && selectedOption} onChange={onChange} required={required} disabled={disabled}
                className="select">
            {options?.map((value, index) => {
                return <option key={index + Math.random()} value={value}>
                    {value}
                </option>
            })}
        </select>
    )
};

export default Select;
