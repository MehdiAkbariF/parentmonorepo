"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import ReactDOM from "react-dom"; // ۱. ایمپورت برای Portals
import { Label } from "../../atoms/Label";
import { IconButton } from "../../atoms/IconButton";
import { FiX } from "react-icons/fi";
/**
 * Modal یک دیالوگ شناور برای نمایش اطلاعات مهم یا درخواست تایید از کاربر است.
 */
export const Modal = ({ isOpen, onClose, title, children, footer }) => {
    // ۲. افکت برای جلوگیری از اسکرول صفحه در پس‌زمینه
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
        // با unmount شدن کامپوننت، اسکرول را برمی‌گردانیم
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    // ۳. افکت برای بستن مودال با کلید Escape
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);
    // اگر مودال باز نیست، چیزی رندر نکن
    if (!isOpen)
        return null;
    // ۴. استفاده از Portal برای رندر کردن مودال در بالای تمام عناصر دیگر
    return ReactDOM.createPortal(_jsx("div", { className: "modal__overlay", onClick: onClose, children: _jsxs("div", { className: "modal__dialog", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "modal__header", children: [_jsx(Label, { as: "h2", text: title, size: "lg" }), _jsx(IconButton, { icon: _jsx(FiX, {}), variant: "danger", onClick: onClose, "aria-label": "\u0628\u0633\u062A\u0646 \u0645\u0648\u062F\u0627\u0644" })] }), _jsx("div", { className: "modal__body", children: children }), footer && (_jsx("div", { className: "modal__footer", children: footer }))] }) }), document.body // مودال به انتهای body متصل می‌شود
    );
};
