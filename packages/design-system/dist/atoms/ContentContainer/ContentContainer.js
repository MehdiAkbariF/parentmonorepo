import { jsx as _jsx } from "react/jsx-runtime";
/**
 * ContentContainer یک کانتینر واکنش‌گرا و مرکزی برای قرار دادن محتوای اصلی صفحات است.
 * این کامپوننت عرض محتوا را محدود کرده و پدینگ‌های استاندارد را اعمال می‌کند.
 */
export const ContentContainer = ({ children, className }) => {
    return (_jsx("div", { className: `content-container ${className || ''}`, children: children }));
};
