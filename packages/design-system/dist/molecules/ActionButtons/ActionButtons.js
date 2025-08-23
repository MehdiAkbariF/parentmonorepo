"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton } from "../../atoms/IconButton";
// ما به آیکون‌های استاندارد برای این عملیات نیاز داریم
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
/**
 * ActionButtons مجموعه‌ای از دکمه‌های عملیاتی استاندارد (مشاهده، ویرایش، حذف)
 * برای استفاده در جداول یا لیست‌ها است.
 */
export const ActionButtons = ({ onView, onEdit, onDelete, size = "sm", }) => {
    return (_jsxs("div", { className: "action-buttons", children: [onView && (_jsx(IconButton, { icon: _jsx(FiEye, {}), size: size, variant: "default", onClick: onView, "aria-label": "\u0645\u0634\u0627\u0647\u062F\u0647" })), onEdit && (_jsx(IconButton, { icon: _jsx(FiEdit2, {}), size: size, variant: "default", onClick: onEdit, "aria-label": "\u0648\u06CC\u0631\u0627\u06CC\u0634" })), onDelete && (_jsx(IconButton, { icon: _jsx(FiTrash2, {}), size: size, variant: "danger" // دکمه حذف برای جلب توجه، واریانت danger دارد
                , onClick: onDelete, "aria-label": "\u062D\u0630\u0641" }))] }));
};
