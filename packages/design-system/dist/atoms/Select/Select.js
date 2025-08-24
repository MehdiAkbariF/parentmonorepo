"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiChevronDown } from 'react-icons/fi';
/**
 * Select یک کامپوننت دراپ‌داون برای انتخاب یک گزینه از لیست است.
 */
export const Select = ({ options, className, ...props }) => {
    return (_jsxs("div", { className: `select__wrapper ${className || ''}`, children: [_jsx("select", { className: "select", ...props, children: options.map(option => (_jsx("option", { value: option.value, children: option.label }, option.value))) }), _jsx("span", { className: "select__icon", children: _jsx(FiChevronDown, {}) })] }));
};
