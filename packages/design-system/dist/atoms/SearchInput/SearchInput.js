"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiSearch } from "react-icons/fi";
/**
 * SearchInput یک کامپوننت استاندارد برای دریافت ورودی جستجو از کاربر است.
 */
export const SearchInput = ({ isLoading = false, ...props }) => {
    return (_jsxs("div", { className: `search-input__wrapper ${isLoading ? 'search-input__wrapper--loading' : ''}`, children: [_jsx("input", { type: "search", className: "search-input", disabled: isLoading, ...props }), _jsx("span", { className: "search-input__icon", children: isLoading ? (_jsx("span", { className: "search-input__loader" })) : (_jsx(FiSearch, {})) })] }));
};
