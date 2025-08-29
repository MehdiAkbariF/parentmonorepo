import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Label = ({ text, variant = "primary", size = "md", icon, as, className, truncate = false, // مقدار پیش‌فرض
...props }) => {
    const Component = as || 'span';
    const labelClasses = [
        'label',
        `label--${variant}`,
        `label--${size}`,
        icon ? 'label--with-icon' : '',
        truncate ? 'label--truncate' : '', // کلاس جدید برای حالت خلاصه‌سازی
        className || ''
    ].filter(Boolean).join(' ');
    return (_jsxs(Component, { className: labelClasses, 
        // ✨ برای UX بهتر، متن کامل را در title قرار می‌دهیم تا با هاور نمایش داده شود
        title: truncate ? text : undefined, ...props, children: [icon && _jsx("span", { className: "label__icon", children: icon }), text] }));
};
