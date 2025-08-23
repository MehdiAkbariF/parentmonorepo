import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// برای جداکننده، از یک آیکون استاندارد استفاده می‌کنیم
import { FiChevronLeft } from "react-icons/fi";
/**
 * Breadcrumb یک مولکول برای نمایش مسیر ناوبری فعلی کاربر است.
 */
export const Breadcrumb = ({ items }) => {
    return (
    // برای دسترسی‌پذیری، از تگ nav و aria-label استفاده می‌کنیم
    _jsx("nav", { "aria-label": "breadcrumb", className: "breadcrumb", children: _jsx("ol", { children: items.map((item, index) => (_jsxs("li", { className: `breadcrumb__item ${item.isCurrent ? "breadcrumb__item--current" : ""}`, children: [item.label, !item.isCurrent && (_jsx("span", { className: "breadcrumb__separator", "aria-hidden": "true", children: _jsx(FiChevronLeft, {}) }))] }, index))) }) }));
};
