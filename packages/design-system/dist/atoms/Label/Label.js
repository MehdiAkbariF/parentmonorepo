import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Label یک اتم برای نمایش متن با استایل‌های از پیش تعریف شده است.
 * این کامپوننت برای ثبات در تایپوگرافی در سراسر اپلیکیشن استفاده می‌شود.
 */
export const Label = ({ text, variant = "primary", size = "md", icon, className, // className را از بقیه props جدا می‌کنیم تا به درستی ترکیب شود
...props // بقیه props ها (مانند style) در این متغیر قرار می‌گیرند
 }) => {
    // کلاس‌های CSS را به صورت داینامیک ایجاد می‌کنیم
    const labelClasses = [
        'label',
        `label--${variant}`,
        `label--${size}`,
        icon ? 'label--with-icon' : '',
        className || '' // کلاس‌های ورودی را اضافه می‌کنیم
    ].filter(Boolean).join(' '); // فیلتر کردن مقادیر خالی و اتصال با فاصله
    return (_jsxs("span", { className: labelClasses, ...props, children: [icon && _jsx("span", { className: "label__icon", children: icon }), text] }));
};
