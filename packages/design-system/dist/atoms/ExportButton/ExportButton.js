"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiDownload } from "react-icons/fi";
/**
 * ExportButton یک دکمه استاندارد برای عملیات خروجی گرفتن (مانند اکسل) است.
 */
export const ExportButton = ({ text = 'خروجی اکسل', isLoading = false, ...props }) => {
    return (_jsxs("button", { className: "export-button", disabled: isLoading, ...props, children: [isLoading ? (_jsx("span", { className: "export-button__loader" })) : (_jsx(FiDownload, {})), _jsx("span", { children: isLoading ? 'در حال آماده‌سازی...' : text })] }));
};
