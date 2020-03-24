import React from 'react';
import './Select.scss';

export interface optionsProps {
    value?: string;
    selected?: boolean;
    disabled?: boolean
}

export interface selectProps {
    name?: string;
    disabled?: boolean;
    required?: boolean;
    size?: number;
    defaultValue?: string | "default";
    options?: optionsProps[]
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
            {options?.map(({value, selected, disabled}, index) => {
                    return <option key={index + Math.random()} value={value} selected={selected} disabled={disabled}>
                        {value}
                    </option>
            })}
        </select>
    )
};

export default Select;
