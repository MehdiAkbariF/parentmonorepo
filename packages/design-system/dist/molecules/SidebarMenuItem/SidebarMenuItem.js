"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "../../atoms/Label/Label";
import { FiChevronDown } from "react-icons/fi"; // استفاده از یک آیکون استاندارد
/**
 * SidebarMenuItem یک مولکول برای نمایش یک آیتم قابل کلیک در سایدبار است.
 * این کامپوننت می‌تواند حالت فعال، زیرمنو و سطوح تو در تو را مدیریت کند.
 */
export const SidebarMenuItem = ({ label, icon, isActive = false, isExpanded = true, hasSubmenu = false, isSubmenuOpen = false, level = 0, onClick, children, }) => {
    // ۱. استایل تو رفتگی را به خود آیتم اصلی اعمال می‌کنیم
    const itemStyle = {
        paddingInlineStart: `${level * 1.25}rem`, // 20px تو رفتگی برای هر سطح
    };
    return (_jsxs("div", { className: `sidebar-menu-item ${isActive ? "sidebar-menu-item--active" : ""}`, style: itemStyle, children: [_jsxs("div", { className: "sidebar-menu-item__trigger", onClick: onClick, children: [icon && (_jsx("div", { className: "sidebar-menu-item__icon-wrapper", children: icon })), _jsxs("div", { className: "sidebar-menu-item__content", children: [_jsx(Label, { text: label, size: "md", variant: "secondary" }), hasSubmenu && (_jsx("div", { className: `sidebar-menu-item__chevron ${isSubmenuOpen ? "sidebar-menu-item__chevron--open" : ""}`, children: _jsx(FiChevronDown, {}) }))] })] }), hasSubmenu && (_jsx("div", { className: `sidebar-menu-item__submenu ${isSubmenuOpen ? "sidebar-menu-item__submenu--open" : ""}`, children: _jsx("div", { className: "sidebar-menu-item__submenu-content", children: children }) }))] }));
};
