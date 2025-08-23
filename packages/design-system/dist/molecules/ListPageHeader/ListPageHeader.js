"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "../../atoms/Label/Label";
import { ExportButton } from "../../atoms/ExportButton/ExportButton";
import { SearchInput } from "../../atoms/SearchInput/SearchInput"; // ایمپورت کامپوننت جدید
/**
 * ListPageHeader یک هدر استاندارد برای بالای صفحات لیستی (جداول) است
 * که شامل عنوان، تعداد، جستجو و اکشن‌ها می‌باشد.
 */
export const ListPageHeader = ({ title, totalItems, exportButtonProps, searchInputProps, actions, }) => {
    return (_jsxs("div", { className: "list-page-header", children: [_jsxs("div", { className: "list-page-header__title-section", children: [_jsx(Label, { text: title, size: "2x" }), totalItems !== undefined && (_jsxs("span", { className: "list-page-header__count", children: ["(", totalItems, " \u0645\u0648\u0631\u062F)"] }))] }), _jsxs("div", { className: "list-page-header__actions-section", children: [actions, exportButtonProps && _jsx(ExportButton, { ...exportButtonProps })] }), searchInputProps && _jsx(SearchInput, { ...searchInputProps })] }));
};
