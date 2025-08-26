import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Label یک اتم پلی‌مورفیک برای نمایش متن با استایل‌های از پیش تعریف شده است.
 * می‌تواند به عنوان span, label, p, h1 و ... رندر شود.
 */
export const Label = ({ text, variant = "primary", size = "md", icon, as, className, ...props // بقیه props ها (مانند htmlFor, style) در اینجا قرار می‌گیرند
 }) => {
    // ۳. ✨ تگ مورد نظر را برای رندر شدن انتخاب می‌کنیم
    const Component = as || 'span';
    const labelClasses = [
        'label',
        `label--${variant}`,
        `label--${size}`,
        icon ? 'label--with-icon' : '',
        className || ''
    ].filter(Boolean).join(' ');
    return (
    // ۴. ✨ از Component برای رندر کردن تگ داینامیک استفاده می‌کنیم
    _jsxs(Component, { className: labelClasses, ...props, children: [icon && _jsx("span", { className: "label__icon", children: icon }), text] }));
};
