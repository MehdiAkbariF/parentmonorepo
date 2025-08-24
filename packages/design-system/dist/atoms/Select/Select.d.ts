import React from 'react';
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
export declare const Select: React.FC<SelectProps>;
