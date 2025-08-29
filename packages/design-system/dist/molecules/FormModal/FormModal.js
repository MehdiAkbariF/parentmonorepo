"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal } from "../Modal/Modal";
import { Button } from "../../atoms/Button/Button";
/**
 * FormModal یک مودال استاندارد برای نمایش فرم‌های افزودن و ویرایش است.
 */
export const FormModal = ({ isOpen, onClose, title, children, confirmText = "ذخیره تغییرات", cancelText = "انصراف", onConfirm, isLoading = false, confirmButtonVariant = 'primary', }) => {
    // ما فوتر را به صورت داخلی و استاندارد می‌سازیم
    const footerContent = (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", onClick: onClose, disabled: isLoading, children: cancelText }), _jsx(Button, { variant: confirmButtonVariant, onClick: onConfirm, isLoading: isLoading, children: confirmText })] }));
    return (_jsx(Modal, { isOpen: isOpen, onClose: onClose, title: title, footer: footerContent, children: _jsx("div", { className: "form-modal__body", children: children }) }));
};
