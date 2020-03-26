import React from 'react';
import './Select.scss';

export interface selectProps {
    name?: string;
    disabled?: boolean;
    required?: boolean;
    size?: number;
    defaultValue?: string | "default";
    options?: Array<string>
}

const Select = ({
                    options,
                    disabled,
                    name,
                    required,
                    size,
                    defaultValue
                }: selectProps) => {
    return (
        <select size={size} name={name} required={required} disabled={disabled} className="select">
            {options?.map((value, index) => {
                    return <option key={index + Math.random()} value={value}>
                        {value}
                    </option>
            })}
        </select>
    )
};

export default Select;
