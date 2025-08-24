"use client";

import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

/**
 * Select یک کامپوننت دراپ‌داون برای انتخاب یک گزینه از لیست است.
 */
export const Select: React.FC<SelectProps> = ({ options, className, ...props }) => {
  return (
    <div className={`select__wrapper ${className || ''}`}>
      <select className="select" {...props}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="select__icon">
        <FiChevronDown />
      </span>
    </div>
  );
};